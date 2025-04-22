import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CulturalImmersion() {
  return (
    <main>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1593528617648-0185b34f0026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Cultural Immersion"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cultural Immersion</h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              Live with indigenous communities and learn their ancient traditions, gaining rare insights into ways of life preserved through generations
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#experiences">Explore Our Cultural Experiences</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 bg-black text-white">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Authentic Cultural Connections</h2>
            <p className="text-lg text-gray-400">
              Our cultural immersion experiences offer more than just glimpses into traditional communities—they provide opportunities for meaningful exchange and understanding. Stay with indigenous families, participate in daily activities, learn ancient crafts, and witness rituals rarely seen by outsiders. These journeys are carefully designed with respect for local customs and in collaboration with community leaders to ensure authenticity and mutual benefit.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Homestay Experiences</h3>
              <p className="text-gray-600">
                Live with indigenous families in their traditional homes, participating in daily routines and gaining intimate insights into their way of life.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ancient Wisdom</h3>
              <p className="text-gray-600">
                Learn about traditional knowledge systems, healing practices, and sustainable living techniques passed down through generations.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Artistic Traditions</h3>
              <p className="text-gray-600">
                Participate in hands-on workshops to learn traditional arts, crafts, music, and dance under the guidance of skilled local artisans.
              </p>
            </Card>
          </div>

          {/* Featured Experiences */}
          <div id="experiences" className="pt-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Cultural Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <CulturalExperienceCard
                title="Bastar Tribal Immersion"
                image="https://images.unsplash.com/photo-1584490150719-368e5df13317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Chhattisgarh"
                duration="5 Days"
                difficulty="Easy"
                season="October - March"
                description="Live with the indigenous communities of Bastar, known for their unique cultural practices, distinctive art forms, and deep connection with the forest. This immersive journey takes you into villages rarely visited by outsiders, where ancient traditions remain vibrant and alive."
                highlights={[
                  "Homestay with Gond or Maria tribal families",
                  "Learn traditional bell metal and terracotta crafting",
                  "Participate in seasonal harvesting activities",
                  "Witness and join traditional music and dance ceremonies"
                ]}
                link="/experiences/bastar-tribal-immersion"
              />
              <CulturalExperienceCard
                title="Ziro Valley Cultural Expedition"
                image="https://images.unsplash.com/photo-1458442310124-dde6edb43d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Arunachal Pradesh"
                duration="6 Days"
                difficulty="Moderate"
                season="March - May, September - November"
                description="Experience the unique lifestyle of the Apatani tribe in the picturesque Ziro Valley, known for their distinctive facial tattoos, innovative agricultural practices, and rich cultural heritage that has earned recognition from UNESCO."
                highlights={[
                  "Stay in traditional bamboo stilt houses",
                  "Learn sustainable paddy-cum-fish cultivation techniques",
                  "Participate in preparation of rice beer (apong)",
                  "Attend local community gatherings and festivals (seasonal)"
                ]}
                link="/experiences/ziro-valley-cultural-expedition"
              />
              <CulturalExperienceCard
                title="Kutch Artisan Experience"
                image="https://images.unsplash.com/photo-1523282310917-57c94215f54f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Gujarat"
                duration="7 Days"
                difficulty="Easy"
                season="October - March"
                description="Immerse yourself in the vibrant textile traditions of Kutch, living with artisan families who have preserved intricate crafts for centuries. This journey takes you to remote villages across the white desert region, home to diverse communities each with their distinctive art forms."
                highlights={[
                  "Hands-on workshops in block printing, bandhani, and embroidery",
                  "Stay with nomadic Rabari communities (seasonal)",
                  "Witness the creation of Rogan art, practiced by just one family",
                  "Participation in traditional folk music evenings"
                ]}
                link="/experiences/kutch-artisan-experience"
              />
              <CulturalExperienceCard
                title="Naga Villages Expedition"
                image="https://images.unsplash.com/photo-1604248324855-4c97f7a399f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Nagaland"
                duration="8 Days"
                difficulty="Moderate"
                season="November - May"
                description="Journey into the remote villages of Nagaland to experience the diverse cultures of different Naga tribes. This expedition offers a rare opportunity to witness traditional ways of life that combine ancient animistic beliefs with contemporary adaptations."
                highlights={[
                  "Visit to Longwa village where houses straddle the India-Myanmar border",
                  "Stay in traditional Morung (youth dormitories)",
                  "Learn traditional hunting techniques and forest knowledge",
                  "Experience Naga cuisine and brewing methods"
                ]}
                link="/experiences/naga-villages-expedition"
              />
            </div>
          </div>

          {/* Cultural Etiquette & Respect */}
          <div className="bg-black text-white rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Cultural Respect & Etiquette</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our cultural immersion experiences are based on principles of mutual respect and ethical exchange. We provide comprehensive guidance on appropriate behavior and customs before and during your journey, including:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Dress codes and modesty standards</span>
                      <p className="text-gray-700">Guidelines on appropriate attire that respects local cultural norms.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Photography protocols</span>
                      <p className="text-gray-700">Respectful approaches to photography and when it's appropriate to take photos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold">Gift-giving customs</span>
                      <p className="text-gray-700">Appropriate ways to express gratitude without disrupting local economies.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-lg text-gray-700">
                  We work directly with community elders and leaders to ensure our presence is welcome and beneficial to the communities we visit, with fair compensation for their time, knowledge, and hospitality.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595827752145-8a03700b85ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Cultural interaction with local community"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 bg-primary/5 rounded-xl p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://randomuser.me/api/portraits/women/42.jpg"
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
                    "The Bastar immersion experience changed how I view indigenous cultures. Living with a Gond family, participating in their daily life, and learning their craft-making techniques provided insights I couldn't have gained any other way. The care Lost Trails takes in facilitating respectful cultural exchange is remarkable—there was no sense of voyeurism, just genuine connection and learning."
                  </p>
                  <p className="font-bold">Sarika Mehta</p>
                  <p className="text-gray-600">Anthropologist | Bastar Tribal Immersion, November 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Living Traditions</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our cultural immersion experiences offer rare opportunities to connect with communities who maintain ancient wisdom and traditions. Request an invite to join one of our small group journeys.
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

// Cultural Experience Card Component
function CulturalExperienceCard({
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
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
