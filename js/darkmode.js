// ── Dark Mode: system preference + time of day ───────────────────────────────
(function() {
  function isDarkTime() {
    const h = new Date().getHours();
    return h >= 19 || h < 7; // dark after 7pm, light after 7am
  }

  function getPreference() {
    const saved = localStorage.getItem('gc-theme');
    if (saved) return saved; // user override wins
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return isDarkTime() ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('gc-theme', theme);
    const btn = document.getElementById('darkToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Apply immediately on load (before paint)
  const initial = getPreference();
  document.documentElement.setAttribute('data-theme', initial);
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(initial);
    const btn = document.getElementById('darkToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark');
      });
    }
  });
})();
