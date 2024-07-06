type Props = {
  className?: string;
};

const Ring = ({ className }: Props) => {
  return (
    <>
      <svg
        width="53"
        height="51"
        viewBox="0 0 53 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className + " max-md:hidden"}
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
      <svg
        width="22"
        height="25"
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} md:hidden`}
      >
        <path
          d="M7 27C0.372583 27 -5 21.6274 -5 15C-5 8.37258 0.372582 3 7 3C13.6274 3 19 8.37258 19 15C19 21.6274 13.6274 27 7 27Z"
          stroke="#F798CD"
          strokeWidth="6"
        />
      </svg>
    </>
  );
};
export default Ring;
