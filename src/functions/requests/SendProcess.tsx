import {Dispatch, SetStateAction} from "react";
import {JwtToken} from "../../hooks/useJwt";
import {checkExistingToken, getNewTokenProcess, getTokenInfoData} from "./JwtFunctions";
import {errorCodes} from "../../errorCodes";



export const getCurrentTime = () => {
  const timeNow = new Date();
  let timeHoursNow = timeNow.getHours();
  let timeMinutesNow = timeNow.getMinutes()
  if (timeHoursNow < 10)  {
    timeHoursNow = Number("0" + timeHoursNow)
  } else if (timeMinutesNow < 10){
    timeMinutesNow = Number("0" + timeMinutesNow)
  }
  return(timeHoursNow + ":" + timeMinutesNow);
}

export const postMessageObject = async (
  jwtToken: string | undefined,
  senderObject: any,
  postUrl: string,
  options: any
): Promise<any> => {

  const { timeout = 20000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    let response;

    response = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(senderObject),
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);

    const data = await response?.json();
    console.log("Data postMessageObject:", data);
    return data;

  } catch (e: unknown) {
    clearTimeout(id);
    console.log("Error in postMessageObject:", e);
    return null;
  }
}

export const sendObject = async (
  senderObject: any,
  jwtToken: JwtToken,
  customPostUrl: string,
) => {

  // POST THE MESSAGE
  try {
    console.log("Create the post Object with accessToken:", jwtToken.access)
    const response = await postMessageObject(
        jwtToken?.access,
        senderObject,
        customPostUrl,
        {
          timeout: 20000
        }
      );

    console.log("sendObject res ===", response)
    if (!response) {
      return null;
    }else if (response.status_code == 200) {
      // Success
      console.log("Response", response);
      return response;
    } else if (errorCodes.includes(response.status_code)){
      // ERROR HANDLING

    }

  }catch(e) {
    console.error('Error in "sendObject":', e)
    return null;
  }
}

const errorHandling = (status_code: number) => {
  if ( status_code == 401) {
    // Authentication error

  } else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }else if ( status_code == 401) {

  }}


const authErrorHandling = (status_code: number, navigate: any) => {
  if ( status_code == 401) {
    // Authentication error
    navigate("/login") // todo
  } else if ( status_code == 429) {
    // Too many tries
  }
}