type Props = {
  className?: string;
};

const MenuIcon = ({ className = "" }: Props) => {
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
        d="M7 16H25M7 10H25M7 22H25"
        stroke="#1B1B1B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MenuIcon;
