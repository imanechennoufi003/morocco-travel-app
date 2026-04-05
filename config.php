<?php
/**
 * XPloris – Session & Constants Configuration
 * File: backend/config/config.php
 */

// ── Error reporting (disable in production) ───────────────
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ── Secure Session Setup ───────────────────────────────────
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 0,                 // Session cookie (expires on close)
        'path'     => '/',
        'secure'   => false,             // Set to true when using HTTPS
        'httponly' => true,              // JS cannot access the cookie
        'samesite' => 'Strict',
    ]);
    session_start();
    session_regenerate_id(true);         // Prevent session fixation
}

// ── Application Constants ─────────────────────────────────
define('APP_NAME',       'XPloris');
define('APP_URL',        'http://localhost/morocco-travel-app-main');
define('UPLOAD_DIR',     __DIR__ . '/../../assets/uploads/');
define('MAX_FILE_SIZE',  5 * 1024 * 1024); // 5 MB
define('ALLOWED_TYPES',  ['image/jpeg', 'image/png', 'image/webp']);
define('BCRYPT_COST',    12);

// ── CSRF Token helper ─────────────────────────────────────
function csrfToken(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCsrf(string $token): bool
{
    return isset($_SESSION['csrf_token']) &&
           hash_equals($_SESSION['csrf_token'], $token);
}
