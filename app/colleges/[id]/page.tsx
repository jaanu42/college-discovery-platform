import { colleges } from "@/data/colleges";
import CollegeClient from "./CollegeClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  // Await params
  const { id } = await params;

  // Find matching college
  const college = colleges.find(
    (c) => String(c.id) === String(id)
  );

  // Send to client component
  return <CollegeClient college={college} />;
}