"use client";

import { useState } from "react";
import Link from "next/link";
import { colleges } from "@/data/colleges";
import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);

  const filteredColleges = colleges.filter((college) => {
    const matchSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation = college.location
      .toLowerCase()
      .includes(location.toLowerCase());

    const matchRating = college.rating >= rating;

    return matchSearch && matchLocation && matchRating;
  });

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Explore Colleges
        </h1>

        {/* FILTERS */}
        <FilterBar
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
        />

        {/* GRID */}
        {filteredColleges.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No colleges found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <Link key={college.id} href={`/colleges/${college.id}`}>
                <div className="bg-white border rounded-2xl p-5 hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer">
                  
                  <h2 className="text-xl font-bold text-gray-800">
                    {college.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    📍 {college.location}
                  </p>

                  <p className="mt-3 text-sm text-gray-600">
                    {college.description}
                  </p>

                  <div className="mt-5 flex justify-between items-center">
                    
                    <div className="text-sm">
                      <p className="text-gray-500">Fees</p>
                      <p className="font-semibold text-gray-800">
                        {college.fees}
                      </p>
                    </div>

                    <div className="text-sm text-right">
                      <p className="text-gray-500">Rating</p>
                      <p className="font-semibold text-green-600">
                        ⭐ {college.rating}
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 inline-block bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                    🎯 {college.placements} Placements
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}