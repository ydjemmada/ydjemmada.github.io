+++
title = "Privacy Policy"
description = "Privacy policy for DZ Journal Check."
url = "/DZJC/PRIVACY_POLICY_PUBLIC.html"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

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

You can remove local extension data by:

1. Uninstalling DZ Journal Check from Chrome.
2. Opening Chrome extension settings, finding DZ Journal Check, and removing the extension.
3. Clearing extension storage through Chrome site and extension data tools if needed.

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

DZ Journal Check is an independent tool using publicly available Algerian DGRSDT/MESRS journal-classification data. It is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, or any Algerian government institution.
