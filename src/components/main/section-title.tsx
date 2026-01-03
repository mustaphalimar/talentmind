import { Triangle } from "lucide-react";

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center gap-2 border-b p-1">
      <Triangle className="rotate-90 fill-primary" size={10} />
      <h1 className="text-4xl  font-semibold">{text}</h1>
    </div>
  );
};

export default SectionTitle;
