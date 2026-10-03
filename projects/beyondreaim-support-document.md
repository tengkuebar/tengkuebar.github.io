---
title: BeyondReAim support document
permalink: /projects/beyondreaim-support-document/
description: Selected parts of the support document our team wrote for BeyondReAim, covering troubleshooting, incident response and backup.
---

# BeyondReAim support document

*Team TP29, FIT5120 Industry Experience, Monash University. Version 1.0, 19 May 2026.*

**Summary.** Our team wrote a support document so that someone who has never seen BeyondReAim can set it up, keep it running and respond to an incident. This page shows a few parts of it. It is a team document, so the sections below are not all my own writing. I did the security work for the project, and the security section of the document describes that side of the system.

[Back to projects]({{ '/projects/' | relative_url }})

## What the document covers

- A system map showing how the browser, the web client, the application service, the model service and the database connect.
- How to run each part locally and how to deploy to production.
- Where the data lives, how it is backed up and how a restore is tested.
- Security controls and how personal information is handled.
- Incident response, a feature reference, an API reference and a troubleshooting table.

## Troubleshooting table

Each row has a symptom, the likely cause and the fix. Here are four of them.

<div class="table-wrap" markdown="1">

| Symptom | Likely cause | Fix |
|---|---|---|
| Risk checker shows a rule-based result instead of a calibrated one | The machine learning flag is off, or the model service cannot be reached | Turn the flag on, then check the backend address and the model service health check |
| Application service returns 502 from the matching or risk endpoints | Model service is down or unreachable | Restart the model service and check that its internal address is set correctly |
| Browser console shows a cross-origin block | The web client's address is not in the allow list | Add the address to the allow list and redeploy |
| Too many requests (429) under normal load | The rate limit is set too low | Raise the limit setting and redeploy |

</div>

## Incident response

We set three severity levels so the first reply is clear.

<div class="table-wrap" markdown="1">

| Level | When | First response |
|---|---|---|
| P1 | The product is down for everyone, or data or a credential may have leaked | Acknowledge within 1 hour. Rotate any exposed credential before fixing anything else |
| P2 | A core feature is down but the product still works in part | Acknowledge within 4 hours in business hours, with a fix or workaround within one business day |
| P3 | A cosmetic issue or a non-core page problem | Acknowledge within two business days and fix in the next release |

</div>

The response steps are short. Write down the symptom, the time and the error. Then check the health probes in a fixed order (web client, application service, model service, database) and start at the first one that fails. Compare the symptom with the troubleshooting table. Log the incident with its cause and fix, and add new symptoms to the table.

## Backup and restore

The database is on a free tier with a short six-hour restore window, so the document says that is not enough. It asks for a weekly database dump kept in private storage, and a restore test into a separate database branch every quarter. A named operator owns that test and records the date, the result and the health check in a log. A failed test counts as a P2 incident.

## Security and privacy in the document

The product has no accounts and does not save user profiles on the server. Profile and quiz data stay in the user's browser. The security section lists the controls in plain terms, including a cross-origin allow list, rate limiting, input checks on every model endpoint, safe error messages and a content security policy. It also says which requests can leave the browser and where they go.

## Left out on purpose

I left out the list of known limitations and the configuration details, because the product is live and this page is public.

[Back to projects]({{ '/projects/' | relative_url }})
