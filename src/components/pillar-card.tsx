import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="  hover:-translate-y-1 transition-all flex flex-col items-center gap-2 text-center"
    >
      <pillar.icon className=" text-primary" size={45} />
      <div className="flex flex-col justify-between h-full ">
        <p className="text-lg md:text-xl font-semibold">{pillar.title}</p>

        <p className="text-muted-foreground  text-sm text-wrap md:text-base">
          {pillar.content}
        </p>
      </div>
    </motion.div>
  );
};

export default PillarCard;
