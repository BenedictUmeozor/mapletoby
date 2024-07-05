type Props = {
  className?: string;
};

const Ring = ({ className }: Props) => {
  return (
    <svg
      width="53"
      height="51"
      viewBox="0 0 53 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="38"
        cy="38"
        r="27.5"
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 52.8511 76)"
        stroke="#F798CD"
        strokeWidth="21"
      />
    </svg>
  );
};
export default Ring;
