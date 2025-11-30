"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface StepConnectorProps {
  color?: string;
}

const StepConnector = ({ color = "#0F4C81" }: StepConnectorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3]);

  return (
    <div ref={ref} className="relative flex justify-center h-24 w-full">
      <svg
        className="absolute"
        width="4"
        height="96"
        viewBox="0 0 4 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background line */}
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="96"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Animated line */}
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="96"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="96"
          strokeDashoffset={useTransform(pathLength, [0, 1], [96, 0])}
          style={{
            opacity: opacity,
          }}
        />
      </svg>
      
      {/* Animated dot - more subtle */}
      <motion.div
        className="absolute"
        style={{
          top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          y: "-50%",
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}40`,
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default StepConnector;

