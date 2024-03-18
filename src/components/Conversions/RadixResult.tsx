type RadixResult = {
  result: string;
  label: string;
};

export const RadixResult = ({ result, label }: RadixResult) => {
  return (
    <div className="flex h-full w-full flex-col-reverse items-center justify-center rounded-xl border-2 border-neutral-400 p-3">
      <div>{label}</div>
      <div className="flex w-full grow items-center justify-center overflow-x-scroll text-2xl">
        {result}
      </div>
    </div>
  );
};
