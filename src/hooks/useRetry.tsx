import {useState} from "react";


export function useRetry() {
  const [retryOpen, setRetryOpen] = useState<boolean>(false);
  const updateRetryOpen = () => setRetryOpen(!retryOpen);

  return {retryOpen, setRetryOpen, updateRetryOpen};
}