import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
}

const HeroSection = ({
  title = "The Marketplace Built for Student Entrepreneurs",
  description = "An e-commerce platform that empowers students to sell, buy, and build sustainable businesses from campus.",
  ctaText = "Join the Waitlist",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[800px] bg-background flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#7B5BFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#7B5BFF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-black">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 border-2 border-black focus-visible:ring-[#7B5BFF]"
            />
            <Button className="h-12 px-6 text-white font-bold transition-all bg-gradient-to-r from-[#7B5BFF] to-[#5D3FD3] hover:from-[#6A4AEE] hover:to-[#4C2EC2] border-2 border-black">
              {ctaText}
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Join 500+ student entrepreneurs already on the waitlist
          </p>
        </motion.div>

        {/* Right side - Illustration */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 border-4 border-black rounded-2xl overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Campus entrepreneurs"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[#7B5BFF]/10"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-black rounded-2xl z-[-1]"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-[#7B5BFF] rounded-full opacity-20"></div>
      <div className="absolute top-12 right-12 w-12 h-12 border-4 border-black rounded-md rotate-12"></div>
    </section>
  );
};

export default HeroSection;
