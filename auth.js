/**
 * XPloris – Client-side Auth Bridge
 * File: js/auth.js
 *
 * Handles:
 *  - Client-side form validation before submit
 *  - CSRF token management (fetched from PHP endpoint)
 *  - Flash message display (from URL params on redirect back)
 *  - Password strength meter (registration)
 */

'use strict';

/* ─────────────────────────────────────────────────────────
   Utility helpers
   ───────────────────────────────────────────────────────── */
const $  = (id) => document.getElementById(id);
const qs = (sel, root = document) => root.querySelector(sel);

/**
 * Show a flash message in a container element.
 * @param {HTMLElement} el   - container div
 * @param {string}      msg  - message text
 * @param {boolean}     isOk - true = success, false = error
 */
function showFlash(el, msg, isOk = false) {
    if (!el || !msg) return;
    el.textContent = msg;
    el.style.display = 'block';
    el.style.background = isOk ? 'rgba(34,197,94,.12)'  : 'rgba(232,65,62,.12)';
    el.style.color       = isOk ? '#22c55e'               : '#ff6b6b';
    el.style.border      = isOk ? '1px solid rgba(34,197,94,.3)' : '1px solid rgba(232,65,62,.3)';
}

/** Set an inline error below a field. */
function setError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.style.color = '#ff6b6b';
}

/** Clear a specific inline error. */
function clearError(el) {
    if (el) el.textContent = '';
}

/* ─────────────────────────────────────────────────────────
   CSRF Token
   ───────────────────────────────────────────────────────── */

/**
 * Fetch a CSRF token from the PHP session endpoint and inject it
 * into all hidden CSRF inputs on this page.
 */
async function loadCsrfToken() {
    try {
        const res  = await fetch('backend/api/csrf_token.php');
        const data = await res.json();
        if (data.token) {
            ['csrfToken', 'csrfTokenReg'].forEach((id) => {
                const el = $(id);
                if (el) el.value = data.token;
            });
        }
    } catch {
        // If PHP not running (static dev), use a placeholder so form submits
        console.warn('XPloris: Could not fetch CSRF token. Running without PHP?');
    }
}

/* ─────────────────────────────────────────────────────────
   URL-based flash messages
   (PHP redirects back with ?error=... or ?success=...)
   ───────────────────────────────────────────────────────── */
function readUrlFlash() {
    const params   = new URLSearchParams(window.location.search);
    const errorMsg = params.get('error');
    const okMsg    = params.get('success');
    const flash    = $('flashMsg') || $('flashMsgReg');
    if (errorMsg) showFlash(flash, decodeURIComponent(errorMsg), false);
    if (okMsg)    showFlash(flash, decodeURIComponent(okMsg),    true);
}

/* ─────────────────────────────────────────────────────────
   Password Strength Meter
   ───────────────────────────────────────────────────────── */
function initPasswordStrength() {
    const pwdInput = $('regPassword');
    const bar      = $('pwdStrengthFill');
    const txt      = $('pwdStrengthText');
    if (!pwdInput || !bar || !txt) return;

    pwdInput.addEventListener('input', () => {
        const val    = pwdInput.value;
        let score    = 0;
        if (val.length >= 8)        score++;
        if (/[A-Z]/.test(val))      score++;
        if (/\d/.test(val))         score++;
        if (/[\W_]/.test(val))      score++;

        const levels = [
            { pct: '0%',   color: 'transparent', label: '' },
            { pct: '25%',  color: '#ef4444',      label: '❌ Weak' },
            { pct: '50%',  color: '#f97316',      label: '⚠️ Fair' },
            { pct: '75%',  color: '#eab308',      label: '🔶 Good' },
            { pct: '100%', color: '#22c55e',      label: '✅ Strong' },
        ];
        const level  = levels[score];
        bar.style.width      = level.pct;
        bar.style.background = level.color;
        txt.textContent      = level.label;
    });
}

/* ─────────────────────────────────────────────────────────
   LOGIN Form Client-side Validation
   ───────────────────────────────────────────────────────── */
function initLoginForm() {
    const form = $('loginForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        let ok = true;

        const emailEl = $('emailStr');
        const passEl  = $('passStr');
        const emailErr = $('emailError');
        const passErr  = $('passError');

        clearError(emailErr);
        clearError(passErr);

        if (!emailEl.value.trim()) {
            setError(emailErr, 'Email is required.');
            ok = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
            setError(emailErr, 'Please enter a valid email address.');
            ok = false;
        }

        if (!passEl.value) {
            setError(passErr, 'Password is required.');
            ok = false;
        }

        if (!ok) e.preventDefault();
    });
}

/* ─────────────────────────────────────────────────────────
   REGISTER Form Client-side Validation
   ───────────────────────────────────────────────────────── */
function initRegisterForm() {
    const form = $('registerForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        let ok = true;

        const first   = $('regFirstName');
        const last    = $('regLastName');
        const email   = $('regEmail');
        const pwd     = $('regPassword');
        const confirm = $('regPasswordConfirm');
        const terms   = $('agreeTerms');

        // Clear previous errors
        ['firstNameError','lastNameError','regEmailError','regPwdError',
         'regPwdConfirmError','termsError'].forEach(id => {
            const el = $(id);
            if (el) el.textContent = '';
        });

        if (!first?.value.trim())        { setError($('firstNameError'),    'First name is required.');          ok = false; }
        if (!last?.value.trim())         { setError($('lastNameError'),     'Last name is required.');           ok = false; }

        if (!email?.value.trim()) {
            setError($('regEmailError'), 'Email is required.'); ok = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            setError($('regEmailError'), 'Please enter a valid email address.'); ok = false;
        }

        const pwdVal = pwd?.value || '';
        if (!pwdVal) {
            setError($('regPwdError'), 'Password is required.'); ok = false;
        } else {
            const errs = [];
            if (pwdVal.length < 8)         errs.push('at least 8 characters');
            if (!/[A-Z]/.test(pwdVal))     errs.push('one uppercase letter');
            if (!/\d/.test(pwdVal))        errs.push('one number');
            if (!/[\W_]/.test(pwdVal))     errs.push('one special character');
            if (errs.length) {
                setError($('regPwdError'), 'Password needs: ' + errs.join(', ') + '.');
                ok = false;
            }
        }

        if (confirm?.value !== pwdVal) {
            setError($('regPwdConfirmError'), 'Passwords do not match.'); ok = false;
        }

        if (terms && !terms.checked) {
            setError($('termsError'), 'You must agree to the Terms of Service.'); ok = false;
        }

        if (!ok) e.preventDefault();
    });
}

/* ─────────────────────────────────────────────────────────
   Bootstrap
   ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
    await loadCsrfToken();
    readUrlFlash();
    initPasswordStrength();
    initLoginForm();
    initRegisterForm();
});
