import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function WildernessTreks() {
  return (
    <main className="bg-background text-foreground transition-colors">
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Wilderness Treks"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Wilderness Treks</h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              Venture deep into untouched forests, mountains, and valleys, where nature's grandeur remains pristine and undisturbed
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#treks">Explore Our Treks</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Discover Nature's Hidden Sanctuaries</h2>
            <p className="text-lg text-gray-400">
              Our wilderness treks take you beyond the marked trails and popular viewpoints to discover the true essence of our country's natural heritage. Led by experienced explorers with intimate knowledge of these terrains, these journeys allow you to connect deeply with the wilderness while ensuring sustainable travel practices.
            </p>
          </div>

          {/* Trek Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Uncharted Territories</h3>
              <p className="text-gray-400">
                Explore regions that rarely see outside visitors, with customized routes created by our expert team of wilderness explorers.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Camping</h3>
              <p className="text-gray-400">
                Camp under star-filled skies in carefully selected locations that offer both safety and breathtaking views.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wildlife & Biodiversity</h3>
              <p className="text-gray-400">
                Encounter rare flora and fauna with opportunities to document and contribute to ongoing conservation research.
              </p>
            </Card>
          </div>

          {/* Featured Treks */}
          <div id="treks" className="pt-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Wilderness Treks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <TrekCard
                title="Valley of Flowers Expedition"
                image="https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Uttarakhand"
                duration="7 Days"
                difficulty="Moderate"
                season="July - September"
                description="Journey through alpine meadows covered with endemic Himalayan flowers, rare medicinal herbs, and panoramic views of snow-capped peaks. This UNESCO World Heritage site transforms into a paradise of colors during the monsoon months."
                highlights={[
                  "Trek to the pristine Hemkund Sahib lake at 4,329 meters",
                  "Photography sessions in the valley's most vibrant sections",
                  "Guided botany walks with identification of rare Himalayan flora",
                  "Visit to less-explored Bhyundar valley"
                ]}
                link="/experiences/valley-of-flowers"
              />
              <TrekCard
                title="Dzukou Valley Trek"
                image="https://images.unsplash.com/photo-1461595520627-42e3c83019bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                location="Nagaland"
                duration="6 Days"
                difficulty="Moderate"
                season="June - September"
                description="Discover the 'Valley of Flowers of the Northeast,' a pristine valley at 2,452 meters known for its unique ecosystem and biodiversity. Trek through rolling hills covered with rare lilies and rhododendrons while enjoying panoramic views of the surrounding mountains."
                highlights={[
                  "Camp in the heart of the valley surrounded by wildflowers",
                  "Visit to traditional Angami Naga villages",
                  "Exploration of hidden waterfalls and streams",
                  "Sunrise view from Japfu Peak"
                ]}
                link="/experiences/dzukou-valley"
              />
              <TrekCard
                title="Silent Valley Wilderness Exploration"
                image="https://images.unsplash.com/photo-1598005044410-7e941f1b3b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Kerala"
                duration="4 Days"
                difficulty="Moderate"
                season="October - March"
                description="Venture into one of the last undisturbed tracts of South Western Ghats mountain rainforests. This expedition takes you through dense evergreen forests, home to over 1,000 species of flowering plants and rich wildlife including the endangered lion-tailed macaque."
                highlights={[
                  "Guided forest trails with expert naturalists",
                  "Wildlife observation and documentation sessions",
                  "Trek to Sairandhri and the banks of Kunthipuzha River",
                  "Visit to tribal communities at the forest fringe"
                ]}
                link="/experiences/silent-valley"
              />
              <TrekCard
                title="Tons Valley Trek"
                image="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                location="Uttarakhand"
                duration="8 Days"
                difficulty="Challenging"
                season="April - June, September - November"
                description="Explore the pristine Tons Valley, a hidden gem in the Garhwal Himalayas. Trek through dense alpine forests, remote villages, and high mountain passes, experiencing traditions and landscapes untouched by mass tourism."
                highlights={[
                  "Cross the challenging Ruinsara Pass (4,640m)",
                  "Camp beside the pristine Ruinsara Lake",
                  "Stay in traditional Himalayan villages with unique architecture",
                  "Forest walks with chances to spot Himalayan wildlife"
                ]}
                link="/experiences/tons-valley"
              />
            </div>
          </div>

          {/* Equipment & Preparation */}
          <div className="bg-background text-foreground transition-colors border rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Preparation & Equipment</h2>
                <p className="text-lg text-gray-400 mb-6">
                  Our wilderness treks require proper preparation and equipment. While we provide comprehensive packing lists specific to each trek, here are some essentials you should consider:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Good quality hiking boots
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Layered clothing
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rain protection
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sleeping bag
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Headlamp/flashlight
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personal first aid kit
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Water bottle & purification
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Trekking poles
                  </li>
                </ul>
                <p className="text-lg text-gray-400">
                  Prior to each trek, we conduct detailed briefings and fitness recommendations to ensure you're well-prepared for your wilderness adventure.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                  alt="Trekking equipment and preparation"
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
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <svg className="w-10 h-10 text-primary/30 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg text-gray-400 mb-4">
                    "The Dzukou Valley trek with Lost Trails was unlike any other trekking experience I've had. Their guides knew spots that weren't in any guidebook, and the careful attention to preserving the environment while still having an authentic adventure was impressive. The night we spent camping under the stars surrounded by wildflowers was magical."
                  </p>
                  <p className="font-bold">Anand Sharma</p>
                  <p className="text-gray-400">Wildlife Photographer | Dzukou Valley Trek, July 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Wilderness?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our wilderness treks are limited to small groups to minimize environmental impact and ensure quality experiences. Request an invite to secure your spot on our next adventure.
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

// Trek Card Component
function TrekCard({
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
    <div className="bg-background text-foreground  rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition-shadow duration-300">
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
          <div className="flex items-center text-gray-400">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{season}</span>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-lg mb-2">Trek Highlights:</h4>
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
          <Link href={link}>View Trek Details</Link>
        </Button>
      </div>
    </div>
  );
}
