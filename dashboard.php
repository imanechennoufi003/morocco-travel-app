<?php
require_once __DIR__ . '/backend/config/config.php';
require_once __DIR__ . '/backend/config/db.php';
require_once __DIR__ . '/backend/helpers/auth.php';

//  Protect this page – redirect to login if not authenticated
requireLogin(APP_URL . '/login.html');

$pdo    = getDB();
$userId = currentUserId();

// Fetch user profile
$userStmt = $pdo->prepare(
    'SELECT first_name, last_name, email, phone, country, created_at
     FROM users WHERE id = :id LIMIT 1'
);
$userStmt->execute([':id' => $userId]);
$user = $userStmt->fetch();

$statsStmt = $pdo->prepare(
    'SELECT status, COUNT(*) AS cnt FROM bookings WHERE user_id = :id GROUP BY status'
);
$statsStmt->execute([':id' => $userId]);
$rawStats = $statsStmt->fetchAll();
$stats    = array_column($rawStats, 'cnt', 'status');
$recentStmt = $pdo->prepare(
    'SELECT b.booking_ref, b.check_in, b.check_out, b.total_price, b.status,
            d.name AS destination_name, d.city
     FROM bookings b JOIN destinations d ON d.id = b.destination_id
     WHERE b.user_id = :id ORDER BY b.created_at DESC LIMIT 5'
);
$recentStmt->execute([':id' => $userId]);
$recentBookings = $recentStmt->fetchAll();

// Count favorites
$favCount = (int)$pdo->prepare(
    'SELECT COUNT(*) FROM favorites WHERE user_id = :id'
)->execute([':id' => $userId]);

// Retrieve flash messages
$successMsg = getFlash('success');
$errorMsg   = getFlash('error');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Dashboard – XPloris</title>
    <meta name="description" content="Manage your bookings, favorites and profile on XPloris." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <style>
        /* ── Dashboard Overrides ─────────────────────── */
        :root {
            --primary:   #c0392b;
            --secondary: #e67e22;
            --dark:      #1a1a2e;
            --card-bg:   #16213e;
            --text:      #eee;
            --muted:     #aaa;
        }
        body { background: var(--dark); color: var(--text); font-family: 'Inter', sans-serif; margin: 0; }

        .dash-header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            padding: 2rem 2.5rem;
        }
        .dash-header h1 { margin: 0; font-size: 1.6rem; font-weight: 700; }
        .dash-header p  { margin: .3rem 0 0; opacity: .9; }

        .dash-body { padding: 2rem 2.5rem; }

        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1.2rem; margin-bottom: 2rem; }
        .stat-card {
            background: var(--card-bg); border-radius: 12px; padding: 1.4rem;
            text-align: center; border: 1px solid rgba(255,255,255,.07);
        }
        .stat-card .num   { font-size: 2rem; font-weight: 700; color: var(--secondary); }
        .stat-card .label { font-size: .8rem; color: var(--muted); margin-top: .3rem; text-transform: uppercase; letter-spacing: .05em; }

        .section-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 1rem; color: var(--secondary); }

        .bookings-table { width: 100%; border-collapse: collapse; font-size: .88rem; }
        .bookings-table th { color: var(--muted); text-align: left; padding: .7rem 1rem; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,.1); }
        .bookings-table td { padding: .8rem 1rem; border-bottom: 1px solid rgba(255,255,255,.05); }
        .bookings-table tr:hover td { background: rgba(255,255,255,.03); }

        .badge { padding: .25rem .7rem; border-radius: 999px; font-size: .76rem; font-weight: 600; }
        .badge-confirmed  { background: #1e6b3c; color: #a3ffcb; }
        .badge-pending    { background: #5a4000; color: #ffd97d; }
        .badge-cancelled  { background: #5c1c1c; color: #ff9898; }
        .badge-completed  { background: #1b3a5c; color: #80c8ff; }

        .flash { padding: .9rem 1.2rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: .9rem; }
        .flash-success { background: #1a3d2b; color: #7effc4; border: 1px solid #2a6845; }
        .flash-error   { background: #3d1a1a; color: #ffb3b3; border: 1px solid #682a2a; }

        .btn-logout {
            display: inline-flex; align-items: center; gap: .5rem;
            background: rgba(255,255,255,.1); color: #fff; text-decoration: none;
            padding: .5rem 1.1rem; border-radius: 8px; font-size: .88rem;
            transition: background .2s;
        }
        .btn-logout:hover { background: rgba(255,255,255,.2); }
    </style>
</head>
<body>

<!-- ── Header ───────────────────────────────────────── -->
<div class="dash-header" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
    <div>
        <h1><i class="bi bi-compass" style="margin-right:.5rem;"></i>My XPloris Dashboard</h1>
        <p>Welcome back, <strong><?= htmlspecialchars($user['first_name'] . ' ' . $user['last_name']) ?></strong> &nbsp;·&nbsp; <?= htmlspecialchars($user['email']) ?></p>
    </div>
    <div style="display:flex;gap:.8rem;">
        <a href="<?= APP_URL ?>/index.html" class="btn-logout"><i class="bi bi-house"></i> Home</a>
        <a href="<?= APP_URL ?>/backend/auth/logout.php" class="btn-logout"><i class="bi bi-box-arrow-right"></i> Logout</a>
    </div>
</div>

<!-- ── Body ─────────────────────────────────────────── -->
<div class="dash-body">

    <?php if ($successMsg): ?>
        <div class="flash flash-success"><i class="bi bi-check-circle"></i> <?= htmlspecialchars($successMsg) ?></div>
    <?php endif; ?>
    <?php if ($errorMsg): ?>
        <div class="flash flash-error"><i class="bi bi-exclamation-triangle"></i> <?= htmlspecialchars($errorMsg) ?></div>
    <?php endif; ?>

    <!-- Stats -->
    <div class="stats-grid">
        <div class="stat-card">
            <div class="num"><?= isset($stats['confirmed'])  ? $stats['confirmed']  : 0 ?></div>
            <div class="label">Confirmed</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= isset($stats['pending'])    ? $stats['pending']    : 0 ?></div>
            <div class="label">Pending</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= isset($stats['completed'])  ? $stats['completed']  : 0 ?></div>
            <div class="label">Completed</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= isset($stats['cancelled'])  ? $stats['cancelled']  : 0 ?></div>
            <div class="label">Cancelled</div>
        </div>
    </div>

    <!-- Recent Bookings -->
    <p class="section-title"><i class="bi bi-calendar-check"></i> Recent Bookings</p>
    <?php if (empty($recentBookings)): ?>
        <p style="color:var(--muted);">No bookings yet. <a href="<?= APP_URL ?>/booking.html" style="color:var(--secondary);">Explore destinations →</a></p>
    <?php else: ?>
    <div style="overflow-x:auto;">
        <table class="bookings-table">
            <thead>
                <tr>
                    <th>Ref</th><th>Destination</th><th>Check-in</th>
                    <th>Check-out</th><th>Total (MAD)</th><th>Status</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach ($recentBookings as $b): ?>
                <tr>
                    <td><code><?= htmlspecialchars($b['booking_ref']) ?></code></td>
                    <td><?= htmlspecialchars($b['destination_name']) ?>, <?= htmlspecialchars($b['city']) ?></td>
                    <td><?= htmlspecialchars($b['check_in']) ?></td>
                    <td><?= htmlspecialchars($b['check_out']) ?></td>
                    <td><?= number_format((float)$b['total_price'], 2) ?></td>
                    <td>
                        <span class="badge badge-<?= htmlspecialchars($b['status']) ?>">
                            <?= ucfirst(htmlspecialchars($b['status'])) ?>
                        </span>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php endif; ?>

</div><!-- /.dash-body -->

</body>
</html>
