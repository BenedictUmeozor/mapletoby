import Banner from "@/components/banner/Banner";
import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";

const Home = () => {
  return (
    <main>
      <Banner />
      <Header />
      <CategoriesBar />
      <Hero />
      <Showcase />
    </main>
  );
};
export default Home;
