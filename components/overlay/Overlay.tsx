"use client";

type Props = {
  action?: () => void;
};

const Overlay = ({ action }: Props) => {
  return <div className="overlay md:hidden" onClick={action}></div>;
};
export default Overlay;
