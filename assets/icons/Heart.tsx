type Props = {
  className?: string;
};

const HeartIcon = ({ className = "" }: Props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.4816 8C30.1779 8 33.3334 12.47 33.3334 16.64C33.3334 25.085 20.2371 32 20.0001 32C19.7631 32 6.66678 25.085 6.66678 16.64C6.66678 12.47 9.82233 8 14.5186 8C17.2149 8 18.9779 9.365 20.0001 10.565C21.0223 9.365 22.7853 8 25.4816 8Z"
        stroke="#1B1B1B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default HeartIcon;
