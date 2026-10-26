"use client";

import { useId } from "react";

/** Monograma: una J cuyo tallo es un rayo. */
export default function Logo({ size = 48, className }: { size?: number; className?: string }) {
  const id = useId();
  const bg = `${id}-bg`;
  const shine = `${id}-shine`;
  const glow = `${id}-glow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="JJ"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={bg} x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b8bff" />
          <stop offset="0.55" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect width="64" height="64" rx="16" fill={`url(#${bg})`} />
      <rect width="64" height="64" rx="16" fill={`url(#${shine})`} />

      <path
        d="M38 13 L29 30 L38 30 L32 44 C31 50 26 52 18 52"
        fill="none"
        stroke="#7cc8ff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glow})`}
        opacity="0.8"
      />
      <path d="M18 13 H46" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M38 13 L29 30 L38 30 L32 44 C31 50 26 52 18 52"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="3"
      />
    </svg>
  );
}
