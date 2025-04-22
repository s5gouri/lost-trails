"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Dzukou Valley",
    location: "Nagaland / June 2025",
    description:
      "A hidden paradise nestled between Nagaland and Manipur. Explore vibrant valleys with rare flowers, trek through untouched trails and connect with local tribes who've preserved their culture for centuries.",
    image:
      "https://images.unsplash.com/photo-1603282254649-28bcaea29e6a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/destinations/dzukou-valley",
  },
  {
    id: 2,
    name: "Spiti Valley",
    location: "Himachal / July 2025",
    description:
      "Experience the stark beauty of this high-altitude desert. Stay in remote villages accessible only by foot, witness ancient monasteries, and stargaze under the clearest skies you've ever seen.",
    image:
      "https://images.unsplash.com/photo-1622246662328-cf632609d043?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/destinations/spiti-valley",
  },
  {
    id: 3,
    name: "Andaman Islands",
    location: "Andaman / September 2025",
    description:
      "Beyond the tourist hotspots lie secluded islands with pristine beaches. Kayak through mangrove forests, dive in crystal-clear waters with vibrant marine life, and camp under the stars on uninhabited shores.",
    image:
      "https://images.unsplash.com/photo-1589179447685-d3df48c29248?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/destinations/andaman-islands",
  },
  {
    id: 4,
    name: "Ziro Valley",
    location: "Arunachal Pradesh / October 2025",
    description:
      "Immerse in the rich heritage of the Apatani tribe surrounded by pine hills and rice paddies. Experience traditional homestays, learn ancestral farming techniques, and witness ancient cultural practices still alive today.",
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/destinations/ziro-valley",
  },
  {
    id: 5,
    name: "Sundarbans",
    location: "West Bengal / November 2025",
    description:
      "Venture into the world's largest mangrove forest. Navigate through a maze of waterways in search of the elusive Royal Bengal tiger, spot rare birds, and connect with communities who have adapted to this unique ecosystem.",
    image:
      "https://images.unsplash.com/photo-1602341589762-19d145811be7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/destinations/sundarbans",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            MOST EXTRAORDINARY EXPEDITIONS IN THE COUNTRY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Each journey offers the same growth x adventure x connection, while
            the landscapes change
          </motion.p>
          <div className="mt-6">
            <p className="text-xl font-medium">
              We have Limited Invites as every experience is curated meticulously
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="location-card group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className="location-image"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="location-overlay">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.location}</p>
                </div>
              </div>
              <div className="p-5 bg-white/80">
                <p className="text-gray-700 mb-4">{destination.description}</p>
                <Button asChild variant="outline" className="w-full bg-black text-white">
                  <Link href={destination.link}>See Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/destinations">Explore All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
