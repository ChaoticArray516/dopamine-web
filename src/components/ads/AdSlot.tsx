"use client";

import { useRef } from "react";

export type AdSlotId = "header-leaderboard" | "in-content-rect" | "sidebar-skyscraper";

type AdSlotProps = {
  slotId: AdSlotId;
  aboveTheFold?: boolean;
  className?: string;
};

// 固定尺寸防止广告加载导致 CLS
const SLOT_DIMENSIONS: Record<AdSlotProps["slotId"], { minWidth: number; minHeight: number }> = {
  "header-leaderboard": { minWidth: 728, minHeight: 90 },
  "in-content-rect": { minWidth: 336, minHeight: 280 },
  "sidebar-skyscraper": { minWidth: 300, minHeight: 600 },
};

export function AdSlot({ slotId, aboveTheFold = false, className = "" }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { minWidth, minHeight } = SLOT_DIMENSIONS[slotId];

  return (
    <div
      ref={ref}
      data-ad-slot={slotId}
      data-above-the-fold={aboveTheFold ? "true" : "false"}
      className={`ad-slot ${className}`}
      style={{
        minWidth: `${minWidth}px`,
        minHeight: `${minHeight}px`,
        maxWidth: "100%",
      }}
      aria-hidden="true"
    />
  );
}
