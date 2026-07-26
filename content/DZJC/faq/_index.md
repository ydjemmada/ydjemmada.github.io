+++
title = "DZ Journal Check FAQ"
description = "Frequently asked questions about DZ Journal Check."
url = "/DZJC/faq/"
type = "dzjc"
layout = "single"
image = "/DZJC/assets/dzjc-logo-512.png"
disable_analytics = true
+++

## What is DZ Journal Check?

DZ Journal Check is a Chrome extension that helps researchers check Algerian DGRSDT/MESRS journal classifications while using Google Scholar.

## Is it official?

No. It is independent and is not affiliated with or endorsed by DGRSDT, MESRS, Google Scholar, Crossref, or any Algerian government institution.

## Which classifications are supported?

The extension supports Category A, Category B, Category C, Predatory, Book / Thesis, and Unclassified labels.

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

## Does it support English, French, and Arabic?

The listing materials are prepared for English, French, and Arabic. The extension matching logic normalizes Latin and Arabic text where applicable, but Google Scholar page behavior can still vary by language and result format.

## Can it replace official verification?

No. Important academic, administrative, or publication decisions should be verified against official DGRSDT/MESRS sources.
