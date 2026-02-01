// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth-scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      primaryNav.classList.remove('show');
      navToggle.setAttribute('aria-expanded','false');
    }
  });
});

// Dynamic Partners
const partners = [
  // Replace with real logos and names
  { name: "City Bank", logo: "", url: "#" },
  { name: "Community Schools", logo: "", url: "#" },
  { name: "Neighborhood Assoc.", logo: "", url: "#" },
  { name: "Tech for Youth", logo: "", url: "#" },
  { name: "Local Credit Union", logo: "", url: "#" },
  { name: "Chamber of Commerce", logo: "", url: "#" }
];

const partnerGrid = document.getElementById('partnerGrid');
if (partnerGrid) {
  partnerGrid.innerHTML = partners.map(p => `
    <a class="partner-tile" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.name}">
      ${p.logo ? `<img src="${p.logo}" alt="${p.name} logo" />` : `<span>${p.name}</span>`}
    </a>
  `).join('');
}

// Dynamic Events
const events = [
  {
    title: "Youth Money Basics Workshop",
    date: "March 15, 2026",
    time: "10:00 AM – 12:00 PM",
    location: "Kennesaw Community Center",
    type: "Workshop",
    description: "Hands-on budgeting, saving, and goal setting for teens and parents."
  },
  {
    title: "Credit 101: Build & Protect",
    date: "April 10, 2026",
    time: "6:30 PM – 8:00 PM",
    location: "Library Meeting Room A",
    type: "Clinic",
    description: "Understand credit reports, scores, and practical steps to improve."
  },
  {
    title: "Family Financial Fair",
    date: "May 18, 2026",
    time: "11:00 AM – 2:00 PM",
    location: "Downtown Plaza",
    type: "Community",
    description: "Vendors, mini-sessions, free credit checks, and kids activities."
  }
];

const eventsWrap = document.getElementById('eventsWrap');
if (eventsWrap) {
  eventsWrap.innerHTML = events.map(ev => `
    <article class="card">
      <div class="card-body">
        <span class="badge">${ev.type}</span>
        <h3>${ev.title}</h3>
        <div class="meta">${ev.date} • ${ev.time}</div>
        <div class="meta">${ev.location}</div>
        <p>${ev.description}</p>
        <a class="btn btn-outline" href="mailto:info@example.org?subject=${encodeURIComponent('Event RSVP: ' + ev.title)}">RSVP</a>
      </div>
    </article>
  `).join('');
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
