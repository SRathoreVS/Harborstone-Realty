import type { Mode } from "./mockData";

interface Props {
  leftCity: string;
  rightCity: string;
  leftValue: number;
  rightValue: number;
  mode: Mode;
}

export default function SeesawComparison({
  leftCity,
  rightCity,
  leftValue,
  rightValue,
}: Props) {
  const diff = leftValue - rightValue;
  const tilt = Math.max(-12, Math.min(12, diff / 30));

  return (
    <div style={{ marginTop: 64 }}>
      <h3 style={{ marginBottom: 24 }}>City Price Comparison</h3>

      <div
        style={{
          position: "relative",
          height: 140,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Seesaw */}
        <div
          style={{
            width: 320,
            height: 6,
            background: "#111",
            transform: `rotate(${tilt}deg)`,
            transition: "transform 0.6s ease",
          }}
        />

        {/* Left */}
        <div
          style={{
            position: "absolute",
            left: "10%",
            top: tilt > 0 ? 80 : 40,
            transition: "top 0.6s ease",
            textAlign: "center",
          }}
        >
          <strong>{leftCity}</strong>
          <p>₹ {leftValue}</p>
        </div>

        {/* Right */}
        <div
          style={{
            position: "absolute",
            right: "10%",
            top: tilt < 0 ? 80 : 40,
            transition: "top 0.6s ease",
            textAlign: "center",
          }}
        >
          <strong>{rightCity}</strong>
          <p>₹ {rightValue}</p>
        </div>
      </div>
    </div>
  );
}
