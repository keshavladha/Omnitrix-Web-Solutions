import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const alt = "Omnitrix Web Solutions — Premium Web & Digital Experiences";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#02040a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          border: "4px solid #1adbf5",
          padding: "40px",
        }}
      >
        {/* Futuristic background layout */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 50% 50%, #081528 0%, #02040a 100%)",
            opacity: 0.95,
          }}
        />

        {/* Technical HUD Corner Accents */}
        <div style={{ position: "absolute", top: 25, left: 30, color: "#40e8ff", fontSize: 13, fontWeight: "bold", letterSpacing: "0.15em" }}>[SYS_OP_INIT]</div>
        <div style={{ position: "absolute", top: 25, right: 30, color: "#2f7dff", fontSize: 13, fontWeight: "bold", letterSpacing: "0.1em" }}>COORD: 29.4478° N / 74.6592° E</div>
        <div style={{ position: "absolute", bottom: 25, left: 30, color: "#2f7dff", fontSize: 13, fontWeight: "bold", letterSpacing: "0.1em" }}>OMNITRIX_WEB_CORE_v1.0</div>
        <div style={{ position: "absolute", bottom: 25, right: 30, color: "#40e8ff", fontSize: 13, fontWeight: "bold", letterSpacing: "0.15em" }}>STATUS: ACTIVE_PIPELINE</div>

        {/* Dynamic central glassmorphic brand container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #2f7dff",
            borderRadius: "28px",
            padding: "50px 70px",
            background: "rgba(10, 14, 22, 0.85)",
            boxShadow: "0 0 50px rgba(64, 232, 255, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              marginBottom: "18px",
            }}
          >
            Omnitrix
            <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#40e8ff", marginLeft: "12px" }} />
          </div>
          
          <div
            style={{
              fontSize: 24,
              color: "#40e8ff",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              fontWeight: 700,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "20px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Digital Craft Agency
          </div>
        </div>

        {/* Tagline showing premium core services */}
        <div
          style={{
            marginTop: "35px",
            fontSize: 20,
            color: "#8a99ad",
            letterSpacing: "0.05em",
            textAlign: "center",
            maxWidth: "750px",
            lineHeight: 1.6,
          }}
        >
          Premium Web Systems • Immersive User Experiences • Scalable B2B Software Architecture
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
