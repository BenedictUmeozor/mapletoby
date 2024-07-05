type Props = {
  className?: string;
};

const Divider = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      width="2"
      height="14"
      viewBox="0 0 2 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00012 1L1.00012 13"
        stroke="#D8DDED"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default Divider;
