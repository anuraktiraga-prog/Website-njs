"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, motion } from "motion/react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{ borderColor: visible ? "#7e271e" : "transparent" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-none border border-transparent p-px transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `shadow-input flex h-12 w-full rounded-none border border-stone-900/15 bg-[#f9f5ef] px-3 py-2 text-base text-[#1d1915] transition duration-300 placeholder:text-stone-500 focus-visible:border-[#7e271e] focus-visible:ring-[2px] focus-visible:ring-[#7e271e]/15 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
