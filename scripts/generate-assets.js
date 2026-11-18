const fs = require('fs');
const path = require('path');

fs.mkdirSync('./public/images/team', { recursive: true });
fs.mkdirSync('./public/images/portfolio', { recursive: true });

const team = [
  { name: 'placeholder-leadership', initials: 'MD', role: 'Leadership' },
  { name: 'placeholder-techlead', initials: 'TL', role: 'Architecture' },
  { name: 'placeholder-fullstack', initials: 'FS', role: 'Full Stack' },
  { name: 'placeholder-uiux', initials: 'UX', role: 'UI/UX Design' },
  { name: 'placeholder-marketing', initials: 'DM', role: 'Artful Creation' },
];

team.forEach(t => {
  const svg = `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="240" rx="24" fill="#F5F8FC"/>
    <circle cx="120" cy="95" r="48" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="2"/>
    <path d="M50 200C50 162.445 81.3401 132 120 132C158.66 132 190 162.445 190 200" fill="#E2E8F0"/>
    <rect x="70" y="16" width="100" height="24" rx="12" fill="#1677E8" fill-opacity="0.1"/>
    <text x="120" y="32" text-anchor="middle" fill="#123B8A" font-family="system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.5">TEAM MEMBER</text>
    <text x="120" y="104" text-anchor="middle" fill="#123B8A" font-family="system-ui, sans-serif" font-size="24" font-weight="bold">${t.initials}</text>
  </svg>`;
  fs.writeFileSync(`./public/images/team/${t.name}.svg`, svg);
});

// Generate clean SVG visual previews for portfolio items
const portfolio = [
  {
    name: 'restaurant-pos-preview',
    title: 'Restaurant POS &amp; KDS',
    subtitle: 'Point of Sale, Kitchen Display &amp; Billing Platform',
    iconColor: '#1677E8',
    gradientStart: '#123B8A',
    gradientEnd: '#1677E8',
  },
  {
    name: 'corporate-web-preview',
    title: 'Corporate Web Experience',
    subtitle: 'Modern Static Corporate Platform &amp; Next.js Architecture',
    iconColor: '#38A5FF',
    gradientStart: '#0F2C69',
    gradientEnd: '#1677E8',
  },
  {
    name: 'digital-marketing-preview',
    title: 'Artful Creation Hub',
    subtitle: 'SEO, Performance Marketing &amp; Brand Visibility',
    iconColor: '#38A5FF',
    gradientStart: '#1677E8',
    gradientEnd: '#38A5FF',
  },
  {
    name: 'enterprise-app-preview',
    title: 'Enterprise Management System',
    subtitle: 'CRM, Operations Dashboard &amp; Workflow Automation',
    iconColor: '#123B8A',
    gradientStart: '#0C224B',
    gradientEnd: '#1A56B5',
  },
];

portfolio.forEach(p => {
  const svg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${p.name}" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${p.gradientStart}"/>
        <stop offset="100%" stop-color="${p.gradientEnd}"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" rx="16" fill="url(#bg-${p.name})"/>
    <g opacity="0.08" stroke="#ffffff" stroke-width="1">
      <line x1="0" y1="80" x2="600" y2="80"/>
      <line x1="0" y1="160" x2="600" y2="160"/>
      <line x1="0" y1="240" x2="600" y2="240"/>
      <line x1="0" y1="320" x2="600" y2="320"/>
      <line x1="120" y1="0" x2="120" y2="400"/>
      <line x1="240" y1="0" x2="240" y2="400"/>
      <line x1="360" y1="0" x2="360" y2="400"/>
      <line x1="480" y1="0" x2="480" y2="400"/>
    </g>
    <!-- Inner mock window -->
    <rect x="40" y="40" width="520" height="320" rx="12" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1.5"/>
    <circle cx="68" cy="64" r="5" fill="#FF5F56"/>
    <circle cx="84" cy="64" r="5" fill="#FFBD2E"/>
    <circle cx="100" cy="64" r="5" fill="#27C93F"/>
    
    <rect x="130" y="56" width="220" height="16" rx="8" fill="#ffffff" fill-opacity="0.15"/>
    
    <!-- Content preview boxes -->
    <rect x="68" y="96" width="140" height="70" rx="8" fill="#ffffff" fill-opacity="0.1"/>
    <rect x="220" y="96" width="140" height="70" rx="8" fill="#ffffff" fill-opacity="0.1"/>
    <rect x="372" y="96" width="156" height="70" rx="8" fill="#ffffff" fill-opacity="0.1"/>
    
    <!-- Mini graph wave -->
    <path d="M 68 250 Q 150 200, 240 230 T 400 190 T 528 220" fill="none" stroke="#38A5FF" stroke-width="3" stroke-linecap="round"/>
    <path d="M 68 250 Q 150 200, 240 230 T 400 190 T 528 220 L 528 290 L 68 290 Z" fill="#38A5FF" fill-opacity="0.12"/>

    <text x="68" y="325" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">${p.title}</text>
    <text x="68" y="345" fill="#93C5FD" font-family="system-ui, sans-serif" font-size="12" font-weight="400">${p.subtitle}</text>
  </svg>`;
  fs.writeFileSync(`./public/images/portfolio/${p.name}.svg`, svg);
});

console.log('Successfully generated SVGs for team and portfolio');
