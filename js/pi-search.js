/**
 * pi-search.js
 * Client-side search for digit sequences within the first 1,000,000 decimal digits of π.
 *
 * Position convention:
 *   Position 1 = first digit after the decimal point (the '1' in 3.14159…).
 *   The data file begins with '14159265358979…' (the leading '3.' is excluded).
 *
 * Author: Yahia Djemmada website (ydjemmada.github.io)
 */

(function () {
  'use strict';

  /* ── Constants ──────────────────────────────────────────────── */
  const SEARCHED_DIGITS = 1_000_000;
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 50;
  const CONTEXT_CHARS = 20; // digits shown before/after the match

  /* ── State ──────────────────────────────────────────────────── */
  let piString = null;      // cached π string (loaded once)
  let loadPromise = null;   // in-flight fetch promise

  /* ── DOM refs ───────────────────────────────────────────────── */
  const form         = document.getElementById('pi-search-form');
  const input        = document.getElementById('pi-search-input');
  const errorEl      = document.getElementById('pi-search-error');
  const resultsEl    = document.getElementById('pi-search-results');
  const liveEl       = document.getElementById('pi-search-live');
  const submitBtn    = document.getElementById('pi-search-btn');
  const btnText      = submitBtn.querySelector('.pi-search-btn-text');

  /* ── Playful Messages ───────────────────────────────────────── */
  const playfulLines = [
    "π was hiding your number very well.",
    "Your number has officially joined the π universe.",
    "Apparently, π remembers everything.",
    "That is a lot of digits to scroll through.",
    "Your number was waiting patiently inside π."
  ];

  /* ── Input sanitization ─────────────────────────────────────── */
  function sanitizeInput(raw) {
    // Remove all non-digit characters (spaces, dashes, slashes, letters…)
    return raw.replace(/\D/g, '');
  }

  function validateInput(value) {
    if (value.length === 0) {
      return 'Please enter a digit sequence before searching.';
    }
    if (value.length < MIN_LENGTH) {
      return `Please enter at least ${MIN_LENGTH} digits.`;
    }
    if (value.length > MAX_LENGTH) {
      return `Please enter no more than ${MAX_LENGTH} digits.`;
    }
    return null; // valid
  }

  /* ── Input events: strip non-digits as user types ───────────── */
  input.addEventListener('input', function () {
    const raw = this.value;
    const cleaned = sanitizeInput(raw);
    if (cleaned !== raw) {
      const cursor = this.selectionStart - (raw.length - cleaned.length);
      this.value = cleaned;
      this.setSelectionRange(Math.max(0, cursor), Math.max(0, cursor));
    }
    // Clear error on typing
    if (!errorEl.hidden) {
      showError(null);
    }
  });

  input.addEventListener('paste', function (e) {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    const cleaned = sanitizeInput(pasted);
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const current = this.value;
    const next = (current.slice(0, start) + cleaned + current.slice(end)).slice(0, MAX_LENGTH + 5);
    this.value = sanitizeInput(next);
    const pos = start + cleaned.length;
    this.setSelectionRange(pos, pos);
  });

  /* ── π data loading ─────────────────────────────────────────── */
  function loadPiData() {
    if (piString !== null) {
      return Promise.resolve(piString);
    }
    if (loadPromise !== null) {
      return loadPromise;
    }

    const url = (typeof window.__PI_DATA_URL__ === 'string' && window.__PI_DATA_URL__)
      ? window.__PI_DATA_URL__
      : 'data/pi-1000000.txt';

    loadPromise = fetch(url)
      .then(function (res) {
        if (!res.ok) {
          throw new Error('Could not load π data (HTTP ' + res.status + ').');
        }
        return res.text();
      })
      .then(function (text) {
        const trimmed = text.trim().replace(/\s+/g, '');
        if (!/^\d+$/.test(trimmed) || trimmed.length < 100_000) {
          throw new Error('The π data file appears to be incomplete or corrupted.');
        }
        piString = trimmed;
        loadPromise = null;
        return piString;
      })
      .catch(function (err) {
        loadPromise = null;
        throw err;
      });

    return loadPromise;
  }

  /* ── Pseudo-Random Generator for Simulated Results ──────────── */
  // Simple deterministic hash based on a string seed
  function seedHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  // Linear congruential generator (LCG)
  function LCG(seed) {
    let state = seed ? seed : Math.floor(Math.random() * 0xFFFFFFFF);
    return function() {
      state = (state * 1664525 + 1013904223) % 4294967296;
      return state / 4294967296;
    };
  }

  function generateSimulatedResult(query) {
    const seed = seedHash(query);
    const random = LCG(seed);
    
    // Position must be > 1,000,000. Let's make it between 2 million and 10 billion.
    const pos = Math.floor(random() * 9998000000) + 2000000;
    
    // Generate ~20 random digits before
    let before = '';
    for(let i=0; i<CONTEXT_CHARS; i++) {
      before += Math.floor(random() * 10).toString();
    }
    
    // Generate ~20 random digits after
    let after = '';
    for(let i=0; i<CONTEXT_CHARS; i++) {
      after += Math.floor(random() * 10).toString();
    }
    
    // Pick a playful line deterministically
    const lineIndex = Math.floor(random() * playfulLines.length);
    const playfulLine = playfulLines[lineIndex];

    return {
      isSimulated: true,
      query: query,
      position: pos,
      before: before,
      match: query,
      after: after,
      playfulLine: playfulLine
    };
  }

  /* ── Search logic ───────────────────────────────────────────── */
  function searchPi(query) {
    const idx = piString.indexOf(query);
    if (idx === -1) {
      return generateSimulatedResult(query);
    }

    const position = idx + 1; // 1-based
    const beforeStart = Math.max(0, idx - CONTEXT_CHARS);
    const afterEnd    = Math.min(piString.length, idx + query.length + CONTEXT_CHARS);

    return {
      isSimulated: false,
      query: query,
      position: position,
      before: piString.slice(beforeStart, idx),
      match: piString.slice(idx, idx + query.length),
      after: piString.slice(idx + query.length, afterEnd),
      hasEllipsisBefore: beforeStart > 0,
      hasEllipsisAfter: afterEnd < piString.length,
    };
  }

  /* ── UI helpers ─────────────────────────────────────────────── */
  function showError(msg) {
    if (msg) {
      errorEl.textContent = msg;
      errorEl.hidden = false;
      input.setAttribute('aria-invalid', 'true');
    } else {
      errorEl.textContent = '';
      errorEl.hidden = true;
      input.removeAttribute('aria-invalid');
    }
  }

  function setLiveMessage(msg) {
    liveEl.textContent = '';
    requestAnimationFrame(function () {
      liveEl.textContent = msg;
    });
  }

  function text(str) {
    return document.createTextNode(str);
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(function ([k, v]) {
        if (k === 'className') { node.className = v; }
        else if (k === 'textContent') { node.textContent = v; }
        else { node.setAttribute(k, v); }
      });
    }
    if (children) {
      children.forEach(function (c) {
        if (c) node.appendChild(typeof c === 'string' ? text(c) : c);
      });
    }
    return node;
  }

  /* ── Animation sequence ─────────────────────────────────────── */
  async function playSearchAnimation() {
    submitBtn.disabled = true;
    resultsEl.hidden = false;
    
    const messages = [
      "Checking the first million digits…",
      "Asking π to look a little further…",
      "Almost found it…"
    ];
    
    // Total animation time ~900ms
    const stepTime = 300;
    
    for (let msg of messages) {
      resultsEl.innerHTML = '';
      resultsEl.appendChild(el('div', { className: 'pi-search-loading-msg' }, [msg]));
      await new Promise(r => setTimeout(r, stepTime));
    }
  }

  /* ── Result rendering ───────────────────────────────────────── */
  function renderResult(result) {
    const posFormatted = result.position.toLocaleString('en-US');

    // Badge
    const badgeText = result.isSimulated ? 'Just-for-fun result' : 'Verified match';
    const badgeClass = result.isSimulated ? 'pi-badge-simulated' : 'pi-badge-verified';
    const badge = el('div', { className: `pi-search-badge ${badgeClass}` }, [badgeText]);

    // Summary sentence
    const summaryText = result.isSimulated 
        ? `Found it! Your number appears at position ${posFormatted} in π.`
        : `Found it! Your number first appears at position ${posFormatted} in π.`;
    
    // We parse the string to inject strong tags manually for the position
    const summary = el('h2', { className: 'pi-search-result-title' });
    if(result.isSimulated) {
        summary.appendChild(text('Found it! Your number appears at position '));
        summary.appendChild(el('strong', {}, [posFormatted]));
        summary.appendChild(text(' in π.'));
    } else {
        summary.appendChild(text('Found it! Your number first appears at position '));
        summary.appendChild(el('strong', {}, [posFormatted]));
        summary.appendChild(text(' in π.'));
    }

    // Digit context block
    const contextBlock = el('div', { className: 'pi-search-context minimal-context', 'aria-label': 'Digit context' });
    const contextInner = el('code', { className: 'pi-search-context-code' });

    const elipBefore = (result.isSimulated || result.hasEllipsisBefore) ? '…' : '';
    const elipAfter  = (result.isSimulated || result.hasEllipsisAfter) ? '…' : '';

    if (elipBefore) {
      contextInner.appendChild(el('span', { className: 'pi-search-ellipsis', 'aria-hidden': 'true' }, [elipBefore]));
    }
    contextInner.appendChild(el('span', { className: 'pi-search-before' }, [result.before]));
    contextInner.appendChild(
      el('mark', {
        className: 'pi-search-match',
      }, [result.match])
    );
    contextInner.appendChild(el('span', { className: 'pi-search-after' }, [result.after]));
    if (elipAfter) {
      contextInner.appendChild(el('span', { className: 'pi-search-ellipsis', 'aria-hidden': 'true' }, [elipAfter]));
    }
    contextBlock.appendChild(contextInner);

    // Extra text for simulated or real
    const extraText = result.isSimulated 
      ? el('p', { className: 'pi-search-simulated-note' }, [
          "We did not find it in the first 1,000,000 stored digits, so π helped us imagine where it might appear later."
        ])
      : el('p', { className: 'pi-search-simulated-note' }, []); // Empty for real

    // Playful line if simulated
    const playfulNode = result.isSimulated 
      ? el('p', { className: 'pi-search-playful-line' }, [result.playfulLine])
      : el('p', {}, []); // Empty for real

    // Action buttons row
    const actionsRow = el('div', { className: 'pi-search-actions minimal-actions' });

    // Copy button
    const copyText = buildCopyText(result);
    const copyBtn = el('button', { type: 'button', className: 'pi-search-action-btn primary-action' }, ['Copy result']);
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(copyText).then(function () {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy result'; }, 2500);
      }).catch(function () {
        const ta = document.createElement('textarea');
        ta.value = copyText;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy result'; }, 2500);
      });
    });
    actionsRow.appendChild(copyBtn);

    // Search again button
    const againBtn = el('button', { type: 'button', className: 'pi-search-action-btn secondary-action' }, ['Try another number']);
    againBtn.addEventListener('click', function () {
      input.value = '';
      input.focus();
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
      submitBtn.disabled = false;
    });
    actionsRow.appendChild(againBtn);

    // Assemble card
    const card = el('div', { className: 'pi-search-result-card minimal-card', role: 'region', 'aria-label': 'Search result' });
    card.appendChild(badge);
    card.appendChild(summary);
    card.appendChild(contextBlock);
    if(result.isSimulated) card.appendChild(extraText);
    if(result.isSimulated) card.appendChild(playfulNode);
    card.appendChild(actionsRow);

    resultsEl.innerHTML = '';
    resultsEl.appendChild(card);
    resultsEl.hidden = false;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    submitBtn.disabled = false; // Re-enable main submit btn
  }

  function renderError(message) {
    resultsEl.innerHTML = '';
    resultsEl.appendChild(el('div', { className: 'pi-search-error-card' }, [
      el('p', { className: 'pi-search-error-title' }, ['⚠ Could not complete the search']),
      el('p', { textContent: message })
    ]));
    resultsEl.hidden = false;
    submitBtn.disabled = false;
  }

  /* ── Copy text builder ──────────────────────────────────────── */
  function buildCopyText(result) {
    const posFormatted = result.position.toLocaleString('en-US');
    const disclosure = result.isSimulated 
        ? 'Just-for-fun simulated result'
        : 'Verified within the first 1,000,000 digits of π';
        
    return [
      `My number ${result.query} appears at position ${posFormatted} in the π Search tool! 🥧`,
      '',
      `Try yours: ${window.location.href}`,
      '',
      disclosure
    ].join('\n');
  }

  /* ── Form submission ─────────────────────────────────────────── */
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const raw   = input.value;
    const query = sanitizeInput(raw);

    input.value = query;

    const errorMsg = validateInput(query);
    if (errorMsg) {
      showError(errorMsg);
      input.focus();
      return;
    }

    showError(null);
    setLiveMessage('Searching…');

    // Start loading data and play animation concurrently
    const dataPromise = loadPiData();
    const animPromise = playSearchAnimation();

    try {
      await Promise.all([dataPromise, animPromise]);
      const result = searchPi(query);
      renderResult(result);
      
      const posFormatted = result.position.toLocaleString('en-US');
      setLiveMessage(
        'Found! Your sequence ' + query + ' appears at position ' + posFormatted
      );
    } catch (err) {
      renderError(err.message || 'An unexpected error occurred.');
      setLiveMessage('An error occurred. Could not complete the search.');
    }
  });

})();
