import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role.pt}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 0% 0%, #2b2344 0%, #0d0a17 55%)",
          color: "#f6f7f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a484d7",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#7b39fc",
            }}
          />
          {`${site.role.pt} / ${site.role.en}`}
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 110,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            color: "#a99fc4",
            maxWidth: 880,
          }}
        >
          {site.ogDescription.pt}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
            fontSize: 28,
            color: "#f6f7f9",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 22px",
                borderRadius: 12,
                background: "rgba(123,57,252,0.18)",
                border: "1px solid rgba(164,132,215,0.5)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
