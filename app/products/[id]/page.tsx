import StoreBanner from "@/components/banner-two/StoreBanner";
import CategoriesBar from "@/components/categories-bar/CategoriesBar";
import Container from "@/components/container/Container";
import ProductImages from "./components/productImages/ProductImages";
import ProductDescription from "./components/productDescription/ProductDescription";
import Recommendations from "./components/recommendations/Recommendations";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <CategoriesBar />
      <StoreBanner isFooter={false} className="bg-custom_blue-10 mt-4 mb-8 max-md:h-12 max-md:flex items-center justify-center" />
      <Container>
        <ProductImages />
        <ProductDescription />
        <Recommendations />
      </Container>
    </main>
  );
};
export default Page;
