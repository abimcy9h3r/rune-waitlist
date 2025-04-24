import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart2, Star, Search, Truck, Tag } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  category: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
  category,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#7B5BFF] to-[#FF7B5B] opacity-20 rounded-lg blur-sm group-hover:opacity-40 transition-all duration-300"></div>
      <div className="relative h-full overflow-hidden rounded-lg border-2 border-black bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-6 flex flex-col">
        <div className="absolute top-3 right-3 bg-[#7B5BFF]/10 px-3 py-1 rounded-full text-xs font-medium text-[#7B5BFF]">
          {category}
        </div>
        <div className="mb-4 p-3 bg-[#7B5BFF]/10 rounded-full w-14 h-14 flex items-center justify-center">
          <div className="text-[#7B5BFF]">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      title: "SecureTrade Escrow",
      description:
        "Secure payments held until buyers confirm receipt, protecting both parties in every transaction.",
      icon: <ShieldCheck size={24} />,
      category: "Security",
    },
    {
      title: "Seller Analytics",
      description:
        "Real-time insights into your sales performance, customer behavior, and inventory management.",
      icon: <BarChart2 size={24} />,
      category: "Analytics",
    },
    {
      title: "Buyer Reviews",
      description:
        "Build trust with authentic ratings and reviews from verified campus customers.",
      icon: <Star size={24} />,
      category: "Trust",
    },
    {
      title: "Product Discovery",
      description:
        "AI-powered recommendations help students find products from campus entrepreneurs.",
      icon: <Search size={24} />,
      category: "Discovery",
    },
    {
      title: "Logistics Integration",
      description:
        "Seamless delivery options with campus pickup points and local courier services.",
      icon: <Truck size={24} />,
      category: "Delivery",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-[#7B5BFF]/10 text-[#7B5BFF] font-medium px-4 py-2 rounded-full text-sm">
              Powerful Features
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Tools for Campus{" "}
            <span className="text-[#7B5BFF]">Entrepreneurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to start, run, and grow your business from your
            campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              category={feature.category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
