import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 20,
          border: "1px solid #222222",
        }}
      >
        <span style={{ color: "#ffffff" }}>F</span>
        <span
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#dc2626",
            marginLeft: 2,
            marginTop: 8,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

