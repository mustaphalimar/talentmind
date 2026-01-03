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
    <Card className="hover:shadow-xl hover:-translate-y-1 transition-all">
      <CardHeader>
        <pillar.icon className="h-6 w-6 text-primary" />
        <CardTitle className="text-xl">{pillar.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{pillar.content}</p>
      </CardContent>
    </Card>
  );
};

export default PillarCard;
