+++
title = "Permissions"
title_ar = "الصلاحيات"
description = "Plain-language explanation of DZ Journal Check Chrome extension permissions."
description_ar = "شرح مبسط لصلاحيات إضافة DZ Journal Check في Chrome."
url = "/DZJC/permissions/"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

<div data-dzjc-lang-panel="en">

DZ Journal Check requests only the permissions needed for its journal-classification purpose.

## Storage

The `storage` permission is used for:

- the bundled DGRSDT/MESRS journal database
- database metadata
- extension preferences if needed
- bounded local caches

The extension does not request `unlimitedStorage`.

## Google Scholar Host Access

Host access to `https://scholar.google.com/*` is used to:

- read visible publication metadata on Google Scholar pages
- identify journal titles, ISSNs, DOIs, and result links
- display classification badges
- calculate Category A and Category B statistics on public author profiles
- fetch same-origin Scholar versions or public profile pages when needed for classification

## Crossref Host Access

Host access to `https://api.crossref.org/*` is used to:

- send DOI identifiers when journal title or ISSN metadata is needed
- receive publication metadata needed for classification

Only DOI strings are sent to Crossref by the extension.

## What Is Not Done

- No browsing-history collection.
- No advertising.
- No user profiling.
- No sale of information.
- No authentication-data collection.
- No remote analytics.
- No broad host permissions.
- No cookies, history, downloads, identity, or tabs permissions.

## Related Pages

- [Privacy policy](/DZJC/PRIVACY_POLICY_PUBLIC.html)
- [Support](/DZJC/SUPPORT.html)
- [FAQ](/DZJC/faq/)

</div>

<div data-dzjc-lang-panel="ar" hidden>

تطلب DZ Journal Check الصلاحيات الضرورية فقط لغرض تصنيف المجلات.

## التخزين

تُستعمل صلاحية `storage` من أجل:

- قاعدة مجلات DGRSDT/MESRS المدمجة
- بيانات وصفية عن القاعدة
- تفضيلات الإضافة عند الحاجة
- ذاكرات تخزين محلية محدودة

لا تطلب الإضافة صلاحية `unlimitedStorage`.

## الوصول إلى Google Scholar

يُستعمل الوصول إلى `https://scholar.google.com/*` من أجل:

- قراءة بيانات المنشورات الظاهرة على صفحات Google Scholar
- تحديد عناوين المجلات و ISSN و DOI وروابط النتائج
- عرض شارات التصنيف
- حساب إحصاءات الصنف أ والصنف ب في ملفات المؤلفين العامة
- جلب نسخ Scholar أو صفحات ملفات عامة من نفس المصدر عند الحاجة للتصنيف

## الوصول إلى Crossref

يُستعمل الوصول إلى `https://api.crossref.org/*` من أجل:

- إرسال DOI عندما تكون بيانات عنوان المجلة أو ISSN ضرورية
- استقبال بيانات النشر اللازمة للتصنيف

لا ترسل الإضافة إلى Crossref إلا DOI.

## ما الذي لا تفعله الإضافة

- لا تجمع سجل التصفح.
- لا تعرض إعلانات.
- لا تنشئ ملفات تعريف للمستخدمين.
- لا تبيع المعلومات.
- لا تجمع بيانات المصادقة.
- لا تستعمل تحليلات عن بُعد.
- لا تطلب صلاحيات واسعة للمواقع.
- لا تطلب صلاحيات الكوكيز أو السجل أو التنزيلات أو الهوية أو التبويبات.

## صفحات ذات صلة

- [سياسة الخصوصية](/DZJC/PRIVACY_POLICY_PUBLIC.html)
- [الدعم](/DZJC/SUPPORT.html)
- [الأسئلة الشائعة](/DZJC/faq/)

</div>
