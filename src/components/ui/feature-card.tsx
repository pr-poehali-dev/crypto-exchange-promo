
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="rounded-full bg-purple-600/10 w-12 h-12 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
