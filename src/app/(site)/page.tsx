import AboutProject from "@/components/sections/AboutProject";
import Hero from "@/components/sections/Hero";
import PopularRecipes from "@/components/sections/PopularRecipes";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] min-h-dvh row-start-2 items-center sm:items-start">
      <Hero />
      <PopularRecipes />
      <AboutProject />
    </main>
  );
}
