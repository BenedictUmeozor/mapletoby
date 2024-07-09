import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={"container max-w-6xl mx-auto px-4 " + className}>
      {children}
    </div>
  );
};
export default Container;
