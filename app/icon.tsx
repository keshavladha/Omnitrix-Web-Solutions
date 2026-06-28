import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#02040a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#40e8ff",
          borderRadius: "50%",
          border: "2px solid #2f7dff",
          fontWeight: 900,
          fontFamily: "sans-serif",
          boxShadow: "0 0 10px rgba(64, 232, 255, 0.75)",
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
