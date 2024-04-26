import React, {memo} from "react";
import {IconButton, Tooltip} from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";

interface InfoIconProps {
  text?: string;
}

const InfoComponent: React.FC<InfoIconProps> = ({text}) => {
  return(
    <Tooltip color={"black"} title={text}>
      <IconButton>
        <FaInfoCircle size={15} color={"black"} />
      </IconButton>
    </Tooltip>
  )
}

export default memo(InfoComponent);