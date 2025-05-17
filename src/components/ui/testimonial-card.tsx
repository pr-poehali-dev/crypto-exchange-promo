
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface TestimonialCardProps {
  rating: number;
  content: string;
  name: string;
  role: string;
  initials: string;
}

export const TestimonialCard = ({ rating, content, name, role, initials }: TestimonialCardProps) => {
  // Create an array based on the rating to display stars
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`star-${i}`} name="Star" className="h-5 w-5 text-yellow-500" />);
  }
  
  if (hasHalfStar) {
    stars.push(<Icon key="half-star" name="StarHalf" className="h-5 w-5 text-yellow-500" />);
  }
  
  return (
    <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {stars}
        </div>
        <p className="italic mb-4">{content}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
            <span className="font-bold text-purple-700">{initials}</span>
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
