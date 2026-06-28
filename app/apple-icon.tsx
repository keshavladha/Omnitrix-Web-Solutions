import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#02040a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#40e8ff",
          borderRadius: "36px",
          border: "8px solid #2f7dff",
          fontWeight: 900,
          fontFamily: "sans-serif",
          boxShadow: "0 0 50px rgba(64, 232, 255, 0.4)",
        }}
      >
        O
      </div>
    ),
    {
      ...size,
    }
  );
}
