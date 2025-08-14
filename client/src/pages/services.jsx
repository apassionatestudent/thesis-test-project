// 1. Analyzing the requirements:
//    - Need a Services page with Lorem ipsum content
//    - Should maintain consistency with previous pages
//    - Must be visually appealing and informative
//    - Should highlight different service categories
// 
// 2. Planning the structure:
//    - Hero section for main service introduction
//    - Service cards grid for primary offerings
//    - Detailed service sections with pricing
//    - Testimonials section for credibility
//    - Call-to-action banner
// 
// 3. Component organization:
//    - Will use Cards for service listings
//    - Badges for service categories
//    - Icons for visual enhancement
//    - Responsive grid layouts

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Star } from "lucide-react";

// Creating interfaces for type safety:
// - Service interface for individual services
// - Pricing tier interface for service packages
// - Adding proper TypeScript annotations

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
}

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

// Creating the main component:
// - Using FC type for proper TypeScript typing
// - Setting up default export for module compatibility
// - Creating mock data for services and pricing tiers

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Premium Consulting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      category: "Consulting",
      price: "$299/month",
      features: ["Expert Analysis", "Regular Updates", "Priority Support"]
    },
    {
      id: 2,
      title: "Digital Solutions",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      category: "Technology",
      price: "$499/project",
      features: ["Custom Development", "Security Audit", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Marketing Strategy",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      category: "Marketing",
      price: "$199/month",
      features: ["Campaign Management", "Analytics Reporting", "Social Media Integration"]
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: "$99/month",
      features: ["Standard Support", "Core Features", "Email Updates"]
    },
    {
      name: "Pro",
      price: "$299/month",
      features: ["Priority Support", "Advanced Features", "API Access", "Custom Solutions"]
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      features: ["24/7 Support", "Full API Access", "Dedicated Team", "Custom Development"]
    }
  ];

// Building the component structure:
// - Main container with consistent spacing
// - Hero section with introduction
// - Services grid with cards
// - Pricing section with tiers
// - Testimonials section
// - Call-to-action banner

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Services</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur.
          </p>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary">{service.category}</Badge>
                <span className="text-sm text-muted-foreground">{service.price}</span>
              </div>
              <CardTitle className="mt-2">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Pricing Plans</CardTitle>
          <CardDescription>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-2xl font-bold mt-2">{tier.price}</div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Client Reviews</CardTitle>
          <CardDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {[...Array(2)].map((_, index) => (
            <blockquote key={index} className="border-l-4 border-primary pl-4 italic">
              <p className="text-lg mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer className="font-normal not-italic mt-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <cite>- Client {index + 1}</cite>
              </footer>
            </blockquote>
          ))}
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Ready to Get Started?</CardTitle>
          <CardDescription className="text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pt-6">
          <Button size="lg" className="mx-auto">
            Contact Us Today
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;