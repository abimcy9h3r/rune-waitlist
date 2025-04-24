import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart2, Star, Search, Truck } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-2 border-black bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 p-3 bg-[#7B5BFF]/10 rounded-md w-fit">
            <div className="text-[#7B5BFF]">{icon}</div>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 flex-grow">{description}</p>
        </CardContent>
      </Card>
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
    },
    {
      title: "Seller Analytics",
      description:
        "Real-time insights into your sales performance, customer behavior, and inventory management.",
      icon: <BarChart2 size={24} />,
    },
    {
      title: "Buyer Reviews",
      description:
        "Build trust with authentic ratings and reviews from verified campus customers.",
      icon: <Star size={24} />,
    },
    {
      title: "Product Discovery",
      description:
        "AI-powered recommendations help students find products from campus entrepreneurs.",
      icon: <Search size={24} />,
    },
    {
      title: "Logistics Integration",
      description:
        "Seamless delivery options with campus pickup points and local courier services.",
      icon: <Truck size={24} />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Tools for Campus Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to start, run, and grow your business from your
            campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
