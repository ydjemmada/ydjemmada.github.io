+++
title = "DZ Journal Check FAQ"
title_ar = "الأسئلة الشائعة حول DZ Journal Check"
description = "Frequently asked questions about DZ Journal Check."
description_ar = "أسئلة شائعة حول DZ Journal Check وطريقة استعمالها."
url = "/DZJC/faq/"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

<div data-dzjc-lang-panel="en">

## What is DZ Journal Check?

DZ Journal Check is a Chrome extension that helps researchers check Algerian DGRSDT/MESRS journal classifications while using Google Scholar.

## Is it official?

No. It is independent and is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, Google, or any Algerian government institution.

## Which classifications are supported?

The extension supports Category A, Category B, Category C, Predatory, Conference, Book / Thesis, Preprint / Repository, and Unclassified labels.

## Where does the database come from?

The bundled database is generated from publicly available DGRSDT/MESRS source pages and predatory source data. The current database version is 2026.07.25 and contains 34,516 records.

## Why is a paper marked Unclassified?

The visible Google Scholar result may be a repository copy, preprint, book, ambiguous venue, or result without enough journal metadata. DZ Journal Check avoids weak fuzzy matches that could create false positives.

## Why can an arXiv paper remain Unclassified?

An arXiv-only result is usually a preprint record rather than a classified journal publication. If no reliable journal venue is visible or resolved, the extension leaves it Unclassified.

## Why can a DOI improve a result?

A DOI can point to Crossref metadata that includes the journal title and ISSN. This can identify the journal when Google Scholar shows incomplete visible metadata.

## What is sent to Crossref?

Only the DOI string may be sent to Crossref when DOI metadata is needed. The extension does not send browsing history, article titles, author names, search queries, page content, cookies, or account data to Crossref.

## Does the extension collect browsing history?

No. The extension runs on Google Scholar pages and does not collect or transmit browsing history.

## Why may author statistics be partial?

Google Scholar can throttle, block, or change profile pages. If the extension cannot safely fetch all profile pages, statistics may be marked partial.

## How can I report an incorrect classification?

Use the [classification correction page](/DZJC/report-classification/) and include official DGRSDT/MESRS evidence when possible.

## How often is the database updated?

The database is bundled with the extension package. Updates require a new extension release after the source data is refreshed and verified.

## Does it work without an internet connection?

Title, ISSN, and E-ISSN searches against the bundled database can work locally after the database is loaded. DOI resolution through Crossref and live Google Scholar page access require network access.

## Can it replace official verification?

No. Important academic, administrative, or publication decisions should be verified against official DGRSDT/MESRS sources.

</div>

<div data-dzjc-lang-panel="ar" hidden>

## ما هي DZ Journal Check؟

DZ Journal Check إضافة لمتصفح Chrome تساعد الباحثين على التحقق من تصنيفات DGRSDT/MESRS الجزائرية أثناء استعمال Google Scholar.

## هل هي أداة رسمية؟

لا. هي أداة مستقلة وغير رسمية، ولا تتبع ولا تحظى بتأييد DGRSDT أو MESRS أو Google Scholar أو Crossref أو Google أو أي مؤسسة حكومية جزائرية.

## ما التصنيفات المدعومة؟

تدعم الإضافة: الصنف أ، الصنف ب، الصنف ج، مجلة مفترسة، مؤتمر، كتاب / أطروحة، نسخة أولية / مستودع، وغير مصنف.

## من أين تأتي قاعدة البيانات؟

تُولد القاعدة المدمجة من صفحات DGRSDT/MESRS العمومية ومن بيانات السجلات المفترسة. الإصدار الحالي هو <span class="dzjc-ltr">2026.07.25</span> ويحتوي على <span class="dzjc-ltr">34,516</span> سجلاً.

## لماذا تظهر ورقة على أنها غير مصنفة؟

قد تكون نتيجة Google Scholar الظاهرة نسخة في مستودع، أو نسخة أولية، أو كتاباً، أو جهة نشر غامضة، أو نتيجة لا تعرض بيانات مجلة كافية. تتجنب DZ Journal Check التطابقات الضعيفة حتى لا تظهر تصنيفات خاطئة.

## لماذا قد تبقى ورقة arXiv غير مصنفة؟

نتيجة arXiv فقط غالباً هي نسخة أولية وليست منشوراً في مجلة مصنفة. إذا لم يظهر أو يُسترجع دليل موثوق على المجلة، تتركها الإضافة غير مصنفة.

## كيف يساعد DOI؟

قد يشير DOI إلى بيانات Crossref التي تحتوي على عنوان المجلة و ISSN. هذا يساعد على التعرف على المجلة عندما تكون بيانات Google Scholar الظاهرة ناقصة.

## ماذا يُرسل إلى Crossref؟

قد يُرسل DOI فقط إلى Crossref عند الحاجة إلى بياناته. لا ترسل الإضافة سجل التصفح أو عناوين المقالات أو أسماء المؤلفين أو كلمات البحث أو محتوى الصفحة أو الكوكيز أو بيانات الحساب.

## هل تجمع الإضافة سجل التصفح؟

لا. تعمل الإضافة على صفحات Google Scholar ولا تجمع أو ترسل سجل التصفح.

## لماذا قد تكون إحصاءات المؤلف جزئية؟

قد يحد Google Scholar من طلبات صفحات الملفات أو يحجبها. إذا لم تستطع الإضافة جلب كل الصفحات بشكل آمن، قد تظهر الإحصاءات على أنها جزئية.

## كيف أبلغ عن تصنيف غير صحيح؟

استعمل [صفحة تصحيح التصنيف](/DZJC/report-classification/) وأرفق دليلاً رسمياً من DGRSDT/MESRS متى أمكن.

## كم مرة تُحدّث قاعدة البيانات؟

قاعدة البيانات مدمجة مع حزمة الإضافة. أي تحديث يتطلب إصداراً جديداً بعد تحديث المصادر والتحقق منها.

## هل تعمل دون اتصال؟

البحث بالعنوان أو ISSN أو E-ISSN في القاعدة المدمجة يمكن أن يعمل محلياً بعد تحميل القاعدة. أما حل DOI عبر Crossref والوصول الحي إلى صفحات Google Scholar فيحتاجان إلى اتصال.

## هل تغني عن التحقق الرسمي؟

لا. القرارات الأكاديمية أو الإدارية أو قرارات النشر المهمة يجب التحقق منها في مصادر DGRSDT/MESRS الرسمية.

</div>
