"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const testimonials = [
  {
    id: "explorer",
    title: "Explorers",
    testimonials: [
      {
        id: 1,
        name: "Akshay Sharma",
        title: "Wildlife Photographer",
        quote:
          "Lost Trails took me to places I couldn't even find on a map. I captured photos of bird species that ornithologists rarely get to see. The local expertise and off-the-beaten-path experiences are unmatched.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Meera Patel",
        title: "Adventure Enthusiast",
        quote:
          "I've traveled extensively, but Lost Trails showed me a side of my own country I never knew existed. From sleeping under star-filled skies in the desert to breaking bread with tribal families, every moment was authentic and transformative.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  },
  {
    id: "creators",
    title: "Content Creators",
    testimonials: [
      {
        id: 3,
        name: "Rohit Mishra",
        title: "Travel Blogger & Photographer",
        quote:
          "As a content creator, I'm always looking for unique stories. Lost Trails delivered beyond my expectations. Their journeys aren't manufactured experiences—they're real adventures with real people in truly remote places. My followers couldn't believe these places exist in our country.",
        image: "https://randomuser.me/api/portraits/men/38.jpg",
      },
      {
        id: 4,
        name: "Aisha Khan",
        title: "Documentary Filmmaker",
        quote:
          "The connections Lost Trails has with local communities gave me unprecedented access to stories and traditions that would have taken months to discover on my own. My documentary on indigenous fishing techniques wouldn't have been possible without their expertise.",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
      },
    ],
  },
  {
    id: "researchers",
    title: "Researchers",
    testimonials: [
      {
        id: 5,
        name: "Dr. Vikram Singh",
        title: "Ethnobotanist",
        quote:
          "My research on traditional plant medicine advanced years ahead thanks to Lost Trails. They connected me with knowledge keepers who shared healing practices that haven't been documented. The team's respect for both scientific inquiry and traditional knowledge is remarkable.",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: 6,
        name: "Dr. Priya Nair",
        title: "Cultural Anthropologist",
        quote:
          "Lost Trails facilitated my fieldwork in areas that typically don't welcome outsiders. Their relationships with communities and ethical approach to cultural exchange created trust that would have taken me years to build on my own.",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            WHAT OUR EXPLORERS SAY
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lost Trails has unlocked rare experiences, fostered lasting connections,
            and created memories that our adventurers cherish forever.
          </p>
        </motion.div>

        <Tabs defaultValue="explorer" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {testimonials.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="text-sm md:text-base"
              >
                {group.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {testimonials.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                        <p className="italic text-gray-700">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
