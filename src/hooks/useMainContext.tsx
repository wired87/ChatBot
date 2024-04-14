import {useUser} from "./useUser";
import React, {Dispatch, memo, SetStateAction, useCallback} from "react";
import {MainContextProviderInterface} from "../interfaces/HookInterface";
import { MainContext } from "../Context";
import {useLoading} from "./useLoading";
import {useJwt} from "./useJwt";
import { getToken} from "../functions/requests/JwtFunctions";
import {sendObject} from "../functions/requests/SendProcess";
import {useShowModal, useUpperLinkBarVisible} from "./useUpperLinkBar";
import {errorCodes} from "../errorCodes";

const MainContextProvider: React.FC<MainContextProviderInterface> = (
  {
    children
  }
) => {
  const {jwtToken, setJwtToken,updateJwtToken} = useJwt();
  const {loading, setLoading} = useLoading();

  const {upperLinkBarVisible, setUpperLinkBarVisible, updateLinkBarVisible} = useUpperLinkBarVisible();
  const {show, setShow, updateShow} = useShowModal();


  const {
    checkSessionData,
    user,
    updateUser
  } = useUser();

  const elements = {
    checkSessionData,
    user,
    updateUser,
    upperLinkBarVisible, updateLinkBarVisible,
    show, updateShow
  }




  const defaultPostRequest = useCallback(async (
    postUrl: string,
    postObject: any,
    setError: Dispatch<SetStateAction<string>>,
    setResponse: Dispatch<SetStateAction<string>>,
    setStatus?:Dispatch<SetStateAction<number>>,
    toolAction?: boolean
  ):Promise<any> => {
    console.log("jwtToken in Application Content:", jwtToken);
    console.log("user in Application Content:", user);

    if (!jwtToken) {
      setError("No Jwt Token Provided...")
      return;
    }

    setLoading(true);
    setError("");

    let response;
    try {
      if (jwtToken?.refresh && jwtToken.access && user?.uid) {
        console.log("defaultPostRequest data sent: ", postObject);
        response = await sendObject(
          postObject,
          jwtToken,
          setJwtToken,
          user?.uid,
          postUrl
        );
      } else {
        console.error("No token provided. Current Access Token:", jwtToken?.access, "\n\n current refresh token:", jwtToken?.refresh);
        const newToken = await getToken(setJwtToken, user?.uid);
        if (newToken && user?.uid) {
          response = await sendObject(
            postObject,
            newToken,
            setJwtToken,
            user?.uid,
            postUrl
          );
        } else {
          console.error("New Token request failed...");
          setError("Authentication Error");
        }
      }
      if (response) {
        if (response.message && !response.error && !errorCodes.includes(response.status)){
          console.log("Response Successfully:", response);
          setResponse(response.message);
        }else if(!response.message && response.error || errorCodes.includes(response.status)) {
          console.error("Received no result:", response);
          setError(response.error);
          if (setStatus){
            setStatus(Number(response.status));
          }
        }else{
          try{
            setError(response.message)
          }catch(e:unknown){
            if (e instanceof Error) {
              console.error("Could nat classify the response:", e)
              setError("An unexpected error occurred. Please try again or contact the Support.")
            }
            if (setStatus){
              setStatus(500);
            }
          }
        }
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
        console.error("Error while contact submit occurred:", e.message);
      }
      if (setStatus){
        setStatus(500);
      }
    } finally {
      console.log("Application request finished...");
      setLoading(false);
    }
  }, [jwtToken, user]);






  return(
    <MainContext.Provider value={elements}>
      {children}
    </MainContext.Provider>
  );
}

export default memo(MainContextProvider);