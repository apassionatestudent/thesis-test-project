// ./client/src/pages/aboutus.jsx

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Creating types for team member data to ensure type safety and maintainability:
// - Name, role, and description for each team member
// - Optional avatar URL for images

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

// Defining the main component:
// - Using FC type for proper TypeScript typing
// - Including default export for module compatibility

const AboutUs: React.FC = () => {
  
// Creating mock team member data:
//   - Three team members with varying roles
//   - Some with avatars, some without
//   - Rich descriptions using Lorem ipsum

  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: '/images/john.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      avatar: undefined
    },
    {
      name: 'Bob Johnson',
      role: 'Design Lead',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      avatar: '/images/bob.jpg'
    }
  ];

  
// Building the component structure:
//   - Main container with consistent spacing
//   - Company overview section first
//   - Mission/vision section second
//   - Team grid layout with avatars
//   - Core values section with badges
//   - Contact information at bottom

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Company Overview */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
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

      {/* Mission & Vision */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Purpose</CardTitle>
          <CardDescription>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader className="space-y-4">
              <Avatar className="w-24 h-24 mx-auto">
                {member.avatar ? (
                  <AvatarImage src={member.avatar} alt={member.name} />
                ) : (
                  <AvatarFallback>
                    {member.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {member.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Values */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Core Values</CardTitle>
          <CardDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <Badge key={index} variant="outline" className="w-full justify-center">
                Value {index + 1}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <p className="flex items-start gap-2">
            <span className="font-medium">Email:</span>
            contact@example.com
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium">Phone:</span>
            (555) 012-3456
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium">Address:</span>
            123 Main St, Anytown, USA
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;