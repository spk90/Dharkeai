import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  link?: string;
}

const ServiceCard = ({ title, description, icon, className, link }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-lg cursor-pointer", 
        className
      )}
      onClick={handleClick}
    >
      <CardHeader>
        <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <button className="text-primary hover:underline text-sm font-medium">
          Learn more →
        </button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;