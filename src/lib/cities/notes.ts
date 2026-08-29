/**
 * One line per market, for the /cities index.
 *
 * WHY THESE LIVE TOGETHER rather than in each city's own file, which is
 * where the rest of that city's content belongs.
 *
 * Their entire job is to be different from one another. Read as a set of
 * twenty-two lines stacked in a column, sameness is the only failure
 * that matters — twenty-two variations on "a major commercial centre
 * with strong outdoor demand" is exactly the directory this page was
 * before, with more words. Written twenty-two files apart, over time,
 * that is precisely what they would drift into. Written in one file they
 * can be checked against each other in a single glance.
 *
 * Each is drawn from the opening argument of that city's `market`
 * paragraphs, so nothing here asserts anything the page does not already
 * say at length. Rules 1, 2 and 3 in types.ts apply as they do
 * everywhere: no sites, no licensed figures, no rates.
 */

export const indexNotes: Record<string, string> = {
  kanpur:
    "Home. An industrial city that grew along a road and a river, not outwards from a centre.",
  lucknow:
    "A state capital before it is a consumer market. The audience is salaried and institutional.",
  varanasi:
    "Much of the crowd is passing through. Plan for transience, not for residents.",
  "delhi-ncr":
    "India's largest outdoor market and its most administratively fragmented — several authorities, several rulebooks.",
  jaipur:
    "From October to March the tourist and wedding seasons overlap. Everything follows from that.",
  chandigarh:
    "A 1954 control order whose default position is prohibition. Permission is the whole game.",
  ludhiana:
    "Punjab's industrial city, and a meaningful share of the demand here is business to business.",
  agra:
    "Millions of ticketed visitors a year, and almost none of them live in the city.",
  mumbai:
    "Two north–south spines and a suburban railway doing the same job. The linearity is the market.",
  pune: "A historic commercial heart and two modern employment wings that behave nothing alike.",
  nagpur:
    "The geographic centre of India, now behaving like a distribution node rather than a regional capital.",
  ahmedabad:
    "The Sabarmati genuinely divides this market rather than just the map. West buys unlike east.",
  surat:
    "No office district and, until recently, no central business district. The usual plan does not fit.",
  indore:
    "AB Road is the spine, and the most contested outdoor corridor in the state hangs off it.",
  bhopal:
    "A government city. Salaried, stable and institutional — nothing like Indore's trading economy.",
  bangalore:
    "The strangest outdoor market in India at the moment, and the reason is regulatory rather than commercial.",
  hyderabad:
    "Two economies inside one municipal boundary, with entirely different price sensitivities.",
  chennai:
    "A linear coastal city that grew south and west. The shape of the city is the shape of the plan.",
  kochi:
    "A bay city broken into pieces — mainland, IT east, islands. The crossings decide the plan.",
  coimbatore:
    "Compact, and it runs on three arteries. Miss one and you have missed a third of the city.",
  kolkata:
    "Movement along lines rather than across a grid, funnelled through a small number of crossings.",
  patna:
    "A linear river city inside one east–west band. That geography is the plan.",
};
