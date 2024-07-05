type Props = {
  className?: string;
};

const RingMobile = ({ className }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="path-1-inside-1_65_417" fill="white">
        <ellipse cx="15" cy="15" rx="15" ry="15" transform="rotate(90 15 15)" />
      </mask>
      <path
        d="M15 9C18.3137 9 21 11.6863 21 15L-21 15C-21 34.8823 -4.88225 51 15 51L15 9ZM21 15C21 18.3137 18.3137 21 15 21L15 -21C-4.88225 -21 -21 -4.88225 -21 15L21 15ZM15 21C11.6863 21 9 18.3137 9 15L51 15C51 -4.88226 34.8822 -21 15 -21L15 21ZM9 15C9 11.6863 11.6863 9 15 9L15 51C34.8823 51 51 34.8823 51 15L9 15Z"
        fill="#F798CD"
        mask="url(#path-1-inside-1_65_417)"
      />
    </svg>
  );
};
export default RingMobile;
