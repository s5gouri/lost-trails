"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lost Trails</h3>
            <p className="text-gray-400 mb-4">
              Adventures, Experiences & Expeditions to the unexplored regions of our beautiful country
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="mailto:hello@losttrails.co"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/experiences"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/request-invite"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Request Invite
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Expeditions */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Expeditions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/dzukou-valley"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dzukou Valley
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/spiti-valley"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Spiti Valley
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/andaman-islands"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Andaman Islands
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/ziro-valley"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ziro Valley
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/sundarbans"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sundarbans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              New Delhi, India
            </p>
            <p className="text-gray-400 mb-4">
              <a
                href="mailto:hello@losttrails.co"
                className="hover:text-white transition-colors"
              >
                hello@losttrails.co
              </a>
            </p>
            <p className="text-gray-400">
              Have questions? Reach out to us on WhatsApp
            </p>
            <Link
              href="https://wa.me/919876543210"
              className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lost Trails. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
