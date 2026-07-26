+++
title = "Permissions"
description = "Plain-language explanation of DZ Journal Check Chrome extension permissions."
url = "/DZJC/permissions/"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

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
