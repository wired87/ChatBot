import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Unsub from "./modal/Unsub";
import DelAccountModal from "./modal/DelAccount";
import {useNavigate} from "react-router-dom";
import sessionStorage from "redux-persist/es/storage/session";
import {useDispatch} from "react-redux";
import {authActions} from "../functions/redux/app/slices/authSlice";
import {RiMenu2Fill} from "react-icons/ri";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const resetRequestNavUrl: string = `https://www.botworld.cloud/request-reset`

export default function Sidebar(props: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [deletePlanModal, setDeletePlanModal] = useState<boolean>(false);

  const [deleteAccountModal, setDeleteAccountModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const nav = useNavigate();

  const updateDeletePlanModal = () => setDeletePlanModal(!deletePlanModal);

  const updateDeleteAccountModal = () => setDeleteAccountModal(!deleteAccountModal);

  const logoutProcess = () => {
    localStorage.clear();
    sessionStorage.removeItem("user");
    dispatch(authActions.Logout());
    window.location.reload();
  }


  const navigation: any = [
    {
      name: "Settings",
      current: false,
      children: [
        {name: "Reset-password", onClick: () => window.open(resetRequestNavUrl, "_blank")},
        //{ name: "reset email", href: "#" },
        {name: "Delete plan", onClick: updateDeletePlanModal},
        {name: "Delete Account", onClick: updateDeleteAccountModal},
      ],
    },
  ];


  return (
    <>
      <Unsub open={deletePlanModal} updateOpen={updateDeletePlanModal}/>
      <DelAccountModal open={deleteAccountModal} updateOpen={updateDeleteAccountModal}/>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50  " onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80"/>
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5 "
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white  pb-4">
                    <div className="flex h-16 px-10   shrink-0 items-center">
                      <a onClick={() => nav("/")}
                         className="decoration-0 cursor-pointer relative leading-[120%] font-black">BotWorld</a>
                    </div>
                    <nav className="flex flex-1  items-start flex-col">
                      <ul
                        role="list"
                        className="flex flex-1 w-full  text-black flex-col gap-y-6"
                      >
                        {navigation.map((item: any) => (
                          <li
                            style={{cursor:"pointer"}}
                            className="list-none cursor-pointer mt-auto flex items-center gap-2"
                            key={item.name}
                          >
                            <Disclosure as="div">
                              {({open}) => (
                                <>
                                  <Disclosure.Button
                                    style={{cursor:"pointer"}}
                                    className={classNames(
                                      item.current ? "" : "",
                                      "flex items-center w-full list-none gap-2 text-left rounded-md   gap-x2  text-base leading-6  text-gray-700 bg-transparent"
                                    )}
                                  >
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
                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                      />
                                    </svg>
                                    {item.name}
                                    <ChevronRightIcon
                                      className={classNames(
                                        open
                                          ? "rotate-90 text-gray-500"
                                          : "text-gray-400",
                                        "h-5 w-5 shrink-0 "
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel as="ul" className="mt-1 ">
                                    {item.children.map((subItem: any) => (
                                      <li key={subItem.name}>
                                        <Disclosure.Button
                                          as="a"
                                          onClick={subItem.onClick}
                                          className={classNames(
                                            subItem.current
                                              ? "bg-gray-50"
                                              : "hover:bg-gray-50",
                                            "block rounded-md py-2 list-none pr-2 pl-9 text-sm leading-6 text-gray-700 cursor-pointer"
                                          )}
                                        >
                                          {subItem.name}
                                        </Disclosure.Button>
                                      </li>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </li>
                        ))}
                        <li className="cursor-pointer list-none pl-1.5 flex items-center gap-2" onClick={logoutProcess}>
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
                              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                            />
                          </svg>
                          Logout
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className=" ">
          <div
            className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b
            border-gray-200 bg-white px-3 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 px-4 py-2.5 text-white bg-black"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <RiMenu2Fill size={30}/>
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-400 " aria-hidden="true"/>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{props.children}</div>
          </main>
        </div>
      </div>
    </>
  );
}



