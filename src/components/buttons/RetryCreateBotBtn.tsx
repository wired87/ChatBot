import React, {memo, ReactNode, useCallback, useState} from "react";
import {BotData} from "../../interfaces/userInterface";
import LoadingIndicator from "../LoadingIndicator";
import ModalError from "../modal/content/ModalError";
import ConfirmContent from "../modal/content/ConfirmContent";
import axios from "axios";
import BaseModal from "../modal/BaseModal";
import {useLoading} from "../../hooks/useLoading";

interface ModalErrorProps {
  bot: BotData;
  updateOpen: () => void;
  open: boolean;
}

const BASE_URL: string = process.env.REACT_APP_BASE_EDNPOINT!;
const REACT_APP_RETRY_BOT_DEPLOYMENT: string = process.env.REACT_APP_RETRY_BOT_DEPLOYMENT!;
const retryUrl: string = `${BASE_URL + REACT_APP_RETRY_BOT_DEPLOYMENT}`;


const RetryCreateBotBtn: React.FC<ModalErrorProps> = (
  {
    bot,
    updateOpen,
    open
  }
) => {

  const {loading, setLoading, updateLoading} = useLoading();

  const [e, setE] = useState<string>("");

  const onSend = async () => {
    setLoading(true);
    console.log("SENDING RETRY BOT NAME:", bot.name);
    try {
      const res = await axios.post(
        retryUrl,
        {
          bot_name: bot.name
        }
      );
      if (res.data?.status_code === 200) {
        updateOpen();
        window.location.reload();
      } else {
        console.log("Invalid request: ", res.data.message);
        setE(res.data.message)
      }

    } catch ( err:unknown ) {
      if ( err instanceof Error ) {
        console.log("Something unexpected happened:", err);
        setE("Too many requests at the time. Please try again later.");
      }
    } finally {
      setLoading(false);

    }
  }
  const Content = useCallback((): ReactNode => {
    if ( loading ) {
      return(
        <div className={"flex w-full h-full justify-center items-center pt-5 pb-8"}>
          <LoadingIndicator loading={loading} />
        </div>
      )
    } else if ( e.trim().length > 0 ) {
      return(
        <ModalError
          onSend={onSend}
          updateOpen={updateOpen}
          errorMessage={e}
        />
      )
    }
    return(
      <ConfirmContent
        cusHeading={"Retry Bot Deployment?"}
        helpText={"This will ( logical ) NOT effect your bot limit."}
        updateOpen={updateOpen}
        onConfirm={onSend}
      />
    )
  }, [e, loading]);

  const process = () => {
    setE("");
    updateOpen();
  }

  return(
    <BaseModal
      onClose={process}
      open={open}
      children={
        Content()
      }
    />
  )
}

export default memo(RetryCreateBotBtn);