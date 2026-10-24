import React from "react";

export function Amp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans font-bold inline-block mx-0.5 ${className}`}
      style={{ fontFamily: "var(--font-jakarta), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      &amp;
    </span>
  );
}

export default Amp;
