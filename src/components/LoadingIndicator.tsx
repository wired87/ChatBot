import { Spinner } from "react-activity";
import React, {memo} from "react";

interface LoadingComp {
  loading: boolean
}
const LoadingIndicator: React.FC<LoadingComp> = (
  {
    loading
  }
) => {
  return <Spinner
    color={"rgb(0,0,0)"}
    size={20}
    animating={loading}
  />
}

export default memo(LoadingIndicator);

