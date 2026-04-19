// src/app/opengraph-image.tsx
// Next.js file-convention Open Graph image. Auto-registered for every
// route that doesn't override it — no /og-image.jpg asset to maintain.
import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/constants/site";

export const runtime = "edge";
export const alt = `${SITE_NAME} — Medical Aesthetics, West Village NYC`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0d0b09 0%, #181410 55%, #0d0b09 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#d4b173",
            fontSize: 28,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              color: "#ede4d2",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            Medical aesthetics,
            <br />
            <span style={{ fontStyle: "italic", color: "#d4b173" }}>
              refined.
            </span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#938677",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            West Village · New York City
          </div>
        </div>
      </div>
    ),
    size
  );
}
