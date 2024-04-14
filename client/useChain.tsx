import {useState} from "react";
import {RetrievalQAChain} from "langchain/chains";

export const useChain = () => {
  const [chainObject, setChainObject] =
    useState<RetrievalQAChain | null>(null);

  const updateChainObject = (cain: RetrievalQAChain | null) => setChainObject(cain)

  return {
    chainObject,
    updateChainObject
  }
}