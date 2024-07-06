import Banner from "@/components/banner/Banner";
import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";

const Home = () => {
  return (
    <main className="h-full">
      <Banner />
      <Header />
      <section>
        <CategoriesBar />
        <Hero />
        <Showcase />
      </section>
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-base">Loading</span>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Home;
