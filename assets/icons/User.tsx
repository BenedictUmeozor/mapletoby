type Props = {
  className?: string;
};

const UserIcon = ({ className = "" }: Props) => {
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
        d="M8.00012 30.6667C11.1145 27.3634 15.3428 25.3333 20.0001 25.3333C24.6574 25.3333 28.8857 27.3634 32.0001 30.6667M26.0001 14C26.0001 17.3137 23.3138 20 20.0001 20C16.6864 20 14.0001 17.3137 14.0001 14C14.0001 10.6863 16.6864 8 20.0001 8C23.3138 8 26.0001 10.6863 26.0001 14Z"
        stroke="#1B1B1B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default UserIcon;
