import React, {memo, ReactNode, useState} from "react";
import axios from "axios";
import ModalError from "./ModalError";
import LoadingIndicator from "../../LoadingIndicator";
import ConfirmContent from "./ConfirmContent";
import BaseModal from "../BaseModal";


interface ConfirmModalProps {
  updateOpen: () => void;
  open: boolean;
  userId: string;
}

const BASE_URL: string = process.env.REACT_APP_BASE_EDNPOINT!;
const DELETE_ALL_BOTS_ENDP: string = process.env.REACT_APP_DELETE_ALL_BOTS_ENDP!;
const deleteAllBotsUrl: string = `${BASE_URL + DELETE_ALL_BOTS_ENDP}`;


const DeleteAll: React.FC<ConfirmModalProps> = (
  {
    open,
    updateOpen,
    userId,
  }
) => {

  const [loading, setLoading] = useState<boolean>(false);

  const [e, setE] = useState<string>("");

  const onSend = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        deleteAllBotsUrl,
        {
          user_id: userId
        }
      );
      if (res.data?.status_code === 200) {
        updateOpen();
        window.location.reload();
      } else {
        console.log("Invalid request...")
        setE(res.data.message)
      }

    } catch ( err:unknown ) {
      if ( err instanceof Error ) {
        console.log("Something unexpected happened:", err);
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
        helpText={"All your Bots will get lost and your total Bot limit will NOT be increased!"}
        updateOpen={updateOpen}
        onConfirm={onSend}
      />
    )
  }

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
  );
}


export default memo(DeleteAll);