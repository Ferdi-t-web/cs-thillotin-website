const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => nav?.classList.toggle('open'));

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const toggleView = document.getElementById('toggleView');
const matchList = document.getElementById('matchList');

toggleView?.addEventListener('click', () => {
  matchList?.classList.toggle('compact');
  toggleView.textContent = matchList?.classList.contains('compact')
    ? 'Vue détaillée'
    : 'Vue compacte';
});

const squadFilters = document.querySelectorAll('#squadFilters button');
const players = document.querySelectorAll('.player-grid article');

squadFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const pos = button.dataset.pos;
    squadFilters.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    players.forEach((player) => {
      const visible = pos === 'all' || player.dataset.pos === pos;
      player.classList.toggle('hide', !visible);
    });
  });
});

const ticketForm = document.getElementById('ticketForm');
const ticketMsg = document.getElementById('ticketMsg');

ticketForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(ticketForm);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const match = (data.get('match') || '').toString().trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !isEmail || !match) {
    ticketMsg.textContent = 'Merci de compléter correctement tous les champs.';
    ticketMsg.style.color = '#ff6a6a';
    return;
  }

  ticketMsg.textContent = `Merci ${name}, votre demande pour "${match}" a été enregistrée.`;
  ticketMsg.style.color = '#7ef7a9';
  ticketForm.reset();
});
