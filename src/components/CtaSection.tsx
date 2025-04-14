"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612468008274-922146acc159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready for the Journey Less Traveled?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8"
          >
            Join explorers from across the country as you venture into the unknown, discover hidden wonders, and connect with people and places that redefine your understanding of travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-md">
              <Link href="/request-invite">Request Your Invite</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 text-md"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-white/80 text-lg font-light italic"
          >
            <p>
              "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience."
            </p>
            <p className="mt-2 text-sm text-white/60">— Eleanor Roosevelt</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
