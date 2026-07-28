(function () {
  const STORAGE_KEY = "dzjc-language";
  const SUPPORTED = new Set(["en", "ar"]);

  function readPreference() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.has(value) ? value : "en";
    } catch (_) {
      return "en";
    }
  }

  function savePreference(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {
      // The language switch still works for the current page view.
    }
  }

  function applyLanguage(root, language, persist) {
    const selected = SUPPORTED.has(language) ? language : "en";
    root.lang = selected;
    root.dir = selected === "ar" ? "rtl" : "ltr";
    root.dataset.dzjcCurrentLanguage = selected;

    root.querySelectorAll("[data-dzjc-lang-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.dzjcLangPanel !== selected;
    });

    root.querySelectorAll("[data-dzjc-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.dzjcLanguage === selected));
    });

    if (persist) {
      savePreference(selected);
    }
  }

  document.querySelectorAll("[data-dzjc-root]").forEach((root) => {
    applyLanguage(root, readPreference(), false);

    root.querySelectorAll("[data-dzjc-language]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(root, button.dataset.dzjcLanguage, true);
      });
    });
  });
})();
