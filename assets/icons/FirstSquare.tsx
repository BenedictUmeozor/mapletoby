type Props = {
  className?: string;
};

const FirstSquare = ({ className }: Props) => {
  return (
    <>
      <svg
        width="136"
        height="73"
        viewBox="0 0 136 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className + " max-md:hidden"}
      >
        <rect
          x="149.5"
          y="62.1091"
          width="139"
          height="139"
          transform="rotate(180 149.5 62.1091)"
          stroke="#F575BD"
          strokeWidth="21"
        />
      </svg>
      <svg
        width="100"
        height="65"
        viewBox="0 0 47 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} md:hidden`}
      >
        <rect
          x="-3"
          y="3"
          width="58"
          height="58"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 58 -16)"
          stroke="#F575BD"
          strokeWidth="6"
        />
      </svg>
    </>
  );
};
export default FirstSquare;
