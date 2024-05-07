import React, {memo, useState} from "react";
import { Dialog } from "@headlessui/react";



import {UserInterface} from "../../interfaces/userInterface";
import AdBotContent from "../add_bot/Content";
import BaseModal from "./BaseModal";




interface Props {
  user?: UserInterface | null;
  updateOpen: () => void;
  open: boolean
}



const AddBot: React.FC<Props> = (
  {
    open,
    updateOpen,
    user
  }
) => {
  const [successAddBot, setSuccessAddBot] = useState<string>("");
  const updateSuccessAddBot = (value:string) => setSuccessAddBot(value);

  const addBotChildren = () => {

    return(
      <div>
        <div className="mt-3 text-left sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-3xl font-semibold leading-6 text-gray-900"
          >
            Add New Bot
          </Dialog.Title>
        </div>
        <AdBotContent
          user={user}
          success={successAddBot}
          updateSuccess={updateSuccessAddBot}
        />
      </div>
    )
  }


  const checkReload = () => {
    if (successAddBot.length > 0 ) {
      window.location.reload();
    } else {
      updateOpen()
    }
  }

  return (
    <BaseModal
      children={addBotChildren()}
      open={open}
      onClose={checkReload}
    />
  );
}

export default memo(AddBot);