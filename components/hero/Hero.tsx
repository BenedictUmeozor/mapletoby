import Ring from "@/assets/icons/Ring";
import Container from "../container/Container";
import FirstSquare from "@/assets/icons/FirstSquare";
import SecondSquare from "@/assets/icons/SecondSquare";

const Hero = () => {
  return (
    <Container className="my-10 bg-custom_blue-20 relative overflow-hidden flex items-center justify-center h-64 rounded-3xl max-md:max-w-[95%]">
      <h3 className="heading-1-sm text-center font-bold z-[2]">
        In The Business of Helping Women of <br />{" "}
        <span className=" text-[#F575BD]">Every Size</span> Own Their{" "}
        <span className=" text-[#F575BD]">Sexy</span>
      </h3>
      <Ring className="absolute bottom-0 left-0" />
      <FirstSquare className="absolute top-0 right-0 z-[1]" />
      <SecondSquare className="absolute top-0 right-0" />
    </Container>
  );
};
export default Hero;
