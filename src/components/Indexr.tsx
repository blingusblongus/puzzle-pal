import { useState } from "react";
import { Slider } from "./ui/slider";

export const Indexr = () => {
  const [value, setValue] = useState([0]);
  return (
    <div className="w-full">
      <div>Indexr</div>
      <div>Index offset: {value}</div>
      <div className="p-5">
        <Slider
          defaultValue={[0]}
          value={value}
          onValueChange={setValue}
          max={26}
          min={-26}
          step={1}
        />
      </div>
    </div>
  );
};
