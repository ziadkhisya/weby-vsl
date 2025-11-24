"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = HTMLMotionProps<"section"> & {
  id?: string;
};

const viewport = { once: true, amount: 0.2 };

export function Section({
  children,
  className,
  id,
  ...rest
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn(
        "relative mx-auto max-w-6xl px-4 md:px-8",
        "flex flex-col gap-8",
        className,
      )}
      initial={
        prefersReducedMotion ? undefined : { opacity: 0, y: 48 }
      }
      whileInView={
        prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={prefersReducedMotion ? undefined : viewport}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
      }
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export default Section;
