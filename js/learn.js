// ==========================================
// LEARN PAGE - Arabic & Tamazight
// ==========================================

// ---- ARABIC ALPHABET ----
const arabicLetters = [
  { ar: 'ا', latin: 'A', name: 'Alif' },
  { ar: 'ب', latin: 'B', name: 'Ba' },
  { ar: 'ت', latin: 'T', name: 'Ta' },
  { ar: 'ث', latin: 'Th', name: 'Tha' },
  { ar: 'ج', latin: 'J', name: 'Jim' },
  { ar: 'ح', latin: 'H', name: 'Ha' },
  { ar: 'خ', latin: 'Kh', name: 'Kha' },
  { ar: 'د', latin: 'D', name: 'Dal' },
  { ar: 'ذ', latin: 'Dh', name: 'Dhal' },
  { ar: 'ر', latin: 'R', name: 'Ra' },
  { ar: 'ز', latin: 'Z', name: 'Zay' },
  { ar: 'س', latin: 'S', name: 'Sin' },
  { ar: 'ش', latin: 'Sh', name: 'Shin' },
  { ar: 'ص', latin: 'Ṣ', name: 'Sad' },
  { ar: 'ض', latin: 'Ḍ', name: 'Dad' },
  { ar: 'ط', latin: 'Ṭ', name: 'Ta' },
  { ar: 'ظ', latin: 'Ẓ', name: 'Dha' },
  { ar: 'ع', latin: '3', name: 'Ayn' },
  { ar: 'غ', latin: 'Gh', name: 'Ghayn' },
  { ar: 'ف', latin: 'F', name: 'Fa' },
  { ar: 'ق', latin: 'Q', name: 'Qaf' },
  { ar: 'ك', latin: 'K', name: 'Kaf' },
  { ar: 'ل', latin: 'L', name: 'Lam' },
  { ar: 'م', latin: 'M', name: 'Mim' },
  { ar: 'ن', latin: 'N', name: 'Nun' },
  { ar: 'ه', latin: 'H', name: 'Ha' },
  { ar: 'و', latin: 'W', name: 'Waw' },
  { ar: 'ي', latin: 'Y', name: 'Ya' },
];

// ---- TIFINAGH ALPHABET ----
const tifinaghLetters = [
  { tf: 'ⴰ', latin: 'A', name: 'Ya' },
  { tf: 'ⴱ', latin: 'B', name: 'Yab' },
  { tf: 'ⴳ', latin: 'G', name: 'Yag' },
  { tf: 'ⴷ', latin: 'D', name: 'Yad' },
  { tf: 'ⴹ', latin: 'Ḍ', name: 'Yadd' },
  { tf: 'ⴻ', latin: 'E', name: 'Ye' },
  { tf: 'ⴼ', latin: 'F', name: 'Yaf' },
  { tf: 'ⴽ', latin: 'K', name: 'Yak' },
  { tf: 'ⵀ', latin: 'H', name: 'Yah' },
  { tf: 'ⵃ', latin: 'Ḥ', name: 'Yahh' },
  { tf: 'ⵄ', latin: '3', name: 'Yaa' },
  { tf: 'ⵅ', latin: 'X', name: 'Yax' },
  { tf: 'ⵇ', latin: 'Q', name: 'Yaq' },
  { tf: 'ⵉ', latin: 'I', name: 'Yi' },
  { tf: 'ⵊ', latin: 'J', name: 'Yaj' },
  { tf: 'ⵍ', latin: 'L', name: 'Yal' },
  { tf: 'ⵎ', latin: 'M', name: 'Yam' },
  { tf: 'ⵏ', latin: 'N', name: 'Yan' },
  { tf: 'ⵓ', latin: 'U', name: 'Yu' },
  { tf: 'ⵔ', latin: 'R', name: 'Yar' },
  { tf: 'ⵕ', latin: 'Ṛ', name: 'Yarr' },
  { tf: 'ⵙ', latin: 'S', name: 'Yas' },
  { tf: 'ⵚ', latin: 'Ṣ', name: 'Yass' },
  { tf: 'ⵜ', latin: 'T', name: 'Yat' },
  { tf: 'ⵟ', latin: 'Ṭ', name: 'Yatt' },
  { tf: 'ⵡ', latin: 'W', name: 'Yaw' },
  { tf: 'ⵢ', latin: 'Y', name: 'Yay' },
  { tf: 'ⵣ', latin: 'Z', name: 'Yaz' },
  { tf: 'ⵥ', latin: 'Ẓ', name: 'Yazz' },
  { tf: 'ⵖ', latin: 'Γ', name: 'Yaγ' },
];

// ---- VOCABULARY ----
const vocabulary = {
  salutations: [
    { fr: 'Bonjour', ar: 'صباح الخير', phon: 'Sba7 l-khir' },
    { fr: 'Bonsoir', ar: 'مساء الخير', phon: 'Msa l-khir' },
    { fr: 'Comment ça va?', ar: 'كيداير؟', phon: 'Kidayer?' },
    { fr: 'Je vais bien', ar: 'لاباس', phon: 'Labas' },
    { fr: 'Merci', ar: 'شكرا', phon: 'Shukran' },
    { fr: 'S\'il vous plaît', ar: 'عافاك', phon: '3afak' },
    { fr: 'De rien', ar: 'ولو', phon: 'Walu / Bla jmil' },
    { fr: 'Au revoir', ar: 'بسلامة', phon: 'Bssalama' },
    { fr: 'Bienvenue', ar: 'مرحبا', phon: 'Marhba' },
    { fr: 'Oui', ar: 'إيه', phon: 'Iyeh' },
    { fr: 'Non', ar: 'لا', phon: 'La' },
    { fr: 'Excusez-moi', ar: 'سمح علي', phon: 'Smeh 3liya' },
  ],
  chiffres: [
    { fr: 'Zéro', ar: 'صفر', phon: 'Sifr' },
    { fr: 'Un', ar: 'واحد', phon: 'Wahed' },
    { fr: 'Deux', ar: 'جوج', phon: 'Juj' },
    { fr: 'Trois', ar: 'تلاتة', phon: 'Tlata' },
    { fr: 'Quatre', ar: 'ربعة', phon: 'Rb3a' },
    { fr: 'Cinq', ar: 'خمسة', phon: 'Khmsa' },
    { fr: 'Six', ar: 'ستة', phon: 'Sta' },
    { fr: 'Sept', ar: 'سبعة', phon: 'Sb3a' },
    { fr: 'Huit', ar: 'تمنية', phon: 'Tmnya' },
    { fr: 'Neuf', ar: 'تسعود', phon: 'Ts3ud' },
    { fr: 'Dix', ar: 'عشرة', phon: '3shra' },
    { fr: 'Cent', ar: 'مية', phon: 'Miya' },
  ],
  couleurs: [
    { fr: 'Rouge', ar: 'حمر', phon: 'Hmar' },
    { fr: 'Bleu', ar: 'زرق', phon: 'Zraq' },
    { fr: 'Vert', ar: 'خضر', phon: 'Khdher' },
    { fr: 'Jaune', ar: 'صفر', phon: 'Sfar' },
    { fr: 'Blanc', ar: 'بياض', phon: 'Byad' },
    { fr: 'Noir', ar: 'كحل', phon: 'Khal' },
    { fr: 'Or', ar: 'ذهبي', phon: 'Dhahabi' },
    { fr: 'Orange', ar: 'برتقالي', phon: 'Burtuqali' },
    { fr: 'Rose', ar: 'وردي', phon: 'Wardi' },
    { fr: 'Marron', ar: 'قهوي', phon: 'Qahwi' },
    { fr: 'Violet', ar: 'بنفسجي', phon: 'Banafsaji' },
    { fr: 'Gris', ar: 'رمادي', phon: 'Ramadi' },
  ],
  famille: [
    { fr: 'Père', ar: 'ببا / والد', phon: 'Bba / Walid' },
    { fr: 'Mère', ar: 'ماما / والدة', phon: 'Mama / Walida' },
    { fr: 'Frère', ar: 'خوي', phon: 'Khuy' },
    { fr: 'Sœur', ar: 'أختي', phon: 'Khti' },
    { fr: 'Fils', ar: 'ولد', phon: 'Weld' },
    { fr: 'Fille', ar: 'بنت', phon: 'Bent' },
    { fr: 'Grand-père', ar: 'جدي', phon: 'Jddi' },
    { fr: 'Grand-mère', ar: 'جدتي', phon: 'Jedda' },
    { fr: 'Oncle', ar: 'عمي', phon: '3mmi' },
    { fr: 'Tante', ar: 'عمتي', phon: '3mmti' },
    { fr: 'Mari', ar: 'راجل', phon: 'Rajel' },
    { fr: 'Femme', ar: 'مرا', phon: 'Mra' },
  ],
  voyage: [
    { fr: 'Hôtel', ar: 'فندق', phon: 'Foundoq' },
    { fr: 'Aéroport', ar: 'المطار', phon: 'L-mtar' },
    { fr: 'Train', ar: 'القطر', phon: 'L-qitar' },
    { fr: 'Taxi', ar: 'تاكسي', phon: 'Taxi' },
    { fr: 'Marché', ar: 'السوق', phon: 'S-suq' },
    { fr: 'Restaurant', ar: 'ريستورو', phon: 'Restoro' },
    { fr: 'Mosquée', ar: 'الجامع', phon: 'L-jami3' },
    { fr: 'Plage', ar: 'البحر', phon: 'L-bhar' },
    { fr: 'Montagne', ar: 'الجبل', phon: 'L-jbel' },
    { fr: 'Combien?', ar: 'بشحال؟', phon: 'B-sh7al?' },
    { fr: 'Gauche', ar: 'ليسر', phon: 'Lisr' },
    { fr: 'Droite', ar: 'ليمين', phon: 'Limin' },
  ],
  nourriture: [
    { fr: 'Pain', ar: 'الخبز', phon: 'L-khobz' },
    { fr: 'Eau', ar: 'الماء', phon: 'L-ma' },
    { fr: 'Thé', ar: 'أتاي', phon: 'Atay' },
    { fr: 'Café', ar: 'قهوة', phon: 'Qahwa' },
    { fr: 'Tajine', ar: 'الطاجين', phon: 'T-tajin' },
    { fr: 'Couscous', ar: 'الكسكس', phon: 'L-kuskus' },
    { fr: 'Viande', ar: 'اللحم', phon: 'L-lahem' },
    { fr: 'Poulet', ar: 'الجاج', phon: 'L-jaj' },
    { fr: 'Poisson', ar: 'الحوت', phon: 'L-hut' },
    { fr: 'Olive', ar: 'الزيتون', phon: 'Z-zitoune' },
    { fr: 'Orange', ar: 'الليمون', phon: 'L-limon' },
    { fr: 'Sucre', ar: 'السكر', phon: 'S-sokkar' },
  ],
};

// ---- TAMAZIGHT VOCABULARY ----
const tamazightVocab = [
  { fr: 'Bonjour', tz: 'ⴰⵣⵓⵍ', phon: 'Azul' },
  { fr: 'Merci', tz: 'ⵜⴰⵏⵎⵎⵉⵔⵜ', phon: 'Tanmmirt' },
  { fr: 'Oui', tz: 'ⵢⵉⵀ', phon: 'Yih' },
  { fr: 'Non', tz: 'ⵓⵀⵓ', phon: 'Uhu' },
  { fr: 'Eau', tz: 'ⴰⵎⴰⵏ', phon: 'Aman' },
  { fr: 'Pain', tz: 'ⴰⵖⵔⵓⵎ', phon: 'Aghrum' },
  { fr: 'Maison', tz: 'ⵉⴳⵔⵎ', phon: 'Igrm' },
  { fr: 'Soleil', tz: 'ⵜⴰⴼⵓⴽⵜ', phon: 'Tafukt' },
  { fr: 'Lune', tz: 'ⴰⵢⵢⵓⵔ', phon: 'Ayyur' },
  { fr: 'Montagne', tz: 'ⴰⴷⵔⴰⵔ', phon: 'Adrar' },
  { fr: 'Homme libre', tz: 'ⴰⵎⴰⵣⵉⵖ', phon: 'Amazigh' },
  { fr: 'Langue', tz: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', phon: 'Tamazight' },
  { fr: 'Terre/Pays', tz: 'ⵜⴰⵎⴰⵣⵖⴰ', phon: 'Tamazgha' },
  { fr: 'Femme', tz: 'ⵜⴰⵎⵖⴰⵔⵜ', phon: 'Tamghert' },
  { fr: 'Enfant', tz: 'ⴰⵏⴰⵡ', phon: 'Anaw' },
  { fr: 'Coeur', tz: 'ⵓⵍ', phon: 'Ul' },
];

// ---- PHRASES ----
const phrases = [
  { fr: 'Excusez-moi, où est...?', ar: 'سمح علي، فين كاين...؟', phon: 'Smeh 3liya, fin kayn...?' },
  { fr: 'C\'est combien?', ar: 'بشحال هاد الشي؟', phon: 'B-sh7al had shi?' },
  { fr: 'J\'aime le Maroc!', ar: 'كنحب المغرب!', phon: 'Kanhb l-Maghrib!' },
  { fr: 'Parlez-vous français?', ar: 'كتهضر بالفرانسيس؟', phon: 'Ktheddar bel-Fransais?' },
  { fr: 'Je ne comprends pas', ar: 'ما فهمتش', phon: 'Ma fhemtsh' },
  { fr: 'Appelez la police!', ar: 'عيط ل البوليس!', phon: '3yyet l-l-bulis!' },
  { fr: 'Bonne nuit', ar: 'تصبح على خير', phon: 'Tsbah 3la khir' },
  { fr: 'Félicitations!', ar: 'مبروك!', phon: 'Mbrouk!' },
];

// ---- QUIZ DATA ----
const quizData = [
  { word: 'مرحبا', correct: 'Bonjour / Bienvenue', options: ['Au revoir', 'Bonjour / Bienvenue', 'Merci', 'S\'il vous plaît'] },
  { word: 'شكرا', correct: 'Merci', options: ['Merci', 'Oui', 'Non', 'Bonjour'] },
  { word: 'لاباس', correct: 'Ça va bien', options: ['Ça va bien', 'Au revoir', 'Félicitations', 'Bonsoir'] },
  { word: 'كسكس', correct: 'Couscous', options: ['Tajine', 'Pain', 'Couscous', 'Thé à la menthe'] },
  { word: 'الخبز', correct: 'Pain', options: ['Pain', 'Eau', 'Viande', 'Poulet'] },
  { word: 'جبل', correct: 'Montagne', options: ['Montagne', 'Mer', 'Désert', 'Ville'] },
  { word: 'اتاي', correct: 'Thé à la menthe', options: ['Café', 'Eau', 'Thé à la menthe', 'Jus'] },
  { word: 'فندق', correct: 'Hôtel', options: ['Restaurant', 'Aéroport', 'Hôtel', 'Mosquée'] },
  { word: 'البحر', correct: 'Mer / Plage', options: ['Mer / Plage', 'Montagne', 'Rivière', 'Désert'] },
  { word: 'مبروك', correct: 'Félicitations!', options: ['Bonjour', 'Merci', 'Au revoir', 'Félicitations!'] },
];

let quizIndex = 0, quizScore = 0, quizAnswered = false;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderArabicAlphabet();
  renderTifinaghAlphabet();
  loadVocab('salutations');
  loadTamazightVocab();
  renderPhrases();
  renderQuiz();
});

function renderArabicAlphabet() {
  const grid = document.getElementById('arabicAlphabet');
  if (!grid) return;
  grid.innerHTML = arabicLetters.map(l => `
    <div class="letter-card" onclick="playLetter(this, '${l.name}')">
      <div class="letter-arabic">${l.ar}</div>
      <div class="letter-latin">${l.latin}</div>
      <div class="letter-name">${l.name}</div>
    </div>
  `).join('');
}

function renderTifinaghAlphabet() {
  const grid = document.getElementById('tifinaghAlphabet');
  if (!grid) return;
  grid.innerHTML = tifinaghLetters.map(l => `
    <div class="letter-card" onclick="playLetter(this, '${l.name}')">
      <div class="letter-tifinagh">${l.tf}</div>
      <div class="letter-latin">${l.latin}</div>
      <div class="letter-name">${l.name}</div>
    </div>
  `).join('');
}

function playLetter(el, name) {
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  if ('speechSynthesis' in window) {
    const utt = new SpeechSynthesisUtterance(name);
    utt.lang = 'en-US';
    speechSynthesis.speak(utt);
  }
}

function loadVocab(cat) {
  document.querySelectorAll('.vocab-cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const grid = document.getElementById('vocabGrid');
  const items = vocabulary[cat] || [];
  grid.innerHTML = items.map(v => `
    <div class="vocab-card" onclick="speakArabic('${v.phon}')">
      <button class="play-btn" title="Écouter">▶</button>
      <div class="vocab-french">${v.fr}</div>
      <div class="vocab-arabic">${v.ar}</div>
      <div class="vocab-phon">${v.phon}</div>
    </div>
  `).join('');
}

function loadTamazightVocab() {
  const grid = document.getElementById('tamazightVocabGrid');
  if (!grid) return;
  grid.innerHTML = tamazightVocab.map(v => `
    <div class="vocab-card" onclick="speakArabic('${v.phon}')">
      <button class="play-btn" title="Écouter">▶</button>
      <div class="vocab-french">${v.fr}</div>
      <div class="vocab-tamazight">${v.tz}</div>
      <div class="vocab-phon">${v.phon}</div>
    </div>
  `).join('');
}

function renderPhrases() {
  const container = document.getElementById('phrases');
  if (!container) return;
  container.innerHTML = phrases.map(p => `
    <div class="phrase-card" onclick="speakArabic('${p.phon}')">
      <div>
        <div class="phrase-fr">${p.fr}</div>
        <div class="phrase-arabic">${p.ar}</div>
        <div class="phrase-phon">${p.phon}</div>
      </div>
      <button class="btn btn-outline btn-sm" style="flex-shrink:0;">▶ Écouter</button>
    </div>
  `).join('');
}

function speakArabic(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'fr-MA';
    speechSynthesis.speak(utt);
  }
}

// ---- QUIZ ----
function renderQuiz() {
  quizAnswered = false;
  const q = quizData[quizIndex];
  if (!q) return;

  document.getElementById('quizWord').textContent = q.word;
  document.getElementById('quizNum').textContent = `${quizIndex + 1}/${quizData.length}`;
  document.getElementById('progressFill').style.width = `${((quizIndex + 1) / quizData.length) * 100}%`;
  document.getElementById('nextBtn').style.display = 'none';

  const shuffled = [...q.options].sort(() => Math.random() - 0.5);
  const optionsEl = document.getElementById('quizOptions');
  optionsEl.innerHTML = shuffled.map(opt => `
    <button class="quiz-option" onclick="checkAnswer(this, '${opt.replace(/'/g,"\\'")}', '${q.correct.replace(/'/g,"\\'")}')">
      ${opt}
    </button>
  `).join('');
}

function checkAnswer(btn, chosen, correct) {
  if (quizAnswered) return;
  quizAnswered = true;

  const allBtns = document.querySelectorAll('.quiz-option');
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === correct) b.classList.add('correct');
  });

  if (chosen === correct) {
    btn.classList.add('correct');
    quizScore++;
  } else {
    btn.classList.add('wrong');
  }

  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= quizData.length) {
    document.getElementById('quizWord').textContent = '🎉';
    document.getElementById('quizQuestion').textContent = `Quiz terminé! Score: ${quizScore}/${quizData.length}`;
    document.getElementById('quizOptions').innerHTML = `
      <div style="grid-column:1/-1;text-align:center;color:var(--secondary);font-size:1.1rem;padding:20px 0;">
        ${quizScore >= 8 ? '🏆 Excellent!' : quizScore >= 5 ? '👍 Bien joué!' : '📖 Continuez à pratiquer!'}
      </div>
    `;
    document.getElementById('nextBtn').textContent = '🔄 Recommencer';
    document.getElementById('nextBtn').onclick = () => {
      quizIndex = 0; quizScore = 0;
      document.getElementById('quizQuestion').textContent = 'Que signifie ce mot arabe?';
      document.getElementById('nextBtn').textContent = 'Question suivante →';
      document.getElementById('nextBtn').onclick = nextQuestion;
      document.getElementById('quizScore').textContent = 'Score: 0';
      renderQuiz();
    };
    document.getElementById('nextBtn').style.display = 'inline-block';
    return;
  }
  renderQuiz();
}

// ---- LANG SWITCH ----
function switchLang(lang) {
  const arabicSection = document.getElementById('arabicSection');
  const tamazightSection = document.getElementById('tamazightSection');
  const arabicTab = document.getElementById('arabicTab');
  const tamazightTab = document.getElementById('tamazightTab');

  if (lang === 'arabic') {
    arabicSection.style.display = 'block';
    tamazightSection.style.display = 'none';
    arabicTab.classList.add('active');
    tamazightTab.classList.remove('active');
  } else {
    arabicSection.style.display = 'none';
    tamazightSection.style.display = 'block';
    tamazightTab.classList.add('active');
    arabicTab.classList.remove('active');
  }
}
