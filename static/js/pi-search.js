/**
 * pi-search.js
 * Client-side search for digit sequences within the first 1,000,000 decimal digits of π.
 *
 * Position convention:
 *   Position 1 = first digit after the decimal point (the '1' in 3.14159…).
 *   The data file begins with '14159265358979…' (the leading '3.' is excluded).
 *
 * Data source: api.pi.delivery (public domain).
 * Digit count: exactly 1,000,000.
 *
 * Author: Yahia Djemmada website (ydjemmada.github.io)
 */

(function () {
  'use strict';

  /* ── Constants ──────────────────────────────────────────────── */
  const SEARCHED_DIGITS = 1_000_000;
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 50;
  const CONTEXT_CHARS = 30; // digits shown before/after the match

  /* ── State ──────────────────────────────────────────────────── */
  let piString = null;      // cached π string (loaded once)
  let loadPromise = null;   // in-flight fetch promise

  /* ── DOM refs ───────────────────────────────────────────────── */
  const form         = document.getElementById('pi-search-form');
  const input        = document.getElementById('pi-search-input');
  const errorEl      = document.getElementById('pi-search-error');
  const resultsEl    = document.getElementById('pi-search-results');
  const loadingEl    = document.getElementById('pi-search-loading');
  const liveEl       = document.getElementById('pi-search-live');
  const submitBtn    = document.getElementById('pi-search-btn');
  const btnText      = submitBtn.querySelector('.pi-search-btn-text');
  const btnSpinner   = submitBtn.querySelector('.pi-search-btn-spinner');

  /* ── Input sanitization ─────────────────────────────────────── */
  function sanitizeInput(raw) {
    // Remove all non-digit characters (spaces, dashes, dots, letters…)
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

  /* ── Input event: strip non-digits as user types ────────────── */
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

  /* ── Paste handling ─────────────────────────────────────────── */
  input.addEventListener('paste', function (e) {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    const cleaned = sanitizeInput(pasted);
    // Insert at cursor
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const current = this.value;
    const next = (current.slice(0, start) + cleaned + current.slice(end)).slice(0, MAX_LENGTH + 5);
    this.value = sanitizeInput(next);
    const pos = start + cleaned.length;
    this.setSelectionRange(pos, pos);
  });

  /* ── Example chips ──────────────────────────────────────────── */
  document.querySelectorAll('.pi-search-example').forEach(function (btn) {
    btn.addEventListener('click', function () {
      input.value = this.dataset.value;
      showError(null);
      input.focus();
    });
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
        // Validate: must be all digits
        if (!/^\d+$/.test(trimmed)) {
          throw new Error('The π data file appears to be corrupted (non-digit characters found).');
        }
        if (trimmed.length < 100_000) {
          throw new Error('The π data file appears to be incomplete (' + trimmed.length + ' digits loaded).');
        }
        piString = trimmed;
        loadPromise = null;
        return piString;
      })
      .catch(function (err) {
        loadPromise = null; // allow retry
        throw err;
      });

    return loadPromise;
  }

  /* ── Search logic ───────────────────────────────────────────── */
  function searchPi(query) {
    const idx = piString.indexOf(query);
    if (idx === -1) {
      return { found: false, query };
    }

    const position = idx + 1; // 1-based
    const searchedDigits = Math.min(piString.length, SEARCHED_DIGITS);

    const beforeStart = Math.max(0, idx - CONTEXT_CHARS);
    const afterEnd    = Math.min(piString.length, idx + query.length + CONTEXT_CHARS);

    const before = piString.slice(beforeStart, idx);
    const match  = piString.slice(idx, idx + query.length);
    const after  = piString.slice(idx + query.length, afterEnd);

    const hasEllipsisBefore = beforeStart > 0;
    const hasEllipsisAfter  = afterEnd < piString.length;

    return {
      found: true,
      query,
      position,
      searchedDigits,
      before,
      match,
      after,
      hasEllipsisBefore,
      hasEllipsisAfter,
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

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    btnText.hidden = isLoading;
    btnSpinner.hidden = !isLoading;
    loadingEl.hidden = !isLoading;
  }

  function setLiveMessage(msg) {
    liveEl.textContent = '';
    // Force re-announcement
    requestAnimationFrame(function () {
      liveEl.textContent = msg;
    });
  }

  /* ── Safe text node helper (no innerHTML with user data) ────── */
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

  /* ── Result rendering ───────────────────────────────────────── */
  function renderFound(result) {
    const posFormatted    = result.position.toLocaleString('en-US');
    const searchedFormatted = result.searchedDigits.toLocaleString('en-US');

    // Summary sentence
    const summary = el('p', { className: 'pi-search-result-summary' }, [
      'Your sequence ',
      el('strong', { textContent: result.query }),
      ' first appears at position ',
      el('strong', { textContent: posFormatted }),
      ' within the first ',
      el('strong', { textContent: searchedFormatted }),
      ' decimal digits of π.',
    ]);

    // Digit context block
    const contextBlock = el('div', { className: 'pi-search-context', 'aria-label': 'Digit context' });
    const contextInner = el('code', { className: 'pi-search-context-code' });

    if (result.hasEllipsisBefore) {
      contextInner.appendChild(el('span', { className: 'pi-search-ellipsis', 'aria-hidden': 'true' }, ['…']));
    }
    contextInner.appendChild(el('span', { className: 'pi-search-before', 'aria-label': 'digits before match' }, [result.before]));
    contextInner.appendChild(
      el('mark', {
        className: 'pi-search-match',
        'aria-label': 'matched sequence: ' + result.match,
      }, [result.match])
    );
    contextInner.appendChild(el('span', { className: 'pi-search-after', 'aria-label': 'digits after match' }, [result.after]));
    if (result.hasEllipsisAfter) {
      contextInner.appendChild(el('span', { className: 'pi-search-ellipsis', 'aria-hidden': 'true' }, ['…']));
    }
    contextBlock.appendChild(contextInner);

    // Position note
    const posNote = el('p', { className: 'pi-search-pos-note' }, [
      'Position 1 = first digit after the decimal point of π (the ',
      el('strong', { textContent: '1' }),
      ' in 3.',
      el('strong', { textContent: '1' }),
      '4159…).',
    ]);

    // Action buttons row
    const actionsRow = el('div', { className: 'pi-search-actions' });

    // Copy button
    const copyText = buildCopyText(result);
    const copyBtn = el('button', { type: 'button', className: 'pi-search-action-btn', id: 'pi-copy-btn' }, ['📋 Copy result']);
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(copyText).then(function () {
        copyBtn.textContent = '✅ Copied!';
        setTimeout(function () { copyBtn.textContent = '📋 Copy result'; }, 2500);
      }).catch(function () {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = copyText;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = '✅ Copied!';
        setTimeout(function () { copyBtn.textContent = '📋 Copy result'; }, 2500);
      });
    });
    actionsRow.appendChild(copyBtn);

    // Share button (Web Share API)
    if (navigator.share) {
      const shareBtn = el('button', { type: 'button', className: 'pi-search-action-btn', id: 'pi-share-btn' }, ['🔗 Share']);
      shareBtn.addEventListener('click', function () {
        navigator.share({
          title: 'Search in π — ' + result.query,
          text: copyText,
          url: window.location.href,
        }).catch(function () { /* User cancelled — no action needed */ });
      });
      actionsRow.appendChild(shareBtn);
    }

    // Search again button
    const againBtn = el('button', { type: 'button', className: 'pi-search-action-btn pi-search-again-btn', id: 'pi-again-btn' }, ['🔍 Search again']);
    againBtn.addEventListener('click', function () {
      input.value = '';
      input.focus();
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
    });
    actionsRow.appendChild(againBtn);

    // Assemble card
    const card = el('div', { className: 'pi-search-result-card pi-search-found', role: 'region', 'aria-label': 'Search result' });
    card.appendChild(el('div', { className: 'pi-search-result-header' }, [
      el('span', { className: 'pi-search-found-icon', 'aria-hidden': 'true' }, ['✓']),
      el('span', { className: 'pi-search-found-label' }, ['Found']),
    ]));
    card.appendChild(summary);
    card.appendChild(contextBlock);
    card.appendChild(posNote);
    card.appendChild(actionsRow);

    resultsEl.innerHTML = '';
    resultsEl.appendChild(card);
    resultsEl.hidden = false;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderNotFound(query) {
    const card = el('div', { className: 'pi-search-result-card pi-search-not-found', role: 'region', 'aria-label': 'Search result' });
    card.appendChild(el('div', { className: 'pi-search-result-header' }, [
      el('span', { className: 'pi-search-notfound-icon', 'aria-hidden': 'true' }, ['○']),
      el('span', { className: 'pi-search-notfound-label' }, ['Not found']),
    ]));
    card.appendChild(el('p', { className: 'pi-search-result-summary' }, [
      'The sequence ',
      el('strong', { textContent: query }),
      ' was not found within the first 1,000,000 decimal digits of π. It may appear later in the expansion.',
    ]));

    const suggestions = el('div', { className: 'pi-search-suggestions' });
    suggestions.appendChild(el('p', { className: 'pi-search-suggestions-title' }, ['Suggestions:']));
    const suggList = el('ul', { className: 'pi-search-suggestions-list' });
    [
      'Try a shorter sequence.',
      'If you entered a date, remove separators (use 01012000 instead of 01/01/2000).',
      'Try removing leading zeros if the sequence still seems long.',
    ].forEach(function (s) {
      suggList.appendChild(el('li', {}, [s]));
    });
    suggestions.appendChild(suggList);
    card.appendChild(suggestions);

    // Search again button
    const againBtn = el('button', { type: 'button', className: 'pi-search-action-btn pi-search-again-btn' }, ['🔍 Search again']);
    againBtn.addEventListener('click', function () {
      input.value = '';
      input.focus();
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
    });
    card.appendChild(againBtn);

    resultsEl.innerHTML = '';
    resultsEl.appendChild(card);
    resultsEl.hidden = false;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderError(message) {
    const card = el('div', { className: 'pi-search-result-card pi-search-error-card', role: 'alert' });
    card.appendChild(el('p', { className: 'pi-search-error-title' }, ['⚠ Could not complete the search']));
    card.appendChild(el('p', { textContent: message }));
    card.appendChild(el('p', {}, ['Please refresh the page and try again. If the problem persists, check your internet connection.']));

    resultsEl.innerHTML = '';
    resultsEl.appendChild(card);
    resultsEl.hidden = false;
  }

  /* ── Copy text builder ──────────────────────────────────────── */
  function buildCopyText(result) {
    const posFormatted      = result.position.toLocaleString('en-US');
    const searchedFormatted = result.searchedDigits.toLocaleString('en-US');
    const context = (result.hasEllipsisBefore ? '…' : '')
      + result.before + '[' + result.match + ']' + result.after
      + (result.hasEllipsisAfter ? '…' : '');
    return [
      'Search in π — ' + result.query,
      'First occurrence: position ' + posFormatted,
      'Searched: first ' + searchedFormatted + ' decimal digits of π',
      'Context: ' + context,
      'Source: ' + window.location.href,
    ].join('\n');
  }

  /* ── Form submission ─────────────────────────────────────────── */
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const raw   = input.value;
    const query = sanitizeInput(raw);

    // Update visible input to stripped value
    input.value = query;

    const errorMsg = validateInput(query);
    if (errorMsg) {
      showError(errorMsg);
      input.focus();
      return;
    }

    showError(null);
    setLoading(true);
    setLiveMessage('Searching…');

    try {
      await loadPiData();
      setLoading(false);

      const result = searchPi(query);

      if (result.found) {
        renderFound(result);
        setLiveMessage(
          'Found! Your sequence ' + query +
          ' appears at position ' + result.position.toLocaleString('en-US') +
          ' within the first 1,000,000 decimal digits of π.'
        );
      } else {
        renderNotFound(query);
        setLiveMessage(
          'Not found. The sequence ' + query +
          ' was not found within the first 1,000,000 decimal digits of π.'
        );
      }
    } catch (err) {
      setLoading(false);
      renderError(err.message || 'An unexpected error occurred.');
      setLiveMessage('An error occurred. Could not complete the search.');
    }
  });

})();
