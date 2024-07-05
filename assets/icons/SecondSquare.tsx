type Props = {
  className?: string;
};

const SecondSquare = ({ className }: Props) => {
  return (
    <svg
      width="46"
      height="137"
      viewBox="0 0 46 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
  );
};
export default SecondSquare;
