import React, {Fragment, memo,  useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import {UserInterface} from "../../interfaces/userInterface";
import LoadingIndicator from "../LoadingIndicator";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
import ModalError from "./content/ModalError";


interface Props {
  user?: UserInterface | null;
  updateOpen: () => void;
  open: boolean
}

const BASE_URL: string = process.env.REACT_APP_BASE_EDNPOINT!;
const UNSUB_URL:string = process.env.REACT_APP_UNSUB_ENDP!;

const unsubUrl: string = `${BASE_URL + UNSUB_URL}`;

const Unsub: React.FC<Props> = (
  {
    open,
    updateOpen,
  }
) => {

  const [loading, setLoading] = useState<boolean>(false);

  const user: UserInterface | null | undefined = useSelector((state: any) => state.userSlice.user);

  const [e, setE] = useState<string>("");

  const onSend = async () => {
    setLoading(true);
    setE("");
    const sendObject= {
      "user_id": user?.auth?.uid,
    }
    console.log("SEDNING OBJECT:", sendObject)
    try {
      const res = await axios.post(
        unsubUrl,
        sendObject
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

  // get a href

  const Content = () => {
    if ( e ){
      return(
        <ModalError
          onSend={onSend}
          updateOpen={updateOpen}
          errorMessage={e}
        />
      )
    } else if ( loading ) {
      return(
        <div className={"flex w-full h-full justify-center items-center pt-5 pb-8"}>
          <LoadingIndicator loading={loading} />
        </div>
      )
    } else if ( user?.plan?.status === "DISCONTINUED" ) {
      return(
        <>
          <div className="mt-3 text-left sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-3xl font-semibold leading-6 text-gray-900" >
              Already happened!
            </Dialog.Title>
          </div>
          <div className={"flex flex-col w-full h-full min-h-[100px]"}>
            <h5>
              We have discontinued your plan. You have { user?.plan?.daysLeft } days left to use your Bots.
              After that duration they will be disabled.
            </h5>
            <div className={"flex justify-between items-center flex-row w-full px-5 py-3"}>
              <Button onClick={updateOpen}>Close</Button>
            </div>
          </div>
        </>
      )
    }
    return(
      <>
        <div className="mt-3 text-left sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-3xl font-semibold leading-6 text-gray-900" >
            Are you sure?
          </Dialog.Title>
        </div>
        <div className={"flex flex-col w-full h-full min-h-[100px]"}>
          <h5>
            You will keep your all your Bots but you will not be able to use them anymore.
          </h5>
          <div className={"flex justify-between items-center flex-row w-full px-5 py-3"}>
            <Button onClick={updateOpen}>Close</Button>
            <Button onClick={onSend}>Confirm!</Button>
          </div>
        </div>
      </>
    )
  }

  return (
    <Transition.Root show={open} as={Fragment} >
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

                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-semibold leading-6 text-gray-900"
                    >
                      Delete Plan
                    </Dialog.Title>
                  </div>
                  {
                    Content()
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default memo(Unsub);