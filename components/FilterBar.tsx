"use client";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  rating: number;
  setRating: (v: number) => void;
};

export default function FilterBar({
  search,
  setSearch,
  location,
  setLocation,
  rating,
  setRating,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />

      {/* Location Filter */}
      <input
        type="text"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />

      {/* Rating Filter */}
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 rounded-lg w-full"
      >
        <option value={0}>All Ratings</option>
        <option value={3}>3+ ⭐</option>
        <option value={4}>4+ ⭐</option>
        <option value={4.5}>4.5+ ⭐</option>
      </select>

      {/* Reset Button */}
      <button
        onClick={() => {
          setSearch("");
          setLocation("");
          setRating(0);
        }}
        className="bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Reset
      </button>
    </div>
  );
}