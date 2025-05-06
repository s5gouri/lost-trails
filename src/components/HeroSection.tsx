"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="hero-section bg-background text-foreground transition-colors"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540202404-fca3504f0b89?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920')",
      }}
    >
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DISCOVER THE UNEXPLORED
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience The Real Travel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-md">
              <Link href="/request-invite">Request an Invite</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 text-md"
            >
              <Link href="/experiences">Explore Journeys</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
