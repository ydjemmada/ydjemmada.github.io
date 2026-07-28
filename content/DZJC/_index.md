+++
title = "DZ Journal Check"
description = "DZ Journal Check is publicly available on the Chrome Web Store and helps researchers check Algerian DGRSDT/MESRS journal classifications directly on Google Scholar."
url = "/DZJC/"
type = "dzjc"
layout = "list"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

<div data-dzjc-lang-panel="en" hidden>
<section class="dzjc-hero">
  <div>
    <p class="dzjc-kicker">DZJC</p>
    <h1>DZ Journal Check</h1>
    <p class="dzjc-lead">Check Algerian journal classifications directly on Google Scholar.</p>
    <p>DZ Journal Check is an independent Chrome extension that displays DGRSDT/MESRS Category A, Category B, Category C, Predatory, Conference, Book / Thesis, Preprint / Repository, and Unclassified badges while you review scientific publications.</p>
    <p class="dzjc-status">Version 1.0.7 is publicly available on the Chrome Web Store.</p>
    <div class="dzjc-install-cta">
      <a class="dzjc-button dzjc-store-button" href="https://chromewebstore.google.com/detail/dz-journal-check/ggekciegmhcfnbnlhdldkjlifmmncedn" target="_blank" rel="noopener" aria-label="Add DZ Journal Check to Chrome from the Chrome Web Store">
        <span class="dzjc-store-button-main">Add to Chrome</span>
        <span class="dzjc-store-button-sub">Chrome Web Store</span>
      </a>
    </div>
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

<section class="dzjc-section" aria-labelledby="features-en">
  <h2 id="features-en">Main features</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3>Scholar badges</h3><p>Displays compact classification badges on Google Scholar search results when a reliable venue match is found.</p></div>
    <div class="dzjc-card"><h3>Categories A, B, and C</h3><p>Matches journal titles, ISSNs, and E-ISSNs against the bundled local DGRSDT/MESRS database.</p></div>
    <div class="dzjc-card"><h3>Predatory records</h3><p>Identifies records from the bundled predatory source data when the match is reliable.</p></div>
    <div class="dzjc-card"><h3>Conservative by design</h3><p>Separates conferences, books, theses, preprints, repositories, unclear venues, and unsupported results instead of forcing weak journal matches.</p></div>
    <div class="dzjc-card"><h3>Books and theses</h3><p>Distinguishes books, theses, monographs, and other non-journal items from journal publications.</p></div>
    <div class="dzjc-card"><h3>Conference detection</h3><p>Marks conference papers and proceedings separately unless exact journal evidence proves publication in a classified journal.</p></div>
    <div class="dzjc-card"><h3>Manual popup search</h3><p>Searches by journal title, ISSN, E-ISSN, or DOI from the extension popup.</p></div>
    <div class="dzjc-card"><h3>DOI metadata</h3><p>When necessary, DOI strings may be sent to Crossref to retrieve journal title and ISSN metadata.</p></div>
    <div class="dzjc-card"><h3>Author statistics</h3><p>Shows Category A and Category B publication counts on public Google Scholar author profiles.</p></div>
    <div class="dzjc-card"><h3>Local database</h3><p>Stores the bundled journal database locally in Chrome extension storage for fast lookups and MV3 service-worker restarts.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="how-it-works-en">
  <h2 id="how-it-works-en">How it works</h2>
  <div class="dzjc-steps">
    <div class="dzjc-step">The extension reads visible publication metadata on Google Scholar pages in your browser.</div>
    <div class="dzjc-step">It first detects likely publication type, such as journal article, conference, book, thesis, preprint, repository, report, or unknown.</div>
    <div class="dzjc-step">It compares only trusted venue titles, ISSNs, E-ISSNs, and DOI journal metadata with the bundled local database.</div>
    <div class="dzjc-step">When a DOI is visible and more metadata is needed, only the DOI string may be sent to Crossref.</div>
    <div class="dzjc-step">A classification badge is added to the Scholar result or author profile.</div>
    <div class="dzjc-step">Ambiguous or unsupported publications remain non-journal or Unclassified to reduce false positives.</div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="legend-en">
  <h2 id="legend-en">Classification legend</h2>
  <div class="dzjc-legend" role="list">
    <span class="dzjc-badge dzjc-badge-a" role="listitem" aria-label="Category A">Category A</span>
    <span class="dzjc-badge dzjc-badge-b" role="listitem" aria-label="Category B">Category B</span>
    <span class="dzjc-badge dzjc-badge-c" role="listitem" aria-label="Category C">Category C</span>
    <span class="dzjc-badge dzjc-badge-p" role="listitem" aria-label="Predatory">Predatory</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="Conference">Conference</span>
    <span class="dzjc-badge dzjc-badge-book" role="listitem" aria-label="Book or thesis">Book / Thesis</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="Preprint or repository">Preprint / Repository</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="Unclassified">Unclassified</span>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="database-en">
  <h2 id="database-en">Database snapshot</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3>34,516 journals</h3><p>Bundled database version 2026.07.25, generated from public DGRSDT/MESRS source pages.</p></div>
    <div class="dzjc-card"><h3>13,500 Category A</h3><p>Category A records in the current bundled database.</p></div>
    <div class="dzjc-card"><h3>17,318 Category B</h3><p>Category B records in the current bundled database.</p></div>
    <div class="dzjc-card"><h3>1,063 Category C</h3><p>MESRS recensement / Category C records.</p></div>
    <div class="dzjc-card"><h3>2,635 Predatory</h3><p>Predatory journal or publisher records in the bundled source data.</p></div>
    <div class="dzjc-card"><h3>Version 1.0.7</h3><p>Public release available on the Chrome Web Store.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="privacy-en">
  <h2 id="privacy-en">Privacy summary</h2>
  <div class="dzjc-note">
    <p>Scholar metadata is processed locally in your browser. Browsing history is not collected. Author names and article titles are not collected or transmitted by the extension. DOI identifiers may be sent to Crossref when necessary to retrieve journal metadata. No analytics, advertising, tracking, account registration, or remote executable code is used by the extension.</p>
    <p><a href="/DZJC/PRIVACY_POLICY_PUBLIC.html">Read the full privacy policy</a>.</p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="screenshots-en">
  <h2 id="screenshots-en">Screenshots</h2>
  <p>The Scholar screenshots below are browser QA demonstrations produced with the real extension on deterministic Scholar-like pages because live Google Scholar returned automated-access protection in the capture environment. The popup screenshot shows the real extension popup.</p>
  <div class="dzjc-screenshot-grid">
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/01-scholar-category-a-b.png" target="_blank" rel="noopener" aria-label="Open Category A and Category B screenshot full size"><img src="/DZJC/assets/screenshots/01-scholar-category-a-b.png" alt="Google Scholar-like results with DZ Journal Check Category A and Category B badges"></a><figcaption>Scholar result badges for Category A and Category B journals.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/02-category-c-predatory-unclassified.png" target="_blank" rel="noopener" aria-label="Open Category C, Predatory, and Unclassified screenshot full size"><img src="/DZJC/assets/screenshots/02-category-c-predatory-unclassified.png" alt="Google Scholar-like results with Category C, Predatory, Book or Thesis, Preprint or Repository, and Unclassified badges"></a><figcaption>Category C, Predatory, Book / Thesis, Preprint / Repository, and Unclassified cases.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/03-doi-resolution.png" target="_blank" rel="noopener" aria-label="Open DOI resolution screenshot full size"><img src="/DZJC/assets/screenshots/03-doi-resolution.png" alt="Google Scholar-like DOI result resolved to a Category A journal badge"></a><figcaption>DOI-assisted journal detection resolving a PNAS-style result.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/04-author-profile-statistics.png" target="_blank" rel="noopener" aria-label="Open author profile statistics screenshot full size"><img src="/DZJC/assets/screenshots/04-author-profile-statistics.png" alt="Google Scholar-like author profile with DZ Journal Check Category A and Category B statistics"></a><figcaption>Author profile statistics with Category A and Category B counts.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/05-popup-search.png" target="_blank" rel="noopener" aria-label="Open popup search screenshot full size"><img src="/DZJC/assets/screenshots/05-popup-search.png" alt="DZ Journal Check popup showing a Category A result for Physical Review B"></a><figcaption>Popup search by journal title, ISSN, E-ISSN, or DOI.</figcaption></figure>
  </div>
</section>

<section class="dzjc-section" id="install" aria-labelledby="install-en">
  <h2 id="install-en">Chrome Web Store installation</h2>
  <div class="dzjc-panel dzjc-note">
    <p><strong>Version 1.0.7 is publicly available on the Chrome Web Store.</strong></p>
    <p><a class="dzjc-button dzjc-store-button" href="https://chromewebstore.google.com/detail/dz-journal-check/ggekciegmhcfnbnlhdldkjlifmmncedn" target="_blank" rel="noopener" aria-label="Add DZ Journal Check to Chrome from the Chrome Web Store"><span class="dzjc-store-button-main">Add to Chrome</span><span class="dzjc-store-button-sub">Chrome Web Store</span></a></p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="limitations-en">
  <h2 id="limitations-en">Limitations</h2>
  <ul>
    <li>Official DGRSDT/MESRS journal lists can change after the bundled database is generated.</li>
    <li>Google Scholar HTML can change and may affect badge placement.</li>
    <li>Crossref metadata may be incomplete or temporarily unavailable.</li>
    <li>Ambiguous publications may remain Conference, Book / Thesis, Preprint / Repository, or Unclassified to avoid false positives.</li>
    <li>Profile statistics can be partial if Google Scholar limits or blocks profile page requests.</li>
    <li>Important academic or administrative decisions should be verified against official DGRSDT/MESRS sources.</li>
  </ul>
</section>

<section class="dzjc-section" aria-labelledby="links-en">
  <h2 id="links-en">More information</h2>
  <div class="dzjc-link-row">
    <a class="dzjc-button-secondary" href="/DZJC/permissions/">Permissions</a>
    <a class="dzjc-button-secondary" href="/DZJC/report-classification/">Report a classification</a>
    <a class="dzjc-button-secondary" href="/DZJC/faq/">FAQ</a>
    <a class="dzjc-button-secondary" href="/DZJC/SUPPORT.html">Support</a>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="disclaimer-en">
  <h2 id="disclaimer-en">Disclaimer</h2>
  <div class="dzjc-note dzjc-warning">
    <p>DZ Journal Check is an independent and unofficial tool. It is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, Google, or any Algerian government institution.</p>
  </div>
</section>
</div>

<div data-dzjc-lang-panel="ar">
<section class="dzjc-hero">
  <div>
    <p class="dzjc-kicker">DZJC</p>
    <h1>DZ Journal Check</h1>
    <p class="dzjc-lead">تحقّق من تصنيف المجلات الجزائرية مباشرةً أثناء تصفح Google Scholar.</p>
    <p>DZ Journal Check إضافة مستقلة لمتصفح Chrome تساعد الباحثين وطلبة الدكتوراه على إظهار تصنيفات DGRSDT/MESRS للمجلات: الصنف أ، الصنف ب، الصنف ج، المجلات المفترسة، المؤتمر، كتاب / أطروحة، نسخة أولية / مستودع، وغير مصنف.</p>
    <p class="dzjc-status">الإصدار <span class="dzjc-ltr">1.0.7</span> متاح الآن للجميع على Chrome Web Store.</p>
    <div class="dzjc-install-cta">
      <a class="dzjc-button dzjc-store-button" href="https://chromewebstore.google.com/detail/dz-journal-check/ggekciegmhcfnbnlhdldkjlifmmncedn" target="_blank" rel="noopener" aria-label="إضافة DZ Journal Check إلى Chrome من Chrome Web Store">
        <span class="dzjc-store-button-main">إضافة إلى Chrome</span>
        <span class="dzjc-store-button-sub">Chrome Web Store</span>
      </a>
    </div>
    <div class="dzjc-hero-actions" aria-label="روابط رئيسية">
      <a class="dzjc-button-secondary" href="/DZJC/PRIVACY_POLICY_PUBLIC.html">سياسة الخصوصية</a>
      <a class="dzjc-button-secondary" href="/DZJC/SUPPORT.html">الدعم</a>
      <a class="dzjc-button-secondary" href="/DZJC/faq/">الأسئلة الشائعة</a>
    </div>
  </div>
  <div class="dzjc-logo-card" aria-label="شعار DZ Journal Check">
    <img src="/DZJC/assets/dzjc-logo.svg" alt="شعار DZ Journal Check: صفحة مجلة مع أشرطة تصنيف وعلامة تحقق">
    <strong>DZ Journal Check</strong>
    <span>مساعد تصنيف مجلات DGRSDT/MESRS</span>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="features-ar">
  <h2 id="features-ar">الميزات الرئيسية</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3>شارات داخل Google Scholar</h3><p>تعرض شارات مختصرة على نتائج Google Scholar عندما يوجد دليل موثوق على اسم المجلة.</p></div>
    <div class="dzjc-card"><h3>الأصناف أ، ب، ج</h3><p>تطابق عناوين المجلات و ISSN و E-ISSN مع قاعدة DGRSDT/MESRS المحلية المدمجة.</p></div>
    <div class="dzjc-card"><h3>السجلات المفترسة</h3><p>تنبّه إلى السجلات المفترسة الموجودة في البيانات المدمجة عندما يكون التطابق موثوقاً.</p></div>
    <div class="dzjc-card"><h3>منهج محافظ</h3><p>تفصل بين المؤتمرات والكتب والأطروحات والنسخ الأولية والمستودعات والنتائج الغامضة بدل فرض تصنيف ضعيف.</p></div>
    <div class="dzjc-card"><h3>الكتب والأطروحات</h3><p>تميّز الكتب والأطروحات والمونوغرافيا عن المقالات المنشورة في مجلات.</p></div>
    <div class="dzjc-card"><h3>كشف المؤتمرات</h3><p>توسم أوراق المؤتمرات ووقائعها بشكل منفصل ما لم يوجد دليل دقيق على نشرها في مجلة مصنفة.</p></div>
    <div class="dzjc-card"><h3>بحث يدوي</h3><p>يمكن البحث من نافذة الإضافة باستعمال عنوان المجلة أو ISSN أو E-ISSN أو DOI.</p></div>
    <div class="dzjc-card"><h3>بيانات DOI</h3><p>عند الحاجة، قد يُرسل DOI فقط إلى Crossref لجلب عنوان المجلة و ISSN.</p></div>
    <div class="dzjc-card"><h3>إحصاءات المؤلفين</h3><p>تعرض عدد منشورات الصنف أ والصنف ب في ملفات Google Scholar العامة للمؤلفين.</p></div>
    <div class="dzjc-card"><h3>قاعدة محلية</h3><p>تخزن قاعدة المجلات داخل تخزين Chrome المحلي لتسريع البحث ودعم سلوك Manifest V3.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="how-it-works-ar">
  <h2 id="how-it-works-ar">كيف تعمل الإضافة</h2>
  <div class="dzjc-steps">
    <div class="dzjc-step">تقرأ الإضافة بيانات المنشور الظاهرة في صفحات Google Scholar داخل متصفحك.</div>
    <div class="dzjc-step">تحدد أولاً نوع المنشور المحتمل: مقال مجلة، مؤتمر، كتاب، أطروحة، نسخة أولية، مستودع، تقرير، أو حالة غير واضحة.</div>
    <div class="dzjc-step">تقارن فقط عناوين الجهات الموثوقة و ISSN و E-ISSN وبيانات DOI مع القاعدة المحلية.</div>
    <div class="dzjc-step">إذا ظهر DOI وكانت بيانات المجلة ناقصة، قد يُرسل DOI وحده إلى Crossref.</div>
    <div class="dzjc-step">تُضاف شارة التصنيف إلى نتيجة Scholar أو إلى ملف المؤلف العام.</div>
    <div class="dzjc-step">المنشورات الغامضة أو غير المدعومة تبقى غير مجلة أو غير مصنفة لتقليل الإيجابيات الخاطئة.</div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="legend-ar">
  <h2 id="legend-ar">دليل التصنيفات</h2>
  <div class="dzjc-legend" role="list">
    <span class="dzjc-badge dzjc-badge-a" role="listitem" aria-label="الصنف أ">الصنف أ</span>
    <span class="dzjc-badge dzjc-badge-b" role="listitem" aria-label="الصنف ب">الصنف ب</span>
    <span class="dzjc-badge dzjc-badge-c" role="listitem" aria-label="الصنف ج">الصنف ج</span>
    <span class="dzjc-badge dzjc-badge-p" role="listitem" aria-label="مجلة مفترسة">مجلة مفترسة</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="مؤتمر">مؤتمر</span>
    <span class="dzjc-badge dzjc-badge-book" role="listitem" aria-label="كتاب أو أطروحة">كتاب / أطروحة</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="نسخة أولية أو مستودع">نسخة أولية / مستودع</span>
    <span class="dzjc-badge dzjc-badge-u" role="listitem" aria-label="غير مصنف">غير مصنف</span>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="database-ar">
  <h2 id="database-ar">لمحة عن قاعدة البيانات</h2>
  <div class="dzjc-grid">
    <div class="dzjc-card"><h3><span class="dzjc-ltr">34,516</span> مجلة</h3><p>إصدار القاعدة <span class="dzjc-ltr">2026.07.25</span>، مولد من صفحات DGRSDT/MESRS العمومية.</p></div>
    <div class="dzjc-card"><h3><span class="dzjc-ltr">13,500</span> من الصنف أ</h3><p>عدد سجلات الصنف أ في القاعدة الحالية.</p></div>
    <div class="dzjc-card"><h3><span class="dzjc-ltr">17,318</span> من الصنف ب</h3><p>عدد سجلات الصنف ب في القاعدة الحالية.</p></div>
    <div class="dzjc-card"><h3><span class="dzjc-ltr">1,063</span> من الصنف ج</h3><p>سجلات recensement / الصنف ج الخاصة بـ MESRS.</p></div>
    <div class="dzjc-card"><h3><span class="dzjc-ltr">2,635</span> سجل مفترس</h3><p>سجلات مجلات أو ناشرين مفترسين ضمن البيانات المدمجة.</p></div>
    <div class="dzjc-card"><h3>الإصدار <span class="dzjc-ltr">1.0.7</span></h3><p>إصدار عام متاح على Chrome Web Store.</p></div>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="privacy-ar">
  <h2 id="privacy-ar">ملخص الخصوصية</h2>
  <div class="dzjc-note">
    <p>تُعالج بيانات Scholar محلياً داخل متصفحك. لا تُجمع سجلات التصفح، ولا تُجمع أو تُرسل أسماء المؤلفين أو عناوين المقالات. عند الضرورة فقط، قد يُرسل DOI إلى Crossref لاسترجاع بيانات المجلة. لا تستعمل الإضافة تحليلات أو إعلانات أو تتبعاً أو حسابات أو كوداً تنفيذياً عن بُعد.</p>
    <p><a href="/DZJC/PRIVACY_POLICY_PUBLIC.html">اقرأ سياسة الخصوصية كاملة</a>.</p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="screenshots-ar">
  <h2 id="screenshots-ar">لقطات الشاشة</h2>
  <p>لقطات Scholar أدناه أمثلة اختبار متصفح أُنتجت بالإضافة الحقيقية على صفحات شبيهة بـ Scholar، لأن Google Scholar المباشر أعاد حماية ضد التشغيل الآلي في بيئة الالتقاط. لقطة النافذة المنبثقة تعرض واجهة الإضافة الحقيقية.</p>
  <div class="dzjc-screenshot-grid">
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/01-scholar-category-a-b.png" target="_blank" rel="noopener" aria-label="فتح لقطة الصنف أ والصنف ب بالحجم الكامل"><img src="/DZJC/assets/screenshots/01-scholar-category-a-b.png" alt="نتائج شبيهة بـ Google Scholar مع شارات الصنف أ والصنف ب"></a><figcaption>شارات نتائج Scholar لمجلات الصنف أ والصنف ب.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/02-category-c-predatory-unclassified.png" target="_blank" rel="noopener" aria-label="فتح لقطة الصنف ج والمفترسة وغير المصنفة بالحجم الكامل"><img src="/DZJC/assets/screenshots/02-category-c-predatory-unclassified.png" alt="نتائج شبيهة بـ Google Scholar مع الصنف ج والمفترسة وغير المصنفة"></a><figcaption>حالات الصنف ج، مجلة مفترسة، كتاب / أطروحة، نسخة أولية / مستودع، وغير مصنف.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/03-doi-resolution.png" target="_blank" rel="noopener" aria-label="فتح لقطة DOI بالحجم الكامل"><img src="/DZJC/assets/screenshots/03-doi-resolution.png" alt="نتيجة DOI شبيهة بـ Google Scholar محلولة إلى شارة الصنف أ"></a><figcaption>كشف المجلة بمساعدة DOI في نتيجة من نوع PNAS.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/04-author-profile-statistics.png" target="_blank" rel="noopener" aria-label="فتح لقطة إحصاءات المؤلف بالحجم الكامل"><img src="/DZJC/assets/screenshots/04-author-profile-statistics.png" alt="ملف مؤلف شبيه بـ Google Scholar مع إحصاءات الصنف أ والصنف ب"></a><figcaption>إحصاءات ملف المؤلف مع عدد منشورات الصنف أ والصنف ب.</figcaption></figure>
    <figure class="dzjc-screenshot"><a class="dzjc-screenshot-link" href="/DZJC/assets/screenshots/05-popup-search.png" target="_blank" rel="noopener" aria-label="فتح لقطة البحث في النافذة المنبثقة بالحجم الكامل"><img src="/DZJC/assets/screenshots/05-popup-search.png" alt="نافذة DZ Journal Check تعرض نتيجة صنف أ لـ Physical Review B"></a><figcaption>البحث في النافذة المنبثقة بعنوان المجلة أو ISSN أو E-ISSN أو DOI.</figcaption></figure>
  </div>
</section>

<section class="dzjc-section" id="install" aria-labelledby="install-ar">
  <h2 id="install-ar">التثبيت من Chrome Web Store</h2>
  <div class="dzjc-panel dzjc-note">
    <p><strong>الإصدار <span class="dzjc-ltr">1.0.7</span> متاح الآن للجميع على Chrome Web Store.</strong></p>
    <p><a class="dzjc-button dzjc-store-button" href="https://chromewebstore.google.com/detail/dz-journal-check/ggekciegmhcfnbnlhdldkjlifmmncedn" target="_blank" rel="noopener" aria-label="إضافة DZ Journal Check إلى Chrome من Chrome Web Store"><span class="dzjc-store-button-main">إضافة إلى Chrome</span><span class="dzjc-store-button-sub">Chrome Web Store</span></a></p>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="limitations-ar">
  <h2 id="limitations-ar">القيود</h2>
  <ul>
    <li>قد تتغير قوائم DGRSDT/MESRS الرسمية بعد توليد القاعدة المدمجة.</li>
    <li>قد يتغير HTML الخاص بـ Google Scholar مما يؤثر في مكان الشارات.</li>
    <li>قد تكون بيانات Crossref ناقصة أو غير متاحة مؤقتاً.</li>
    <li>المنشورات الغامضة قد تبقى مؤتمر، كتاب / أطروحة، نسخة أولية / مستودع، أو غير مصنفة لتجنب التصنيفات الخاطئة.</li>
    <li>إحصاءات الملفات قد تكون جزئية إذا حدّ Google Scholar من طلبات صفحات المؤلفين أو حجبها.</li>
    <li>القرارات الأكاديمية أو الإدارية المهمة يجب التحقق منها في مصادر DGRSDT/MESRS الرسمية.</li>
  </ul>
</section>

<section class="dzjc-section" aria-labelledby="links-ar">
  <h2 id="links-ar">معلومات إضافية</h2>
  <div class="dzjc-link-row">
    <a class="dzjc-button-secondary" href="/DZJC/permissions/">الصلاحيات</a>
    <a class="dzjc-button-secondary" href="/DZJC/report-classification/">التبليغ عن تصنيف</a>
    <a class="dzjc-button-secondary" href="/DZJC/faq/">الأسئلة الشائعة</a>
    <a class="dzjc-button-secondary" href="/DZJC/SUPPORT.html">الدعم</a>
  </div>
</section>

<section class="dzjc-section" aria-labelledby="disclaimer-ar">
  <h2 id="disclaimer-ar">تنبيه</h2>
  <div class="dzjc-note dzjc-warning">
    <p>DZ Journal Check أداة مستقلة وغير رسمية، ولا تتبع ولا تحظى بتأييد DGRSDT أو MESRS أو Google Scholar أو Crossref أو Google أو أي مؤسسة حكومية جزائرية.</p>
  </div>
</section>
</div>
