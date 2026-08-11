"use client";

import { motion } from "motion/react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&-";
const BOARD_ROWS = 4;
const BOARD_COLS = 22;

function wrapText(text: string) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    if (line && line.length + word.length + 1 > BOARD_COLS) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }

  if (line) lines.push(line);
  return lines.slice(0, BOARD_ROWS);
}

const FlapCell = memo(function FlapCell({
  target,
  delay,
  stepMs,
}: {
  target: string;
  delay: number;
  stepMs: number;
}) {
  const [current, setCurrent] = useState(" ");
  const [previous, setPrevious] = useState(" ");
  const [flipId, setFlipId] = useState(0);
  const currentRef = useRef(" ");

  useEffect(() => {
    const normalized = FLAP_CHARS.includes(target) ? target : " ";
    if (normalized === " ") return;

    let stepTimer: number | undefined;
    const startTimer = window.setTimeout(() => {
      let step = 0;
      const flip = () => {
        const isLast = step === 7;
        const next = isLast
          ? normalized
          : FLAP_CHARS[1 + Math.floor(Math.random() * (FLAP_CHARS.length - 1))];

        setPrevious(currentRef.current);
        currentRef.current = next;
        setCurrent(next);
        setFlipId((id) => id + 1);
        step += 1;

        if (!isLast) stepTimer = window.setTimeout(flip, stepMs);
      };
      flip();
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (stepTimer) window.clearTimeout(stepTimer);
    };
  }, [delay, stepMs, target]);

  const display = current === " " ? "\u00A0" : current;
  const previousDisplay = previous === " " ? "\u00A0" : previous;
  const characterStyle = { fontSize: "clamp(0.38rem, 1.65vw, 1.2rem)" };

  return (
    <div className="relative overflow-hidden border border-[#52211c]/20 bg-[#e5d6c2]" style={{ aspectRatio: "3 / 5", perspective: "700px" }}>
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden border-b border-[#52211c]/25 bg-[#f5ede2]">
        <span className="absolute inset-x-0 top-0 flex h-[200%] items-center justify-center font-mono font-bold text-[#411914]" style={characterStyle}>{display}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[#e0cdb5]">
        <span className="absolute inset-x-0 bottom-0 flex h-[200%] items-center justify-center font-mono font-bold text-[#411914]" style={characterStyle}>{display}</span>
      </div>
      {flipId > 0 ? (
        <>
          <motion.div
            key={`top-${flipId}`}
            className="absolute inset-x-0 top-0 z-10 h-1/2 origin-bottom overflow-hidden border-b border-[#52211c]/25 bg-[#f5ede2]"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -100 }}
            transition={{ duration: 0.18, ease: [0.55, 0.055, 0.675, 0.19] }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="absolute inset-x-0 top-0 flex h-[200%] items-center justify-center font-mono font-bold text-[#411914]" style={characterStyle}>{previousDisplay}</span>
          </motion.div>
          <motion.div
            key={`bottom-${flipId}`}
            className="absolute inset-x-0 bottom-0 z-10 h-1/2 origin-top overflow-hidden bg-[#e0cdb5]"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.16, delay: 0.09, ease: [0.33, 1.2, 0.64, 1] }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="absolute inset-x-0 bottom-0 flex h-[200%] items-center justify-center font-mono font-bold text-[#411914]" style={characterStyle}>{display}</span>
          </motion.div>
        </>
      ) : null}
    </div>
  );
});

export function TextFlippingBoard({ text, className, duration = 0.7 }: { text: string; className?: string; duration?: number }) {
  const board = useMemo(() => {
    const grid = Array.from({ length: BOARD_ROWS }, () => Array.from({ length: BOARD_COLS }, () => " "));
    const lines = wrapText(text);
    const startRow = Math.max(0, Math.floor((BOARD_ROWS - lines.length) / 2));

    lines.forEach((line, rowIndex) => {
      const startColumn = Math.max(0, Math.floor((BOARD_COLS - line.length) / 2));
      line.split("").forEach((character, columnIndex) => {
        if (startColumn + columnIndex < BOARD_COLS) grid[startRow + rowIndex][startColumn + columnIndex] = character;
      });
    });

    return grid;
  }, [text]);

  const scale = duration / 0.7;

  return (
    <div className={cn("w-full max-w-xl border-[6px] border-[#451b17] bg-[#2a201c] p-1.5 shadow-[0_18px_48px_rgba(29,25,21,0.22)] sm:border-[8px] sm:p-2", className)}>
      <div className="mb-2 text-center text-[8px] uppercase tracking-[0.25em] text-[#f1ddc6] sm:text-[9px]">ANURRAKTI / forthcoming</div>
      <div className="grid gap-px sm:gap-0.5" style={{ gridTemplateColumns: `repeat(${BOARD_COLS}, minmax(0, 1fr))` }}>
        {board.flatMap((row, rowIndex) => row.map((character, columnIndex) => (
          <FlapCell key={`${rowIndex}-${columnIndex}`} target={character} delay={(columnIndex * 15 + rowIndex * 10) * scale} stepMs={32 * scale} />
        )))}
      </div>
    </div>
  );
}
