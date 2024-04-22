import React, {Fragment, memo, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import successBotCreate from "../assets/annimations/successBotCreate.json";
import errorLottie from "../assets/annimations/errorLottie.json";
import Lottie from "react-lottie";

import {defaultOptions} from "../functions/lottie";
import LoadingIndicator from "./LoadingIndicator";
import {useNavigate} from "react-router-dom";

interface Input {
  name: string;
  description: string;
  dataUrl: string;
}

interface Props {
  uid: string;
  updateOpen: () => void;
  open: boolean

}


interface PostObject {
  user_id: string;
  model_id: string;
  data_url: string;
  description: string;
}

const postUrl: string = "https://wired66.pythonanywhere.com/bot/create/";

const AddBot: React.FC<Props> = (
  {
    open,
    updateOpen,
    uid
  }
) => {

  const [input, setInput] = useState<Input>(
    {
      name: "",
      description: "",
      dataUrl: "",
    }
  )

  const [error, setError] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const navigate = useNavigate();

  const updateInput = (key: keyof Input) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prevInput => ({
      ...prevInput,
      [key]: e.target.value
    }));
  };

  const getSenderObject = (): PostObject | string => {
    const { name, dataUrl, description } = input;
    if (!dataUrl.startsWith("https")) {
      return "The given URL is not secure.";
    } else if ( dataUrl.length === 0 || description.length === 0 || name.length === 0 ) {
      return "All fields are required...";
    }
    return {
      user_id: uid,
      model_id: name,
      data_url: dataUrl,
      description: description,
    }
  }

  const createBot = async () => {
    setInputError("");

    if ( uid?.length > 0 ) {
      setLoading(true);

      // data preparation
      const senderObject: PostObject | string = getSenderObject();
      if ( typeof senderObject === 'string' ) {
        setInputError(senderObject);
        setLoading(false);
        return;

      }
      try {
        const res = await axios.post(
          postUrl,
          senderObject
        );
        if (res.data?.status_code === 200) {
          console.log("Data:", res.data);
          setSuccess(res.data.message);
        } else {
          console.log("Invalid request...")
          setError(res.data.message)
        }

      } catch ( e:unknown ) {
        if ( e instanceof Error ) {
          console.log("Something unexpected occurred:", e);
          setError("The connection was getting lost. Please try gian.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  };


  const checkReload = () => {
    if (success.length > 0 ) {
      window.location.reload();
    }
  }


  const Content = () => {
    if ( error.length > 0 ) {
      return(
        <>
          <Lottie options={defaultOptions(errorLottie)} height={400} width={400} />
          <h4>{error}</h4>
        </>
      )
    } else if ( success.length > 0 ) {
      return(
        <>
          <Lottie options={defaultOptions(successBotCreate)} height={400} width={400} />
          <h4>{success}</h4>
          <button onClick={() => window.location.reload()}>close</button>
        </>
      )
    } else if ( loading ) {
      return( <LoadingIndicator loading={loading} />)
    } else if ( !loading && error.length === 0 && !success ) {
      return(
        <>
          <div className="grid grid-cols-2 gap-4">
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
                  name="name"
                  onChange={updateInput("name")}
                  className="px-3 py-2 rounded-md text-gray-700  bg-slate-100"
                  placeholder="Just an identifier. . ."
                  id="name"
                  required
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="">
                <label
                  className="block text-md text-gray-600"
                  htmlFor="name" >
                  Your website url
                </label>
                <input
                  type="text"
                  name="dataUrl"
                  onChange={updateInput("dataUrl")}
                  required
                  className="px-3 py-2 rounded-md text-gray-700  bg-slate-100"
                  placeholder="The url of your website ( landingpage )"
                  id="dataUrl"
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
                <input
                  type="text"
                  name="description"
                  onChange={updateInput("description")}
                  className="px-3 py-2 rounded-md text-gray-700  bg-slate-100"
                  placeholder="Name"
                  id="name"
                  maxLength={20}
                  required
                />
              </div>
            </div>
          </div>
          <div className={"text-center w-full"}>
            {inputError}
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                updateOpen();
                createBot()
                  .then(r => console.log("Bot request successful..."))
                  .catch(e => console.log("Bot request failed cause Error:", e))
              }} >
              Create a new bot
            </button>
          </div>
        </>
      )
    }
  }



  return (
    <Transition.Root show={open} as={Fragment} afterLeave={checkReload}>
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
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5
              text-left shadow-xl transition-all w-full  max-w-3xl  "
              >
                <>
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
                  {
                    Content
                  }
                </>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default memo(AddBot);



