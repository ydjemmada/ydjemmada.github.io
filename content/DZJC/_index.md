+++
title = "DZ Journal Check"
description = "DZ Journal Check helps researchers check Algerian DGRSDT/MESRS journal classifications directly on Google Scholar."
url = "/DZJC/"
type = "dzjc"
layout = "list"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

<section class="dzjc-hero">
  <div>
    <p class="dzjc-kicker">DZJC</p>
    <h1 id="dzjc-title">DZ Journal Check</h1>
    <p class="dzjc-lead">Check Algerian journal classifications directly on Google Scholar.</p>
    <p>DZ Journal Check is an independent Chrome extension that displays DGRSDT/MESRS Category A, Category B, Category C, Predatory, Book / Thesis, and Unclassified badges while you review scientific publications.</p>
    <p class="dzjc-status">Chrome Web Store release coming soon</p>
    <div class="dzjc-hero-actions" aria-label="Primary links">
      <a class="dzjc-button-secondary" href="/DZJC/PRIVACY_POLICY_PUBLIC.html">Privacy policy</a>
      <a class="dzjc-button-secondary" href="/DZJC/SUPPORT.html">Support</a>
      <a class="dzjc-button-secondary" href="/DZJC/faq/">FAQ</a>
    </div>
  </div>
  <div class="dzjc-logo-card" aria-label="DZ Journal Check logo">
    <img src="/DZJC/assets/dzjc-logo.svg" alt="DZ Journal Check logo: journal page with classification bars and a check mark">
    <strong>DZ Journal Check</strong>
    <span>DGRSDT/MESRS journal assistant</span>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="features">
  <h2 id="features">Main features</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3>Scholar badges</h3><p>Displays compact classification badges on Google Scholar search results when a reliable venue match is found.</p></div>
    <div class="dzjc-card"><h3>Categories A, B, and C</h3><p>Matches journal titles, ISSNs, and E-ISSNs against the bundled local DGRSDT/MESRS database.</p></div>
    <div class="dzjc-card"><h3>Predatory records</h3><p>Identifies records from the bundled predatory source data when the match is reliable.</p></div>
    <div class="dzjc-card"><h3>Unclassified by design</h3><p>Marks unclear venues, arXiv-only items, repository copies, and unsupported results as Unclassified instead of forcing weak matches.</p></div>
    <div class="dzjc-card"><h3>Books and theses</h3><p>Distinguishes books, theses, monographs, and other non-journal items from journal publications.</p></div>
    <div class="dzjc-card"><h3>Manual popup search</h3><p>Searches by journal title, ISSN, E-ISSN, or DOI from the extension popup.</p></div>
    <div class="dzjc-card"><h3>DOI metadata</h3><p>When necessary, DOI strings may be sent to Crossref to retrieve journal title and ISSN metadata.</p></div>
    <div class="dzjc-card"><h3>Author statistics</h3><p>Shows Category A and Category B publication counts on public Google Scholar author profiles.</p></div>
    <div class="dzjc-card"><h3>Local database</h3><p>Stores the bundled journal database locally in Chrome extension storage for fast lookups and MV3 service-worker restarts.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="how-it-works">
  <h2 id="how-it-works">How it works</h2>
  <div class="dzjc-steps">
    <div class="dzjc-step">The extension reads visible publication metadata on Google Scholar pages in your browser.</div>
    <div class="dzjc-step">It compares visible venue titles, ISSNs, E-ISSNs, and result links with the bundled local database.</div>
    <div class="dzjc-step">When a DOI is visible and more metadata is needed, only the DOI string may be sent to Crossref.</div>
    <div class="dzjc-step">A classification badge is added to the Scholar result or author profile.</div>
    <div class="dzjc-step">Ambiguous or unsupported publications remain Unclassified to reduce false positives.</div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="legend">
  <h2 id="legend">Classification legend</h2>
  <div class="dzjc-legend" role="list">
    <span class="dzjc-badge dzjc-badge-a" role="listitem" aria-label="Category A">Category A</span>
    <span class="dzjc-badge dzjc-badge-b" role="listitem" aria-label="Category B">Category B</span>
    <span class="dzjc-badge dzjc-badge-c" role="listitem" aria-label="Category C">Category C</span>
    <span class="dzjc-badge dzjc-badge-p" role="listitem" aria-label="Predatory">Predatory</span>
    <span class="dzjc-badge dzjc-badge-book" role="listitem" aria-label="Book or thesis">Book / Thesis</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="Unclassified">Unclassified</span>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="database">
  <h2 id="database">Database snapshot</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3>34,516 journals</h3><p>Bundled database version 2026.07.25, generated from public DGRSDT/MESRS source pages.</p></div>
    <div class="dzjc-card"><h3>13,500 Category A</h3><p>Category A records in the current bundled database.</p></div>
    <div class="dzjc-card"><h3>17,318 Category B</h3><p>Category B records in the current bundled database.</p></div>
    <div class="dzjc-card"><h3>1,063 Category C</h3><p>MESRS recensement / Category C records.</p></div>
    <div class="dzjc-card"><h3>2,635 Predatory</h3><p>Predatory journal or publisher records in the bundled source data.</p></div>
    <div class="dzjc-card"><h3>Version 1.0.1</h3><p>Current extension release candidate package metadata.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="privacy">
  <h2 id="privacy">Privacy summary</h2>
  <div class="dzjc-note">
    <p>Scholar metadata is processed locally in your browser. Browsing history is not collected. Author names and article titles are not collected or transmitted by the extension. DOI identifiers may be sent to Crossref when necessary to retrieve journal metadata. No analytics, advertising, tracking, account registration, or remote executable code is used by the extension.</p>
    <p><a href="/DZJC/PRIVACY_POLICY_PUBLIC.html">Read the full privacy policy</a>.</p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="screenshots">
  <h2 id="screenshots">Screenshots</h2>
  <p>The Scholar screenshots below are browser QA demonstrations produced with the real extension on deterministic Scholar-like pages because live Google Scholar returned automated-access protection in the capture environment. The popup screenshot shows the real extension popup.</p>
  <div class="dzjc-screenshot-grid">
    <figure class="dzjc-screenshot">
      <img src="/DZJC/assets/screenshots/01-scholar-classification.png" alt="Google Scholar-like results with DZ Journal Check Category A and Category B badges">
      <figcaption>Scholar result badges for Category A and Category B journals.</figcaption>
    </figure>
    <figure class="dzjc-screenshot">
      <img src="/DZJC/assets/screenshots/02-predatory-unclassified.png" alt="Google Scholar-like results with Category C, Predatory, Book or Thesis, and Unclassified badges">
      <figcaption>Category C, Predatory, Book / Thesis, arXiv, repository, and Unclassified cases.</figcaption>
    </figure>
    <figure class="dzjc-screenshot">
      <img src="/DZJC/assets/screenshots/03-doi-resolution.png" alt="Google Scholar-like DOI result resolved to a Category A journal badge">
      <figcaption>DOI-assisted journal detection resolving a PNAS-style result.</figcaption>
    </figure>
    <figure class="dzjc-screenshot">
      <img src="/DZJC/assets/screenshots/04-author-profile-stats.png" alt="Google Scholar-like author profile with DZ Journal Check Category A and Category B statistics">
      <figcaption>Author profile statistics with Category A and Category B counts.</figcaption>
    </figure>
    <figure class="dzjc-screenshot">
      <img src="/DZJC/assets/screenshots/05-popup-search.png" alt="DZ Journal Check popup showing a Category A result for Physical Review B">
      <figcaption>Popup search by journal title, ISSN, E-ISSN, or DOI.</figcaption>
    </figure>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="install">
  <h2 id="install">Chrome Web Store installation</h2>
  <div class="dzjc-panel dzjc-note">
    <p><strong>Chrome Web Store release coming soon.</strong></p>
    <p>No public Chrome Web Store URL has been issued yet. When the listing is approved, the installation link should be inserted in this section and in the store listing materials.</p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="limitations">
  <h2 id="limitations">Limitations</h2>
  <ul>
    <li>Official DGRSDT/MESRS journal lists can change after the bundled database is generated.</li>
    <li>Google Scholar HTML can change and may affect badge placement.</li>
    <li>Crossref metadata may be incomplete or temporarily unavailable.</li>
    <li>Ambiguous publications may remain Unclassified to avoid false positives.</li>
    <li>Profile statistics can be partial if Google Scholar limits or blocks profile page requests.</li>
    <li>Important academic or administrative decisions should be verified against official DGRSDT/MESRS sources.</li>
  </ul>
</section>

<section class="dzjc-section" aria-labelledby="links">
  <h2 id="links">More information</h2>
  <div class="dzjc-link-row">
    <a class="dzjc-button-secondary" href="/DZJC/permissions/">Permissions</a>
    <a class="dzjc-button-secondary" href="/DZJC/report-classification/">Report a classification</a>
    <a class="dzjc-button-secondary" href="/DZJC/faq/">FAQ</a>
    <a class="dzjc-button-secondary" href="/DZJC/SUPPORT.html">Support</a>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="disclaimer">
  <h2 id="disclaimer">Disclaimer</h2>
  <div class="dzjc-note dzjc-warning">
    <p>DZ Journal Check is an independent tool using publicly available Algerian DGRSDT/MESRS journal-classification data. It is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, or any Algerian government institution.</p>
  </div>
</section>
