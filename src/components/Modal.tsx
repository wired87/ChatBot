import React, {Fragment, memo, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import {Button} from "@mui/material";
import {BotData} from "../interfaces/userInterface";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import ConfirmBotDeleteModal from "./modal/ConfirmDeleteBotModal";

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

  const getScripttag = (): string => {
    return "<script src='https://ur-to-bot/code/babel' content={bot.name}></script>"
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
            leaveTo="opacity-0"
          >
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
                    <small className="text-xs text-gray-700 bg-gray-100 px-2 py-1 ml-1 rounded-sm">
                      {
                        bot.status
                      }
                    </small>
                  </h1>
                  <p className="text-xs mt-1 text-gray-500">
                    <input
                      className="bg-slate-200 rounded-md text-xs  px-5 py-2 border-l"
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


                    <CiSettings onClick={() => {}} />
                    <RiDeleteBin6Line onClick={() => {}} />

                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>
                  </div>

                  <div className="h-80 p-4 rounded-md  bg-gray-800 mt-4">
                    <pre>

                      {
                        getScripttag()
                      }

                    </pre>
                    <pre>
                      // Keep it safe
                    </pre>
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