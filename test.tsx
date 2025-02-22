import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitch, Youtube, Instagram } from "lucide-react";

export default function GameCollectorPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">GameCollector</h1>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-purple-400">
              About
            </Link>
            <Link href="#platforms" className="hover:text-purple-400">
              Platforms
            </Link>
            <Link href="#collection" className="hover:text-purple-400">
              Collection
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto py-16 text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="GameCollector Profile"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">
          Welcome to My Gaming Universe
        </h2>
        <p className="text-xl mb-8">Gamer, Collector, Content Creator</p>
        <Button className="bg-purple-600 hover:bg-purple-700">Follow Me</Button>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Me On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlatformCard
              title="Twitch"
              description="Live streams every Tuesday and Thursday"
              icon={<Twitch className="h-8 w-8 text-purple-500" />}
              color="purple"
            />
            <PlatformCard
              title="YouTube"
              description="Weekly unboxing and review videos"
              icon={<Youtube className="h-8 w-8 text-red-500" />}
              color="red"
            />
            <PlatformCard
              title="Instagram"
              description="Daily collection highlights and sneak peeks"
              icon={<Instagram className="h-8 w-8 text-pink-500" />}
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Collection Items
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={`/placeholder.svg?height=300&width=300&text=Item ${item}`}
                alt={`Collection Item ${item}`}
                width={300}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">View Item</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-xl">Latest Twitch Stream Embed</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Image
                  key={item}
                  src={`/placeholder.svg?height=200&width=200&text=Instagram ${item}`}
                  alt={`Instagram Post ${item}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Twitch className="h-6 w-6 text-purple-500" />
            <Youtube className="h-6 w-6 text-red-500" />
            <Instagram className="h-6 w-6 text-pink-500" />
          </div>
          <p>&copy; 2025 GameCollector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PlatformCard({ title, description, icon, color }) {
  return (
    <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span className={`text-${color}-500`}>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
