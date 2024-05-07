import React, {memo} from "react";

import {DefaultInputComponentTypes} from "../../interfaces/DashboardInterface";




const DefaultInput: React.FC<DefaultInputComponentTypes> = (
  {
    label,
    key,
    placeholder,
    updateInput
  }
) => {

  return(
    <div className="mt-2 w-full">
      <label
        className="block text-md text-gray-600"
        htmlFor="name"
      >
        {
          label
        }
      </label>
      <input
        type="text"
        onChange={e => updateInput(key)}
        className="px-3 py-2 rounded-md text-gray-700  bg-slate-100 w-full outline-0"
        placeholder={placeholder}
      />
    </div>
  )
}


export default memo(DefaultInput);