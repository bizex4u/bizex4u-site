import { claudeBrief } from "@/lib/claudeBrief";

export const dynamic = "force-static";

export function GET() {
  return new Response(claudeBrief(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex",
      "Content-Disposition": 'inline; filename="bizex4u-claude-brief.txt"',
    },
  });
}
