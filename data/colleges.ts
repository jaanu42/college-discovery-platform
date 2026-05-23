export type College = {
  id: number;
  name: string;
  location: string;
  fees: string;
  rating: number;
  placements: string;
  description: string;
  courses: string[];
  image: string;
  established: string;
  type: string;
};

export const colleges: College[] = [
  {
    id: 1,
    name: "IIT Madras",
    location: "Chennai",
    fees: "₹2,20,000/year",
    rating: 4.9,
    placements: "95%",
    description:
      "IIT Madras is one of India's premier engineering institutes known for research excellence and top placements.",
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
    established: "1959",
    type: "Government",
  },

  {
    id: 2,
    name: "Anna University",
    location: "Chennai",
    fees: "₹60,000/year",
    rating: 4.5,
    placements: "85%",
    description:
      "Anna University is a top state technical university with strong academic reputation and affordability.",
    courses: ["B.E", "M.E", "MBA", "MCA"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    established: "1978",
    type: "State University",
  },

  {
    id: 3,
    name: "VIT Vellore",
    location: "Vellore",
    fees: "₹1,80,000/year",
    rating: 4.4,
    placements: "90%",
    description:
      "VIT is known for strong placement records, modern campus infrastructure, and industry-oriented programs.",
    courses: ["B.Tech", "MBA", "M.Tech"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    established: "1984",
    type: "Private",
  },
];