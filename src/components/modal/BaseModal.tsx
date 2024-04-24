import {Dialog, Transition} from "@headlessui/react/dist";
import React, {Fragment, memo, ReactNode} from "react";
interface BaseModalTypes {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
}
const BaseModal: React.FC<BaseModalTypes> = (
  {
    children,
    onClose,
    open
  }
) => {
  return (
    <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
          <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5
                            text-left shadow-xl transition-all w-full max-w-3xl" >

                {
                  children
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default memo(BaseModal);
