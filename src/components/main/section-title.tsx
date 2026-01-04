import { Triangle } from "lucide-react";
import { Separator } from "../ui/separator";

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <div className="w-fit">
      <div className="flex items-center gap-2  p-1">
        <Triangle className="rotate-90 fill-primary" size={10} />
        <h1 className="text-2xl md:text-4xl  font-semibold">{text}</h1>
      </div>
      {/* <Separator className="bg-primary" /> */}
    </div>
  );
};

export default SectionTitle;
