import React, {memo, useContext, useEffect, useState} from "react";
import axios from "axios";
//
import { useNavigate } from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {UserInterface} from "../interfaces/userInterface";
import LoadingIndicator from "../components/LoadingIndicator";
import {MainContext} from "../Context";

const BASE_URL = "https://wired66.pythonanywhere.com/";

interface AuthTypes {
  login: boolean
}

const Auth: React.FC<AuthTypes> = (
  {
    login
  }
) => {
  const navigate = useNavigate();
  const { saveUser, checkUserAvailability } = useUser();
  const { updateUser} = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");


  useEffect(() => {
    const user = checkUserAvailability();
    if ( user ) {
      navigate("/dashboard")
    }
  }, []);


  const getEndpoint = () => {
    if ( login ) {
      return `${BASE_URL}auth/login/`
    }
    return `${BASE_URL}auth/create/`
  }

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("")
    const postUrl = getEndpoint();
    const postObject = {
      email: userInfo.email,
      password: userInfo.password,
    };

    try {
      setLoading(true);
      const res = await axios.post(postUrl, postObject);
      console.log("Auth Response:", res);
      if (res.data?.status_code === 200) {
        console.log("DATA:", res.data)
        const userModel: UserInterface = {
          auth: {
            uid: res.data.user_id,
            access: res.data.access,
            refresh:  res.data.refresh,
          },
        }
        console.log("userModel:", userModel);
        saveUser(userModel)
        updateUser(userModel)
        navigate("/dashboard");
      }
      setError(res.data.message);
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Something Went wrong");
    } finally {
      console.log("Auth process finished...")
      setLoading(false);
    }
  };


  const heading = () => {
    if (login) {
      return "Sign in to your BotWorld account"
    }
    return "Create a new Account"
  }

  const footerText = () => {
    if (login ) {
      return(
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register now
          </a>
        </p>
      )
    }
    return(
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a
          href="/Auth"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Login here
        </a>
      </p>
    )
  }
  const Content = () => {
    if (loading) {
      return(
        <div className={"flex flex-1 justify-center items-center"}>
          <LoadingIndicator size={50} loading={loading} />
        </div>
      )
    }
    return(
      <form
        onSubmit={handleAuth}
        className="space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  email: e.target.value,
                })
              }
              autoComplete="email"
              required
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  password: e.target.value,
                })
              }
              type="password"
              autoComplete="current-password"
              required
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Login..." : "Login"}
          </button>
        </div>
      </form>
    )
  }

  return (
    <div className="bg-white flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className={"min-w-[300px] mx-[30px] lg:w-[300px] sm:w-[200px]"}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {
              heading()
            }
          </h2>

        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          {
            Content()
          }
          <p className="text-center text-bold text-red-700 mt-4">{error}</p>
          {
            footerText()
          }
        </div>
      </div>
    </div>
  );
}

export default memo(Auth);