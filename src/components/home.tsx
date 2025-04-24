import React from "react";
import HeroSection from "./HeroSection";
import ProblemSolutionBlock from "./ProblemSolutionBlock";
import FeatureGrid from "./FeatureGrid";
import EmailCaptureForm from "./EmailCaptureForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Solution Block */}
        <ProblemSolutionBlock />

        {/* Feature Grid */}
        <FeatureGrid />

        {/* Testimonial Section */}
        <div className="py-20 text-center">
          <blockquote className="text-3xl md:text-4xl font-bold italic mb-6 text-black">
            "Rune is where Africa's next unicorns start."
          </blockquote>
          <div className="w-24 h-1 bg-[#7B5BFF] mx-auto"></div>
        </div>

        {/* Email Capture Form */}
        <div className="py-16 flex justify-center">
          <EmailCaptureForm />
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-black">Rune</h2>
              <p className="text-gray-600 mt-2">
                The Marketplace Built for Student Entrepreneurs
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#7B5BFF]">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-[#7B5BFF]">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#7B5BFF]">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Rune. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
