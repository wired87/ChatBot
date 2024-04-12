import {useState} from "react";

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoading = () => setLoading(!loading);

  return {loading, setLoading, updateLoading};
}