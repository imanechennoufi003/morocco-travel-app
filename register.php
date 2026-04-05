<?php
/**
 * XPloris – User Registration Handler
 * File: backend/auth/register.php
 *
 * Expects POST: first_name, last_name, email, password, confirm_password, csrf_token
 * Redirects back to register.html on error, or to login on success.
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../helpers/validation.php';
require_once __DIR__ . '/../helpers/auth.php';

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . APP_URL . '/register.html');
    exit;
}

// ── CSRF Verification ─────────────────────────────────────
if (!verifyCsrf($_POST['csrf_token'] ?? '')) {
    setFlash('error', 'Invalid form submission. Please try again.');
    header('Location: ' . APP_URL . '/register.html');
    exit;
}

// ── Collect & Sanitize Inputs ─────────────────────────────
$firstName = clean($_POST['first_name'] ?? '');
$lastName  = clean($_POST['last_name']  ?? '');
$email     = clean($_POST['email']      ?? '');
$password  = $_POST['password']         ?? '';   // Do NOT sanitize before hashing
$confirm   = $_POST['confirm_password'] ?? '';
$phone     = clean($_POST['phone']      ?? '');
$country   = clean($_POST['country']    ?? '');

$errors = [];

// ── Validation ────────────────────────────────────────────
if ($err = required($firstName, 'First Name'))      $errors[] = $err;
if ($err = required($lastName,  'Last Name'))        $errors[] = $err;
if ($err = required($email,     'Email'))            $errors[] = $err;
elseif (!validEmail($email))                         $errors[] = 'Please enter a valid email address.';
if ($err = required($password,  'Password'))         $errors[] = $err;
else $errors = array_merge($errors, validPassword($password));
if ($password !== $confirm)                          $errors[] = 'Passwords do not match.';

if (!empty($errors)) {
    $_SESSION['register_errors'] = $errors;
    $_SESSION['register_old']    = compact('firstName', 'lastName', 'email', 'phone', 'country');
    header('Location: ' . APP_URL . '/register.html');
    exit;
}

// ── Database Operations ───────────────────────────────────
try {
    $pdo = getDB();

    // Check for duplicate email
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = :email LIMIT 1');
    $stmt->execute([':email' => $email]);
    if ($stmt->fetch()) {
        setFlash('error', 'An account with this email already exists. Please log in.');
        header('Location: ' . APP_URL . '/register.html');
        exit;
    }

    // Hash the password securely with bcrypt
    $passwordHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => BCRYPT_COST]);

    // Insert new user
    $insert = $pdo->prepare(
        'INSERT INTO users (first_name, last_name, email, password_hash, phone, country)
         VALUES (:first, :last, :email, :hash, :phone, :country)'
    );
    $insert->execute([
        ':first'   => $firstName,
        ':last'    => $lastName,
        ':email'   => $email,
        ':hash'    => $passwordHash,
        ':phone'   => $phone  ?: null,
        ':country' => $country ?: null,
    ]);

    setFlash('success', 'Account created successfully! Please log in.');
    header('Location: ' . APP_URL . '/login.html');
    exit;

} catch (RuntimeException $e) {
    setFlash('error', $e->getMessage());
    header('Location: ' . APP_URL . '/register.html');
    exit;
} catch (PDOException $e) {
    error_log('Registration PDOException: ' . $e->getMessage());
    setFlash('error', 'A server error occurred. Please try again later.');
    header('Location: ' . APP_URL . '/register.html');
    exit;
}
