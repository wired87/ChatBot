import React, {memo, useState} from "react";
import axios from "axios";
import Lottie from 'react-lottie';

import errorLottie from "../assets/annimations/errorLottie.json";
import successLottie from "../assets/annimations/successLottie.json";
import LoadingIndicator from "../components/LoadingIndicator";

import { useParams } from 'react-router-dom';
import {defaultOptions} from "../functions/lottie";

interface Creds {
  password: string;
  passwordTwo: string;
}

interface SenderObject {
  uidb64: string;
  token: string;
  new_password: string;
}


const resetUrl: string = "https://wired66.pythonanywhere.com/auth/reset/";

const ResetPw: React.FC = () => {
  const [creds, setCreds] = useState<Creds>({
    password: "",
    passwordTwo: ""
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [fieldError, setFieldError] = useState<string>("");



  const { uid, token } = useParams<{ uid: string; token: string }>();

  const checkCreds = () => {
    return creds.password === creds.passwordTwo;
  }


  const handleResetClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ( uid && token && checkCreds() ) {
      setLoading(true);
      const senderObject:SenderObject = {
        uidb64: uid,
        token: token,
        new_password: creds.password
      }
      try {
        const res = await axios.post(resetUrl, senderObject);
        console.log("Password reset Response:", res);
        if (res.data?.status_code === 200) {
          console.log("DATA:", res.data)
          setSuccess(true);
        }
      } catch ( e:unknown ) {
        if ( e instanceof Error ) {
          setError(true);
          console.log("Error occurred while sendeing the reset request:",  e)
        }
      } finally {
        setLoading(false)
      }
    } else {
      setFieldError("There is a mismatch with your input...");
    }
  }

  const handleChange = (key: keyof Creds) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds(prevCreds => ({
      ...prevCreds,
      [key]: e.target.value
    }));
  };

  const loadingContent =() => {
    if ( !loading ) {
      return(
        <div className={"flex flex-col justify-center items-center text-center text-red"}>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange("password")}
            autoComplete="email"
            required
            className="my-4 block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            id="passwordTwo"
            name="passwordTwo"
            type="password"

            onChange={handleChange("passwordTwo")}
            autoComplete="email"
            required
            className="text-black my-4 block px-2 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p className={"text-red"}>
            {
            fieldError
          }
          </p>
        </div>

      )
    }
    return( <LoadingIndicator loading={loading} />)
  }


  const Content = () => {
    if ( success ) {
      return(
        <>
          <Lottie options={defaultOptions(successLottie)} height={400} width={400} />
          <h4>We have sent an E-mail to you. Please follow these steps.</h4>
          <h5>You can close this window now</h5>
        </>
      )
    }else if ( error ) {
      return(
        <>
          <Lottie options={defaultOptions(errorLottie)} height={400} width={400} />
          <h4>Something unexpected occurred! Please try again.</h4>
        </>

      )
    }
    return(
      <form
        onSubmit={handleResetClick}
        className="space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900" >
            Email address from your linked account
          </label>
          <div className="mt-2">
            {
              loadingContent()
            }
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Change password!
          </button>
        </div>
      </form>
    )
  }



  return(
    <div className="bg-white flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className={"min-w-[300px] mx-[30px] lg:w-[300px] sm:w-[200px]"}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {
            Content()
          }
        </div>
      </div>
    </div>
  )
}


export default memo(ResetPw);