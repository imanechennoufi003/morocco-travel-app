<?php
/**
 * XPloris – Destinations API
 * File: backend/api/destinations.php
 *
 * GET  ?action=list                       – paginated destination list
 * GET  ?action=get&id=5                   – single destination + images + reviews
 * GET  ?action=search&q=marrakech         – search by name/city
 * GET  ?action=featured                   – featured destinations
 * GET  ?action=by_category&category_id=2  – filter by category
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$action = $_GET['action'] ?? 'list';
$pdo    = getDB();

try {
    switch ($action) {

        // ── List (paginated) ──────────────────────────────
        case 'list':
            $page    = max(1, (int)($_GET['page'] ?? 1));
            $perPage = min(20, max(1, (int)($_GET['per_page'] ?? 9)));
            $offset  = ($page - 1) * $perPage;

            $stmt = $pdo->prepare(
                'SELECT d.*, c.name AS category_name,
                        i.file_path AS cover_image
                 FROM destinations d
                 JOIN categories c ON c.id = d.category_id
                 LEFT JOIN images i ON i.destination_id = d.id AND i.is_cover = 1
                 WHERE d.is_active = 1
                 ORDER BY d.is_featured DESC, d.rating DESC
                 LIMIT :limit OFFSET :offset'
            );
            $stmt->bindValue(':limit',  $perPage, PDO::PARAM_INT);
            $stmt->bindValue(':offset', $offset,  PDO::PARAM_INT);
            $stmt->execute();
            $destinations = $stmt->fetchAll();

            $total = (int)$pdo->query(
                'SELECT COUNT(*) FROM destinations WHERE is_active = 1'
            )->fetchColumn();

            echo json_encode([
                'success' => true,
                'data'    => $destinations,
                'meta'    => ['total' => $total, 'page' => $page, 'per_page' => $perPage],
            ]);
            break;

        // ── Single destination ────────────────────────────
        case 'get':
            $id   = (int)($_GET['id'] ?? 0);
            $stmt = $pdo->prepare(
                'SELECT d.*, c.name AS category_name
                 FROM destinations d
                 JOIN categories c ON c.id = d.category_id
                 WHERE d.id = :id AND d.is_active = 1 LIMIT 1'
            );
            $stmt->execute([':id' => $id]);
            $destination = $stmt->fetch();

            if (!$destination) {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Destination not found.']);
                break;
            }

            // Fetch images
            $imgStmt = $pdo->prepare(
                'SELECT file_path, alt_text, is_cover FROM images
                 WHERE destination_id = :id ORDER BY is_cover DESC, sort_order ASC'
            );
            $imgStmt->execute([':id' => $id]);
            $destination['images'] = $imgStmt->fetchAll();

            // Fetch approved reviews
            $revStmt = $pdo->prepare(
                'SELECT r.rating, r.title, r.comment, r.created_at,
                        CONCAT(u.first_name, " ", LEFT(u.last_name, 1), ".") AS reviewer
                 FROM reviews r JOIN users u ON u.id = r.user_id
                 WHERE r.destination_id = :id AND r.is_approved = 1
                 ORDER BY r.created_at DESC LIMIT 10'
            );
            $revStmt->execute([':id' => $id]);
            $destination['reviews'] = $revStmt->fetchAll();

            echo json_encode(['success' => true, 'data' => $destination]);
            break;

        // ── Search ────────────────────────────────────────
        case 'search':
            $q    = '%' . clean($_GET['q'] ?? '') . '%';
            $stmt = $pdo->prepare(
                'SELECT d.id, d.name, d.city, d.price_per_night, d.rating,
                        i.file_path AS cover_image
                 FROM destinations d
                 LEFT JOIN images i ON i.destination_id = d.id AND i.is_cover = 1
                 WHERE d.is_active = 1 AND (d.name LIKE :q OR d.city LIKE :q OR d.description LIKE :q)
                 LIMIT 10'
            );
            $stmt->execute([':q' => $q]);
            echo json_encode(['success' => true, 'data' => $stmt->fetchAll()]);
            break;

        // ── Featured ──────────────────────────────────────
        case 'featured':
            $stmt = $pdo->prepare(
                'SELECT d.id, d.name, d.city, d.price_per_night, d.rating,
                        i.file_path AS cover_image, c.name AS category_name
                 FROM destinations d
                 JOIN categories c ON c.id = d.category_id
                 LEFT JOIN images i ON i.destination_id = d.id AND i.is_cover = 1
                 WHERE d.is_active = 1 AND d.is_featured = 1
                 ORDER BY d.rating DESC LIMIT 6'
            );
            $stmt->execute();
            echo json_encode(['success' => true, 'data' => $stmt->fetchAll()]);
            break;

        // ── By Category ───────────────────────────────────
        case 'by_category':
            $catId = (int)($_GET['category_id'] ?? 0);
            $stmt  = $pdo->prepare(
                'SELECT d.id, d.name, d.city, d.price_per_night, d.rating,
                        i.file_path AS cover_image
                 FROM destinations d
                 LEFT JOIN images i ON i.destination_id = d.id AND i.is_cover = 1
                 WHERE d.is_active = 1 AND d.category_id = :cat
                 ORDER BY d.rating DESC'
            );
            $stmt->execute([':cat' => $catId]);
            echo json_encode(['success' => true, 'data' => $stmt->fetchAll()]);
            break;

        default:
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Unknown action.']);
    }
} catch (Exception $e) {
    error_log('Destinations API error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error.']);
}
