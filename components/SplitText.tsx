"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface SplitTextProps extends HTMLMotionProps<"span"> {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.02,
  ...props
}: SplitTextProps) {
  // Split into words, then characters, preserving space so words wrap properly on mobile
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Filma standard editorial curve
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em]"
          style={{ verticalAlign: "bottom" }}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              className="inline-block"
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

export default SplitText;
