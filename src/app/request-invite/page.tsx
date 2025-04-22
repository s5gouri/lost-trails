import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestForm from "./RequestForm";

export default function RequestInvite() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Request Your Invite
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Join a select group of adventurers exploring the unexplored regions of our
              beautiful country. Fill out this form to request an invite to one of
              our upcoming expeditions.
            </p>
            <RequestForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
