import Banner from "@/components/banner/Banner";
import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main>
      <Banner />
      <Header />
      <CategoriesBar />
      <Hero />
    </main>
  );
};
export default Home;
