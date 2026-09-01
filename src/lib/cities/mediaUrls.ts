/* Official homepages for mastheads and stations named on city pages.

   City files keep their own frequencies, languages and notes. The URL
   for a brand that appears in more than one market lives here once.

   Rules:
   - Official publisher / station sites only. No Wikipedia, no
     aggregators, no social unless the brand has no site of its own.
   - Display names in city files are never rewritten to match a key.
     Combined rows ("A and B") are split at render time.
   - If a live official site could not be verified, the name stays
     plain text. Those names are listed in UNVERIFIED_MEDIA below. */

export type MediaNamePart = { text: string; url?: string };

const AKASHVANI = "https://prasarbharati.gov.in/";
const MIRCHI = "https://mirchi.in/";
const TOI = "https://timesofindia.indiatimes.com/";
const HINDU = "https://www.thehindu.com/";
const IE = "https://indianexpress.com/";
const NIE = "https://www.newindianexpress.com/";
const HT = "https://www.hindustantimes.com/";
const HINDUSTAN = "https://www.livehindustan.com/";
const JAGRAN = "https://www.jagran.com/";
const BHASKAR = "https://www.bhaskar.com/";
const THANTHI = "https://www.dailythanthi.com/";
const INEXT = "https://www.inextlive.com/";
const FEVER = "https://www.htmedia.in/fever-fm/";
const LOKMAT = "https://www.lokmat.com/";

/* Canonical brand → official site. Keys are the names as they appear
   on city pages (or the brand fragment inside a combined row). */
export const OFFICIAL_MEDIA_URLS: Record<string, string> = {
  "Amar Ujala": "https://www.amarujala.com/",
  "Dainik Jagran": JAGRAN,
  "Dainik Bhaskar": BHASKAR,
  Hindustan: HINDUSTAN,
  "Hindustan (Hindi)": HINDUSTAN,
  "Hindustan Times": HT,
  "The Times of India": TOI,
  "The Times of India, Kolkata": TOI,
  "The Times of India — Patna": TOI,
  "The Indian Express": IE,
  "The Hindu": HINDU,
  "The Hindu — Kochi": HINDU,
  "The Hindu — Coimbatore": HINDU,
  "Rajasthan Patrika": "https://www.patrika.com/",
  "The Tribune": "https://www.tribuneindia.com/",
  "Dainik Tribune": "https://www.dainiktribuneonline.com/",
  "Punjabi Tribune": "https://www.punjabitribuneonline.com/",
  "Punjab Kesari": "https://www.punjabkesari.in/",
  Ajit: "https://www.ajitjalandhar.com/",
  Jagbani: "https://jagbani.punjabkesari.in/",
  "Punjabi Jagran": "https://www.punjabijagran.com/",
  Sakal: "https://www.esakal.com/",
  Lokmat: LOKMAT,
  "Lokmat Samachar": LOKMAT,
  "Lokmat Times": "https://www.lokmattimes.com/",
  Loksatta: "https://www.loksatta.com/",
  "Maharashtra Times": "https://maharashtratimes.com/",
  "Anandabazar Patrika": "https://www.anandabazar.com/",
  "The Telegraph": "https://www.telegraphindia.com/",
  "Daily Thanthi": THANTHI,
  "Daily Thanthi (Dina Thanthi)": THANTHI,
  Dinakaran: "https://www.dinakaran.com/",
  Dinamalar: "https://www.dinamalar.com/",
  Dinamani: "https://www.dinamani.com/",
  "Maalai Malar": "https://www.maalaimalar.com/",
  "DT Next": "https://www.dtnext.in/",
  "The New Indian Express": NIE,
  "Deccan Herald": "https://www.deccanherald.com/",
  "Malayala Manorama": "https://www.manoramaonline.com/",
  Mathrubhumi: "https://www.mathrubhumi.com/",
  Deshabhimani: "https://www.deshabhimani.com/",
  Madhyamam: "https://www.madhyamam.com/",
  Deepika: "https://www.deepika.com/",
  "Kerala Kaumudi": "https://keralakaumudi.com/",
  Eenadu: "https://www.eenadu.net/",
  "Andhra Jyothy": "https://www.andhrajyothy.com/",
  Sakshi: "https://www.sakshi.com/",
  "Namasthe Telangana": "https://www.ntnews.com/",
  "Deccan Chronicle": "https://www.deccanchronicle.com/",
  "Telangana Today": "https://telanganatoday.com/",
  "The Siasat Daily": "https://www.siasat.com/",
  Munsif: "https://munsifdaily.com/",
  "Rahnuma-e-Deccan": "https://therahnuma.com/",
  "Gujarat Samachar": "https://www.gujaratsamachar.com/",
  "Divya Bhaskar": "https://www.divyabhaskar.co.in/",
  Sandesh: "https://www.sandesh.com/",
  Gujaratmitra: "https://gujaratmitra.in/",
  "Dainik Navjyoti": "https://dainiknavajyoti.com/",
  "Nava Bharat": "https://navbharatlive.com/",
  "Nai Dunia": "https://www.naidunia.com/",
  "The Hitavada": "https://www.thehitavada.com/",
  Pudhari: "https://pudhari.news/",
  "Punya Nagari": "https://epaper.punyanagari.in/",
  "Vijaya Karnataka": "https://vijaykarnataka.com/",
  Prajavani: "https://www.prajavani.net/",
  "Kannada Prabha": "https://www.kannadaprabha.com/",
  Vijayavani: "https://www.vijayavani.net/",
  "Bangalore Mirror": "https://bangaloremirror.indiatimes.com/",
  "Mumbai Mirror": "https://mumbaimirror.indiatimes.com/",
  "Navbharat Times": "https://navbharattimes.indiatimes.com/",
  "The Economic Times": "https://economictimes.indiatimes.com/",
  Mint: "https://www.livemint.com/",
  Bartaman: "https://bartamanpatrika.com/",
  "Sangbad Pratidin": "https://www.sangbadpratidin.in/",
  "Ei Samay": "https://eisamay.com/",
  "Mid-Day": "https://www.mid-day.com/",
  "Prabhat Khabar": "https://www.prabhatkhabar.com/",
  "I-Next": INEXT,
  inext: INEXT,
  "Aj (आज)": "https://ajhindidaily.com/",

  "Radio Mirchi": MIRCHI,
  Mirchi: MIRCHI,
  "Mirchi 95": MIRCHI,
  "Mirchi Love": MIRCHI,
  "Radio City": "https://www.radiocity.in/",
  "Red FM": "https://www.redfmindia.in/",
  "Big FM": "https://www.bigfmindia.com/",
  "MY FM": "https://myfmindia.com/",
  "Radio Mango": "https://www.radiomango.fm/",
  "Club FM": "https://www.clubfm.in/",
  "Suryan FM": "https://www.suryanfm.in/",
  "Radio Indigo": "https://www.indigomusic.com/",
  "Fever FM": FEVER,
  "Ishq FM": "https://ishqfm.co.in/",
  "Radio Nasha": "https://www.htmedia.in/radio-nasha/",
  "Gyan Vani Patna": "https://www.ignou.ac.in/",
};

/* TODO: no verified official homepage (leave as plain text; do not invent).
   - Local Kongu-region titles — generic catch-all, not a brand
   - Private FM — licensed, not yet on air — not a station
   - Magic FM — no standalone official site found
   - Hit FM — no live official station domain found
   - Radio One — radioone.in did not resolve; HT has been winding the brand down
   - Hello FM — hello.fm / hellofm.in did not resolve
   - Kool FM — no brand site; ENIL corporate page is not the station
   - Friends FM — 919fm.in did not resolve
   - Punjabi Fever — no distinct official site apart from Fever FM
   - Radio Tadka — fmtadka.com did not serve a live page when checked */
export const UNVERIFIED_MEDIA = [
  "Local Kongu-region titles",
  "Private FM — licensed, not yet on air",
  "Magic FM",
  "Hit FM",
  "Radio One",
  "Hello FM",
  "Kool FM",
  "Friends FM",
  "Punjabi Fever",
  "Radio Tadka",
] as const;

const BRANDS_BY_LENGTH = Object.keys(OFFICIAL_MEDIA_URLS).sort(
  (a, b) => b.length - a.length,
);

export function officialMediaUrl(
  name: string,
  override?: string,
): string | undefined {
  if (override) return override;
  if (OFFICIAL_MEDIA_URLS[name]) return OFFICIAL_MEDIA_URLS[name];
  if (name.startsWith("Akashvani ")) return AKASHVANI;
  return undefined;
}

export function mediaNameParts(
  name: string,
  override?: string,
): MediaNamePart[] {
  const whole = officialMediaUrl(name, override);
  if (whole) return [{ text: name, url: whole }];

  const parts: MediaNamePart[] = [];
  let i = 0;
  while (i < name.length) {
    const hit = BRANDS_BY_LENGTH.find((brand) => name.startsWith(brand, i));
    if (hit) {
      parts.push({ text: hit, url: OFFICIAL_MEDIA_URLS[hit] });
      i += hit.length;
      continue;
    }
    const start = i;
    i += 1;
    while (
      i < name.length &&
      !BRANDS_BY_LENGTH.some((brand) => name.startsWith(brand, i))
    ) {
      i += 1;
    }
    parts.push({ text: name.slice(start, i) });
  }

  if (!parts.some((part) => part.url)) return [{ text: name }];
  return parts;
}
