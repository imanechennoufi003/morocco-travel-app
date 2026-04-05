<?php
/**
 * XPloris – Bookings API
 * File: backend/api/bookings.php
 *
 * POST ?action=create  – create a booking (requires login)
 * GET  ?action=list    – list user's bookings (requires login)
 * POST ?action=cancel  – cancel a booking (requires login)
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../helpers/validation.php';
require_once __DIR__ . '/../helpers/auth.php';

header('Content-Type: application/json; charset=utf-8');

// All booking routes require a logged-in user
requireLogin(APP_URL . '/login.html');

$action = $_GET['action'] ?? '';
$pdo    = getDB();
$userId = currentUserId();

try {
    switch ($action) {

        // ── Create Booking ────────────────────────────────
        case 'create':
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                http_response_code(405);
                echo json_encode(['success' => false, 'message' => 'POST required.']);
                break;
            }

            $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

            $destId   = (int)($input['destination_id'] ?? 0);
            $checkIn  = $input['check_in']  ?? '';
            $checkOut = $input['check_out'] ?? '';
            $guests   = max(1, (int)($input['guests'] ?? 1));
            $notes    = clean($input['notes'] ?? '');

            // Validate dates
            $in  = DateTime::createFromFormat('Y-m-d', $checkIn);
            $out = DateTime::createFromFormat('Y-m-d', $checkOut);
            $today = new DateTime('today');

            if (!$in || !$out) {
                echo json_encode(['success' => false, 'message' => 'Invalid dates.']);
                break;
            }
            if ($in < $today) {
                echo json_encode(['success' => false, 'message' => 'Check-in must be a future date.']);
                break;
            }
            if ($out <= $in) {
                echo json_encode(['success' => false, 'message' => 'Check-out must be after check-in.']);
                break;
            }

            // Fetch destination price & capacity
            $destStmt = $pdo->prepare(
                'SELECT id, name, price_per_night, max_capacity
                 FROM destinations WHERE id = :id AND is_active = 1 LIMIT 1'
            );
            $destStmt->execute([':id' => $destId]);
            $dest = $destStmt->fetch();

            if (!$dest) {
                echo json_encode(['success' => false, 'message' => 'Destination not found.']);
                break;
            }
            if ($guests > $dest['max_capacity']) {
                echo json_encode([
                    'success' => false,
                    'message' => "Maximum capacity for this destination is {$dest['max_capacity']} guests.",
                ]);
                break;
            }

            $nights     = (int)$in->diff($out)->days;
            $totalPrice = $nights * (float)$dest['price_per_night'];

            // Generate unique booking reference
            $ref = 'XPL-' . date('Y') . '-' . strtoupper(bin2hex(random_bytes(4)));

            $insertStmt = $pdo->prepare(
                'INSERT INTO bookings
                    (user_id, destination_id, booking_ref, check_in, check_out, guests, total_price, notes)
                 VALUES
                    (:uid, :did, :ref, :in, :out, :guests, :price, :notes)'
            );
            $insertStmt->execute([
                ':uid'   => $userId,
                ':did'   => $destId,
                ':ref'   => $ref,
                ':in'    => $checkIn,
                ':out'   => $checkOut,
                ':guests'=> $guests,
                ':price' => $totalPrice,
                ':notes' => $notes ?: null,
            ]);

            $bookingId = (int)$pdo->lastInsertId();

            echo json_encode([
                'success'     => true,
                'message'     => 'Booking created successfully!',
                'booking_id'  => $bookingId,
                'booking_ref' => $ref,
                'total_price' => $totalPrice,
                'nights'      => $nights,
            ]);
            break;

        // ── List User Bookings ────────────────────────────
        case 'list':
            $stmt = $pdo->prepare(
                'SELECT b.*, d.name AS destination_name, d.city,
                        p.status AS payment_status, i.file_path AS cover
                 FROM bookings b
                 JOIN destinations d ON d.id = b.destination_id
                 LEFT JOIN payments p ON p.booking_id = b.id
                 LEFT JOIN images   i ON i.destination_id = d.id AND i.is_cover = 1
                 WHERE b.user_id = :uid
                 ORDER BY b.created_at DESC'
            );
            $stmt->execute([':uid' => $userId]);
            echo json_encode(['success' => true, 'data' => $stmt->fetchAll()]);
            break;

        // ── Cancel Booking ────────────────────────────────
        case 'cancel':
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                http_response_code(405);
                echo json_encode(['success' => false, 'message' => 'POST required.']);
                break;
            }

            $input     = json_decode(file_get_contents('php://input'), true) ?? $_POST;
            $bookingId = (int)($input['booking_id'] ?? 0);

            // Verify booking belongs to this user and is cancellable
            $check = $pdo->prepare(
                'SELECT id, status FROM bookings WHERE id = :id AND user_id = :uid LIMIT 1'
            );
            $check->execute([':id' => $bookingId, ':uid' => $userId]);
            $booking = $check->fetch();

            if (!$booking) {
                echo json_encode(['success' => false, 'message' => 'Booking not found.']);
                break;
            }
            if (!in_array($booking['status'], ['pending', 'confirmed'])) {
                echo json_encode(['success' => false, 'message' => 'This booking cannot be cancelled.']);
                break;
            }

            $pdo->prepare('UPDATE bookings SET status = "cancelled" WHERE id = :id')
                ->execute([':id' => $bookingId]);

            echo json_encode(['success' => true, 'message' => 'Booking cancelled successfully.']);
            break;

        default:
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Unknown action.']);
    }
} catch (Exception $e) {
    error_log('Bookings API error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error.']);
}
