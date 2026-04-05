// ==========================================
// MOROCCO CHATBOT - Atlas Knowledge Base v2
// ==========================================

const KNOWLEDGE_BASE = [
  // GREETING
  {
    keys: ['bonjour', 'salut', 'hello', 'hi', 'bonsoir', 'مرحبا', 'salam', 'hey', 'coucou'],
    response: `مرحبا! Bonjour! 🌙\n\nJe suis **Atlas**, votre guide virtuel sur le Maroc. Je peux répondre à toutes vos questions sur:\n\n🏛️ **Culture & Histoire** — Des Phéniciens aux Alaouites jusqu'au Maroc moderne\n🏯 **Villes** — Marrakech, Fès, El Jadida, Casablanca, Rabat...\n🍽️ **Gastronomie** — Tajine, couscous, pastilla, mint tea...\n🎵 **Musique** — Gnawa, Andalous, Ahouach, Chaabi...\n📚 **Langues** — Arabe, Tamazight, Darija, Français...\n✈️ **Voyage** — Conseils, budget, itinéraires, visa...\n🏺 **Artisanat** — Zellige, poterie, maroquinerie, tapis...\n\nQue souhaitez-vous savoir? 😊`
  },

  // MARRAKECH
  {
    keys: ['marrakech', 'cité ocre', 'ocre', 'marrakesh', 'مراكش', 'ville rouge'],
    response: `🏯 **Marrakech — La Cité Ocre**\n\nFondée en **1062** par les Almoravides, Marrakech est l'une des 4 villes impériales du Maroc. Ses murs en pisé couleur ocre rouge lui valent le surnom de "Ville Rouge".\n\n**Sites incontournables:**\n• 🕌 **Mosquée Koutoubia** (1158) — Minaret de 70m, symbole de la ville\n• 🎪 **Jemaa el-Fna** — Place UNESCO, cœur vivant de la médina\n• 🌿 **Jardins Majorelle** — Créés par Jacques Majorelle, restaurés par Yves Saint Laurent\n• 🏛️ **Palais Bahia** — 8000m² de splendeur andalouse\n• 📚 **Medersa Ben Youssef** — La plus grande médersa du Maroc\n• 🛍️ **Les Souks** — 22 souks spécialisés dans un labyrinthe fascinant\n• 🍊 **Jus d'orange frais** — Les meilleures de la place Jemaa el-Fna!\n\n**Infos pratiques:**\n• 👥 Population: ~1,3 million\n• 📍 Altitude: 470m | Région: Marrakech-Safi\n• ✈️ Aéroport Marrakech-Ménara (RAK)`
  },

  // JEMAA EL-FNA
  {
    keys: ['jemaa', 'jemaa el-fna', 'djemaa', 'la place', 'place kefna'],
    response: `🎪 **Jemaa el-Fna — Patrimoine UNESCO**\n\nLa place Jemaa el-Fna est classée **"Chef-d'œuvre du patrimoine oral et immatériel de l'humanité"** par l'UNESCO depuis 2001.\n\n**Pendant la journée:**\n• 🐍 Charmeurs de serpents\n• 🐒 Dompteurs de singes\n• 💊 Herboristes et dentistes ambulants\n• 🥤 Vendeurs de jus d'orange frais (3-5 DH le verre!)\n\n**Le soir (la magie commence!):**\n• 🔥 Dizaines de stands de cuisine de rue\n• 🎵 Musiciens Gnawa, Aissawa\n• 📖 Conteurs (halqas) en arabe et Tamazight\n• 💃 Danseurs Chleuh et Amazigh\n• 🎭 Acrobates et jongleurs\n\n**💡 Conseil:** Venez au coucher du soleil pour l'atmosphère unique! Attention aux arnaques, négociez toujours les prix et tarifs photos.`
  },

  // EL JADIDA
  {
    keys: ['el jadida', 'jedida', 'jadida', 'mazagan', 'citerne', 'portugaise', 'الجديدة'],
    response: `🏰 **El Jadida — La Cité Portugaise**\n\nAnciennement **Mazagan**, El Jadida est classée **Patrimoine Mondial UNESCO depuis 2004**. Fondée par les Portugais en **1502**, elle est un exemple rare de ville fortifiée Renaissance en Afrique.\n\n**La Citerne Portugaise (1514):**\nLa perle d'El Jadida! Cette salle voûtée gothique est inondée d'une mince couche d'eau qui réfléchit les piliers de façon surréelle. **Orson Welles** y tourna des scènes de son "Othello" en 1952.\n\n**Les Remparts:**\n• 4 bastions: Saint-Ange, Saint-Sébastien, Saint-Esprit, Ange\n• Enceinte hexagonale en pierre de taille\n• Vue imprenable sur l'Atlantique\n\n**L'Église de l'Assomption:**\nRare exemple gothique-manuélin subsistant au Maroc (XVIe s.).\n\n📍 Distance de Casablanca: 100 km | Population: ~200 000`
  },

  // FÈS
  {
    keys: ['fès', 'fes', 'fez', 'medina fes', 'القرويين', 'bou inania', 'tanneries'],
    response: `🏛️ **Fès — La Cité du Savoir**\n\nFondée en **789** par Moulay Idriss II, Fès est la plus ancienne ville impériale et capitale spirituelle du Maroc.\n\n**Sites emblématiques:**\n• 🕌 **Université Al Quaraouiyine** — Fondée en 859, la plus ancienne université du monde!\n• 🎨 **Tanneries Chouara** — Spectacle unique de teinture artisanale médiévale\n• 📚 **Médersa Bou Inania** — Chef-d'œuvre de l'architecture mérinide\n• 🚪 **Bab Boujloud** — "La Porte Bleue", entrée majestueuse de la médina\n• 🏛️ **Palais Royal** — Portes en bronze doré impressionnantes\n\n**La Médina de Fès el-Bali:**\nLa plus grande médina médiévale du monde, inscrite à l'**UNESCO en 1981**, avec plus de **9 400 ruelles** et artères!\n\n🏺 Ne manquez pas les souks des tisserands, forgerons et potiers.`
  },

  // CASABLANCA
  {
    keys: ['casablanca', 'casa', 'dar beida', 'hassan ii', 'الدار البيضاء'],
    response: `🌆 **Casablanca — La Capitale Économique**\n\nAvec ~3,7 millions d'habitants, Casablanca est la plus grande ville du Maroc et le moteur économique du pays.\n\n**Incontournables:**\n• 🕌 **Mosquée Hassan II** — La 7e plus grande mosquée du monde avec un minaret de **210m**! Construite sur l'océan, ouverte aux non-musulmans en visite guidée\n• 🏛️ **Quartier Art Déco** — Architecture des années 30 unique en Afrique\n• 🌊 **Corniche d'Aïn Diab** — Boulevard balnéaire, restaurants et plages\n• 🎬 **Rick's Café** — Inspiré du film Casablanca (1942)\n• 🛍️ **Morocco Mall** — L'un des plus grands centres commerciaux d'Afrique\n\n**Économie:**\nCasablanca abrite la **Bourse de Casablanca**, le port le plus actif d'Afrique et la majorité des sièges sociaux marocains.`
  },

  // CUISINE
  {
    keys: ['tajine', 'tagine', 'cuisine', 'manger', 'gastronomie', 'plat', 'nourriture', 'couscous', 'pastilla', 'harira', 'mint tea', 'thé'],
    response: `🍽️ **La Gastronomie Marocaine**\n\nReconnue parmi les plus riches du monde, la cuisine marocaine fusionne influences berbère, arabe, andalouse et africaine.\n\n**Plats emblématiques:**\n• 🏺 **Tajine** — Ragoût mijoté dans un plat en terre cuite conique\n• 🌾 **Couscous** — Patrimoine UNESCO 2020, plat du vendredi en famille\n• 🥟 **Pastilla** — Tarte feuilletée sucrée-salée au pigeon + amandes + cannelle\n• 🍲 **Harira** — Soupe aux tomates, lentilles et pois chiches (rupture du jeûne)\n• 🥙 **Méchoui** — Agneau rôti entier à la braise (grands événements)\n• 🥗 **Zaalouk** — Caviar d'aubergines à la tomate\n• 🧆 **Kefta** — Boulettes épicées grillées servies en brochette\n\n**Pâtisseries & Boissons:**\n• 🍵 **Atay** (thé à la menthe) — Symbole d'hospitalité marocaine\n• 🍪 **Cornes de Gazelle** — Pâte d'amande à l'eau de fleur d'oranger\n• 🫙 **Huile d'Argan** — L'"or liquide" du Souss\n• 🍊 **Jus d'orange frais** — Les meilleures oranges au monde!`
  },

  // ARABE / LANGUE
  {
    keys: ['arabe', 'arabic', 'langue', 'العربية', 'darija', 'dialecte', 'parler'],
    response: `📚 **L'Arabe au Maroc**\n\nLe Maroc utilise **3 formes d'arabe:**\n\n**1. Darija (الدارجة) — Arabe marocain dialectal**\nLa langue du quotidien. Mélange d'arabe, tamazight, français et espagnol.\n• "Salam" = Bonjour\n• "Labas?" = Ça va?\n• "Shukran" (شكرا) = Merci\n• "Bzzaf" = Beaucoup\n• "Mzian" = Bien / Bon\n• "Wach kain?" = Est-ce qu'il y a?\n• "B-sh7al?" = Combien ça coûte?\n\n**2. Arabe Standard Moderne (الفصحى)**\nUtilisé dans les médias, l'éducation et les documents officiels.\n\n**3. Arabe Classique / Coranique**\nLa langue du Coran et de la littérature médiévale.\n\n📖 Allez dans la page **Apprendre** pour des leçons interactives!`
  },

  // TAMAZIGHT
  {
    keys: ['tamazight', 'amazigh', 'berbere', 'berbère', 'tifinagh', 'ⵜⴰⵎⴰⵣⵉⵖⵜ', 'chleuh'],
    response: `🔤 **Tamazight — La Langue Amazighe**\n\nLe Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ) est la **langue des Amazigh** (Berbères), peuple autochtone du Maroc. Reconnu **langue officielle** de la Constitution de 2011.\n\n**L'Alphabet Tifinagh:**\nAncien système d'écriture remontant au IIIe siècle av. J.-C., toujours utilisé aujourd'hui.\n\n**Mots essentiels:**\n• ⴰⵣⵓⵍ (Azul) = Bonjour\n• ⵜⴰⵏⵎⵎⵉⵔⵜ (Tanmmirt) = Merci\n• ⵎⴰⵏⴰⵙ ⵜⵔⵉⴷ? (Manas trid?) = Comment vas-tu?\n• ⴰⵢⵢⵓⵔ (Ayyur) = Lune\n• ⴰⴼⴰⵡ (Afaw) = Lumière\n\n**Variantes régionales:**\n• 🏔️ **Tachelhit** — Sous-Massa et Anti-Atlas\n• 🌿 **Tamazight Central** — Moyen Atlas\n• ⛰️ **Tarifit** — Région du Rif\n\n📖 Allez dans la page **Apprendre** pour des leçons complètes!`
  },

  // HISTOIRE
  {
    keys: ['histoire', 'history', 'origine', 'fondation', 'dynasties', 'almoravides', 'almohades', 'mérinides', 'alaouites'],
    response: `📜 **L'Histoire du Maroc**\n\n**Chronologie des grandes époques:**\n\n🏺 **Préhistoire** — Grottes d'Hercule et de Taforalt (12 000 ans)\n🌊 **Phéniciens & Romains** — Moulouya, Lixus, Volubilis (IIIe s. av. J.-C.)\n☪️ **Conquête Arabe** (670 AD) — Islamisation du Maghreb\n👑 **Idrisides** (789-985) — Première dynastie, Fès fondée en 789\n⚔️ **Almoravides** (1062-1147) — Marrakech fondée, empire Saharan\n🕌 **Almohades** (1147-1269) — Koutoubia, Giralda de Séville, apogée culturel\n📚 **Mérinides** (1244-1465) — Medersas de Fès, arts et sciences\n🌍 **Saadiens** (1554-1659) — Tombeaux Saadiens, Empire du Mali\n👑 **Alaouites** (1666-présent) — Dynastie régnante actuelle\n🏴 **Indépendance** — 2 mars 1956, retour de Mohammed V depuis l'exil\n\n**Le Maroc n'a jamais été colonisé**, seulement sous protectorat franco-espagnol (1912-1956).`
  },

  // UNESCO
  {
    keys: ['unesco', 'patrimoine', 'world heritage', 'classé', 'monuments'],
    response: `🌍 **Sites UNESCO au Maroc**\n\nLe Maroc compte **9 sites inscrits** au Patrimoine Mondial:\n\n| # | Site | Année |\n|---|------|-------|\n| 1 | 🏛️ Médina de Fès | 1981 |\n| 2 | 🏯 Médina de Marrakech | 1985 |\n| 3 | 🏔️ Aït Benhaddou | 1987 |\n| 4 | 🏛️ Meknès historique | 1996 |\n| 5 | 🏖️ Médina d'Essaouira | 2001 |\n| 6 | 🏰 Cité Portugaise El Jadida | 2004 |\n| 7 | 🏛️ Rabat — Ville moderne | 2012 |\n| 8 | 🌿 Système Agroforestier Arganier | 2021 |\n| 9 | 🏖️ Sites romains du Maroc | En cours |\n\n**Patrimoine immatériel:**\n• 🎪 Jemaa el-Fna (2001)\n• 🎵 Musique Gnawa (2019)\n• 🌾 Couscous (2020)`
  },

  // GNAWA
  {
    keys: ['gnawa', 'gnaoua', 'musique', 'music', 'lila', 'maalem', 'essaouira festival'],
    response: `🎵 **La Musique Gnawa**\n\nLes **Gnawa** sont des descendants d'esclaves subsahariens amenés au Maroc depuis le Xe siècle. Leur musique est un rituel de guérison spirituelle (Lila) reconnu **Patrimoine UNESCO en 2019**.\n\n**Instruments:**\n• 🥁 **Guembri** (hajhuj) — Basse à 3 cordes en peau de chameau, cœur de la musique\n• 🔔 **Qraqeb** — Castagnettes en métal, le son caractéristique des Gnawa\n• 🥁 **Tbel** — Grand tambour utilisé en procession\n\n**La Lila:**\nCérémonie nocturne où le Maalem (maître) guide les participants vers la transe par des séquences musicales (milouns) dédiées aux esprits saints.\n\n**Festival Gnawa d'Essaouira:**\nChaque **juin**, le plus grand festival de musique du Maroc réunit des milliers de musiciens du monde entier sur la place Moulay Hassan! 🎶\n\n**Autres musiques marocaines:**\n• 🎸 **Chaabi** — Musique populaire festive\n• 🎻 **Andalous** — Influence arabo-andalouse classique\n• 🪘 **Ahwach** — Chants et danses collectifs Amazigh`
  },

  // VILLES IMPERIALES
  {
    keys: ['villes impériales', 'ville imperiale', 'imperiales', 'fes marrakech meknes rabat', 'capitale'],
    response: `👑 **Les 4 Villes Impériales du Maroc**\n\nLes villes impériales sont d'anciennes capitales du royaume marocain, chargées d'histoire et de patrimoine.\n\n🏯 **Marrakech** (fondée 1062)\nLa Cité Ocre, capitale des dynasties Almoravide et Almohade. Jemaa el-Fna, Koutoubia, souks légendaires.\n\n🏛️ **Fès** (fondée 789)\nLa capitale spirituelle, la plus ancienne université du monde, médina labyrinthique et tanneries colorées.\n\n🕌 **Meknès** (capitale 1672-1727)\nSurnommée "la Versailles du Maroc" par Moulay Ismail, avec ses imposantes portes Bab El-Mansour et ses greniers royaux.\n\n🏰 **Rabat** (capitale actuelle depuis 1912)\nCapitale moderne, UNESCO 2012. Tour Hassan, Mausolée Mohammed V, Kasbah des Oudayas.\n\n✨ Un circuit des 4 villes impériales est l'une des expériences les plus enrichissantes au Maroc!`
  },

  // ARTISANAT & SOUVENIRS
  {
    keys: ['artisanat', 'souvenir', 'souvenirs', 'zellige', 'poterie', 'cuir', 'tapis', 'rapporter', 'acheter', 'marché'],
    response: `🏺 **L'Artisanat Marocain**\n\nL'artisanat est l'âme du Maroc. Chaque région a ses spécialités!\n\n**Ce qu'il faut rapporter:**\n• 🔷 **Zellige** (Fès) — Mosaïque géométrique en céramique colorée\n• 🏺 **Poterie** (Safi, Fès) — Tajines décorés et vases peints à la main\n• 👜 **Maroquinerie** (Fès, Marrakech) — Babouches, sacs, ceintures en cuir véritable\n• 🪞 **Métal ciselé** — Lanternes, plateaux, théières en laiton gravé\n• 🧵 **Tapis** (Azilal, Beni Ourain) — Tapis berbères en pure laine\n• 🌿 **Huile d'argan** — Pure ou cosmétique, le trésor du Souss\n• 🧸 **Djellaba** — Vêtement traditionnel en laine ou coton\n• 📿 **Bijoux berbères** — Argent, ambre et corail\n\n💡 **Conseil:** Négociez toujours (proposez 50% du prix affiché) et achetez dans les coopératives pour des prix fixes et équitables!`
  },

  // HAMMAM
  {
    keys: ['hammam', 'bain', 'spa', 'gommage', 'kessa', 'riad'],
    response: `🛁 **Le Hammam Marocain**\n\nLe hammam est bien plus qu'un bain — c'est un **ritual de purification** ancré dans la culture marocaine depuis des siècles, hérité des Romains via les thermes.\n\n**Les étapes du hammam:**\n1. 🌡️ **Salle chaude** (Hot room) — Détente et sudation\n2. 🧼 **Savon beldi** — Savon noir à l'olive, appliqué généreusement\n3. 🪨 **Kessa** — Gant exfoliant en plastique pour retirer les peaux mortes\n4. 🌿 **Rhassoul** — Argile minérale pour purifier et hydrater\n5. 💧 **Rinçage** — Seau d'eau froide pour fermer les pores\n6. 🫒 **Huile d'argan** — Pour hydrater et nourrir la peau\n\n**Types de hammam:**\n• 🏘️ **Hammam de quartier** (5-20 DH) — Authentique, utilisé par les locaux\n• ⭐ **Hammam de luxe / Riad** (200-500 DH) — Expérience raffinée pour touristes\n\n💡 Rendez-vous dans un hammam de quartier pour une expérience 100% locale!`
  },

  // DÉSERT & NATURE
  {
    keys: ['désert', 'desert', 'sahara', 'merzouga', 'zagora', 'dunes', 'chameau', 'nature', 'montagne', 'atlas'],
    response: `🏜️ **Le Désert Marocain**\n\nLe Maroc est l'unique pays au monde offrant en quelques heures: **plage, montagne et désert**!\n\n**Destinations désertiques:**\n• 🐪 **Merzouga & Erg Chebbi** — Les grandes dunes de sable doré (150m de hauteur!)\n• 🌅 **Zagora & Erg Chigaga** — Désert authentique, moins touristique\n• 🏔️ **Vallée du Drâa** — Oasis et ksour sur 200 km\n• 🌿 **Vallée du Dadès** — "Route des Kasbahs"\n\n**Expériences à vivre:**\n• 🐫 Balade à dos de chameau au coucher du soleil\n• ⭐ Nuit en bivouac sous les étoiles\n• 🏄 Sandboard sur les dunes\n• 📸 Photos au lever du soleil\n\n**Montagnes du Maroc:**\n• ⛷️ **Haut Atlas** — Djebel Toubkal (4167m), plus haut sommet d'Afrique du Nord\n• ❄️ **Ifrane** — "La Suisse du Maroc", ski en hiver!\n• 🌲 **Rif** — Forêts de cèdre et canyons spectaculaires`
  },

  // PLAGES
  {
    keys: ['plage', 'mer', 'océan', 'atlantique', 'méditerranée', 'surf', 'agadir', 'essaouira', 'côte'],
    response: `🌊 **Les Plages du Maroc**\n\nLe Maroc dispose de **3 500 km de côtes** entre l'Atlantique et la Méditerranée!\n\n**Meilleures plages:**\n• 🌴 **Agadir** — Plage de 9 km, eaux calmes, idéale familles\n• 🪁 **Essaouira** — Ville des vents, paradis du kitesurf et windsurf\n• 🏄 **Taghazout** — Haut lieu du surf international\n• 🌊 **Dakhla** — Lagon incroyable, kitesurf niveau mondial\n• 🏖️ **Martil & Tetouan** — Méditerranée ensoleillée, eaux chaudes\n• 🌅 **Legzira** — Arches naturelles en pierre rouge spectaculaires\n\n**Meilleure période:** juin à septembre pour se baigner. Attention aux vents forts à Essaouira!\n\n🐬 L'Atlantique marocain est riche en dauphins et baleines — les excursions observation sont magnifiques!`
  },

  // FESTIVALS
  {
    keys: ['festival', 'fête', 'événement', 'ramadan', 'aïd', 'moussem', 'carnaval'],
    response: `🎪 **Les Festivals & Fêtes du Maroc**\n\n**Festivals culturels:**\n• 🎵 **Festival Gnawa d'Essaouira** (juin) — Musique du monde et Gnawa\n• 🌹 **Festival des Roses** à Kelaa M'gouna (mai) — Défilés floraux dans la vallée du Dadès\n• 🎭 **Festival des Arts de Marrakech** (septembre) — Arts contemporains internationaux\n• 🎬 **Festival International du Film de Marrakech** (décembre) — Stars mondiales!\n• 🏇 **Moussem de Tan-Tan** — Rassemblement nomade, patrimoine UNESCO\n\n**Fêtes religieuses:**\n• 🌙 **Ramadan** — Mois de jeûne, iftar et ambiance nocturne magique\n• 🐑 **Aïd Al-Adha** — Fête du sacrifice (mouton)\n• 🌟 **Maoulid** — Célébration de la naissance du Prophète\n\n**Fêtes nationales:**\n• 🇲🇦 **Fête du Trône** (30 juillet) — Célébrations et feux d'artifice\n• 🏴 **Fête de l'Indépendance** (18 novembre)`
  },

  // RAMADAN
  {
    keys: ['ramadan', 'jeûne', 'iftar', 'suhoor', 'ramadhan'],
    response: `🌙 **Le Ramadan au Maroc**\n\nLe Ramadan est le mois le plus sacré de l'Islam. Le Maroc vit une transformation complete pendant ce mois:\n\n**L'iftar (rupture du jeûne):**\nTraditionellement avec:\n• ☕ **Harira** — Soupe emblématique aux tomates et lentilles\n• 🥐 **Chebakia** — Pâtisserie au miel et au sésame\n• 🥛 **Lben** — Lait caillé rafraîchissant\n• 🍊 **Dattes** (tamr) — La sunna prophétique\n\n**L'atmosphère nocturne:**\nAprès l'iftar, les villes s'animent! Les cafés, souks et rues se remplissent jusqu'à l'aube. La Médina de Marrakech est particulièrement magique.\n\n**Pour les touristes:**\nDrink and eat discrètement dans la journée par respect. Les restaurants touristiques restent ouverts. L'hospitalité marocaine s'intensifie pendant Ramadan — vous serez souvent invité à partager l'iftar!`
  },

  // VOYAGE CONSEILS
  {
    keys: ['voyage', 'visiter', 'conseils', 'tourisme', 'visa', 'quand', 'meilleur moment', 'budget', 'itinéraire'],
    response: `✈️ **Conseils Voyage au Maroc**\n\n**Meilleure période:**\n• 🌸 **Printemps** (mars-mai) — Idéal! Températures douces (20-25°C)\n• 🍂 **Automne** (sept-nov) — Excellent, moins touristique\n• ❄️ **Hiver** (déc-fév) — Marrakech agréable, ski à Oukaïmeden!\n• ☀️ **Été** — Très chaud (40°C+), préférez la côte Atlantique\n\n**Visa:** Pas de visa pour UE, USA, Canada (90 jours gratuits).\n\n**Transport:**\n• ✈️ Vols directs vers Marrakech, Casablanca, Agadir, Fès\n• 🚂 Train ONCF (Rabat-Casablanca-Marrakech)\n• 🚍 CTM Bus longue distance entre villes\n• 🚕 Petit taxi (rouge à Marrakech) + Indriver, Heetch\n\n**Budget moyen:**\n• 🏨 Riad/Hotel: 40-200€/nuit\n• 🍽️ Repas: 3-20€ (moins dans les gargotes locales!)\n• 🛍️ Shopping: Négociez toujours —50% du prix affiché!\n• 💡 Budget/j: 40-80€ pour voyager confortablement`
  },

  // LANGUE LEARN
  {
    keys: ['apprendre arabe', 'cours', 'leçon', 'learn arabic', 'vocabulaire', 'bases'],
    response: `📖 **Apprenez l'Arabe & Tamazight**\n\nRendez-vous sur notre page **Apprendre** pour des leçons interactives!\n\n**Darija (arabe marocain) — Bases:**\n\n| Français | Darija | Prononciation |\n|---------|--------|---------------|\n| Bonjour | صباح الخير | Sba7 l-khir |\n| Bonsoir | مساء الخير | Msa l-khir |\n| Merci | شكرا | Shukran |\n| S'il vous plaît | عافاك | 3afak |\n| Combien? | بشحال؟ | B-sh7al? |\n| Oui / Non | إيه / لا | Iyeh / La |\n| Eau | الماء | L-ma |\n| Pain | الخبز | L-khobz |\n| C'est bon! | مزيان | Mzian! |\n| Au revoir | بسلامة | Bslama |\n\n🔤 **En Tamazight:**\n• Azul = Bonjour\n• Tanmmirt = Merci\n• Mamnoun = De rien`
  },

  // QUE FAIRE
  {
    keys: ['que faire', 'activité', 'activites', 'quoi faire', 'visites', 'programme', 'agenda'],
    response: `🗺️ **Que Faire au Maroc?**\n\n**Expériences incontournables:**\n• 🌅 Lever du soleil sur Jemaa el-Fna à Marrakech\n• 🐫 Balade à chameau dans les dunes de Merzouga\n• 🏺 Cours de cuisine marocaine dans un riad\n• 🛁 Hammam authentique dans la médina de Fès\n• 🎨 Visite des tanneries de Chouara à Fès\n• 🌊 Surf à Taghazout ou kitesurf à Dakhla\n• 🏔️ Trek au Djebel Toubkal (2-3 jours)\n• 🍊 Dégustation de jus d'orange frais à 3 DH!\n• 🎵 Soirée Gnawa à Essaouira lors du festival\n• 🛍️ Négociation dans les souks de Marrakech\n\n**Itinéraire 7 jours recommandé:**\n1-3: Marrakech & environs\n4: Ouarzazate & Aït Benhaddou\n5-6: Désert (Merzouga/Zagora)\n7: Fès ou retour`
  },

  // DEFAULT
  {
    keys: ['default'],
    response: `🌙 Je suis heureux de répondre à votre question!\n\nJe suis spécialisé dans les sujets suivants:\n\n• 🏯 **Villes** — Marrakech, Fès, El Jadida, Casablanca, Rabat...\n• 🏛️ **Culture & Histoire** — Dynasties, patrimoine, arts\n• 🍽️ **Gastronomie** — Tajine, couscous, pâtisseries\n• 🎵 **Musique** — Gnawa, Andalous, Amazigh\n• 📚 **Langues** — Darija, Tamazight, Arabe classique\n• ✈️ **Voyage** — Conseils, budget, visa, itinéraires\n• 🏺 **Artisanat** — Zellige, maroquinerie, poterie, tapis\n• 🌍 **UNESCO** — 9 sites classés patrimoine mondial\n• 🏜️ **Nature** — Sahara, Atlas, plages, oasis\n• 🎪 **Festivals** — Gnawa, Rose, Film, Moussems\n\nEssayez: "Parle-moi de Marrakech" ou "Conseils voyage Maroc" 😊`
  }
];

// ==========================================
// SMART MATCHING ENGINE
// ==========================================

function findResponse(input) {
  const lower = input.toLowerCase().trim();

  let bestMatch = null;
  let bestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    if (item.keys[0] === 'default') continue;
    
    let score = 0;
    for (const key of item.keys) {
      if (lower.includes(key.toLowerCase())) {
        // Longer keyword matches = higher priority
        score += key.length;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch) return bestMatch.response;
  
  // Default fallback
  return KNOWLEDGE_BASE.find(i => i.keys[0] === 'default').response;
}

// ==========================================
// UI HELPERS
// ==========================================

let messageCount = 0;

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function updateCounter() {
  const counter = document.getElementById('chatCounter');
  if (counter && messageCount > 0) {
    counter.textContent = `${messageCount} message${messageCount > 1 ? 's' : ''}`;
  }
}

function addMessage(text, isUser = false) {
  const messages = document.getElementById('chatMessages');
  
  // Remove welcome message
  const welcome = messages.querySelector('.welcome-msg');
  if (welcome) welcome.remove();

  if (isUser) messageCount++;
  updateCounter();

  const msg = document.createElement('div');
  msg.className = `msg ${isUser ? 'user' : 'bot'}`;
  
  // Format markdown-like text
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    .replace(/\|(.+)\|/g, (match) => {
      // Simple table row detection
      return match;
    });

  // Handle markdown tables
  if (text.includes('|')) {
    const lines = text.split('\n');
    let tableHTML = '';
    let inTable = false;
    let processedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHTML = '<table><tbody>';
        }
        if (line.includes('---')) continue; // skip separator
        const cells = line.split('|').filter(c => c.trim() !== '');
        const isHeader = i === 0 || lines[i-1] === '' || !lines[i-1].includes('|');
        const tag = (isHeader && lines[i+1] && lines[i+1].includes('---')) ? 'th' : 'td';
        tableHTML += '<tr>' + cells.map(c => `<${tag}>${c.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</${tag}>`).join('') + '</tr>';
      } else {
        if (inTable) {
          tableHTML += '</tbody></table>';
          processedLines.push(tableHTML);
          inTable = false;
          tableHTML = '';
        }
        processedLines.push(line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/^• /, '• ')
        );
      }
    }
    if (inTable) processedLines.push(tableHTML + '</tbody></table>');
    formattedText = processedLines.join('<br>');
  }
  
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

function clearChat() {
  const messages = document.getElementById('chatMessages');
  messages.innerHTML = `
    <div class="welcome-msg">
      <span class="welcome-icon">🌙</span>
      <h3>مرحبا بكم في المغرب!</h3>
      <p>Je suis <strong>Atlas</strong>, votre guide virtuel sur le Maroc. Posez-moi n'importe quelle question!</p>
      <div class="welcome-features">
        <span class="welcome-feature-tag">🏯 Villes</span>
        <span class="welcome-feature-tag">🍽️ Gastronomie</span>
        <span class="welcome-feature-tag">🎵 Musique</span>
        <span class="welcome-feature-tag">📜 Histoire</span>
        <span class="welcome-feature-tag">✈️ Voyage</span>
        <span class="welcome-feature-tag">📚 Langues</span>
      </div>
    </div>
  `;
  messageCount = 0;
  const counter = document.getElementById('chatCounter');
  if (counter) counter.textContent = '';
  document.getElementById('quickReplies').style.display = 'flex';
}

// ==========================================
// SEND MESSAGE
// ==========================================

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, true);
  input.value = '';
  input.style.height = 'auto';

  // Hide quick replies after first message
  document.getElementById('quickReplies').style.display = 'none';

  showTyping();

  // Realistic typing delay based on response length
  const response = findResponse(text);
  const delay = 600 + Math.min(response.length * 1.5, 1800);
  await new Promise(r => setTimeout(r, delay));

  removeTyping();
  addMessage(response, false);
}

function askTopic(question) {
  const input = document.getElementById('chatInput');
  input.value = question;
  sendMessage();
}

// ==========================================
// INIT
// ==========================================

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
    addMessage(`مرحبا! 🌙 Bonjour! Je suis **Atlas**, votre guide virtuel sur le Maroc!\n\nPosez-moi n'importe quelle question sur la culture, l'histoire, les villes, la cuisine ou les traditions marocaines. Cliquez sur un sujet dans la barre de gauche ou tapez votre question! 😊`);
  }, 800);
});
