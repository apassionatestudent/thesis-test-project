// ./client/src/pages/home.jsx

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

/**
 * HomePage - A React component that displays a professional-looking home page
 * with Lorem ipsum content organized into clear sections.
 *
 * Features:
 * - Responsive layout
 * - Accessible structure
 * - Professional styling using ShadcN UI components
 */
const HomePage: React.FC = () => {
  
// Let's organize the content into meaningful sections:
//   - Hero section with introduction
//   - Featured section highlighting key points
//   - Main content with detailed information
//   - Call to action section

  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Welcome to Our Website</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Featured Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[...Array(2)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Featured Section {index + 1}</CardTitle>
              <CardDescription>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">
            About Our Services
          </h2>
          
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo.
          </p>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle>Get Started Today</CardTitle>
          <CardDescription>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomePage;