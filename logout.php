<?php
/**
 * XPloris – Logout Handler
 * File: backend/auth/logout.php
 *
 * Destroys session and redirects to homepage.
 */

require_once __DIR__ . '/../config/config.php';

// Unset all session data
$_SESSION = [];

// Destroy the session cookie
if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params['path'],
        $params['domain'],
        $params['secure'],
        $params['httponly']
    );
}

// Destroy the session
session_destroy();

// Redirect to the home page
header('Location: ' . APP_URL . '/index.html');
exit;
