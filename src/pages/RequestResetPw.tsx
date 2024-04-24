import React, {memo, useCallback, useState} from "react";
import axios from "axios";
import Lottie from 'react-lottie';

import errorLottie from "../assets/annimations/errorLottie.json";
import successLottie from "../assets/annimations/successLottie.json";
import LoadingIndicator from "../components/LoadingIndicator";


interface Email {
  email: string;
}

interface LottieOptions {
  loop: boolean;
  autoplay: boolean;
  animationData: object;
  rendererSettings: {
    preserveAspectRatio: string;
  }
}


const resetUrl: string = "https://wired66.pythonanywhere.com/auth/reset-request/";

const RequestReset: React.FC = () => {
  const [email, setEmail] = useState<Email>({
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleResetClick = async () => {
    setLoading(true);
    try {
      const res = await axios.post(resetUrl, email);
      console.log("Auth Response:", res);
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
  }

  const defaultOptions = (animationData: object):LottieOptions  => {
    return {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  };

  const loadingContent = useCallback( () => {
    if ( !loading ) {
      return(
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) =>
            setEmail({
              email: e.target.value,
            })
          }
          autoComplete="email"
          required
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      )
    }
    return <LoadingIndicator loading={loading} />
  }, [loading])


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
            Send Email
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


export default memo(RequestReset);