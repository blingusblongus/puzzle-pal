import { Card, CardContent, CardTitle } from "../ui/card";

type RadixResult = {
  result: string;
  label: string;
};

export const RadixResult = ({ result, label }: RadixResult) => {
  return (
    <Card className="flex flex-col items-center p-2">
      <CardContent className="w-full overflow-hidden overflow-x-scroll p-0 text-center">
        {result}
      </CardContent>
      <CardTitle className="select-none text-xl">{label}</CardTitle>
    </Card>
  );
};
