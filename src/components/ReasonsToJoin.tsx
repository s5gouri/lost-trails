"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    id: 1,
    title: "Experience True Disconnection",
    percentage: "98%",
    description: "of explorers feel completely detached from the digital world",
  },
  {
    id: 2,
    title: "Connect with Nature's Wonders",
    percentage: "95%",
    description: "of travelers discover landscapes they didn't know existed",
  },
  {
    id: 3,
    title: "Authentic Cultural Immersion",
    percentage: "93%",
    description: "of participants form meaningful bonds with local communities",
  },
  {
    id: 4,
    title: "Discover Inner Strength",
    percentage: "97%",
    description: "of adventurers push beyond their perceived limitations",
  },
  {
    id: 5,
    title: "Create Lifelong Memories",
    percentage: "99%",
    description: "of travelers create stories they share for years to come",
  },
  {
    id: 6,
    title: "Form Lasting Friendships",
    percentage: "94%",
    description: "of explorers stay connected with their co-travelers",
  },
];

const ReasonsToJoin = () => {
  return (
    <section className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            TOP REASONS EXPLORERS JOIN LOST TRAILS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse in unique experiences, connect with like-minded adventurers, and
            discover parts of yourself in places few have ventured. We measure these
            elements across all our expeditions to ensure every journey delivers
            on its promise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {reason.percentage}
                  </p>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoin;
