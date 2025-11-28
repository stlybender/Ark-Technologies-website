"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

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

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div
      className="h-[35rem] md:h-[40rem] flex items-center justify-center relative p-2 md:p-4"
      ref={containerRef}
    >
      <div
        className="py-2 md:py-3 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      transition={{ ease: "easeInOut" }}
      className="div max-w-5xl mx-auto text-center mb-6"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px rgba(15, 76, 129, 0.15), 0 37px 37px rgba(15, 76, 129, 0.12), 0 84px 50px rgba(15, 76, 129, 0.08), 0 149px 60px rgba(15, 76, 129, 0.04), 0 233px 65px rgba(15, 76, 129, 0.02)",
      }}
      transition={{ ease: "easeInOut" }}
      className="max-w-5xl -mt-6 mx-auto h-[26rem] md:h-[30rem] w-full border-4 border-ark-blue p-2 md:p-4 bg-white rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-bg-secondary md:rounded-2xl md:p-4">
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

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
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
    >
      <div
        className="py-4 md:py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          <motion.div
            key={currentIndustryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {renderIndustry(industries[currentIndustryIndex])}
          </motion.div>
        </Card>
      </div>
    </div>
  );
};

