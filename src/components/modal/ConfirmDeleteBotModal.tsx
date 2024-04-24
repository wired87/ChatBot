import React, {memo, ReactNode, useState} from "react";
import BaseModal from "./BaseModal";
import ConfirmContent from "./content/ConfirmContent";
import axios from "axios";
import LoadingIndicator from "../LoadingIndicator";
import ModalError from "./content/ModalError";


interface ConfirmModalProps {
  updateOpen: () => void;
  open: boolean;
  botId: string;
}

const BASE_URL: string = process.env.REACT_APP_BASE_EDNPOINT!;
const DELETE_BOT_URL: string = process.env.REACT_APP_DELETE_BOT_ENDP!;
const deleteBotUrl: string = `${BASE_URL}${DELETE_BOT_URL}`


const ConfirmBotDeleteModal: React.FC<ConfirmModalProps> = (
  {
    open,
    updateOpen,
    botId,
  }
) => {

  const [loading, setLoading] = useState<boolean>(false);

  const [e, setE] = useState<string>("");

  const onSend = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        deleteBotUrl,
        {
          bot_name: botId
        }
      );
      if (res.data?.status_code === 200) {
        window.location.reload();
      } else {
        console.log("Invalid request...")
        setE(res.data.message)
      }

    } catch ( e:unknown ) {
      if ( e instanceof Error ) {
        console.log("Something unexpected occurred:", e);
        setE("The connection was getting lost. Please try gian.");
      }
    } finally {
      setLoading(false);
    }
  }

  const Content = (): ReactNode => {
    if ( loading ) {
      return(
        <div className={"flex w-full h-full justify-center items-center pt-5 pb-8"}>
          <LoadingIndicator loading={loading} />
        </div>
      )
    } else if ( e ) {
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
        cusHeading={"Are you sure?"}
        helpText={"Your total Bot limit will NOT be increased!"}
        updateOpen={updateOpen}
        onConfirm={}
      />
    )
  }


  return(
    <BaseModal
      onClose={updateOpen}
      open={open}
      children={
        Content()
      }
    />
  );
}


export default memo(ConfirmBotDeleteModal);