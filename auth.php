<?php
/**
 * XPloris – Authentication Middleware
 * File: backend/helpers/auth.php
 *
 * Include this file at the top of any page that requires a logged-in user.
 */

require_once __DIR__ . '/../config/config.php';

// ── User Authentication ───────────────────────────────────

/**
 * Returns true if a user is currently logged in.
 */
function isLoggedIn(): bool
{
    return isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
}

/**
 * Returns true if an admin is currently logged in.
 */
function isAdminLoggedIn(): bool
{
    return isset($_SESSION['admin_id']) && !empty($_SESSION['admin_id']);
}

/**
 * Redirect unauthorized visitors to the login page.
 * Call at the top of any protected user page.
 */
function requireLogin(string $redirectTo = APP_URL . '/backend/auth/login.php'): void
{
    if (!isLoggedIn()) {
        $_SESSION['flash_error'] = 'Please log in to access this page.';
        header('Location: ' . $redirectTo);
        exit;
    }
}

/**
 * Redirect unauthorized visitors to the admin login page.
 * Call at the top of any protected admin page.
 */
function requireAdmin(string $redirectTo = APP_URL . '/backend/auth/admin_login.php'): void
{
    if (!isAdminLoggedIn()) {
        $_SESSION['flash_error'] = 'Admin access required.';
        header('Location: ' . $redirectTo);
        exit;
    }
}

/**
 * Return current user's ID (or null).
 */
function currentUserId(): ?int
{
    return $_SESSION['user_id'] ?? null;
}

/**
 * Return current user's full name (or empty string).
 */
function currentUserName(): string
{
    return $_SESSION['user_name'] ?? '';
}

// ── Flash Message Helpers ─────────────────────────────────

/**
 * Set a flash message (survives one redirect).
 */
function setFlash(string $type, string $message): void
{
    $_SESSION['flash_' . $type] = $message;
}

/**
 * Get and clear a flash message.
 */
function getFlash(string $type): ?string
{
    $key     = 'flash_' . $type;
    $message = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);
    return $message;
}
