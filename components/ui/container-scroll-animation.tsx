"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue, useReducedMotion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95, 0.93] : [1.02, 1, 0.98];
  };

  // Keep 3D rotation on mobile but slightly reduced for smoothness
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [10, 0, -4] : [12, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div
      className="h-[46rem] md:h-[48rem] flex items-center justify-center relative p-2 md:p-4"
      ref={containerRef}
      style={{
        contentVisibility: 'auto',
      }}
    >
      <div
        className="py-2 md:py-3 w-full relative"
        style={{
          perspective: isMobile ? "800px" : "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} shouldReduceMotion={shouldReduceMotion} />
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile} shouldReduceMotion={shouldReduceMotion}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent, shouldReduceMotion }: any) => {
  return (
    <motion.div
      style={{
        translateY: shouldReduceMotion ? 0 : translate,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      transition={{ 
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.5,
      }}
      className="div max-w-5xl mx-auto text-center mb-6"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  isMobile,
  shouldReduceMotion,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  isMobile: boolean;
  shouldReduceMotion: boolean | null;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: shouldReduceMotion ? 0 : rotate,
        scale: shouldReduceMotion ? 1 : scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px rgba(15, 76, 129, 0.15), 0 37px 37px rgba(15, 76, 129, 0.12), 0 84px 50px rgba(15, 76, 129, 0.08), 0 149px 60px rgba(15, 76, 129, 0.04), 0 233px 65px rgba(15, 76, 129, 0.02)",
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        contain: 'layout style paint',
      }}
      transition={{ 
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: isMobile ? 0.4 : 0.5,
      }}
      className="max-w-5xl mt-0 mx-auto h-[32rem] md:h-[34rem] w-full border-4 border-ark-blue p-2 md:p-4 bg-white rounded-[30px] shadow-2xl"
    >
      <div 
        className="h-full w-full overflow-y-auto rounded-2xl bg-bg-secondary md:rounded-2xl md:p-4"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
export const ContainerScrollWithIndustries = ({
  titleComponent,
  industries,
  renderIndustry,
}: {
  titleComponent: string | React.ReactNode;
  industries: any[];
  renderIndustry: (industry: any) => React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Keep 3D rotation on mobile but slightly reduced for smoothness
  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [16, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Map scroll progress to industry index (split evenly across scroll range)
  const [currentIndustryIndex, setCurrentIndustryIndex] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide scroll progress into equal segments for each industry
      const segmentSize = 1 / industries.length;
      const index = Math.min(
        Math.floor(latest / segmentSize),
        industries.length - 1
      );
      setCurrentIndustryIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, industries.length]);

  return (
    <div
      className="h-[70rem] md:h-[90rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
      style={{
        contentVisibility: 'auto',
      }}
    >
      <div
        className="py-4 md:py-10 w-full relative"
        style={{
          perspective: isMobile ? "800px" : "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} shouldReduceMotion={shouldReduceMotion} />
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile} shouldReduceMotion={shouldReduceMotion}>
          <motion.div
            key={currentIndustryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: isMobile ? 0.3 : 0.5,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            className="h-full w-full"
            style={{
              willChange: 'opacity, transform',
            }}
          >
            {renderIndustry(industries[currentIndustryIndex])}
          </motion.div>
        </Card>
      </div>
    </div>
  );
};


