import React, { memo } from "react";
import DefaultInput from "../input/DefaultInput";
import {Input, InputItem} from "../../interfaces/DashboardInterface";


interface InputMapProps {
  inputMapArray: InputItem[];
  updateInput: (key: keyof Input) => void;
}

const InputMap: React.FC<InputMapProps> = (
  {
    inputMapArray,
    updateInput
  }
) => {
  return (
    <>
      {inputMapArray.map((item: InputItem) => (
        <DefaultInput
          label={item.label}
          key={item.key}
          placeholder={item.placeholder}
          updateInput={updateInput}        />
      ))}
    </>
  );
}

export default memo(InputMap);
