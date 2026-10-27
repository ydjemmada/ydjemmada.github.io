// Site-wide behaviour: light/dark toggle, mobile menu, Tools dropdown.
// Everything still works (menu open, dropdown on hover) without JavaScript.
(function () {
  var root = document.documentElement;

  // ── Light / dark mode ────────────────────────────────────────────────
  // The saved choice is applied early by an inline script in <head>;
  // with no saved choice the site follows the system setting.
  var themeBtn = document.querySelector('.theme-toggle');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    return root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches;
  }
  function syncThemeButton() {
    if (themeBtn) themeBtn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeButton();
    });
    systemDark.addEventListener('change', syncThemeButton);
    syncThemeButton();
  }

  // ── Mobile menu ──────────────────────────────────────────────────────
  var navBtn = document.querySelector('.nav-toggle');
  function setNav(open) {
    if (!navBtn) return;
    navBtn.setAttribute('aria-expanded', String(open));
    navBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    root.classList.toggle('nav-open', open);
  }
  if (navBtn) {
    navBtn.addEventListener('click', function () {
      setNav(navBtn.getAttribute('aria-expanded') !== 'true');
    });
  }

  // ── Dropdowns (disclosure pattern) ───────────────────────────────────
  var toggles = document.querySelectorAll('.dropdown-toggle');
  function closeDropdowns(except) {
    toggles.forEach(function (t) {
      if (t !== except) t.setAttribute('aria-expanded', 'false');
    });
  }
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      closeDropdowns(toggle);
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close when keyboard focus leaves the dropdown.
    toggle.parentElement.addEventListener('focusout', function (e) {
      if (!toggle.parentElement.contains(e.relatedTarget)) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) closeDropdowns();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.dropdown-toggle[aria-expanded="true"]');
    if (open) { closeDropdowns(); open.focus(); return; }
    if (root.classList.contains('nav-open')) { setNav(false); navBtn.focus(); }
  });
})();
