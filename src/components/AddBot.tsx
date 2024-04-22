import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AddBot(props: any) {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setOpen}>
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
          <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full  max-w-3xl  ">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-semibold leading-6 text-gray-900"
                    >
                      Add New Bot
                    </Dialog.Title>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mt-2">
                    <div className="">
                      <label
                        className="block text-md text-gray-600"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name=""
                        className="px-3 py-2 w-full rounded-md text-gray-700  bg-slate-100"
                        placeholder="Name"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="">
                      <label
                        className="block text-md text-gray-600"
                        htmlFor="name"
                      >
                        Status
                      </label>
                      <select
                        className="px-3 py-2 w-full text-gray-700 bg-slate-100"
                        name=""
                        id=""
                      >
                        <option selected value="">
                          Success
                        </option>
                        <option value="">Progress</option>
                        <option value="">Failed</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="">
                      <label
                        className="block text-md text-gray-600"
                        htmlFor="name"
                      >
                        Data URL
                      </label>
                      <input
                        type="text"
                        name=""
                        className="px-3 w-full py-2 rounded-md text-gray-700  bg-slate-100"
                        placeholder="www.site.com"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="">
                      <label
                        className="block text-md text-gray-600"
                        htmlFor="name"
                      >
                        Description
                      </label>
                      <textarea
                        name=""
                        className="px-3 py-2 w-full rounded-md text-gray-700  bg-slate-100"
                        placeholder="Name"
                        id="name"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => props.setOpen(false)}
                  >
                    Create a new bot
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
