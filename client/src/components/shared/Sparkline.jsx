import React from "react";
import { C } from "../../theme.js";

export default function Sparkline() {
  return (
    <svg viewBox="0 0 160 56" width="100%" height="56" fill="none">
      <path
        d="M2 44 C 22 44, 22 30, 40 30 C 56 30, 56 40, 72 40 C 90 40, 90 18, 108 18 C 124 18, 124 26, 140 22 C 148 20, 152 10, 158 6"
        stroke={C.mint}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="158" cy="6" r="4" fill={C.mint} />
    </svg>
  );
}
