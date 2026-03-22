// ==========================================
// MOROCCO CHATBOT - Knowledge Base
// ==========================================

const KNOWLEDGE_BASE = [
  // GENERAL
  { keys: ['bonjour', 'salut', 'hello', 'hi', 'bonsoir', 'مرحبا'], response: `مرحبا! Bonjour! 🌙\n\nJe suis **Atlas**, votre guide virtuel sur le Maroc. Je peux répondre à toutes vos questions sur:\n\n🏛️ **Culture & Histoire** — Des Phéniciens aux Almoravides jusqu'au Maroc moderne\n🏯 **Villes** — Marrakech, El Jadida, Fès, Casablanca...\n🍽️ **Gastronomie** — Tajine, couscous, pastilla...\n🎵 **Musique** — Gnawa, Andalous, Ahouach...\n📚 **Langues** — Arabe, Tamazight, Darija...\n\nQue souhaitez-vous savoir?` },
  
  // MARRAKECH
  { keys: ['marrakech', 'cité ocre', 'ocre', 'marrakesh', 'مراكش'], response: `🏯 **Marrakech — La Cité Ocre**\n\nFondée en **1062** par les Almoravides, Marrakech est l'une des 4 villes impériales du Maroc. Ses murs en pisé couleur ocre rouge lui valent le surnom de "Ville Rouge".\n\n**Sites incontournables:**\n• 🕌 **Mosquée Koutoubia** (1158) — Minaret de 70m, symbole de la ville\n• 🎪 **Jemaa el-Fna** — Place UNESCO, cœur vivant de la médina\n• 🌿 **Jardins Majorelle** — Créés par Yves Saint Laurent\n• 🏛️ **Palais Bahia** — 8000m² de splendeur andalouse\n• 📚 **Medersa Ben Youssef** — La plus grande médersa du Maroc\n• 🛍️ **Les Souks** — 22 souks spécialisés dans un labyrinthe fascinant\n\n**Population:** ~1,3 million | **Altitude:** 470m | **Région:** Marrakech-Safi` },
  
  // JEMAA EL-FNA
  { keys: ['jemaa', 'jemaa el-fna', 'place', 'djemaa', 'la place'], response: `🎪 **Jemaa el-Fna — Patrimoine UNESCO**\n\nLa place Jemaa el-Fna est classée **"Chef-d'œuvre du patrimoine oral et immatériel de l'humanité"** par l'UNESCO depuis 2001.\n\n**Pendant la journée:**\n• 🐍 Charmeurs de serpents\n• 🐒 Dompteurs de singes\n• 💊 Herboristes et dentistes ambulants\n• 🥤 Vendeurs de jus d'orange frais\n\n**Le soir (la magie commence!):**\n• 🔥 Dizaines de stands de cuisine de rue\n• 🎵 Musiciens Gnawa, Aissawa\n• 📖 Conteurs (halqas) en arabe et Tamazight\n• 💃 Danseurs Chleuh et Amazigh\n\n**Conseil:** Venez au coucher du soleil pour vivre l'atmosphère unique! Attention aux arnaques, négociez toujours les prix.` },
  
  // EL JADIDA
  { keys: ['el jadida', 'jedida', 'jadida', 'mazagan', 'citerne', 'portugaise', 'الجديدة'], response: `🏰 **El Jadida — La Cité Portugaise**\n\nAnciennement **Mazagan**, El Jadida est classée **Patrimoine Mondial UNESCO depuis 2004**. Fondée par les Portugais en **1502**, elle est un exemple rare de ville fortifiée Renaissance en Afrique.\n\n**La Citerne Portugaise (1514):**\nLa perle d'El Jadida! Cette salle voûtée gothique est inondée d'une mince couche d'eau qui réfléchit les piliers de façon surréelle. **Orson Welles** y tourna des scènes de son "Othello" en 1952.\n\n**Les Remparts:**\n• 4 bastions : Saint-Ange, Saint-Sébastien, Saint-Esprit, Ange\n• Enceinte hexagonale en pierre de taille\n• Vue imprenable sur l'Atlantique\n\n**L'Église de l'Assomption:**\nRare exemple gothique-manuélin subsistant au Maroc (XVIe s.).\n\n**Distance de Casablanca:** 100 km | **Population:** ~200 000` },
  
  // CUISINE
  { keys: ['tajine', 'tagine', 'cuisine', 'manger', 'gastronomie', 'plat', 'nourriture', 'couscous'], response: `🍽️ **La Gastronomie Marocaine**\n\nReconnue parmi les plus riches du monde, la cuisine marocaine fusionne influences berbère, arabe, andalouse et africaine.\n\n**Plats emblématiques:**\n• 🏺 **Tajine** — Ragoût mijoté dans un plat en terre cuite conique\n• 🌾 **Couscous** — Patrimoine UNESCO 2020, plat du vendredi\n• 🥟 **Pastilla** — Tarte feuilletée sucrée-salée au pigeon + amandes\n• 🍲 **Harira** — Soupe aux tomates, lentilles et pois chiches\n• 🥙 **Méchoui** — Agneau rôti entier à la braise (fêtes)\n\n**Pâtisseries & Boissons:**\n• 🍵 **Atay** (thé à la menthe) — Symbole d'hospitalité\n• 🍪 **Cornes de Gazelle** — Pâte d'amande à l'eau de fleur d'oranger\n• 🫙 **Huile d'Argan** — L'"or liquide" du Souss\n• 🍊 **Jus d'orange frais** — Les meilleures oranges Marrakchi!` },
  
  // ARABE
  { keys: ['arabe', 'arabic', 'langue', 'apprendre', 'العربية', 'darija', 'dialecte'], response: `📚 **L'Arabe au Maroc**\n\nLe Maroc utilise **3 formes d'arabe:**\n\n**1. Darija (الدارجة) — Arabe marocain dialectal**\nLa langue du quotidien. Mélange d'arabe, tamazight, français et espagnol.\n• "Salam" (سلام) = Bonjour\n• "Labas?" (لاباس؟) = Ça va?\n• "Shukran" (شكرا) = Merci\n• "Bzzaf" (بزاف) = Beaucoup\n• "Mzian" (مزيان) = Bien/bon\n\n**2. Arabe Standard Moderne (الفصحى)**\nUtilisé dans les médias, l'éducation et les documents officiels.\n\n**3. Arabe Classique / Coranique**\nLa langue du Coran et de la littérature médiévale.\n\nAllez dans la page **Apprendre** pour des leçons interactives! 📖` },
  
  // TAMAZIGHT
  { keys: ['tamazight', 'amazigh', 'berbere', 'berbère', 'tifinagh', 'ⵜⴰⵎⴰⵣⵉⵖⵜ'], response: `🔤 **Tamazight — La Langue Amazighe**\n\nLe Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ) est la **langue des Amazigh** (Berbères), peuple autochtone du Maroc. Reconnu **langue officielle** de la Constitution de 2011.\n\n**L'Alphabet Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ):**\nAncien système d'écriture remontant au IIIe siècle av. J.-C., toujours utilisé aujourd'hui.\n\n**Mots essentiels:**\n• ⴰⵣⵓⵍ (Azul) = Bonjour\n• ⵜⴰⵏⵎⵎⵉⵔⵜ (Tanmmirt) = Merci\n• ⵎⴰⵏⴰⵙ ⵜⵔⵉⴷ? (Manas trid?) = Comment vas-tu?\n• ⵉⵎⵉ (Imi) = Bouche\n• ⴰⵢⵢⵓⵔ (Ayyur) = Lune\n\n**Variantes régionales:**\n• Tachelhit (Sous-Massa)\n• Tamazight du Maroc Central\n• Tarifit (Rif)\n\nAllez dans **Apprendre** pour des leçons complètes!` },
  
  // HISTOIRE
  { keys: ['histoire', 'history', 'origine', 'fondation', 'dynasties', 'almoravides', 'almohades', 'mérinides'], response: `📜 **L'Histoire du Maroc**\n\n**Chronologie:**\n\n🏺 **Préhistoire** — Grottes de Herculis et Taforalt (12 000 ans)\n🌊 **Phéniciens & Romains** — Moulouya, Lixus, Volubilis (IIIe s. av. J.-C.)\n☪️ **Conquête Arabe** (670 AD) — Islamisation du Maghreb\n👑 **Idrisides** (789-985) — Première dynastie, Fès fondée en 789\n⚔️ **Almoravides** (1062-1147) — Marrakech fondée, empire du Ghana\n🕌 **Almohades** (1147-1269) — Koutoubia, apogée culturel\n📚 **Mérinides** (1244-1465) — Medersas de Fès, art et sciences\n🌍 **Saadiens** (1554-1659) — Tombeaux Saadiens, empire du Mali\n👑 **Alaouites** (1666-présent) — Dynastie régnante actuelle\n🏴 **Indépendance** — 2 mars 1956, retour de Mohammed V` },
  
  // UNESCO
  { keys: ['unesco', 'patrimoine', 'world heritage', 'classé', 'monuments'], response: `🌍 **Sites UNESCO au Maroc**\n\nLe Maroc compte **9 sites inscrits** au Patrimoine Mondial UNESCO:\n\n1. 🏛️ **Médina de Fès** (1981) — Plus grande médina médiévale du monde\n2. 🏯 **Médina de Marrakech** (1985) — La Cité Ocre\n3. 🏔️ **Aït Benhaddou** (1987) — Kasbah saharienne, Hollywood d'Afrique\n4. 🏛️ **Meknès historique** (1996) — La Versailles du Maroc\n5. 🌊 **Lixus** — Cité romaine antique (région Larache)\n6. 🏰 **Cité Portugaise El Jadida** (2004) — Citerne et remparts\n7. 🏖️ **Essaouira** (2001) — Médina fortifiée atlantique\n8. 🕌 **Rabat** (2012) — Ville moderne et historique\n9. 🌿 **Arganier** (2021) — Patrimoine agricole mondial\n\nPlus **1 patrimoine immatériel:** Jemaa el-Fna (2001)!` },
  
  // GNAWA
  { keys: ['gnawa', 'gnaoua', 'musique', 'music', 'lila', 'maalem'], response: `🎵 **La Musique Gnawa**\n\nLes **Gnawa** sont des descendants d'esclaves subsahariens amenés au Maroc depuis le Xe siècle. Leur musique est un rituel de guérison spirituelle (Lila) reconnu **Patrimoine UNESCO en 2019**.\n\n**Instruments:**\n• 🥁 **Guembri** (hajhuj) — Basse à 3 cordes en peau de chameau\n• 🔔 **Qraqeb** — Castagnettes en métal, le son caractéristique\n• 🥁 **Tbel** — Tambour utilisé en procession\n\n**La Lila:**\nCérémonie nocturne où le Maalem (maître) guide les participants dans des états de transe par la répétition de séquences musicales (milouns) dédiées aux saints esprits (muluk).\n\n**Festival Gnawa d'Essaouira:**\nChaque juin, le plus grand festival de musique du Maroc rassemble des milliers de personnes sur la place Moulay Hassan.` },
  
  // VOYAGE
  { keys: ['voyage', 'visiter', 'conseils', 'tourisme', 'visa', 'quand', 'meilleur moment', 'budget'], response: `✈️ **Conseils Voyage au Maroc**\n\n**Meilleure période:**\n• 🌸 **Printemps** (mars-mai) — Idéal, températures douces (20-25°C)\n• 🍂 **Automne** (sept-nov) — Excellent, moins touristique\n• ❄️ **Hiver** (déc-fév) — Marrakech agréable, ski à l'Oukaïmeden!\n• ☀️ **Été** — Très chaud à Marrakech (40°C+), préférez la côte\n\n**Visa:** Pas de visa requis pour les citoyens de l'UE, USA, Canada (90 jours).\n\n**Transport:**\n• ✈️ Aéroport Marrakech-Ménara (RAK)\n• 🚂 Train ONCF (Rabat-Casablanca-Marrakech)\n• 🚍 CTM Bus entre les villes\n• 🚕 Petit taxis (rouges à Marrakech) + applications\n\n**Budget moyen:**\n• 🏨 Riad: 50-200€/nuit\n• 🍽️ Repas: 5-20€\n• 🛍️ Shopping: Négociez toujours (50% du prix affiché)!` },
  
  // LANGUAGE LEARN
  { keys: ['apprendre arabe', 'cours', 'leçon', 'learn arabic', 'vocabulaire'], response: `📖 **Apprenez l'Arabe & Tamazight**\n\nRendez-vous sur notre page **Apprendre** pour des leçons interactives!\n\n**Quelques bases en Darija (arabe marocain):**\n\n| Français | Darija | Prononciation |\n|---------|--------|---------------|\n| Bonjour | صباح الخير | Sba7 l-khir |\n| Bonsoir | مساء الخير | Msa l-khir |\n| Merci | شكرا | Shukran |\n| S'il vous plaît | عافاك | 3afak |\n| Combien? | بشحال؟ | B-sh7al? |\n| Oui / Non | إيه / لا | Iyeh / La |\n| Eau | الماء | L-ma |\n| Pain | الخبز | L-khobz |\n\n🔤 **En Tamazight:**\n• Azul = Bonjour\n• Tanmmirt = Merci\n• Mamnoun = De rien` },
  
  // HACKATHON
  { keys: ['hackathon', 'cri', 'innovation', 'uca', 'marrakech safi', 'استثمار', 'تراث'], response: `🏆 **Hackathon — الذاكرة، التراث، الابتكار والاستثمار**\n\nOrganisé par le **Centre Régional d'Investissement (CRI)** de la Région Marrakech-Safi, en partenariat avec la **Cité de l'Innovation** de l'Université Cadi Ayyad (UCA).\n\n**Ouvert à:**\n• 🎓 Étudiants\n• 🔬 Chercheurs\n• 💡 Porteurs de projets\n• 🚀 Entrepreneurs\n\n**Thématiques:**\n• Valorisation du patrimoine immatériel\n• Transmission de l'histoire et de la mémoire nationale\n• Tourisme culturel & économie créative\n• Projets liés à l'identité nationale\n\n**Objectif:** Développer des projets innovants à l'intersection de la technologie, du patrimoine et de l'investissement.\n\n👉 Consultez la page **Hackathon** pour plus d'informations!` },
  
  // DEFAULT
  { keys: ['default'], response: `🌙 Je suis heureux de répondre à votre question!\n\nJe suis spécialisé dans les sujets suivants:\n\n• 🏯 **Villes marocaines** — Marrakech, El Jadida, Fès, Casablanca...\n• 🏛️ **Culture & Histoire** — Dynasties, patrimoine, arts\n• 🍽️ **Gastronomie** — Tajine, couscous, pâtisseries\n• 🎵 **Musique** — Gnawa, Andalous, Amazigh\n• 📚 **Langues** — Arabe, Tamazight, Darija\n• ✈️ **Voyage** — Conseils, meilleur moment, budget\n• 🏺 **Artisanat** — Zellige, maroquinerie, poterie\n\nPosez-moi une question plus précise! 😊` }
];

function findResponse(input) {
  const lower = input.toLowerCase().trim();
  
  for (const item of KNOWLEDGE_BASE) {
    if (item.keys[0] === 'default') continue;
    if (item.keys.some(k => lower.includes(k.toLowerCase()))) {
      return item.response;
    }
  }
  
  // Default
  return KNOWLEDGE_BASE.find(i => i.keys[0] === 'default').response;
}

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(text, isUser = false) {
  const messages = document.getElementById('chatMessages');
  
  // Remove welcome message
  const welcome = messages.querySelector('.welcome-msg');
  if (welcome) welcome.remove();

  const msg = document.createElement('div');
  msg.className = `msg ${isUser ? 'user' : 'bot'}`;
  
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  
  msg.innerHTML = `
    <div class="msg-avatar ${isUser ? 'user-a' : 'bot'}">${isUser ? '👤' : '🤖'}</div>
    <div>
      <div class="msg-bubble">${formattedText}</div>
      <div class="msg-time">${formatTime()}</div>
    </div>
  `;
  
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const messages = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'msg bot';
  typing.id = 'typingIndicator';
  typing.innerHTML = `
    <div class="msg-avatar bot">🤖</div>
    <div class="msg-bubble" style="padding:8px 16px;">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, true);
  input.value = '';
  input.style.height = 'auto';

  // Hide quick replies
  document.getElementById('quickReplies').style.display = 'none';

  showTyping();

  // Simulate typing delay
  const delay = 800 + Math.random() * 1000;
  await new Promise(r => setTimeout(r, delay));

  removeTyping();
  const response = findResponse(text);
  addMessage(response, false);
}

function askTopic(question) {
  const input = document.getElementById('chatInput');
  input.value = question;
  sendMessage();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chatInput');
  
  // Enter to send, Shift+Enter for new line
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  });
  
  // Welcome bot message after delay
  setTimeout(() => {
    addMessage(`مرحبا! 🌙 Bonjour! Je suis **Atlas**, votre guide virtuel sur le Maroc!\n\nPosez-moi n'importe quelle question sur la culture, l'histoire, les villes, la cuisine ou les traditions marocaines. Je suis là pour vous aider!`);
  }, 1000);
});
