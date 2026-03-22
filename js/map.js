// ==========================================
// MOROCCO MAP - Interactive Leaflet Map
// ==========================================

function initMoroccoMap() {
  const mapEl = document.getElementById('map-container');
  if (!mapEl) return;

  const map = L.map('map-container', {
    center: [31.7917, -7.0926],
    zoom: 6,
    zoomControl: true,
    attributionControl: false,
  });

  // Dark tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Custom icon factory
  function createIcon(emoji, color = '#C8102E') {
    return L.divIcon({
      html: `<div style="
        width:42px; height:42px; border-radius:50%;
        background:${color}; display:flex; align-items:center;
        justify-content:center; font-size:1.2rem;
        box-shadow:0 4px 15px rgba(0,0,0,0.5), 0 0 0 3px rgba(255,255,255,0.15);
        border:2px solid rgba(255,255,255,0.2);
        transition:transform 0.2s;
      ">${emoji}</div>`,
      className: 'custom-div-icon',
      iconSize: [42, 42],
      iconAnchor: [21, 21],
      popupAnchor: [0, -25],
    });
  }

  // Morocco cities data
  const cities = [
    {
      name: 'Marrakech',
      coords: [31.6295, -7.9811],
      emoji: '🏯',
      color: '#C8102E',
      desc: 'La Cité Ocre — Jemaa el-Fna, souks, Koutoubia, jardins Majorelle',
      type: 'Imperial',
      pop: '1.3M habitants',
      link: 'culture.html#marrakech'
    },
    {
      name: 'El Jadida',
      coords: [33.2549, -8.5070],
      emoji: '🏰',
      color: '#2C7A7B',
      desc: 'La Cité Portugaise — Patrimoine UNESCO, Citerne Portugaise, Remparts',
      type: 'Côtière',
      pop: '200K habitants',
      link: 'culture.html#eljadida'
    },
    {
      name: 'Casablanca',
      coords: [33.5731, -7.5898],
      emoji: '🏙️',
      color: '#D4AF37',
      desc: 'La Métropole Économique — Mosquée Hassan II, Corniche, Art Déco',
      type: 'Métropole',
      pop: '4M habitants',
      link: 'culture.html'
    },
    {
      name: 'Rabat',
      coords: [34.0209, -6.8417],
      emoji: '👑',
      color: '#6B4226',
      desc: 'La Capitale du Royaume — Tour Hassan, Kasbah des Oudayas',
      type: 'Capitale',
      pop: '1.8M habitants',
      link: 'culture.html'
    },
    {
      name: 'Fès',
      coords: [34.0181, -5.0078],
      emoji: '🕌',
      color: '#8B5CF6',
      desc: 'La Cité Médiévale — Fès el-Bali, Université Qarawiyyin (860 AD)',
      type: 'Impériale',
      pop: '1.1M habitants',
      link: 'culture.html'
    },
    {
      name: 'Meknès',
      coords: [33.8956, -5.5473],
      emoji: '🚪',
      color: '#E76F51',
      desc: 'La Versailles du Maroc — Bab Mansour, Heri es-Souani',
      type: 'Impériale',
      pop: '600K habitants',
      link: 'culture.html'
    },
    {
      name: 'Agadir',
      coords: [30.4278, -9.5981],
      emoji: '🏖️',
      color: '#0891B2',
      desc: 'La Station Balnéaire — Plage, Souss-Massa, Amazigh Museum',
      type: 'Balnéaire',
      pop: '800K habitants',
      link: 'culture.html'
    },
    {
      name: 'Chefchaouen',
      coords: [35.1683, -5.2638],
      emoji: '💙',
      color: '#3B82F6',
      desc: 'La Ville Bleue — Médina bleue, Rif Mountains, Architecture Andalouse',
      type: 'Culturelle',
      pop: '50K habitants',
      link: 'culture.html'
    },
    {
      name: 'Essaouira',
      coords: [31.5085, -9.7595],
      emoji: '🌊',
      color: '#059669',
      desc: 'La Cité des Vents — Médina fortifiée, Port de pêche, Festival Gnawa',
      type: 'Côtière',
      pop: '75K habitants',
      link: 'culture.html'
    },
    {
      name: 'Ouarzazate',
      coords: [30.9189, -6.8936],
      emoji: '🎬',
      color: '#F59E0B',
      desc: 'La Porte du Désert — Hollywood d\'Afrique, Aït Benhaddou UNESCO',
      type: 'Saharienne',
      pop: '80K habitants',
      link: 'culture.html'
    },
  ];

  cities.forEach(city => {
    const marker = L.marker(city.coords, { icon: createIcon(city.emoji, city.color) }).addTo(map);

    const popup = L.popup({
      maxWidth: 280,
      className: 'morocco-popup'
    }).setContent(`
      <div style="
        font-family: 'Inter', sans-serif;
        background: #1A1A1A;
        border-radius: 12px;
        overflow: hidden;
        min-width: 220px;
      ">
        <div style="background:${city.color}; padding:14px 16px; display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.4rem;">${city.emoji}</span>
          <div>
            <div style="font-weight:700; color:white; font-size:1rem;">${city.name}</div>
            <div style="color:rgba(255,255,255,0.75); font-size:0.73rem; text-transform:uppercase; letter-spacing:1px;">${city.type}</div>
          </div>
        </div>
        <div style="padding:16px;">
          <p style="color:#B8A99A; font-size:0.82rem; line-height:1.6; margin-bottom:10px;">${city.desc}</p>
          <div style="color:#6B5B4E; font-size:0.75rem; margin-bottom:12px;">👥 ${city.pop}</div>
          <a href="${city.link}" style="
            display:inline-block; background:${city.color};
            color:white; padding:6px 16px; border-radius:50px;
            text-decoration:none; font-size:0.78rem; font-weight:600;
          ">Découvrir →</a>
        </div>
      </div>
    `);

    marker.bindPopup(popup);
    marker.on('mouseover', () => marker.openPopup());
  });

  // Popup custom styles
  const style = document.createElement('style');
  style.textContent = `
    .morocco-popup .leaflet-popup-content-wrapper {
      background: transparent !important;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6) !important;
      border-radius: 12px !important;
      padding: 0 !important;
    }
    .morocco-popup .leaflet-popup-content { margin: 0 !important; }
    .morocco-popup .leaflet-popup-tip { background: #1A1A1A !important; }
    .leaflet-popup-close-button { color: white !important; top: 8px !important; right: 8px !important; }
    .custom-div-icon { background: transparent !important; border: none !important; }
    .custom-div-icon div:hover { transform: scale(1.15); }
  `;
  document.head.appendChild(style);
}

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMoroccoMap);
} else {
  initMoroccoMap();
}
