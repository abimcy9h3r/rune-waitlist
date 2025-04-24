import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface EmailCaptureFormProps {
  onSubmit?: (data: {
    email: string;
    campus: string;
    interests: string[];
  }) => void;
}

const campuses = [
  "University of Lagos",
  "University of Ibadan",
  "Covenant University",
  "University of Ghana",
  "University of Cape Town",
  "Strathmore University",
  "Other",
];

const interests = [
  { id: "buyer", label: "Buyer" },
  { id: "seller", label: "Seller" },
  { id: "investor", label: "Investor" },
];

const EmailCaptureForm = ({ onSubmit = () => {} }: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestChange = (id: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit({ email, campus, interests: selectedInterests });
      setIsSubmitting(false);
      // Reset form after submission
      setEmail("");
      setCampus("");
      setSelectedInterests([]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-2 border-black rounded-lg p-6 md:p-8 max-w-md mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Join the Waitlist
        </h2>
        <p className="text-gray-700">
          <span className="italic font-medium">
            "Rune is where Africa's next unicorns start."
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="block mb-1 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-2 border-black focus:ring-[#7B5BFF] focus:border-[#7B5BFF]"
          />
        </div>

        <div>
          <Label htmlFor="campus" className="block mb-1 font-medium">
            Campus
          </Label>
          <Select value={campus} onValueChange={setCampus}>
            <SelectTrigger
              id="campus"
              className="w-full border-2 border-black focus:ring-[#7B5BFF] focus:border-[#7B5BFF]"
            >
              <SelectValue placeholder="Select your campus" />
            </SelectTrigger>
            <SelectContent>
              {campuses.map((campus) => (
                <SelectItem key={campus} value={campus}>
                  {campus}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block mb-2 font-medium">I'm interested as a:</Label>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest) => (
              <div key={interest.id} className="flex items-center space-x-2">
                <Checkbox
                  id={interest.id}
                  checked={selectedInterests.includes(interest.id)}
                  onCheckedChange={() => handleInterestChange(interest.id)}
                  className="border-2 border-black data-[state=checked]:bg-[#7B5BFF] data-[state=checked]:border-[#7B5BFF]"
                />
                <Label htmlFor={interest.id} className="cursor-pointer">
                  {interest.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#7B5BFF] hover:bg-[#6a4de6] text-white font-bold py-3 px-6 rounded-md border-2 border-black transition-all transform hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </motion.div>
  );
};

export default EmailCaptureForm;
