<?php
/**
 * XPloris – Input Validation Helpers
 * File: backend/helpers/validation.php
 */

/**
 * Sanitize a string value (trim + strip tags).
 */
function clean(string $value): string
{
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate an email address.
 */
function validEmail(string $email): bool
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Enforce password strength rules.
 * Min 8 chars, at least one uppercase, one digit, one special char.
 */
function validPassword(string $password): array
{
    $errors = [];
    if (strlen($password) < 8) {
        $errors[] = 'Password must be at least 8 characters long.';
    }
    if (!preg_match('/[A-Z]/', $password)) {
        $errors[] = 'Password must contain at least one uppercase letter.';
    }
    if (!preg_match('/\d/', $password)) {
        $errors[] = 'Password must contain at least one number.';
    }
    if (!preg_match('/[\W_]/', $password)) {
        $errors[] = 'Password must contain at least one special character.';
    }
    return $errors;
}

/**
 * Validate that a required field is not empty.
 */
function required(string $value, string $fieldName): ?string
{
    return trim($value) === '' ? "The field \"{$fieldName}\" is required." : null;
}
