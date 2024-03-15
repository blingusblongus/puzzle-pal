export const ConversionsPage = () => {
  return <div>Conversions</div>;
};

export const intToBin = (int: number): string => {
  return int.toString(2);
};

export const binToInt = (bin: string): number => {
  return parseInt(bin, 2);
};
