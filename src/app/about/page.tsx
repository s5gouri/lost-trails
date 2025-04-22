import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Lost Trails
            </h1>
            <p className="text-xl text-gray-400">
              Venturing beyond the known, discovering the untold stories of our beautiful country
            </p>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-400 mb-4">
                Lost Trails was born from a simple realization: some of the most extraordinary places in our country remain hidden from the common traveler's path.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Founded by a group of passionate explorers who spent years documenting less-traveled regions, we made it our mission to open these experiences to those seeking authentic connections with nature, culture, and themselves.
              </p>
              <p className="text-lg text-gray-400">
                Since 2018, we've been carefully curating small-group expeditions that balance adventure with sustainability, immersion with respect, and discovery with preservation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527942222795-4c32a0836ff0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Explorers sitting around a campfire"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-black text-white py-16 px-8 rounded-xl mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Responsible Exploration</h3>
                <p className="text-gray-700">
                  We travel with minimal environmental impact, support local conservation efforts, and ensure our presence benefits the regions we visit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Authentic Immersion</h3>
                <p className="text-gray-700">
                  We forge genuine connections with local communities, respecting their customs and traditions while creating opportunities for meaningful cultural exchange.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Transformative Experiences</h3>
                <p className="text-gray-700">
                  We believe that venturing into the unknown isn't just about seeing new places—it's about discovering new perspectives and returning changed.
                </p>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Vikram Mehta"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Vikram Mehta</h3>
                <p className="text-gray-600">Founder & Lead Explorer</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="Anjali Trivedi"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Anjali Trivedi</h3>
                <p className="text-gray-600">Expedition Curator</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/men/36.jpg"
                    alt="Rahul Sharma"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Rahul Sharma</h3>
                <p className="text-gray-600">Local Experience Expert</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/women/36.jpg"
                    alt="Priya Kapoor"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Priya Kapoor</h3>
                <p className="text-gray-600">Sustainability Director</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Adventures?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Become part of a community that's redefining exploration in our country. Request an invite to one of our upcoming expeditions.
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
