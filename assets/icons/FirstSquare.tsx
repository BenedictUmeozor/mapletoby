type Props = {
  className?: string;
};

const FirstSquare = ({ className }: Props) => {
  return (
    <svg
      width="136"
      height="73"
      viewBox="0 0 136 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
  );
};
export default FirstSquare;
