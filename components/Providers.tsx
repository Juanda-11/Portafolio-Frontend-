"use client";

import { MotionConfig } from "framer-motion";

/** `reducedMotion="user"`: quita las animaciones de movimiento a quien lo pide en su sistema. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
