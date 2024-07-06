import Ring from "@/assets/icons/Ring";
import Container from "../container/Container";
import FirstSquare from "@/assets/icons/FirstSquare";
import SecondSquare from "@/assets/icons/SecondSquare";

const Hero = () => {
  return (
    <section className="relative bg-custom_blue-20  overflow-hidden flex items-center justify-center h-48 max-md:h-40">
      <Container>
        <div className="z-20 ">
          <h3 className="heading-1-sm text-center font-bold z-[12] px-8">
            In The Business of Helping Women of <br className="max-md:hidden" />
            <span className=" text-[#F575BD]">Every Size</span> Own Their{" "}
            <span className=" text-[#F575BD]">Sexy</span>
          </h3>
        </div>
        <Ring className="absolute bottom-0 left-0 z-[1]" />
        <FirstSquare className="absolute top-0 right-0 max-md:-right-10" />
        <SecondSquare className="absolute top-0 right-0 max-md:-right-2 max-md:top-[20%]" />
      </Container>
    </section>
  );
};
export default Hero;
