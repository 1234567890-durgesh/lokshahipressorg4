const fs = require('fs');
const path = require('path');

const leaders = [
  {
    id: 'leader-sandip-jadhav',
    name: 'श्री. संदिप जाधव',
    role: 'राष्ट्रीय अध्यक्ष',
    title: 'पत्रकार • प्रभावी वक्ते • निवडणूक रणनीतिकार',
    colorDark: '#0E1B2E',
    colorAccent: '#E30620',
    initials: 'SJ',
    iconType: 'mic',
    cap: false,
    glasses: true,
    beard: false,
    mustache: true,
    tie: false,
    coat: '#2A364F',
    shirt: '#FFFFFF',
    pen: true,
  },
  {
    id: 'leader-santoshkumar-jaiswal',
    name: 'डॉ. संतोषकुमार आर. जयस्वाल',
    role: 'राष्ट्रीय उपाध्यक्ष',
    title: 'निवृत्त न्यायाधीश • ज्येष्ठ विधिज्ञ',
    colorDark: '#12233D',
    colorAccent: '#B8860B',
    initials: 'SJ',
    iconType: 'scales',
    cap: false,
    glasses: true,
    beard: false,
    mustache: true,
    tie: true,
    coat: '#1A2744',
    shirt: '#FFFFFF',
    pen: false,
  },
  {
    id: 'leader-prataprao-salunkhe',
    name: 'मा. प्रतापराव साळूंखे',
    role: 'राष्ट्रीय कार्याध्यक्ष',
    title: 'संपादक, सुपर महाराष्ट्र न्यूज • उद्योजक',
    colorDark: '#1C2833',
    colorAccent: '#E30620',
    initials: 'PS',
    iconType: 'pen',
    cap: true, // Gandhi Topi
    glasses: true,
    beard: false,
    mustache: true,
    tie: false,
    coat: '#34495E',
    shirt: '#FFFFFF',
    pen: true,
  },
  {
    id: 'leader-ramakant-patil',
    name: 'ॲड. रमकांत पाटील',
    role: 'राष्ट्रीय कायदेशीर सल्लागार',
    title: 'ज्येष्ठ विधिज्ञ • उच्च व सर्वोच्च न्यायालय',
    colorDark: '#111827',
    colorAccent: '#E30620',
    initials: 'RP',
    iconType: 'law',
    cap: false,
    glasses: false,
    beard: false,
    mustache: false,
    tie: false, // Lawyer bands
    coat: '#1F2937',
    shirt: '#FFFFFF',
    lawBands: true,
  },
  {
    id: 'leader-t-madhav',
    name: 'टी. माधव',
    role: 'राष्ट्रीय महामंत्री',
    title: 'मंत्रालयीन समन्वय • प्रशासकीय संपर्क',
    colorDark: '#1B2A4A',
    colorAccent: '#2855A5',
    initials: 'TM',
    iconType: 'admin',
    cap: false,
    glasses: false,
    beard: false,
    mustache: true,
    tie: false,
    coat: '#1E3A8A',
    shirt: '#E0E7FF',
  },
  {
    id: 'leader-dnyaneshwar-budhwat',
    name: 'ज्ञानेश्वर बुधवत',
    role: 'राष्ट्रीय संघटन मंत्री',
    title: 'मुख्य संपादक, दैनिक लोकनेता',
    colorDark: '#1E293B',
    colorAccent: '#E6530C',
    initials: 'DB',
    iconType: 'news',
    cap: false,
    glasses: false,
    beard: false,
    mustache: true,
    tie: true,
    coat: '#1E293B',
    shirt: '#FFFFFF',
  },
  {
    id: 'leader-kishor-pawar',
    name: 'मा. श्री. किशोर दादा पवार',
    role: 'महाराष्ट्र प्रदेश अध्यक्ष',
    title: 'संस्थापक, सेवा फाउंडेशन • पत्रकार',
    colorDark: '#0F2942',
    colorAccent: '#287A18',
    initials: 'KP',
    iconType: 'state',
    cap: false,
    glasses: true,
    beard: true,
    mustache: true,
    tilak: true,
    coat: '#164E63',
    shirt: '#FFFFFF',
  },
  {
    id: 'leader-sanam-patil',
    name: 'श्री. सनम पाटील',
    role: 'महाराष्ट्र प्रदेश कार्याध्यक्ष',
    title: 'क्राईम न्यूज • डिजिटल मीडिया',
    colorDark: '#182230',
    colorAccent: '#E30620',
    initials: 'SP',
    iconType: 'press',
    cap: false,
    glasses: false,
    beard: true,
    mustache: true,
    tilak: true,
    coat: '#27272A',
    shirt: '#FFFFFF',
  },
  {
    id: 'leader-anil-patil',
    name: 'डॉ. अनिल दिलीप पाटील',
    role: 'राष्ट्रीय समन्वयक व सल्लागार',
    title: 'Saitech Group • उद्योजक व पत्रकार',
    colorDark: '#1E293B',
    colorAccent: '#3B82F6',
    initials: 'AP',
    iconType: 'tech',
    cap: false,
    glasses: true,
    beard: false,
    mustache: true,
    tie: true,
    coat: '#334155',
    shirt: '#F1F5F9',
  },
];

function generateSVG(l) {
  // SVG 400x440 portrait graphic
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${l.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${l.colorDark}"/>
      <stop offset="60%" stop-color="#141E30"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="gold-${l.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="accent-${l.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${l.colorAccent}"/>
      <stop offset="100%" stop-color="#E30620"/>
    </linearGradient>
    <filter id="shadow-${l.id}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.35"/>
    </filter>
    <radialGradient id="halo-${l.id}" cx="50%" cy="38%" r="45%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="400" height="440" rx="16" fill="url(#bg-${l.id})"/>
  <rect width="400" height="440" rx="16" fill="url(#halo-${l.id})"/>
  
  <!-- Subtle Architectural/Press Pattern -->
  <circle cx="200" cy="165" r="130" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/>
  <circle cx="200" cy="165" r="145" stroke="${l.colorAccent}" stroke-opacity="0.15" stroke-width="1" fill="none"/>

  <!-- Top Institutional Bar -->
  <rect x="0" y="0" width="400" height="6" fill="url(#accent-${l.id})"/>

  <!-- Leader Visual Portrait Container -->
  <g id="portrait-figure" filter="url(#shadow-${l.id})">
    <!-- Suit / Coat Shoulders -->
    <path d="M 90 350 C 90 270, 130 245, 170 240 L 230 240 C 270 245, 310 270, 310 350 Z" fill="${l.coat}"/>
    
    <!-- Shirt / Collar -->
    <path d="M 165 240 L 200 295 L 235 240 Z" fill="${l.shirt}"/>
    <path d="M 165 240 L 185 270 L 200 245 Z" fill="#E2E8F0"/>
    <path d="M 235 240 L 215 270 L 200 245 Z" fill="#CBD5E1"/>

    ${l.lawBands ? `
      <!-- Advocate Legal White Bands -->
      <rect x="194" y="250" width="4" height="35" fill="#FFFFFF"/>
      <rect x="202" y="250" width="4" height="35" fill="#FFFFFF"/>
      <polygon points="190,250 210,250 206,256 194,256" fill="#F8FAFC"/>
    ` : ''}

    ${l.tie ? `
      <!-- Executive Necktie -->
      <polygon points="194,250 206,250 210,290 200,310 190,290" fill="${l.colorAccent}"/>
    ` : ''}

    ${l.pen ? `
      <!-- Golden Pen in Pocket -->
      <rect x="260" y="280" width="4" height="18" rx="2" fill="url(#gold-${l.id})"/>
      <circle cx="262" cy="279" r="2" fill="#F59E0B"/>
    ` : ''}

    <!-- Neck -->
    <path d="M 178 215 L 178 245 C 178 255, 222 255, 222 245 L 222 215 Z" fill="#E8B896"/>

    <!-- Head / Face Silhouette -->
    <ellipse cx="200" cy="160" rx="46" ry="56" fill="#F0C3A2"/>

    <!-- Hair (Sides and Top) -->
    <path d="M 152 165 C 150 120, 170 105, 200 105 C 230 105, 250 120, 248 165 C 242 135, 235 120, 200 120 C 165 120, 158 135, 152 165 Z" fill="#1C1917"/>

    ${l.cap ? `
      <!-- White Gandhi Cap (टोपी) -->
      <path d="M 148 132 C 158 92, 242 92, 252 132 C 248 136, 152 136, 148 132 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <path d="M 150 130 C 175 125, 225 125, 250 130" stroke="#CBD5E1" stroke-width="1.5" fill="none"/>
    ` : ''}

    <!-- Ears -->
    <ellipse cx="152" cy="165" rx="6" ry="12" fill="#E8B896"/>
    <ellipse cx="248" cy="165" rx="6" ry="12" fill="#E8B896"/>

    <!-- Eyebrows -->
    <path d="M 172 145 Q 183 141 192 144" stroke="#292524" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M 208 144 Q 217 141 228 145" stroke="#292524" stroke-width="2.5" stroke-linecap="round" fill="none"/>

    <!-- Eyes -->
    <ellipse cx="182" cy="153" rx="3.5" ry="2.5" fill="#1C1917"/>
    <ellipse cx="218" cy="153" rx="3.5" ry="2.5" fill="#1C1917"/>

    <!-- Nose -->
    <path d="M 200 148 L 197 170 Q 200 173 203 170 Z" fill="#DF9F7E"/>

    ${l.tilak ? `
      <!-- Red Tilak on Forehead -->
      <ellipse cx="200" cy="136" rx="2.5" ry="5.5" fill="#E30620"/>
    ` : ''}

    ${l.glasses ? `
      <!-- Spectacles Frame -->
      <rect x="170" y="146" width="22" height="15" rx="4" fill="none" stroke="#475569" stroke-width="1.8"/>
      <rect x="208" y="146" width="22" height="15" rx="4" fill="none" stroke="#475569" stroke-width="1.8"/>
      <path d="M 192 153 L 208 153" stroke="#475569" stroke-width="1.8" fill="none"/>
      <path d="M 170 151 L 154 149" stroke="#475569" stroke-width="1.2" fill="none"/>
      <path d="M 230 151 L 246 149" stroke="#475569" stroke-width="1.2" fill="none"/>
    ` : ''}

    ${l.mustache ? `
      <!-- Dignified Mustache -->
      <path d="M 183 181 Q 200 178 217 181 Q 200 188 183 181 Z" fill="#1C1917"/>
    ` : ''}

    ${l.beard ? `
      <!-- Trimmed Beard Jawline -->
      <path d="M 160 175 Q 165 210 200 216 Q 235 210 240 175 C 235 198 225 210 200 210 C 175 210 165 198 160 175 Z" fill="#1C1917"/>
    ` : ''}

    <!-- Confident Smile -->
    <path d="M 191 192 Q 200 197 209 192" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Bottom Details Overlay Card -->
  <rect x="16" y="324" width="368" height="100" rx="12" fill="#0B1323" fill-opacity="0.92" stroke="#FFFFFF" stroke-opacity="0.12"/>
  <rect x="24" y="336" width="7" height="76" rx="3.5" fill="${l.colorAccent}"/>

  <!-- Badge for Position -->
  <g transform="translate(42, 338)">
    <rect x="0" y="0" width="160" height="20" rx="4" fill="${l.colorAccent}" fill-opacity="0.2"/>
    <text x="8" y="14" fill="#FFFFFF" font-family="'Mukta', 'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11.5" letter-spacing="0.5">
      ${l.role}
    </text>
  </g>

  <!-- Leader Name -->
  <text x="42" y="380" fill="#FFFFFF" font-family="'Mukta', 'Noto Sans Devanagari', sans-serif" font-weight="900" font-size="16.5">
    ${l.name}
  </text>

  <!-- Tagline / Domain -->
  <text x="42" y="401" fill="#94A3B8" font-family="'Mukta', 'Noto Sans Devanagari', sans-serif" font-weight="600" font-size="11">
    ${l.title}
  </text>
</svg>`;
}

leaders.forEach((l) => {
  const content = generateSVG(l);
  const outPath1 = path.join('public', 'leadership', `${l.id}.svg`);
  const outPath2 = path.join('dist', 'leadership', `${l.id}.svg`);
  fs.writeFileSync(outPath1, content);
  try {
    fs.writeFileSync(outPath2, content);
  } catch (e) {}
});

console.log('Successfully generated 9 official leadership SVG portraits!');
