# Form intake — Google Sheet + email notifications

Every form on the site (the brief dialog and the barter selector) posts
to `/api/brief`, which forwards the submission to a Google Apps Script
web app. That script appends a row to a Google Sheet and emails you.

Nothing here costs money and nothing runs on a third-party service —
the Sheet and the script are both in your own Google account.

Fifteen minutes, once.

---

## 1. Make the Sheet

1. Go to <https://sheets.new> — it creates a blank spreadsheet.
2. Name it something like **Bizex4U — Website briefs**.

Leave it empty. The script writes the header row itself the first time
a brief arrives, so the columns can never drift out of step with the
code.

## 2. Add the script

1. In that Sheet: **Extensions → Apps Script**.
2. Delete the `function myFunction() {}` stub that's there.
3. Paste the entire contents of `apps-script/Code.gs` from this repo.
4. Change the two settings at the top:

```js
var NOTIFY_EMAIL = 'yash@bizex4u.com';
var SHARED_TOKEN = 'CHANGE-ME-to-a-long-random-string';
```

For the token, use something long and random — open a terminal and run
`openssl rand -hex 24`, or mash the keyboard for 40 characters. Keep a
copy; you need it again in step 4.

The token is what stops a stranger who finds the web app URL from
filling your Sheet with junk.

5. **Save** (the disk icon).

## 3. Deploy it

1. **Deploy → New deployment**.
2. Click the gear beside "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** *Me*
   - **Who has access:** *Anyone*
4. **Deploy**.
5. Google will ask you to authorise it. It will warn that the app isn't
   verified — that's expected for your own script. Click **Advanced →
   Go to (project name)** and allow it. It's asking for permission to
   write to your Sheet and send email as you, which is what it does.
6. Copy the **Web app URL**. It looks like:

```
https://script.google.com/macros/s/AKfy.../exec
```

**Check it worked:** paste that URL into a browser tab. You should see
`{"ok":true,"service":"bizex4u-brief-intake"}`.

## 4. Point the site at it

In the project root, create a file called **`.env.local`**:

```
BRIEF_WEBHOOK_URL=https://script.google.com/macros/s/AKfy.../exec
BRIEF_WEBHOOK_TOKEN=the-same-token-you-set-in-step-2
```

`.env.local` is gitignored, so the URL and token never reach the repo.

Then restart:

```
npm run fresh
```

## 5. Test it

Open the site, press any **Send a brief** button, fill in a brand and a
name, and submit. Within a few seconds you should have:

- a new row in the Sheet
- an email titled **New brief — {brand}**

If nothing arrives, see below.

---

## When you deploy the site properly

`.env.local` is for your machine only. On Vercel (or wherever it ends
up), add the same two values under **Settings → Environment Variables**.
The site will not read `.env.local` in production.

---

## If it doesn't work

**Nothing in the Sheet, no email.**
Open the Apps Script editor and click **Executions** in the left
sidebar. Every request shows up there with its error. The usual cause
is a token mismatch — the value in `.env.local` must match
`SHARED_TOKEN` exactly, no quotes, no trailing spaces.

**`{"ok":false,"error":"not_configured"}`**
`BRIEF_WEBHOOK_URL` isn't set, or the server wasn't restarted after you
added it. Run `npm run fresh`.

**Row appears but no email.**
Gmail sending limits are 100 recipients/day on a free account, 1,500 on
Workspace. You will not hit that from a website form, but if you have
been testing heavily, wait a day. Also check spam the first time.

**You edited the script and nothing changed.**
Apps Script serves the *deployed* version, not the saved one. After
editing: **Deploy → Manage deployments →** pencil icon **→ Version: New
version → Deploy**. The URL stays the same.

---

## What gets recorded

| Column | Where it comes from |
|---|---|
| Received | Server time, formatted IST |
| Brand, Name | Required in both forms |
| Role, Market | Brief dialog, optional |
| Enquiry about | Which page/section the button was on |
| Message | "What are you trying to do?" |
| Holding, Rough value, Markets | Barter selector only |
| Source | `brief` or `barter` |
| Page | The URL path they were on |

No IP address, no device fingerprint, no cookies — only what the person
typed and which page they typed it on.

---

## A note on what this does and doesn't guarantee

The Sheet write happens in the background so it can't delay WhatsApp
opening — browsers only allow a new tab during a direct user gesture,
and awaiting a slow network call loses that. The consequence is that if
the Sheet write fails, the visitor still reaches WhatsApp and you still
get the message there; you just don't get the row.

That's the right trade — losing a row is bad, losing the lead is worse —
but it does mean **the Sheet is a record, not the source of truth.**
WhatsApp is still where a live lead lands.
