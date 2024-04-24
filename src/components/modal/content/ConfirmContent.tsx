import React, {memo} from "react";
import {Dialog} from "@headlessui/react";
import {Button} from "@mui/material";

interface ConfirmProps {
  cusHeading: string;
  updateOpen: () => void;
  onConfirm: () => void;
  helpText: string;
}

const ConfirmContent: React.FC<ConfirmProps> = (
  {
    updateOpen,
    onConfirm,
    cusHeading,
    helpText
  }
) => {

  const heading = () => {
    if ( cusHeading ) {
      return <h4>{cusHeading}</h4>
    }
    return(
      <h4>Are you sure?</h4>
    )
  }

  return(
    <>
      <div className="mt-3 text-left sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-3xl font-semibold leading-6 text-gray-900" >
          {
            heading()
          }
        </Dialog.Title>
      </div>
      <div className={"flex flex-col w-full h-full min-h-[100px]"}>
        <h5>
          {
            helpText
          }
        </h5>
        <div className={"flex justify-between items-center flex-row w-full px-5 py-3"}>
          <Button onClick={updateOpen}>Close</Button>
          <Button onClick={onConfirm}>Confirm!</Button>
        </div>
      </div>
    </>
  );
}


export default memo(ConfirmContent);