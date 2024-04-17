import {useUser} from "./useUser";
import React, {Dispatch, memo, SetStateAction, useCallback} from "react";
import {MainContextProviderInterface} from "../interfaces/HookInterface";
import { MainContext } from "../Context";
import {useLoading} from "./useLoading";
import {useJwt} from "./useJwt";
import {sendObject} from "../functions/requests/SendProcess";
import {useShowModal, useUpperLinkBarVisible} from "./useUpperLinkBar";
import {useNavigate} from "react-router-dom";

const MainContextProvider: React.FC<MainContextProviderInterface> = (
  {
    children
  }
) => {
  const {jwtToken, setJwtToken,updateJwtToken} = useJwt();
  const {loading, updateLoading} = useLoading();

  const {upperLinkBarVisible, setUpperLinkBarVisible, updateLinkBarVisible} = useUpperLinkBarVisible();
  const {show, setShow, updateShow} = useShowModal();

  const navigate = useNavigate();

  const {
    checkSessionData,
    user,
    updateUser
  } = useUser();

  const defaultPostRequest = useCallback(async (
    postUrl: string,
    postObject: any,
    setError: Dispatch<SetStateAction<string>>,
  ):Promise<any> => {

    if (!jwtToken) {
      navigate("/login") // todo
    }

    updateLoading(true);
    setError("");

    let response;

    if (jwtToken?.refresh && jwtToken?.access && user?.auth?.uid) {
      try {
        console.log("Data sent:", postObject);
        response = await sendObject(
          postObject,
          jwtToken,
          postUrl
        );
        if (response) {
          return response
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          console.error("Error while contact submit occurred:", e.message);
        }
        return null;
      } finally {
        console.log("Application request finished...");
        updateLoading(false);
      }
    }
  }, [jwtToken, user]);




  const elements = {
    checkSessionData,
    user,
    updateUser,
    upperLinkBarVisible, updateLinkBarVisible,
    show, updateShow,defaultPostRequest,
    loading, updateLoading
  }




  return(
    <MainContext.Provider value={elements}>
      {children}
    </MainContext.Provider>
  );
}

export default memo(MainContextProvider);