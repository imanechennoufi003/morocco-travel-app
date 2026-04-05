<?php
/**
 * XPloris – CSRF Token Endpoint
 * File: backend/api/csrf_token.php
 *
 * Called by auth.js to retrieve a CSRF token for the session.
 * Returns: { "token": "..." }
 */

require_once __DIR__ . '/../config/config.php';

header('Content-Type: application/json; charset=utf-8');
echo json_encode(['token' => csrfToken()]);
