// ==========================================
// AUTHENTICATION JS
// ==========================================

// Simple in-memory "database" using localStorage
const DB_KEY = 'maroc_users';
const SESSION_KEY = 'maroc_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(DB_KEY, JSON.stringify(users));
}

function findUser(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    name: user.name,
    email: user.email,
    loggedIn: true,
    timestamp: Date.now()
  }));
}

function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}

// ---- VALIDATION ----
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(pwd) {
  return pwd.length >= 6;
}

function showError(inputId, errorId, msg) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add('error');
  if (error) error.textContent = msg;
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) { input.classList.remove('error'); input.classList.add('success'); }
  if (error) error.textContent = '';
}

function clearAllErrors() {
  document.querySelectorAll('.form-input').forEach(i => {
    i.classList.remove('error', 'success');
  });
  document.querySelectorAll('.form-error').forEach(e => e.textContent = '');
}

// ---- PASSWORD TOGGLE ----
function setupPasswordToggle(toggleId, inputId) {
  const toggle = document.getElementById(toggleId);
  const input = document.getElementById(inputId);
  if (!toggle || !input) return;

  toggle.addEventListener('click', () => {
    const visible = input.type === 'text';
    input.type = visible ? 'password' : 'text';
    toggle.textContent = visible ? '👁️' : '🙈';
  });
}

// ---- LOGIN ----
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  setupPasswordToggle('togglePwd', 'loginPassword');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    let valid = true;

    if (!validateEmail(email)) {
      showError('loginEmail', 'emailError', 'Veuillez entrer un email valide.');
      valid = false;
    } else {
      clearError('loginEmail', 'emailError');
    }

    if (!validatePassword(password)) {
      showError('loginPassword', 'pwdError', 'Le mot de passe doit contenir au moins 6 caractères.');
      valid = false;
    } else {
      clearError('loginPassword', 'pwdError');
    }

    if (!valid) return;

    // Simulate loading
    const btn = document.getElementById('loginBtn');
    const btnText = document.getElementById('loginBtnText');
    const btnLoader = document.getElementById('loginBtnLoader');
    btn.disabled = true;
    if(btnText) btnText.style.display = 'none';
    if(btnLoader) btnLoader.style.display = 'inline';

    await new Promise(r => setTimeout(r, 1200));

    const user = findUser(email);

    if (!user) {
      showError('loginEmail', 'emailError', 'Aucun compte trouvé avec cet email.');
      btn.disabled = false;
      if(btnText) btnText.style.display = 'inline';
      if(btnLoader) btnLoader.style.display = 'none';
      return;
    }

    if (user.password !== btoa(password)) {
      showError('loginPassword', 'pwdError', 'Mot de passe incorrect.');
      btn.disabled = false;
      if(btnText) btnText.style.display = 'inline';
      if(btnLoader) btnLoader.style.display = 'none';
      return;
    }

    // Session
    setSession(user);
    const successEl = document.getElementById('loginSuccess');
    if(successEl) successEl.style.display = 'flex';

    setTimeout(() => { window.location.href = 'index.html'; }, 1500);
  });
}

// ---- REGISTER ----
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  setupPasswordToggle('togglePwd', 'regPassword');
  setupPasswordToggle('togglePwdConfirm', 'regPasswordConfirm');

  // Password strength
  const pwdInput = document.getElementById('regPassword');
  if (pwdInput) {
    pwdInput.addEventListener('input', () => {
      const val = pwdInput.value;
      const fill = document.getElementById('pwdStrengthFill');
      const text = document.getElementById('pwdStrengthText');
      if (!fill || !text) return;

      let strength = 0;
      if (val.length >= 6) strength++;
      if (val.length >= 10) strength++;
      if (/[A-Z]/.test(val)) strength++;
      if (/[0-9]/.test(val)) strength++;
      if (/[^A-Za-z0-9]/.test(val)) strength++;

      const levels = [
        { pct: '0%', color: 'transparent', label: '' },
        { pct: '25%', color: '#FF4444', label: 'Très faible' },
        { pct: '50%', color: '#FF8C00', label: 'Faible' },
        { pct: '75%', color: '#FFD700', label: 'Moyen' },
        { pct: '90%', color: '#22C55E', label: 'Fort' },
        { pct: '100%', color: '#16A34A', label: 'Très fort' },
      ];

      const level = levels[Math.min(strength, 5)];
      fill.style.width = level.pct;
      fill.style.background = level.color;
      text.textContent = level.label;
      text.style.color = level.color;
    });
  }

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;
    let valid = true;

    if (!firstName) {
      showError('regFirstName', 'firstNameError', 'Le prénom est requis.');
      valid = false;
    } else clearError('regFirstName', 'firstNameError');

    if (!lastName) {
      showError('regLastName', 'lastNameError', 'Le nom est requis.');
      valid = false;
    } else clearError('regLastName', 'lastNameError');

    if (!validateEmail(email)) {
      showError('regEmail', 'regEmailError', 'Email invalide.');
      valid = false;
    } else if (findUser(email)) {
      showError('regEmail', 'regEmailError', 'Un compte avec cet email existe déjà.');
      valid = false;
    } else clearError('regEmail', 'regEmailError');

    if (!validatePassword(password)) {
      showError('regPassword', 'regPwdError', 'Minimum 6 caractères.');
      valid = false;
    } else clearError('regPassword', 'regPwdError');

    if (password !== passwordConfirm) {
      showError('regPasswordConfirm', 'regPwdConfirmError', 'Les mots de passe ne correspondent pas.');
      valid = false;
    } else clearError('regPasswordConfirm', 'regPwdConfirmError');

    if (!document.getElementById('agreeTerms').checked) {
      document.getElementById('termsError').textContent = 'Vous devez accepter les conditions.';
      valid = false;
    } else {
      document.getElementById('termsError').textContent = '';
    }

    if (!valid) return;

    const btn = document.getElementById('registerBtn');
    const btnText = document.getElementById('registerBtnText');
    const btnLoader = document.getElementById('registerBtnLoader');
    btn.disabled = true;
    if(btnText) btnText.style.display = 'none';
    if(btnLoader) btnLoader.style.display = 'inline';

    await new Promise(r => setTimeout(r, 1200));

    saveUser({
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      password: btoa(password),
      createdAt: new Date().toISOString()
    });

    setSession({ name: `${firstName} ${lastName}`, email });

    const successEl = document.getElementById('registerSuccess');
    if(successEl) successEl.style.display = 'flex';

    setTimeout(() => { window.location.href = 'index.html'; }, 1500);
  });
}

// ---- GOOGLE MOCK ----
document.querySelectorAll('#googleBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('🌐 La connexion avec Google nécessite un serveur backend. Utilisez le formulaire email pour cet exemple.');
  });
});
