import Lottie from "react-lottie";
import {defaultOptions} from "../../../functions/lottie";
import errorLottie from "../../../assets/annimations/errorLottie.json";
import {Button} from "@mui/material";
import React, {memo} from "react";

interface ModalErrorProps {
  onSend: () => void;
  updateOpen: () => void;
  errorMessage?: string;
}

const ModalError: React.FC<ModalErrorProps> = (
  {
    updateOpen,
    onSend,
    errorMessage
  }
) => {
  return(
    <div className={"flex flex-col justify-center items-center w-full"}>
      <Lottie options={defaultOptions(errorLottie)} height={100} width={100} />
      <h4>{errorMessage}</h4>
      <div className={"flex justify-between items-center flex-row w-full px-5 py-3"}>
        <Button onClick={updateOpen}>Close</Button>
        <Button onClick={onSend}>Retry!</Button>
      </div>
    </div>
  )
}

export default memo(ModalError);