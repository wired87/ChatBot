import {Spinner} from "react-activity";
import React, {memo} from "react";
import "react-activity/dist/library.css";

interface LoadingComp {
  loading: boolean
}
const LoadingIndicator: React.FC<LoadingComp> = (
  {
    loading
  }
) => {
  return <Spinner
    color={"black"}
    size={20}
    animating={loading}
    style={{marginRight: 50, borderWidth: 1, borderColor: "red"}}

  />
}

export default memo(LoadingIndicator);

