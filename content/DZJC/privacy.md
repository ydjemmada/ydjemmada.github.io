+++
title = "Privacy Policy"
title_ar = "سياسة الخصوصية"
description = "Privacy policy for DZ Journal Check."
description_ar = "سياسة الخصوصية الخاصة بـ DZ Journal Check."
url = "/DZJC/PRIVACY_POLICY_PUBLIC.html"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

<div data-dzjc-lang-panel="en">

Last updated: 2026-07-26

Product: **DZ Journal Check**  
Publisher: **Yahia Djemmada**  
Contact: [yahia.djem@gmail.com](mailto:yahia.djem@gmail.com)

## Summary

DZ Journal Check is an independent Chrome extension that checks journal names, ISSNs, E-ISSNs, and DOI metadata against a bundled local DGRSDT/MESRS journal classification database.

The extension is designed for local journal classification on Google Scholar. It does not collect browsing history, Google Scholar searches, author names, article titles, account data, authentication information, financial information, health information, personal communications, or personally identifiable information.

## Data Processed Locally

Google Scholar pages are processed locally in your browser. Visible journal metadata, venue titles, ISSNs, result links, and result text may be read locally to identify journal venues and display classification badges.

This visible page information is not collected, sold, or shared by the extension.

The bundled journal database and its metadata are stored in `chrome.storage.local` so the extension can work across Manifest V3 service-worker restarts.

## DOI Transmission To Crossref

When a DOI is visible and no reliable local match is already available, the extension may send only the DOI string to Crossref at `https://api.crossref.org/works/{doi}`.

The purpose of this request is to retrieve publication metadata such as journal title, ISSN, E-ISSN, publisher, and publication type so the extension can classify the journal more reliably.

The extension does not send Google Scholar page content, author names, article titles, search queries, browsing history, account information, cookies, or authentication data to Crossref.

Crossref may process DOI requests under its own policies.

## Local Storage And Caches

The extension stores the bundled journal database and database metadata locally using Chrome extension storage. Temporary lookup caches may also exist in memory while the extension is running.

You can remove local extension data by uninstalling DZ Journal Check from Chrome or clearing extension storage through Chrome settings.

## What The Extension Does Not Do

- No browsing-history collection.
- No advertising.
- No analytics or telemetry.
- No tracking.
- No personal-data sale.
- No account registration.
- No remote executable code.
- No collection of authentication information.
- No collection of financial information.
- No collection of health information.

## External Services

The extension may contact:

- Google Scholar pages that you are already viewing, to read visible page metadata locally and fetch same-origin Scholar versions or public author profile pages when needed.
- Crossref, only to resolve DOI strings into publication metadata.

## Changes To This Policy

This policy may be updated when the extension changes. The updated version will show a new last updated date.

## Contact

For privacy questions, contact [yahia.djem@gmail.com](mailto:yahia.djem@gmail.com).

## Independent Disclaimer

DZ Journal Check is an independent and unofficial tool. It is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, Google, or any Algerian government institution.

</div>

<div data-dzjc-lang-panel="ar" hidden>

آخر تحديث: <span class="dzjc-ltr">2026-07-26</span>

المنتج: **DZ Journal Check**  
الناشر: **Yahia Djemmada**  
البريد: [yahia.djem@gmail.com](mailto:yahia.djem@gmail.com)

## ملخص

DZ Journal Check إضافة مستقلة لمتصفح Chrome تتحقق من أسماء المجلات و ISSN و E-ISSN وبيانات DOI مقارنة بقاعدة محلية مدمجة لتصنيفات DGRSDT/MESRS.

صُممت الإضافة للتصنيف المحلي للمجلات أثناء استعمال Google Scholar. لا تجمع سجل التصفح، ولا عمليات البحث في Google Scholar، ولا أسماء المؤلفين، ولا عناوين المقالات، ولا بيانات الحساب، ولا معلومات المصادقة، ولا المعلومات المالية أو الصحية أو الاتصالات الشخصية أو البيانات التعريفية الشخصية.

## البيانات المعالجة محلياً

تُعالج صفحات Google Scholar محلياً داخل متصفحك. قد تُقرأ محلياً بيانات المجلات الظاهرة، وعناوين الجهات الناشرة، و ISSN، وروابط النتائج، ونص النتيجة لتحديد المجلة وعرض شارة التصنيف.

لا تجمع الإضافة هذه المعلومات الظاهرة ولا تبيعها ولا تشاركها.

تُخزن قاعدة المجلات المدمجة وبياناتها الوصفية في `chrome.storage.local` حتى تعمل الإضافة مع إعادة تشغيل service worker في Manifest V3.

## إرسال DOI إلى Crossref

عندما يظهر DOI ولا يوجد تطابق محلي موثوق، قد ترسل الإضافة DOI فقط إلى Crossref عبر `https://api.crossref.org/works/{doi}`.

الغرض هو استرجاع بيانات النشر مثل عنوان المجلة و ISSN و E-ISSN والناشر ونوع المنشور حتى يكون التصنيف أدق.

لا ترسل الإضافة إلى Crossref محتوى صفحة Google Scholar أو أسماء المؤلفين أو عناوين المقالات أو كلمات البحث أو سجل التصفح أو معلومات الحساب أو الكوكيز أو بيانات المصادقة.

قد يعالج Crossref طلبات DOI وفق سياساته الخاصة.

## التخزين المحلي والذاكرة المؤقتة

تخزن الإضافة قاعدة المجلات وبياناتها الوصفية محلياً باستعمال تخزين إضافات Chrome. قد توجد أيضاً ذاكرات بحث مؤقتة في الذاكرة أثناء تشغيل الإضافة.

يمكن إزالة بيانات الإضافة المحلية بإلغاء تثبيت DZ Journal Check من Chrome أو بمسح تخزين الإضافة من إعدادات Chrome.

## ما الذي لا تفعله الإضافة

- لا تجمع سجل التصفح.
- لا تعرض إعلانات.
- لا تستعمل تحليلات أو قياسات عن بعد.
- لا تتبع المستخدمين.
- لا تبيع البيانات الشخصية.
- لا تطلب إنشاء حساب.
- لا تستعمل كوداً تنفيذياً عن بُعد.
- لا تجمع معلومات المصادقة.
- لا تجمع معلومات مالية.
- لا تجمع معلومات صحية.

## الخدمات الخارجية

قد تتصل الإضافة بـ:

- صفحات Google Scholar التي تزورها أصلاً، لقراءة البيانات الظاهرة محلياً وجلب نسخ Scholar أو صفحات ملفات عامة من نفس المصدر عند الحاجة.
- Crossref، فقط لحل DOI إلى بيانات نشر.

## تحديثات السياسة

قد تُحدّث هذه السياسة عند تغير الإضافة. سيظهر تاريخ تحديث جديد عند صدور نسخة محدثة.

## التواصل

لأسئلة الخصوصية، راسل [yahia.djem@gmail.com](mailto:yahia.djem@gmail.com).

## تنبيه الاستقلالية

DZ Journal Check أداة مستقلة وغير رسمية، ولا تتبع ولا تحظى بتأييد DGRSDT أو MESRS أو Google Scholar أو Crossref أو Google أو أي مؤسسة حكومية جزائرية.

</div>
