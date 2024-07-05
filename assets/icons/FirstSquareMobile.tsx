type Props = {
  className?: string;
};

const FirstSquareMobile = ({ className }: Props) => {
  return (
    <svg
      width="37"
      height="48"
      viewBox="0 0 37 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
  );
};
export default FirstSquareMobile;
