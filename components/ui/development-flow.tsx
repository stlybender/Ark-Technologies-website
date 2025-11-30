"use client";

import React from "react";
import { motion } from "motion/react";
import { Pencil, Layout, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface DevelopmentFlowProps {
  className?: string;
}

const DevelopmentFlow = ({ className }: DevelopmentFlowProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths */}
      <svg
        className="h-full sm:w-full text-border-medium"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 50 10 v 20 q 0 5 5 5 h 40 q 5 0 5 5 v 5" />
          <path d="M 100 10 v 25 q 0 5 0 5 v 5" />
          <path d="M 150 10 v 20 q 0 5 -5 5 h -40 q -5 0 -5 5 v 5" />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Animated Lights */}
        <g mask="url(#development-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#development-orange-grad)"
          />
        </g>
        <g mask="url(#development-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#development-orange-grad)"
          />
        </g>
        <g mask="url(#development-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#development-orange-grad)"
          />
        </g>
        {/* Badges */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          <g>
            <rect fill="#F97316" x="28" y="5" width="44" height="10" rx="5"></rect>
            <text x="38" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              Wireframe
            </text>
          </g>
          <g>
            <rect fill="#F97316" x="78" y="5" width="44" height="10" rx="5"></rect>
            <text x="88" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              Best Team
            </text>
          </g>
          <g>
            <rect fill="#F97316" x="128" y="5" width="44" height="10" rx="5"></rect>
            <text x="142" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              Build
            </text>
          </g>
        </g>
        <defs>
          <mask id="development-mask-1">
            <path
              d="M 50 10 v 20 q 0 5 5 5 h 40 q 5 0 5 5 v 5"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="development-mask-2">
            <path
              d="M 100 10 v 25 q 0 5 0 5 v 5"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="development-mask-3">
            <path
              d="M 150 10 v 20 q 0 5 -5 5 h -40 q -5 0 -5 5 v 5"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <radialGradient id="development-orange-grad" fx="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-ark-orange-pale/30" />
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-ark-orange bg-white px-3 py-1.5 shadow-sm">
          <Pencil className="size-3 text-ark-orange" />
          <span className="ml-2 text-[10px] font-medium text-text-primary">
            Expert Development & Design
          </span>
        </div>
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-2 border-ark-orange bg-white font-semibold text-xs text-ark-orange">
          Step 3
        </div>
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-border-light bg-white shadow-md">
          <div className="absolute bottom-6 left-8 z-10 h-7 rounded-full bg-ark-orange/10 border border-ark-orange/20 px-3 text-xs flex items-center gap-2">
            <Layout className="size-3 text-ark-orange" />
            <span className="text-text-primary">Low-Fidelity</span>
          </div>
          <div className="absolute bottom-6 right-8 z-10 h-7 rounded-full bg-ark-orange/10 border border-ark-orange/20 px-3 text-xs flex items-center gap-2">
            <Users className="size-3 text-ark-orange" />
            <span className="text-text-primary">Elite Team</span>
          </div>
          {/* Animated Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-ark-orange/20"
            animate={{ scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-ark-orange/15"
            animate={{ scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-ark-orange/10"
            animate={{ scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentFlow;

