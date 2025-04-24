import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Problem {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
}

interface ProblemSolutionBlockProps {
  problems?: Problem[];
  solutions?: Solution[];
}

const ProblemSolutionBlock = ({
  problems = [
    {
      title: "Logistics Nightmares",
      description:
        "Students struggle with delivery, returns, and inventory management across campus.",
    },
    {
      title: "Messy Whatsapp Groups",
      description:
        "Disorganized whatsapp group listings make it hard for buyers to find what they need.",
    },
    {
      title: "Sales Tracking Chaos",
      description:
        "Tracking orders and managing payments becomes overwhelming for student sellers.",
    },
  ],
  solutions = [
    {
      title: "Integrated Campus Delivery",
      description:
        "Our network of campus couriers handles all logistics, from pickup to delivery.",
    },
    {
      title: "Structured Marketplace",
      description:
        "Organized categories and search tools make products and services easy to discover.",
    },
    {
      title: "Automated Sales Dashboard",
      description: "Real-time analytics and payment processing that works.",
    },
  ],
}: ProblemSolutionBlockProps) => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          The Problem <span className="text-[#7B5BFF]">vs</span> Our Solution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-6 md:p-10 rounded-lg border-2 border-gray-800 relative overflow-hidden"
          >
            {/* Glitch texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=70')] mix-blend-overlay pointer-events-none"></div>

            <h3 className="text-3xl font-bold mb-8 text-white relative z-10">
              The Problems
            </h3>

            <div className="space-y-8 relative z-10">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="border-l-4 border-red-500 pl-4 py-2"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-gray-300">{problem.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-10 rounded-lg border-2 border-[#7B5BFF] relative overflow-hidden"
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=70')] mix-blend-multiply pointer-events-none"></div>

            <h3 className="text-3xl font-bold mb-8 text-black relative z-10">
              Our Solutions
            </h3>

            <div className="space-y-8 relative z-10">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#7B5BFF] pl-4 py-2"
                >
                  <h4 className="text-xl font-bold text-black mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-gray-700">{solution.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#7B5BFF] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#6a4de6] transition-colors"
          >
            Join the Waitlist <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionBlock;
