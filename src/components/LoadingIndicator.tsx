import {Spinner} from "react-activity";
import React, {memo} from "react";
import "react-activity/dist/library.css";

interface LoadingComp {
  loading: boolean;
  size?: number
  color?: string;
}
const LoadingIndicator: React.FC<LoadingComp> = (
  {
    loading,
    size,
    color
  }
) => {
  return <Spinner
    color={color || "black"}
    size={ size|| 20 }
    animating={loading}
    style={{marginRight: 50, borderWidth: 1, borderColor: "red"}}
  />
}

export default memo(LoadingIndicator);

