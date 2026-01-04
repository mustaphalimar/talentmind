import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Pillar = {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
};

interface Props {
  pillar: Pillar;
}

const PillarCard: React.FC<Props> = ({ pillar }) => {
  return (
    <div className=" hover:-translate-y-1 transition-all flex flex-col gap-4 items-center text-center">
      <pillar.icon className=" text-primary" size={45} />
      <p className="text-lg md:text-xl font-semibold">{pillar.title}</p>

      <p className="text-muted-foreground text-sm md:text-base">
        {pillar.content}
      </p>
    </div>
  );
};

export default PillarCard;
