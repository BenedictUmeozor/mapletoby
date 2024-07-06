type Props = {
  className?: string;
};

const SecondSquare = ({ className }: Props) => {
  return (
    <>
      <svg
        width="46"
        height="137"
        viewBox="0 0 46 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className + " max-md:hidden"}
      >
        <rect
          x="129.5"
          y="126.109"
          width="119"
          height="119"
          transform="rotate(180 129.5 126.109)"
          stroke="#FFD7E9"
          strokeWidth="21"
        />
      </svg>
      <svg
        width="50"
        height="70"
        viewBox="0 0 26 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} md:hidden`}
      >
        <rect
          x="-3"
          y="3"
          width="58"
          height="60"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 58 -8.34544e-08)"
          stroke="#FCDDEE"
          strokeWidth="6"
        />
      </svg>
    </>
  );
};
export default SecondSquare;
