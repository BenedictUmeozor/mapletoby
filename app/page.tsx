import Banner from "@/components/banner/Banner";
import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";

const Home = () => {
  return (
    <main className="h-full">
      <header>
        <Banner />
        <Header />
      </header>
      <section>
        <CategoriesBar />
        <Hero />
        <Showcase />
      </section>
      <Footer />
    </main>
  );
};
export default Home;
