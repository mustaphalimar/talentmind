import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl  md:px-2 2xl:max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
