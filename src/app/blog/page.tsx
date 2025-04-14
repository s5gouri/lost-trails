import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Blog() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trail Stories
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tales, and wisdom from our explorations of the road less traveled
            </p>
          </div>

          {/* Featured Post */}
          <div className="relative rounded-xl overflow-hidden mb-16">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="A Journey Through Dzukou Valley"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">
                Featured Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                A Journey Through Dzukou Valley: The Untold Story of Nagaland's Paradise
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Join our lead explorer Vikram as he recounts the incredible biodiversity, cultural encounters, and breathtaking landscapes of this hidden gem in the Northeast.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Vikram Mehta"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Vikram Mehta</p>
                  <p className="text-white/70 text-sm">May 15, 2023 · 12 min read</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/blog/dzukou-valley-untold-story">Read Full Story</Link>
              </Button>
            </div>
          </div>

          {/* Blog Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full">All Posts</Button>
              <Button variant="outline" className="rounded-full">Adventure Stories</Button>
              <Button variant="outline" className="rounded-full">Travel Tips</Button>
              <Button variant="outline" className="rounded-full">Cultural Insights</Button>
              <Button variant="outline" className="rounded-full">Sustainability</Button>
              <Button variant="outline" className="rounded-full">Photography</Button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <BlogPostCard
              title="The Sacred Groves of Meghalaya: Nature's Hidden Temples"
              image="https://images.unsplash.com/photo-1605649461784-ecd26e7a20ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              category="Cultural Insights"
              author="Anjali Trivedi"
              date="April 22, 2023"
              excerpt="Discover the ancient tradition of sacred forests preserved by local communities for centuries, a perfect example of indigenous conservation practices."
              link="/blog/sacred-groves-meghalaya"
            />
            <BlogPostCard
              title="Packing Essentials for a Himalayan Trek: What You Really Need"
              image="https://images.unsplash.com/photo-1566103397671-68c1dbe9df68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              category="Travel Tips"
              author="Rahul Sharma"
              date="March 10, 2023"
              excerpt="Our comprehensive guide to packing smart for high-altitude treks, based on years of experience in the most challenging Himalayan conditions."
              link="/blog/himalayan-trek-packing-essentials"
            />
            <BlogPostCard
              title="Capturing the Milky Way: Night Photography in Spiti Valley"
              image="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              category="Photography"
              author="Priya Kapoor"
              date="February 18, 2023"
              excerpt="Learn the techniques our photographers use to capture the spectacular night skies in one of the most pristine dark sky regions of the world."
              link="/blog/milky-way-spiti-photography"
            />
            <BlogPostCard
              title="Beyond Plastic: How We're Making Our Expeditions Zero-Waste"
              image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              category="Sustainability"
              author="Priya Kapoor"
              date="January 30, 2023"
              excerpt="Our journey toward eliminating single-use plastics and reducing our environmental footprint while exploring the most pristine regions."
              link="/blog/zero-waste-expeditions"
            />
            <BlogPostCard
              title="The Hidden Beaches of Andaman: A Castaway's Guide"
              image="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
              category="Adventure Stories"
              author="Vikram Mehta"
              date="December 12, 2022"
              excerpt="Venture beyond the popular tourist spots to discover secluded beaches with incredible marine life and pristine coral reefs."
              link="/blog/hidden-beaches-andaman"
            />
            <BlogPostCard
              title="The Tribal Art of Bastar: Ancient Traditions in Modern Times"
              image="https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              category="Cultural Insights"
              author="Anjali Trivedi"
              date="November 5, 2022"
              excerpt="A deep dive into the incredible craftsmanship of the tribal communities of Bastar, where ancient artistic traditions continue to thrive."
              link="/blog/tribal-art-bastar"
            />
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-primary/30 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 mb-6">
                "The stories shared by Lost Trails aren't just travel tales—they're profound insights into forgotten places, traditions, and ways of life. Their blog has inspired me to seek experiences that go beyond tourism into genuine connection."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Neha Desai"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium">Neha Desai</p>
                  <p className="text-gray-600 text-sm">Documentary Filmmaker & Explorer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Story</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest stories, travel tips, and expedition announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button className="h-12">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Blog Post Card Component
function BlogPostCard({
  title,
  image,
  category,
  author,
  date,
  excerpt,
  link,
}: {
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-4 text-gray-600 text-sm">
          <span className="mr-3">{author}</span>
          <span>{date}</span>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
        <Button asChild variant="outline" className="mt-auto">
          <Link href={link}>Read Article</Link>
        </Button>
      </div>
    </div>
  );
}
