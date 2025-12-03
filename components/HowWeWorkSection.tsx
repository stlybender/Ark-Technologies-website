"use client";

import React from "react";
import { motion } from "motion/react";
import DiscoveryFlow from "./ui/discovery-flow";
import PlanningFlow from "./ui/planning-flow";
import DevelopmentFlow from "./ui/development-flow";
import DeliveryFlow from "./ui/delivery-flow";
import StepConnector from "./ui/step-connector";

const HowWeWorkSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative bg-bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
            Our Process
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-text-secondary sm:text-xl">
            From discovery to delivery, we follow a proven process to transform your business 
            with AI and automation. Each step is designed to maximize value and ensure success.
          </p>
        </motion.div>

        {/* Process Flow - Vertical Layout */}
        <div className="mx-auto max-w-2xl">
          {/* Discovery */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <DiscoveryFlow className="mb-6" />
            <div className="max-w-md text-center">
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">
                Discovery & Understanding
              </h3>
              <p className="text-text-secondary">
                We begin with an introductory call to deeply understand your business challenges, 
                existing workflows, and identify where AI and automation can add the most value.
              </p>
            </div>
          </motion.div>

          {/* Connector 1 */}
          <StepConnector color="#06B6D4" />

          {/* Planning */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <PlanningFlow className="mb-6" />
            <div className="max-w-md text-center">
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">
                Strategic Planning
              </h3>
              <p className="text-text-secondary">
                We develop comprehensive solutions that address your business problems. 
                Our team identifies AI opportunities and creates a strategic roadmap for implementation.
              </p>
            </div>
          </motion.div>

          {/* Connector 2 */}
          <StepConnector color="#F97316" />

          {/* Development */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <DevelopmentFlow className="mb-6" />
            <div className="max-w-md text-center">
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">
                Design & Development
              </h3>
              <p className="text-text-secondary">
                Starting with low-fidelity wireframes, we iterate rapidly. Our elite team 
                of developers and designers bring your vision to life with cutting-edge technology.
              </p>
            </div>
          </motion.div>

          {/* Connector 3 */}
          <StepConnector color="#1565A6" />

          {/* Delivery */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <DeliveryFlow className="mb-6" />
            <div className="max-w-md text-center">
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">
                Launch & Support
              </h3>
              <p className="text-text-secondary">
                After rigorous testing, we deploy your solution and provide ongoing support. 
                We ensure smooth operations and continuous improvement to maximize ROI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="mb-4 text-2xl font-semibold text-text-primary sm:text-3xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-lg text-text-secondary">
            Let's discuss how we can solve your business challenges with AI and automation.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-ARK-blue px-8 py-3 text-base font-medium text-white transition-colors hover:bg-ARK-blue-dark focus:outline-none focus:ring-2 focus:ring-ARK-blue focus:ring-offset-2"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

