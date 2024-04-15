import { Spinner } from "react-activity";
import React, {memo, ReactNode} from "react";

interface LoadingComp {
  loading: boolean
}
const LoadingIndicator: React.FC<LoadingComp> = (
  {
    loading
  }
) => {
  if (loading) {
    return <Spinner />
  }
  return <></>;
}

export default memo(LoadingIndicator);

