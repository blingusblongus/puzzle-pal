import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type LinkCardProps = {
  title: string;
  href: string;
  description: string;
};
export const LinkCard = ({ title, href, description }: LinkCardProps) => {
  return (
    <a href={href}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
};
