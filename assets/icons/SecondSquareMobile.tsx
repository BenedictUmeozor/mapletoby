type Props = {
  className?: string;
};

const SecondSquareMobile = ({ className }: Props) => {
  return (
    <svg
      width="16"
      height="66"
      viewBox="0 0 16 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="-3"
        y="3"
        width="58"
        height="60"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 58 -8.34544e-08)"
        stroke="#FFD7E9"
        strokeWidth="6"
      />
    </svg>
  );
};
export default SecondSquareMobile;
