import React, {useEffect, useState} from "react";
import {useChain} from "./useChain";
import {prepareDatasetObject} from "./clientBotRequest";

const Main: React.FC = () => {
  const [botDataTag, setBotDataTag] = useState<string | null>(null);

  const { chainObject, updateChainObject } = useChain();

  document.addEventListener('DOMContentLoaded', function() {
    const scriptTag = document.currentScript;
    const botToken = scriptTag.getAttribute('data-bot-token');
    setBotDataTag(botToken)
  });


  const splitString = (input: string) => {
    if (!input || input.split(':').length !== 3) {
      throw new Error('Not the right format..."');
    }

    const [userId, botId, datasetId] = input.split(':');

    return [userId, botId, datasetId]
  }


  useEffect(() => {
    if ( botDataTag ) {
      const data: string[] | null = splitString(botDataTag);
      prepareDatasetObject(data[2], updateChainObject)
        .then(() => console.log("ChainObject was successfully set..."))
        .catch(e => console.log("Error occurred while set the chain"))
    }
  }, [botDataTag]);


  useEffect(() => {
    if ( chainObject ) {

    }
  }, [chainObject]);



  return(
    <></>
  )
}