import { mediaNameParts } from "@/lib/cities/mediaUrls";
import { externalAnchorProps } from "@/lib/href";

export function MediaName({
  name,
  url,
}: {
  name: string;
  url?: string;
}) {
  const parts = mediaNameParts(name, url);
  if (parts.length === 1 && !parts[0].url) return name;

  return (
    <>
      {parts.map((part, i) =>
        part.url ? (
          <a
            key={`${part.text}-${i}`}
            {...externalAnchorProps(part.url)}
            className="media-name-link"
          >
            {part.text}
          </a>
        ) : (
          <span key={`${part.text}-${i}`}>{part.text}</span>
        ),
      )}
    </>
  );
}
