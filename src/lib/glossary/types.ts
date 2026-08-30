/* ------------------------------------------------------------------
   The shape of a glossary entry.

   WHY THIS SECTION EXISTS AT ALL.

   This site uses the trade's vocabulary about seventeen hundred times
   — "hoarding" 273 times, "unipole" 102, "pole kiosk" 44, "bus queue
   shelter" 28 — and until now defined none of it anywhere. That is a
   gap in two directions at once. A first-time buyer reading a city
   page meets six nouns they have to infer from context, and a
   generative engine asked "what is a bus queue shelter" finds the
   phrase used fluently on this site and explained on somebody else's.

   The strategic point is narrower than "more pages". Indian outdoor
   has its own vocabulary — hoarding rather than billboard, unipole
   rather than monopole, BQS rather than bus stop, sky-sign as a legal
   category rather than a description — and almost nobody has defined
   it properly in public. It is the exact language an Indian buyer
   types, and it has close to no international competition. A
   definition is also the one kind of content this company can publish
   without touching a single one of its constraints: it is not a rate,
   not a site list, not a licensed audience figure and not a claimed
   client result.

   RULES. Read them before adding a term.

   1. THE FIRST SENTENCE IS THE DEFINITION. Not a preamble, not a
      throat-clear, not "in the world of outdoor advertising". A
      featured snippet and an AI answer are both roughly forty words
      long, so a first sentence that does not define the term has
      spent the entire extract saying nothing. `definition` is that
      sentence and it must stand alone, out of context, correctly.

   2. NO RATES. Ever. Same rule as the city pages. Cost questions get
      answered with the variables that move a price, never a number,
      and `priceFactors` exists so the question can be captured
      without being answered with a figure we would have to defend.

   3. NO INVENTORY. Never a site, a count, a location held or an
      availability. A definition describes a format. It never implies
      we are holding one.

   4. NO LICENSED FIGURES. No BARC, IRS or RAM numbers, no footfall
      counts, no impression figures. Government statistics with
      attribution are allowed; research we have not licensed is not.

   5. VERIFIED OR OMITTED. Every regulatory statement — a licensing
      authority, a bye-law, a tax category — gets checked against the
      issuing body's own published material before it goes in, and
      where it could not be verified the entry says so plainly rather
      than asserting it. Municipal rules differ between cities and
      change; a confidently wrong glossary is worse than no glossary,
      because a definition is precisely the thing people quote.

   6. WRITE IT FOR SOMEBODY BUYING, NOT SOMEBODY STUDYING. Every entry
      should leave the reader able to make a decision, not just pass a
      vocabulary test. That is what `whenItWorks` and `whenItDoesNot`
      are for, and `whenItDoesNot` is the more valuable of the two.

   7. NO NEAR-DUPLICATES. If two terms would produce the same page
      with a word swapped, they are one entry with an `alsoCalled`,
      not two. Thin templated pages drag down the pages that are real.

   Adding a term: write it into one of the themed files beside this
   one and register it in index.ts. The route, the hub, the sitemap
   and the schema all generate from there.
------------------------------------------------------------------- */

export type TermCategory =
  | "Formats"
  | "Digital"
  | "Production"
  | "Trade"
  | "Compliance";

export type Term = {
  slug: string;

  /* The term as the trade says it, in the case it is normally written.
     This becomes the H1 on its own — no "What is…" prefix. The prefix
     goes in the title tag, where the query lives. */
  term: string;

  /* Other names for the SAME thing. Fed to schema so both spellings
     resolve to one entry, and used on the hub so somebody searching
     the word we did not choose still finds it. If a variant would
     need a genuinely different page, it is a separate term. */
  alsoCalled?: string[];

  category: TermCategory;

  /* Meta ------------------------------------------------------
     metaTitle is written WITH the query in it — "What Is a Hoarding?"
     — because that is what gets typed, while the H1 stays as the bare
     noun. Budget: 50 characters, because the brand suffix adds ten. */
  metaTitle: string;
  metaDescription: string;

  /* RULE 1. One sentence. Must define the term completely and stand
     alone if lifted out of the page. Aim for under forty words: that
     is roughly what a snippet or an AI answer will carry. */
  definition: string;

  /* Two or three paragraphs expanding the definition. What it
     physically is, where it sits, who owns and licenses it, what
     distinguishes it from the thing it is most often confused with. */
  body: string[];

  /* The question-shaped headings. WizCommerce phrase every H2 in a
     glossary entry as a question and it is the right call: an H2 that
     matches the query verbatim is the cheapest relevance signal
     available, and it forces the writing to answer rather than
     describe. */
  sections: { q: string; a: string[] }[];

  /* Where this format or term earns its place. Concrete. */
  whenItWorks: string[];

  /* Where it does not. RULE 6 — this is the section that makes the
     entry worth reading and the one a media owner cannot write,
     because talking a buyer out of a format is against their interest
     and squarely in ours. */
  whenItDoesNot: string;

  /* RULE 2. The variables, never the figure. Ordered roughly by how
     much each one actually moves a negotiation. */
  priceFactors?: string[];

  /* FAQ, rendered with FAQPage schema. Three to five. Same discipline
     as the city pages: the answer leads, the nuance follows. */
  faq: { q: string; a: string }[];

  /* Other entries worth reading next. Slugs, validated at build time
     by the register — a link to a term that does not exist is worse
     than no link. */
  related: string[];

  /* Cities where this term carries a local particularity worth
     reading — a different authority, a different name, a rule that
     only bites here. Slugs from the city register. Optional, and
     left off rather than padded. */
  cities?: string[];
};
