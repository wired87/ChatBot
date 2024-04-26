import React, {Fragment, memo, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import {BotData} from "../interfaces/userInterface";
import { RiDeleteBin6Line } from "react-icons/ri";
import ConfirmBotDeleteModal from "./modal/content/CDeleteB";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface BotInfoModal {
  open: boolean;
  updateOpen: () => void;
  bot: BotData;
}

const Modal: React.FC<BotInfoModal> = (
  {
    bot,
    updateOpen,
    open,
  }
) => {

  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const updateDeleteOpen = () => setDeleteOpen(!deleteOpen);
  
  const nav = useNavigate();

  const getScriptTag = (): string => {
    return `<script async data-id="${bot.name}" src="https://build-6o948etdj-angelus123s-projects.vercel.app/static/js/main.2f6cadb6.js"></script>`;
  }


  const demoLinkComp = (status: string) => {
    if ( status === "ACTIVE") {
      return(
        <Button
          onClick={() => nav("/")}
        >
          Demo
        </Button>
      )
    }
    return <></>
  }

  return (
    <>
      <ConfirmBotDeleteModal
        updateOpen={updateDeleteOpen}
        open={deleteOpen}
        botId={bot.name || ""}
      />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={updateOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                  <h1 className="text-gray-900 text-2xl font-semibold">
                    {bot.name}{" "}
                    <small className="text-xs mx-3 text-gray-700 bg-gray-100 px-2 py-1 ml-1 rounded-sm">
                      {
                        demoLinkComp(bot.status || "")
                      }
                    </small>
                  </h1>
                  <p className="text-xs mt-1 text-gray-500">
                    <input
                      className="bg-slate-200 rounded-md text-xs min-w-[250px] px-5 py-2 border-l"
                      type="text"
                      value={bot.dataUrl}
                      name=""
                      disabled
                      id=""
                    />
                  </p>
                  <div className="py-4">
                    <p className="text-gray-600 text-base font-normal">
                      {
                        bot.description
                      }
                    </p>
                  </div>

                  <div className="flex absolute top-3 right-3 items-center mt-4 gap-3">


                    <RiDeleteBin6Line className={"cursor-pointer "} color={"red"} onClick={updateDeleteOpen} />


                  </div>
                  <div className={"flex flex-col justify-center items-center w-full"}>
                    <SyntaxHighlighter language="javascript" style={okaidia}>
                      {getScriptTag()}
                    </SyntaxHighlighter>
                    <a href="/supported-platforms">Explore our integration guides!</a>
                  </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}


export default memo(Modal);