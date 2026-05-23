"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";

const heroImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filtered = colleges.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative h-[70vh] overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${heroImages[index]})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Discover Your Dream College
          </h1>

          <p className="text-gray-200 mt-3 max-w-xl">
            Compare colleges, check placements, and make better career decisions
          </p>

          {/* SEARCH BAR */}
          <div className="mt-6 flex w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search colleges..."
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-blue-600 text-white px-6">
              Search
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/colleges"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Explore Colleges
            </Link>

            <Link
              href="/compare"
              className="bg-white text-black px-5 py-2 rounded-lg"
            >
              Compare Now
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        <h2 className="text-2xl font-bold mb-6">
          Featured Colleges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.slice(0, 3).map((college) => (
            <Link
              key={college.id}
              href={`/colleges/${college.id}`}
            >
              <div className="bg-white border rounded-xl p-5 hover:shadow-lg transition">
                <h3 className="font-bold text-lg">
                  {college.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  📍 {college.location}
                </p>

                <p className="text-sm mt-2 text-gray-600">
                  ⭐ {college.rating} | 🎯 {college.placements}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}