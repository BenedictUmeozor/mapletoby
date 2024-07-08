import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";
import LoadingIndicator from "@/components/ui-utils/LoadingIndicator";

const Home = () => {
  return (
    <main className="h-full">
      <CategoriesBar />
      <Hero />
      <Showcase />

      <LoadingIndicator text="Loading" />
    </main>
  );
};
export default Home;
