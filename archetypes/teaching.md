---
# New course page. Create one with:   hugo new teaching/<short-name>.md
# Then fill in the fields below. PDFs go in content/teaching/lectures/ and
# content/teaching/worksheets/ (or anywhere under content/ or static/).
# Delete any list you don't need; empty lists are hidden.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
short: ""             # short name for breadcrumbs, e.g. "MD1"
level: "1st year"     # courses are grouped by this on /teaching/
weight: 100           # order on /teaching/ and the home page (smaller = first)
program: ""           # optional, e.g. "Autonomous and Embedded Systems Engineering"
institution: "NHSM"
semester: ""          # e.g. "Semester 1"
academic_year: ""     # e.g. "2026–2027"
description: "One sentence about what the course covers."

# Each item: title (required), desc (optional), file (PDF path),
# solution (optional PDF path), url (optional external link), new: true (badge)
lectures:
  - title: "Chapter 1: …"
    desc: ""
    file: "/teaching/lectures/XXX_Ch1.pdf"

exercises:
  - title: "Exercise sheet 1"
    file: "/teaching/worksheets/XXX_TD_1.pdf"
    # solution: "/teaching/worksheets/XXX_TD_1_Sol.pdf"

solutions: []
labs: []
exams: []
projects: []
---

Optional text shown above the materials (announcements, syllabus, grading…).
