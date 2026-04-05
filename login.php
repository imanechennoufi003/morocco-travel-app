<?php
/**
 * XPloris – User Login Handler
 * File: backend/auth/login.php
 *
 * Expects POST: email, password, csrf_token
 * On success: redirects to dashboard
 * On failure: redirects back to login.html with flash error
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../helpers/validation.php';
require_once __DIR__ . '/../helpers/auth.php';

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . APP_URL . '/login.html');
    exit;
}

// ── CSRF Verification ─────────────────────────────────────
if (!verifyCsrf($_POST['csrf_token'] ?? '')) {
    setFlash('error', 'Invalid form submission. Please try again.');
    header('Location: ' . APP_URL . '/login.html');
    exit;
}

// ── Collect & Sanitize Inputs ─────────────────────────────
$email    = clean($_POST['email']    ?? '');
$password = $_POST['password']       ?? '';   // Raw – needed for password_verify

$errors = [];
if ($err = required($email,    'Email'))    $errors[] = $err;
elseif (!validEmail($email))               $errors[] = 'Please enter a valid email address.';
if ($err = required($password, 'Password')) $errors[] = $err;

if (!empty($errors)) {
    $_SESSION['login_errors'] = $errors;
    header('Location: ' . APP_URL . '/login.html');
    exit;
}

// ── Authentication ────────────────────────────────────────
try {
    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'SELECT id, first_name, last_name, password_hash, is_active
         FROM users WHERE email = :email LIMIT 1'
    );
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    // Timing-safe: always run password_verify even if user not found
    // (prevents user enumeration via timing attack)
    $dummyHash   = '$2y$12$invaliddummyhashtopreventtiming00000000000000000000000000';
    $hashToCheck = $user ? $user['password_hash'] : $dummyHash;

    if (!$user || !password_verify($password, $hashToCheck)) {
        setFlash('error', 'Incorrect email or password.');
        header('Location: ' . APP_URL . '/login.html');
        exit;
    }

    if (!(int)$user['is_active']) {
        setFlash('error', 'Your account has been suspended. Contact support.');
        header('Location: ' . APP_URL . '/login.html');
        exit;
    }

    // ── Successful login: populate session ──────────────
    session_regenerate_id(true);   // Prevent session fixation
    $_SESSION['user_id']    = (int)$user['id'];
    $_SESSION['user_name']  = $user['first_name'] . ' ' . $user['last_name'];
    $_SESSION['user_email'] = $email;

    // Update last_login timestamp
    $pdo->prepare('UPDATE users SET last_login = NOW() WHERE id = :id')
        ->execute([':id' => $user['id']]);

    // Re-hash if cost factor has changed (transparent upgrade)
    if (password_needs_rehash($user['password_hash'], PASSWORD_BCRYPT, ['cost' => BCRYPT_COST])) {
        $newHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => BCRYPT_COST]);
        $pdo->prepare('UPDATE users SET password_hash = :hash WHERE id = :id')
            ->execute([':hash' => $newHash, ':id' => $user['id']]);
    }

    setFlash('success', 'Welcome back, ' . $user['first_name'] . '!');
    header('Location: ' . APP_URL . '/dashboard.php');
    exit;

} catch (RuntimeException $e) {
    setFlash('error', $e->getMessage());
    header('Location: ' . APP_URL . '/login.html');
    exit;
} catch (PDOException $e) {
    error_log('Login PDOException: ' . $e->getMessage());
    setFlash('error', 'A server error occurred. Please try again later.');
    header('Location: ' . APP_URL . '/login.html');
    exit;
}
