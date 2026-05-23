"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("savedColleges");
    if (data) setSavedIds(JSON.parse(data));
  }, []);

  const savedColleges = colleges.filter((c) =>
    savedIds.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Saved Colleges
        </h1>

        {savedColleges.length === 0 ? (
          <p className="text-gray-500">
            No saved colleges yet
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedColleges.map((college) => (
              <Link
                key={college.id}
                href={`/colleges/${college.id}`}
              >
                <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg">
                  <h2 className="font-bold text-lg">
                    {college.name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {college.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}