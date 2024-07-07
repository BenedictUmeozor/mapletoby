import Container from "../container/Container";

type Props = {
  className: string;
  isFooter?: boolean;
};

const StoreBanner = ({ className, isFooter = true }: Props) => {
  return (
    <div className={className}>
      <Container
        className={
          " flex items-center gap-4 footer " + (isFooter ? "max-md:mt-5" : "")
        }
      >
        <div className="flex-1 flex items-center justify-start">
          <p className=" text-custom_blue-30 text-[3.5rem] max-md:text-[1.125rem]">
            EXCLUSIVE
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="h-4 w-4 max-md:h-2 max-md:w-2 bg-primary-50 rounded-full"></div>
        </div>
        <div className="flex-1">
          <p className=" text-custom_blue-30 text-[3.5rem] max-md:text-[1.125rem]">
            VOGUE
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="h-4 w-4 max-md:h-2 max-md:w-2 bg-primary-50 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <p className="text-custom_blue-30 text-[3.5rem] max-md:text-[1.125rem]">
            EXTRA-CHIC
          </p>
        </div>
      </Container>
    </div>
  );
};
export default StoreBanner;
