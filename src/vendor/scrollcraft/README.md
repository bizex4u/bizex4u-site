# scrollcraft engine — vendored

Source: https://github.com/nateherkai/scroll-craft (MIT, © 2026 Nate Herk).
Files are unmodified copies of `engine/scrollcraft.{js,css}`. LICENSE is kept
alongside them as the licence requires.

## Why it is here

The site pinned its horizontal track with GSAP ScrollTrigger `pin: true`.
ScrollTrigger implements pinning by wrapping the pinned node in a
`.pin-spacer` div it inserts into the DOM — it re-parents a node React owns.
On App Router soft navigation React then tries to remove that node from its
original parent, the node is no longer there, and `removeChild` throws
`NotFoundError`. React unmounts the whole `<main>` subtree and the page goes
blank until a hard reload.

Proven by experiment: navigating away from a page carrying a pin-spacer blanks
the destination every time; navigating away from a page without one never does.

scrollcraft pins with `position: sticky` and generates zero DOM — it only reads
`data-sc-*` attributes and writes styles and CSS custom properties. It cannot
re-parent anything, so the failure mode is structurally impossible.

It is also dependency-free vanilla JS with a `ScrollCraft.mount(root)` entry
point, which is what makes it mountable from a React effect.
