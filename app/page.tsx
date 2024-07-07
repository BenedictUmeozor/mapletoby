import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";

const Home = () => {
  return (
    <main className="h-full">
      <CategoriesBar />
      <Hero />
      <Showcase />

      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-base">Loading</span>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </main>
  );
};
export default Home;
