<?php
/**
 * XPloris – Admin Login Handler
 * File: backend/auth/admin_login.php
 *
 * Expects POST: username, password, csrf_token
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../helpers/validation.php';
require_once __DIR__ . '/../helpers/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . APP_URL . '/admin/login.php');
    exit;
}

if (!verifyCsrf($_POST['csrf_token'] ?? '')) {
    setFlash('error', 'Invalid form submission.');
    header('Location: ' . APP_URL . '/admin/login.php');
    exit;
}

$username = clean($_POST['username'] ?? '');
$password = $_POST['password']       ?? '';

$errors = [];
if ($err = required($username, 'Username')) $errors[] = $err;
if ($err = required($password, 'Password')) $errors[] = $err;

if (!empty($errors)) {
    $_SESSION['admin_login_errors'] = $errors;
    header('Location: ' . APP_URL . '/admin/login.php');
    exit;
}

try {
    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'SELECT id, full_name, password_hash, role, is_active
         FROM admins WHERE username = :username LIMIT 1'
    );
    $stmt->execute([':username' => $username]);
    $admin = $stmt->fetch();

    $dummyHash   = '$2y$12$invaliddummyhashforadmin0000000000000000000000000000000000';
    $hashToCheck = $admin ? $admin['password_hash'] : $dummyHash;

    if (!$admin || !password_verify($password, $hashToCheck)) {
        setFlash('error', 'Invalid admin credentials.');
        header('Location: ' . APP_URL . '/admin/login.php');
        exit;
    }

    if (!(int)$admin['is_active']) {
        setFlash('error', 'This admin account is disabled.');
        header('Location: ' . APP_URL . '/admin/login.php');
        exit;
    }

    session_regenerate_id(true);
    $_SESSION['admin_id']   = (int)$admin['id'];
    $_SESSION['admin_name'] = $admin['full_name'];
    $_SESSION['admin_role'] = $admin['role'];

    $pdo->prepare('UPDATE admins SET last_login = NOW() WHERE id = :id')
        ->execute([':id' => $admin['id']]);

    header('Location: ' . APP_URL . '/admin/dashboard.php');
    exit;

} catch (RuntimeException $e) {
    setFlash('error', $e->getMessage());
    header('Location: ' . APP_URL . '/admin/login.php');
    exit;
}
