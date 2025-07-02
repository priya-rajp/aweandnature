import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function AweNatureStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Awe & Nature Research Study
        </motion.h1>

        <p className="text-gray-700 text-lg mb-6">
          Help us understand how images of nature evoke feelings of awe.
          Participate in a short 2-week online study and contribute to important research.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Study Overview</h2>
            <ul className="text-left text-gray-700 list-disc pl-5 space-y-2">
              <li>Initial questionnaire: 2–5 minutes</li>
              <li>Daily surveys for 13 days: 5–7 minutes each (evenings, GMT)</li>
              <li>Fully online and voluntary</li>
              <li>Eligibility: 18+ and available daily for 2 weeks</li>
            </ul>
          </CardContent>
        </Card>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          <a href="https://your-survey-link.com" target="_blank" rel="noopener">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-full">
              Join the Study Now
            </Button>
          </a>
        </motion.div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-green-800 mb-2">Questions?</h3>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:prajp001@gold.ac.uk" className="underline hover:text-green-700">
              prajp001@gold.ac.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
