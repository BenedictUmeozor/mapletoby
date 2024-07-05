type Props = {
  className?: string;
};

const SearchIcon = ({ className = "" }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28.0001 28L20.0003 20M22.6668 13.3333C22.6668 18.488 18.4881 22.6667 13.3335 22.6667C8.1788 22.6667 4.00012 18.488 4.00012 13.3333C4.00012 8.17868 8.1788 4 13.3335 4C18.4881 4 22.6668 8.17868 22.6668 13.3333Z"
        stroke="#1B1B1B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SearchIcon;
