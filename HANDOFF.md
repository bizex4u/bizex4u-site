# Bizex4U website — handoff

Written for whoever picks this up next, human or Claude. Read this
before touching anything.

---

## 1. Where the code lives

`~/Downloads/bizex4u-site` on Yash's MacBook Air.

**Do not confuse it with these**, all of which are dead and should be
left alone:

| Path | What it is |
|---|---|
| `~/Downloads/bizex4u` | A Webflow-style export. Not this project. |
| `~/Downloads/bizex4u 2` | An old copy, stuck at commit `209b9da`. |
| `~/Downloads/_bizex4u_attic/` | Deliberate attic of superseded builds. |
| `~/Downloads/_to_delete/` | Tarballs Yash asked to be cleared out. |
| `~/Downloads/Archives/bizex4u.zip` | Old archive. |

The live one is the one with `apps-script/`, `scripts/` and a
`src/lib/cities/` **directory** (not a `cities.ts` file). If you see a
single `src/lib/cities.ts`, you are in an old copy.

---

## 2. Run it

```bash
cd ~/Downloads/bizex4u-site
npm install          # first time only
npm run fresh        # frees port 3000, clean build, then serves
```

Then open http://localhost:3000.

**Always use `npm run fresh`, never a bare `next build && next start`.**
There is a specific failure mode this exists to prevent, and it has cost
real hours: if a server from an earlier session still holds port 3000,
`next start` dies with EADDRINUSE while the *old* process keeps
answering. Because the build has meanwhile replaced `.next`, that old
process serves HTML pointing at content-hashed chunks that no longer
exist — every CSS and JS request 404s and the site renders as unstyled
HTML. It looks exactly like a broken stylesheet. It is two servers and
one of them is a ghost.

`scripts/free-port.mjs` runs first and aborts *before* deleting `.next`
if it cannot clear the port, so a failure leaves you with a working
build rather than a broken one. It finds the holding process via `lsof`
and falls back to reading `/proc/net/tcp` — the fallback exists because
in some Linux containers `lsof` is installed but cannot see the socket.

If the page ever renders as raw unstyled HTML, that is the ghost-server
bug. Ctrl+C every terminal running the site, then `npm run fresh`.

---

## 3. The rules. These are not style preferences.

Yash's business plans and buys media. **It does not own media.** Almost
every constraint below follows from that, and breaking one damages
either the business's credibility or its legal position.

1. **Never list inventory, site counts, specific locations held, rates
   or availability.** Describe the market, never the stock.
2. **Never claim Bizex4U owns hoardings, screens or airtime.** It plans,
   negotiates and runs.
3. **No circulation or listenership figures anywhere.** Those are
   licensed BARC/IRS/RAM numbers and publishing them is a licensing
   breach. Character of the audience only. (Published *government*
   statistics — e.g. ASI monument visitor counts — are a different
   category and are allowed, with attribution.)
4. **No rate card, ever.** There is large search demand for "hoarding
   advertising cost in <city>" and the pages capture it — but the answer
   is always the *variables*, never a number. The reasoning is on every
   page: we don't own the media, so a published rate would say what we'd
   like to charge rather than what the market will take.
5. **No case studies. Client names only.** No invented results, awards
   or tenure.
6. **Do not write "17 years" or any tenure claim.** (`site.ts` still
   carries `founded: 2008`, which feeds `foundingDate` in the contact
   page schema. Flagged to Yash; unresolved. Ask before changing.)
7. **Nothing unverified goes on a page.** Especially FM frequencies and
   mastheads — see §5.
8. **Every city gets genuinely different prose.** Never the same
   paragraph with the name swapped. Near-duplicate templated pages are
   the single most common reason a city-page network gets classed as
   thin content, and it drags the real pages down with it.

Address: Mona Enclave, Kanpur. Phone: 8090500009. No GST number on the
site, no leadership section.

The full rule set with reasoning is in `src/lib/cities/types.ts`. Read
it before adding a city.

---

## 4. What exists

**Pages:** homepage (positioned as brand activation), `/barter`, five
capability pages under `/what-we-do/`, `/cities` hub, 22 city pages,
`/about`, `/work`, `/contact`. `/perspectives` and `/careers` are still
stubs.

**Cities written (22):** Kanpur, Lucknow, Varanasi, Delhi NCR, Jaipur,
Chandigarh, Ludhiana, Agra, Mumbai, Pune, Nagpur, Ahmedabad, Surat,
Indore, Bhopal, Bangalore, Hyderabad, Chennai, Kochi, Coimbatore,
Kolkata, Patna.

**Still to write:** Vadodara, Rajkot, Nashik, Meerut, Prayagraj, Gorakhpur,
Jodhpur, Udaipur, Amritsar, Jalandhar, Guwahati, Bhubaneswar, Raipur,
Visakhapatnam, Vijayawada, Mysuru. These are listed as plain text in
`additionalMarkets` — deliberately not linked to thin pages.

**Each city page has:** hero + H1, the market (4 paras), where the
crowds are (8 named places), a format guide (8 long-tail H3s), press and
radio by name, transit, what drives the price, permissions and
compliance, the seasonal calendar, how we plan it, and 11-12 FAQs.
2,700-3,700 words. Schema: `Service` → `OfferCatalog` built from the
format guide, plus `BreadcrumbList` and `FAQPage`.

**Key files:**

| File | Why it matters |
|---|---|
| `src/lib/cities/types.ts` | The rules, with reasoning. Read first. |
| `src/lib/cities/index.ts` | The register. Add a city here. |
| `src/lib/cities/<slug>.ts` | One file per city. Header comment records what was verified and what was deliberately left out. |
| `src/app/cities/[slug]/page.tsx` | The template + JSON-LD. |
| `src/app/layout.tsx` | **Font variables must stay on `<html>`.** See §6. |
| `src/components/Motion.tsx` | GSAP + ScrollTrigger, driven by data attributes. |
| `src/components/BriefButton.tsx` | The brief dialog. Brand + name mandatory. |
| `src/app/api/brief/route.ts` | Form endpoint → Apps Script. |
| `apps-script/Code.gs` + `SETUP.md` | Sheet + email backend. |
| `scripts/free-port.mjs` | The ghost-server preflight. |

---

## 5. Verification standards — the ones that have caught real errors

**FM frequencies are not constant between cities.** This is the trap.
Verified examples from this project:

- Big FM: 92.7 in Kanpur, Delhi, Chandigarh, Indore, Bhopal — but
  **95.0 in Pune**, and **95.0 in Varanasi**.
- Fever FM: 95.0 in Kanpur, **104.0** in Delhi and Lucknow, **91.9** in
  Chennai, **94.3** in Hyderabad, **93.7** in Agra.
- Red FM: 93.5 almost everywhere — but **95.0 in Surat**.
- Radio City: 104.8 Kanpur, 91.1 Lucknow, **91.9 Varanasi and Agra**.
- Mirchi Love: 104.0 Ahmedabad, **91.9 Surat**.
- Big FM is on air in **Surat but not Ahmedabad**.
- Radio One 94.3 has come **off** the Chennai operational list.
- **Ludhiana has no operational private FM at all.**
- Indore and Bhopal share all four frequencies — the one safe copy.

Verify against the Ministry of Information & Broadcasting operational
channels list, not a "top 10 radio stations in <city>" blog. Where two
sources disagree, **publish nothing** and say why — that is what was
done for AIR Delhi, AIR Chandigarh and Bhopal's Gyan Vani.

**Closed publications.** DNA print (2019), Pune Mirror and Sakal Times
are dead and must not appear. Mumbai Mirror went weekly in Dec 2020 and
**returned to daily in June 2025** — it is in. Bangalore Mirror never
stopped. Nai Dunia is alive under Jagran Prakashan and is often wrongly
assumed dead.

**Regulatory currency.** BBMP no longer exists (replaced Sept 2025 by
the Greater Bengaluru Authority). Mumbai's Express Highway hoarding
sites are not being renewed. Chandigarh prohibits advertising by
default. Delhi prohibits trivision; Jaipur permits it. If a fact is more
than a year old, re-check it.

**Where the record is thin, say so.** No consolidated advertisement
policy could be found for Indore, Bhopal, Surat, Noida or Ludhiana. Each
page states that plainly as a finding. Do not fill those gaps with
plausible-sounding invention — the honesty is the differentiator.

---

## 6. Bugs already fixed. Do not reintroduce these.

**Fonts silently invisible.** `next/font` variables were on `<body>`
while Tailwind's `@theme` writes `--font-display: var(--font-instrument-serif)`
onto `:root`. A custom property is substituted at computed-value time on
the element where it is **declared** — so the `:root` declaration
resolved to nothing and every heading fell back to system sans. Fix:
variables go on `<html>`. Same element, or it does not resolve.

**`text-h1` does not exist** in the type scale. Reaching for it silently
drops text to body size. The rungs are `display-xl`, `display-l`, `h2`,
`h3`, `body-l`, `body`, `meta`.

**Doubled brand in titles.** `layout.tsx` applies the template
`"%s | Bizex4U"`. Do not put "| Bizex4U" in a page's `metaTitle`.

**`mix-blend-mode` on the grain** caused 64 of 269 frames over 32 ms at
2× DPR. Removing the blend fixed it (1 of 302); removing the noise
bitmap alone changed nothing. Do not add it back.

**Lenis smooth scroll** left a 928 ms coast after input stopped. Removed
and uninstalled. Do not reinstall.

**`window.open` with `noopener` always returns null** by design, so it
cannot be used to detect a blocked popup. `BriefButton` uses a
synthesised anchor click instead.

**`pkill -f "next-server"` kills your own shell** because the pattern
matches the command string. Use `scripts/free-port.mjs`.

**GSAP ScrollTrigger `pin: true` blanks the next page.** ScrollTrigger
pins by wrapping the pinned node in a `.pin-spacer` div it inserts into
the DOM — it re-parents a node React owns. On App Router soft navigation
React then tries to remove that node from its original parent, the node
is gone, `removeChild` throws `NotFoundError`, and React unmounts the
whole `<main>` subtree. The page is blank until a hard reload.

Proven by controlled test: navigating away from a page carrying a
pin-spacer blanked the destination every time; navigating away from a
page without one never did. **Two cleanup-ordering fixes both failed** —
`usePathname` in the deps array, then `useLayoutEffect` plus
`ScrollTrigger.kill(true)`. The damage happens during React's
reconciliation regardless of when GSAP reverts. There is no safe pin.
Use `position: sticky`, or the vendored scrollcraft engine. Do not add
`pin: true` back, and note `pinSpacing: false` still wraps.

**A fixed `<header>` swallowed clicks across the top 57% of every
page.** The mega panel inside it is `opacity-0 pointer-events-none` when
closed but also `lg:block`, so it still occupies 329px of layout. The
header's own box was therefore 411px tall, and a header defaults to
`pointer-events: auto`. On /cities exactly one city sat below the band
and was clickable. Reported as "only able to click and open
Chandigarh" — it read as broken linking, it was a dead click region.
The header is now `pointer-events-none` while the mega is closed, with
each interactive child opting back in; it reclaims pointer events when
the mega opens because `onMouseLeave` never fires on a
`pointer-events: none` element.

**Format plates contradicted their own caption.** The copy promised
"drawn at true proportion" while the code normalised every plate to the
same visual *area* (`h = base / sqrt(ratio)`), so a 50x20ft unipole
rendered shorter than a 40x20ft hoarding. They are now scaled by real
dimensions in feet with a 5'9" figure for reference. If you add a
format, give it real `w`/`h` in feet.

**Hover-only link underlines on a directory page.** `.link-underline`
rests at `scaleX(0)`. Correct inside a sentence, wrong for /cities where
every row is a link and none looked like one. Use `.link-row`, which
rests at 30% and adds an arrow.

**`[data-hero]` was dead code for months.** `Motion.tsx` described a
hero hold and implemented it with a pin, but no page carried the
attribute, so it never ran once. Switching it on also switched on an
`opacity: 0` tween that took the headline to 0.019 by 420px of scroll.
If you enable a long-dormant attribute, read every block that queries
it.

---

## 7. How to verify a change

Playwright scripts live in `/home/claude/tools/` **in the cloud
container only** — they are not on the Mac. If you are continuing in a
fresh container you will need to recreate them; they are short. The ones
that matter:

- `contrast.mjs <paths…>` — measures every text node against its
  computed background and reports anything under WCAG AA. Run it on
  every new page. All 19 city pages currently pass clean.
- `blank.mjs` — scrolls the homepage at three viewports and counts
  viewports with no visible text. Catches the ghost-server bug.
- `seo.mjs <paths…>` — word count, H1/H2/H3 counts, title length,
  canonical, and whether the JSON-LD actually parses.
- `shot.mjs "<path>|<w>|<h>|<name>"` — full-page screenshot at 2× DPR,
  and reports horizontal overflow.

Minimum before shipping: `npm run lint`, `npm run fresh`, then contrast
+ a screenshot of anything visually changed. Do not claim a performance
number without measuring it with `mouse.wheel` at 2× DPR — measuring
with `scrollTo` plus sleeps bypasses smooth scroll and reports the
rAF cadence of an idle page. That mistake was made once and the claim
was wrong.

---

## 8. Outstanding, for Yash

1. **Apps Script backend is not finished.** Paste the shared token into
   `apps-script/Code.gs` (line 24), redeploy as a **New version**, and
   set "Who has access: Anyone". His deployment URL is the Workspace
   form (`/a/macros/bizex4u.com/`), which may be domain-locked — if
   submissions do not arrive, that is the first thing to check.
   `.env.local` needs `BRIEF_WEBHOOK_URL` and `BRIEF_WEBHOOK_TOKEN`.
2. **Imagery is not downloaded.** Only 4 of 119 files are local; the
   rest are iCloud placeholders that read as
   `Resource deadlock avoided`. Run `brctl download` on the folder.
3. **`~/Downloads/_bizex4u_attic/` and `_to_delete/`** can be emptied.

---

## 9. Do not publish

- **Sharp tearsheets.** They carry roughly 20 named dealers with
  personal mobile numbers, plus Sharp's copyrighted creative.
- **Zebronics and Nisara creative.** Licensed celebrity talent.
- **AI-generated street footage as campaign evidence.** It would be
  presenting a synthetic image as proof of a real site. Refused
  repeatedly and should stay refused.

---

## 10. Remote and deployment

`origin` is https://github.com/bizex4u/bizex4u-site. Vercel auto-deploys
`main` to `bizex4u-site-yash-2339s-projects.vercel.app`.

History diverged once: a second machine pushed `830c5d3` while this line
of work sat on `170cb7f`. It was resolved by force-pushing this history
over it (`git checkout -B main <branch>; git push --force-with-lease`).
The discarded commits were failed attempts at the pin bug plus a stub
removal this history already contained. **Check `git log origin/main`
before assuming your local branch is ahead.**

Work reaches the Mac as git bundles in `~/Downloads/*.bundle`:
`git fetch ~/Downloads/x.bundle HEAD:branch && git merge branch`.
A range bundle needs its base commit to exist in the target repo; if it
does not, `git bundle create f.bundle --all` is self-contained.

---

## 11. Vendored third-party code

`src/vendor/scrollcraft/` and `public/vendor/scrollcraft.js` — the
engine from github.com/nateherkai/scroll-craft (MIT, (c) 2026 Nate
Herk), unmodified, with its LICENSE and a README explaining why.

It pins with `position: sticky` and generates zero DOM: it only reads
`data-sc-*` attributes and writes styles and custom properties. That is
why it can replace ScrollTrigger pinning safely.

It ships its own design floor and applies part of it globally — `body`,
`:root { caret-color; accent-color }`, `::selection`, `:focus-visible`.
`globals.css` is imported after it so the palette and faces win, but the
caret, form accent-color and focus ring all rendered acid green
(`#d8ff3e`) until the `--sc-*` tokens were remapped at the bottom of
`globals.css`. **If you add a scrollcraft device, check what else its
CSS claims.**

`ScrollCraft.tsx` mounts it once for the document — it has no
`destroy()` and every `mount()` starts a rAF loop — and calls its
`layout()` on route change. The engine has no breakpoint gate, so the
component applies `data-sc-act` only above 1024x860.

---

## 12. Immediate next steps

1. **`/work` is not launchable.** `selectedWork` in `src/lib/site.ts` is
   still placeholder: three entries reading "Client name". Fill it or
   pull /work from the nav.

2. **Licensed talent is published.** `proof-safdarjung.jpg` is the
   Nisara "Midnight Tease" creative, and the same creative appears in
   the hero reel (`public/media/reel.mp4` and both posters). Both are on
   the do-not-publish list in section 9. Take them down.

3. **Two number plates are legible** in published proof frames:
   `UP16BR9582` in `proof-kanpur.jpg`, `UP35BY7077` in
   `proof-vip-road.jpg`. Blur or reframe.

4. **Photography does not exist.** 11 of 13 routes contain zero images.
   The Drive library is ~100 monitoring photographs, none above about
   1440px, most with unreleased faces or legible plates. There is no
   shoot booked. The working answer has been diagrams built from data
   the site already carries — `SeasonBar` is the first, and the cost
   drivers, format guide and radio dayparts are the same shape. Free
   stock (Unsplash/Pexels) is the licensed route if photographs are
   wanted; Google Images is not, internal showcase or otherwise.

5. **19 tap targets under 44px**, and one `tel:` link on the entire
   mobile homepage.

6. **`founded: 2008`** is still in `src/lib/site.ts` feeding
   `foundingDate` into contact-page schema, against the no-tenure rule.

7. **No vector logo exists.** The master is a 600x600 PNG; a knocked-out
   pack is in `~/Downloads/bizex4u-logo-pack/`. Fine for web, not for a
   hoarding or a printed cover.
