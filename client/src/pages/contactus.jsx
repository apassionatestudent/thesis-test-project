// ./client/src/pages/contactus.jsx

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

// Creating interfaces for type safety:
// - Contact form data structure
// - Location information
// - Business hours
// - Social media links

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Location {
  address: string;
  phone: string;
  email: string;
}

interface BusinessHours {
  [key: string]: string;
}

interface SocialMedia {
  [key: string]: string;
}

// Creating the main component:
// - Using FC type for proper TypeScript typing
// - Setting up default export for module compatibility
// - Creating mock data for locations and hours

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const location: Location = {
    address: "123 Main St, Anytown, USA 12345",
    phone: "(555) 012-3456",
    email: "contact@example.com"
  };

  const businessHours: BusinessHours = {
    monday: "9:00 AM - 5:00 PM",
    tuesday: "9:00 AM - 5:00 PM",
    wednesday: "9:00 AM - 5:00 PM",
    thursday: "9:00 AM - 5:00 PM",
    friday: "9:00 AM - 5:00 PM",
    saturday: "10:00 AM - 2:00 PM",
    sunday: "Closed"
  };

  const socialMedia: SocialMedia = {
    facebook: "https://facebook.com/example",
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/example"
  };

// Creating form submission handler:
// - Preventing default form submission
// - Logging form data (in production would send to API)
// - Resetting form after submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

// Building the component structure:
// - Main container with consistent spacing
// - Hero section with introduction
// - Contact form with validation
// - Location information with map
// - Business hours and social media

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
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

      {/* Contact Form */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </FormControl>
                </FormItem>
              </div>

              <div className="space-y-4">
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-[120px]"
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Location Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Our Location
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>{location.address}</span>
            </p>
            <p className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1" />
              <span>{location.phone}</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-1" />
              <span>{location.email}</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Hours</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-2">
            {Object.entries(businessHours).map(([day, hours]) => (
              <p key={day} className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1" />
                <span className="font-medium">{day.charAt(0).toUpperCase() + day.slice(1)}:</span>
                <span>{hours}</span>
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle>Follow Us</CardTitle>
          <CardDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex gap-6">
            {Object.entries(socialMedia).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                {platform === 'facebook' && <Facebook className="h-5 w-5" />}
                {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                <span className="capitalize">{platform}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;