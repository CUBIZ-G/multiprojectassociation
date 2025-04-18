
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCard, HelpCircle, Info, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

interface ServiceOffer {
  id: string;
  name: string;
  description: string;
  discount_percentage: number;
  start_date: string;
  end_date: string;
}

export const ServicePricing = () => {
  const { data: serviceOffers } = useQuery({
    queryKey: ['service-offers'],
    queryFn: async () => {
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('service_offers')
        .select('*')
        .lte('start_date', now)
        .gte('end_date', now);
        
      if (error) throw error;
      return data as ServiceOffer[];
    }
  });

  const activeOffers = serviceOffers?.length ? (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/30"
    >
      <h3 className="font-medium text-primary mb-2">
        <Sparkles className="inline-block mr-1 h-4 w-4" /> Active Offers
      </h3>
      <div className="space-y-2">
        {serviceOffers.map((offer) => (
          <motion.div 
            key={offer.id} 
            className="flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <p className="font-medium">{offer.name}</p>
              <p className="text-xs text-muted-foreground">{offer.description}</p>
            </div>
            <Badge className="bg-primary animate-pulse">{offer.discount_percentage}% OFF</Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ) : null;

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          Service Pricing
        </CardTitle>
        <CardDescription>
          Our services are priced in Spark Points (SP). Submit requests via the form tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {activeOffers}
        
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="document-media">
            <AccordionTrigger>Document & Media Services</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Word Processing</span>
                  <Badge variant="secondary">10 SP per page</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Excel Work</span>
                  <Badge variant="secondary">15 SP per 10×10 sheet</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Presentation Slides</span>
                  <Badge variant="secondary">10 SP per slide</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Photo Editing</span>
                  <Badge variant="secondary">35 SP per image</Badge>
                </li>
                <li className="py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <div className="flex justify-between items-center">
                    <span>Video Editing</span>
                  </div>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li className="flex justify-between items-center">
                      <span className="text-sm">Up to 10 min</span>
                      <Badge variant="secondary">80 SP</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm">YouTube Shorts</span>
                      <Badge variant="secondary">8 SP</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm">Long Video (30 min)</span>
                      <Badge variant="secondary">200 SP</Badge>
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="3d-cad">
            <AccordionTrigger>3D & CAD Services</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>3D Object Modeling</span>
                  <Badge variant="secondary">50 SP per object</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>3D Circuit Design</span>
                  <Badge variant="secondary">100 SP per circuit</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>AutoCAD 2D Design</span>
                  <Badge variant="secondary">100 to 350 SP</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>AutoCAD 3D Design</span>
                  <Badge variant="secondary">200 to 800 SP</Badge>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="web-dev">
            <AccordionTrigger>Web Development & Hosting</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <div className="flex justify-between items-center">
                    <span>Website Hosting on Blog</span>
                  </div>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li className="flex justify-between items-center">
                      <span className="text-sm">Advanced Setup</span>
                      <Badge variant="secondary">100 SP</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm">Monthly Maintenance</span>
                      <Badge variant="secondary">50 SP</Badge>
                    </li>
                  </ul>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Web Design (HTML & CSS only)</span>
                  <Badge variant="secondary">70 SP</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>Website Widget Development</span>
                  <Badge variant="secondary">35 SP</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>HTML Coding</span>
                  <Badge variant="secondary">35 SP per 100 lines</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>CSS Coding</span>
                  <Badge variant="secondary">35 SP per 400 lines</Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>JavaScript Functions</span>
                  <Badge variant="secondary">4 SP per function</Badge>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="automation">
            <AccordionTrigger>Automation & Bots</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-1 border-b hover:bg-secondary/20 transition-colors px-2 rounded">
                  <span>WhatsApp, Instagram, Discord Bots</span>
                  <Badge variant="secondary">200 SP</Badge>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-6">
          <Link to="/subscription">
            <Button className="w-full group">
              <CreditCard className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Buy Spark Points
            </Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground flex items-center">
          <HelpCircle className="h-4 w-4 mr-1" />
          Have questions? <Link to="/help" className="ml-1 text-primary hover:underline">Get help</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
