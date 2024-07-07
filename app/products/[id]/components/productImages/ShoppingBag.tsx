type Props = {
  className?: string;
};

const ShoppingBag = ({ className = "" }: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.7504 9V6C16.7504 3.79086 14.9595 2 12.7504 2C10.5412 2 8.75037 3.79086 8.75037 6V9M4.34237 10.352L3.74237 16.752C3.57178 18.5717 3.48648 19.4815 3.78842 20.1843C4.05367 20.8016 4.51849 21.3121 5.10839 21.6338C5.7799 22 6.69374 22 8.52142 22H16.9793C18.807 22 19.7208 22 20.3923 21.6338C20.9822 21.3121 21.4471 20.8016 21.7123 20.1843C22.0143 19.4815 21.929 18.5717 21.7584 16.752L21.1584 10.352C21.0143 8.81535 20.9423 8.04704 20.5967 7.46616C20.2924 6.95458 19.8427 6.54511 19.305 6.28984C18.6944 6 17.9227 6 16.3793 6L9.12142 6C7.57806 6 6.80638 6 6.19579 6.28984C5.65803 6.54511 5.20838 6.95458 4.90403 7.46616C4.55846 8.04704 4.48643 8.81534 4.34237 10.352Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ShoppingBag;
