import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CoastalExperiences() {
  return (
    <main>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hidden Beaches"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hidden Beaches</h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              Discover secluded coastal paradises away from tourist crowds, where pristine waters meet untouched shores
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#experiences">Explore Our Coastal Experiences</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Undiscovered Coastal Wonders</h2>
            <p className="text-lg text-gray-700">
              Our country's coastline stretches thousands of kilometers, hiding countless pristine beaches and marine ecosystems that remain virtually unknown to the typical traveler. Lost Trails takes you beyond the crowded tourist beaches to discover secluded coves, untouched marine life, and authentic coastal communities that maintain traditional fishing and seafaring practices.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Virgin Beaches</h3>
              <p className="text-gray-600">
                Experience beaches with no footprints in the sand, pristine waters, and untouched coral reefs just offshore.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Marine Adventures</h3>
              <p className="text-gray-600">
                Snorkel among vibrant coral reefs, kayak through hidden lagoons, and observe rare marine life in pristine waters.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Coastal Communities</h3>
              <p className="text-gray-600">
                Connect with fishing villages and island communities that maintain traditional lifestyles and maritime practices.
              </p>
            </Card>
          </div>

          {/* Featured Experiences */}
          <div id="experiences" className="pt-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Coastal Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <CoastalExperienceCard
                title="Andaman Island Hopping"
                image="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Andaman Islands"
                duration="8 Days"
                difficulty="Easy to Moderate"
                season="October - May"
                description="Explore the lesser-known islands of the Andaman archipelago, discovering pristine beaches, vibrant coral reefs, and indigenous culture far from tourist crowds. This journey takes you to secluded beaches accessible only by boat and offers incredible snorkeling experiences."
                highlights={[
                  "Exclusive access to uninhabited islands and private beaches",
                  "Snorkeling in coral gardens with rich marine biodiversity",
                  "Bioluminescent beach experience after sunset",
                  "Traditional dinner with the local Nicobarese community"
                ]}
                link="/experiences/andaman-island-hopping"
              />
              <CoastalExperienceCard
                title="Hidden Coves of Karnataka"
                image="https://images.unsplash.com/photo-1621789098261-349a3c1a6a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Karnataka"
                duration="5 Days"
                difficulty="Easy"
                season="November - March"
                description="Discover the unexplored coastal gems of Karnataka's shoreline, where the Western Ghats meet the Arabian Sea. Trek along clifftop paths to reveal secluded beaches nestled between rocky outcrops, and explore coastal forests teeming with unique biodiversity."
                highlights={[
                  "Boat trip to Netrani Island for snorkeling and diving",
                  "Secret beach camping with stargazing session",
                  "Coastal ridge hikes offering panoramic ocean views",
                  "Visit to traditional fishing hamlets and seafood experiences"
                ]}
                link="/experiences/karnataka-hidden-coves"
              />
              <CoastalExperienceCard
                title="Lakshadweep Marine Sanctuary"
                image="https://images.unsplash.com/photo-1582434221535-3a33c0f68aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Lakshadweep"
                duration="6 Days"
                difficulty="Moderate"
                season="December - April"
                description="Journey to the remote coral atolls of Lakshadweep, where crystal-clear lagoons and vibrant marine ecosystems await. Limited to just a handful of travelers each month, this expedition offers an intimate experience of one of the world's most pristine coral archipelagos."
                highlights={[
                  "Exclusive permit-based access to uninhabited islands",
                  "Marine conservation activities with local researchers",
                  "Glass-bottom boat tours over vibrant coral gardens",
                  "Traditional sailing on a handcrafted Maldivian dhoni"
                ]}
                link="/experiences/lakshadweep-marine-sanctuary"
              />
              <CoastalExperienceCard
                title="Coastal Wilderness of Orissa"
                image="https://images.unsplash.com/photo-1576125335928-4ad50fb6b869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Odisha"
                duration="7 Days"
                difficulty="Easy to Moderate"
                season="November - February"
                description="Explore the pristine beaches of Odisha's coastline, where rare Olive Ridley turtles nest and nature reserves protect unique coastal ecosystems. This journey combines wildlife experiences with coastal wilderness and cultural heritage of eastern India's seaboard."
                highlights={[
                  "Witness Olive Ridley turtle nesting (seasonal)",
                  "Boat excursion through the mangroves of Bhitarkanika",
                  "Sunrise at the pristine Chandrabhaga beach",
                  "Visit to ancient coastal temples and maritime heritage sites"
                ]}
                link="/experiences/orissa-coastal-wilderness"
              />
            </div>
          </div>

          {/* Marine Life Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80"
                  alt="Coral reef and marine life"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Marine Conservation & Biodiversity</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our coastal experiences are designed with marine conservation at their core. You'll have the opportunity to:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Participate in coral monitoring</span>
                      <p className="text-gray-700">Help researchers track the health of coral reefs and document marine species.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Beach clean-up initiatives</span>
                      <p className="text-gray-700">Join local communities in maintaining the pristine nature of these hidden beaches.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Sustainable fishing practices</span>
                      <p className="text-gray-700">Learn traditional fishing methods that have been used sustainably for generations.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-lg text-gray-700">
                  A portion of the proceeds from our coastal experiences is directly contributed to marine conservation efforts in the regions we visit.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 bg-primary/5 rounded-xl p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <svg className="w-10 h-10 text-primary/30 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg text-gray-700 mb-4">
                    "The Hidden Coves of Karnataka experience was truly magical. We visited beaches I never knew existed, despite having lived in India all my life. Snorkeling at Netrani Island was the highlight—the diversity of marine life was incredible, and our guide was extremely knowledgeable about the ecosystem. The evening spent camping on a private beach under the stars is a memory I'll cherish forever."
                  </p>
                  <p className="font-bold">Meera Patel</p>
                  <p className="text-gray-600">Marine Biologist | Karnataka Hidden Coves, January 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Discover Coastal Paradise</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our coastal experiences provide exclusive access to some of the most pristine and secluded beaches in the country. Request an invite to join one of our small group expeditions.
            </p>
            <Button asChild size="lg">
              <Link href="/request-invite">Request Your Invite</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Coastal Experience Card Component
function CoastalExperienceCard({
  title,
  image,
  location,
  duration,
  difficulty,
  season,
  description,
  highlights,
  link,
}: {
  title: string;
  image: string;
  location: string;
  duration: string;
  difficulty: string;
  season: string;
  description: string;
  highlights: string[];
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{season}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-lg mb-2">Experience Highlights:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, i) => (
              <li key={highlight} className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full">
          <Link href={link}>View Experience Details</Link>
        </Button>
      </div>
    </div>
  );
}
