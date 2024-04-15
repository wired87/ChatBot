import {useState} from "react";

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoading = (value:boolean) => setLoading(value);

  return {loading, setLoading, updateLoading};
}