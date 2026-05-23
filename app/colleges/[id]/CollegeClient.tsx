"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function CollegeClient({
  college,
}: {
  college: any;
}) {
  const [saved, setSaved] = useState<number[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("savedColleges");

    if (existing) {
      setSaved(JSON.parse(existing));
    }
  }, []);

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="text-center p-10 text-red-500">
          College not found
        </div>
      </div>
    );
  }

  const saveCollege = () => {
    const existing = localStorage.getItem("savedColleges");

    let list = existing ? JSON.parse(existing) : [];

    if (!list.includes(college.id)) {
      list.push(college.id);
    }

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(list)
    );

    setSaved(list);

    alert("College Saved!");
  };

  const isSaved = saved.includes(college.id);

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar />

      {/* BANNER */}
      <div
        className="h-[280px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${college.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm mb-2">
            Home / Colleges / {college.name}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">
            {college.name}
          </h1>

          <p className="mt-2 text-gray-200">
            📍 {college.location}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">

            {/* HIGHLIGHTS */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="text-xl font-bold mb-4">
                College Highlights
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-500">Established</p>
                  <p className="font-semibold mt-1">
                    {college.established}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-500">College Type</p>
                  <p className="font-semibold mt-1">
                    {college.type}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-500">Fees</p>
                  <p className="font-semibold mt-1">
                    {college.fees}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-500">Placements</p>
                  <p className="font-semibold mt-1">
                    {college.placements}
                  </p>
                </div>

              </div>
            </div>

            {/* OVERVIEW */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="text-xl font-bold mb-4">
                Overview
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm">
                {college.description}
              </p>

            </div>

            {/* COURSES */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="text-xl font-bold mb-4">
                Courses Offered
              </h2>

              <div className="flex flex-wrap gap-3">
                {college.courses.map(
                  (course: string, index: number) => (
                    <div
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm"
                    >
                      {course}
                    </div>
                  )
                )}
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-4">

            <div className="bg-white rounded-2xl border p-6">

              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Rating
                </p>

                <p className="font-bold text-yellow-600">
                  ⭐ {college.rating}
                </p>
              </div>

              <button
                onClick={saveCollege}
                className={`mt-5 w-full py-3 rounded-xl text-white font-medium ${
                  isSaved
                    ? "bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSaved
                  ? "✔ Saved"
                  : "⭐ Save College"}
              </button>

            </div>

            {/* REVIEW CARD */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="font-bold mb-3">
                Student Reviews
              </h2>

              <p className="text-sm text-gray-600">
                Students appreciate the placements,
                campus infrastructure, and academic quality.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}