import CoreCourses from "@/components/sections/CoreCourses";
import Hero from "@/components/sections/Hero";
import Outcome from "@/components/sections/Outcome";
import SpecializedTracks from "@/components/sections/SpecializedTracks";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreCourses />
      <SpecializedTracks />
      <Outcome />
    </main>
  );
}
