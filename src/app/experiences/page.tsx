import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Experiences() {
  return (
    <main className="bg-background text-foreground transition-colors">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Experiences
            </h1>
            <p className="text-xl text-gray-600">
              Extraordinary journeys to the less-traveled parts of our country, carefully curated to balance adventure with meaning
            </p>
          </div>

          {/* Experience Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Wilderness Treks"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Wilderness Treks</h2>
                <p className="mb-4">Venture deep into untouched forests, mountains, and valleys</p>
                <Button asChild variant="outline" className="bg-background text-foreground transition-colors hover:bg-white/20">
                  <Link href="/wilderness">Explore Treks</Link>
                </Button>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Hidden Beaches"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Hidden Beaches</h2>
                <p className="mb-4">Discover secluded coastal paradises away from tourist crowds</p>
                <Button asChild variant="outline" className="bg-background text-foreground transition-colors hover:bg-white/20">
                  <Link href="/coastal">Explore Beaches</Link>
                </Button>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1593528617648-0185b34f0026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Cultural Immersion"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Cultural Immersion</h2>
                <p className="mb-4">Live with indigenous communities and learn their ancient traditions</p>
                <Button asChild variant="outline" className="bg-background text-foreground transition-colors hover:bg-white/20">
                  <Link href="/cultural">Explore Immersions</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Experiences */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeaturedExperienceCard
                title="Valley of Flowers Trek"
                image="https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Uttarakhand"
                duration="7 Days"
                price="₹45,000"
                tags={["Moderate", "Hiking", "Camping"]}
                link="/experiences/valley-of-flowers"
              />
              <FeaturedExperienceCard
                title="Spiti Valley Expedition"
                image="https://images.unsplash.com/photo-1580289145536-87af976bc570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                location="Himachal Pradesh"
                duration="10 Days"
                price="₹65,000"
                tags={["Challenging", "4x4 Jeeps", "Homestays"]}
                link="/experiences/spiti-valley"
              />
              <FeaturedExperienceCard
                title="Andaman Island Hopping"
                image="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Andaman Islands"
                duration="8 Days"
                price="₹70,000"
                tags={["Easy", "Beaches", "Snorkeling"]}
                link="/experiences/andaman-island-hopping"
              />
              <FeaturedExperienceCard
                title="Dzukou Valley Expedition"
                image="https://images.unsplash.com/photo-1461595520627-42e3c83019bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                location="Nagaland"
                duration="6 Days"
                price="₹55,000"
                tags={["Moderate", "Trekking", "Camping"]}
                link="/experiences/dzukou-valley"
              />
              <FeaturedExperienceCard
                title="Bastar Tribal Immersion"
                image="https://images.unsplash.com/photo-1584490150719-368e5df13317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Chhattisgarh"
                duration="5 Days"
                price="₹40,000"
                tags={["Easy", "Cultural", "Homestays"]}
                link="/experiences/bastar-tribal-immersion"
              />
              <FeaturedExperienceCard
                title="Silent Valley Exploration"
                image="https://images.unsplash.com/photo-1598005044410-7e941f1b3b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Kerala"
                duration="4 Days"
                price="₹35,000"
                tags={["Moderate", "Wildlife", "Research"]}
                link="/experiences/silent-valley"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-background text-foreground transition-colors py-16 px-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Request Invite</h3>
                <p className="text-gray-600">
                  Fill out our form to express your interest in joining an expedition
                </p>
              </div>
              <div className="text-center border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We'll schedule a call to understand your preferences and expectations
                </p>
              </div>
              <div className="text-center border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalization</h3>
                <p className="text-gray-600">
                  We customize aspects of the journey to match your interests
                </p>
              </div>
              <div className="text-center border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Experience</h3>
                <p className="text-gray-600">
                  Embark on a carefully curated adventure off the beaten path
                </p>
              </div>
            </div>
          </div>

          {/* Request CTA */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Lost Trails Experience"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Adventure?</h2>
              <p className="text-xl mb-8 max-w-2xl">
                Our experiences are limited to small groups to ensure quality and minimal environmental impact.
                Request your invite today to secure your spot.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/request-invite">Request Your Invite</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Featured Experience Card Component
function FeaturedExperienceCard({
  title,
  image,
  location,
  duration,
  price,
  tags,
  link,
}: {
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  tags: string[];
  link: string;
}) {
  return (
    <div className="bg-background text-foreground transition-colors rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </div>
          <div className="font-bold text-primary">{price}</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button asChild className="w-full">
          <Link href={link}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}
