import {Dispatch, SetStateAction, useState} from "react";

export interface JwtToken {
  access?: string;
  refresh?: string;
}


// JWT INTERFACE
export interface JwtHookInterface {
  jwtToken: JwtToken | null;
  setJwtToken: Dispatch<SetStateAction<JwtToken | null>>;
  updateJwtToken: ( value: JwtToken | null ) => void;
  updateRefresh: ( value: string | undefined ) => void;
  updateAccess: ( value: string | undefined ) => void;
}


export const useJwt = ():JwtHookInterface => {
  const [jwtToken, setJwtToken] = useState<JwtToken | null>(null);

  const updateAccess = (access: string | undefined) => {
    setJwtToken(prevState => ({
      ...prevState,
        access: access
    }))
  }

  const updateRefresh = (refresh: string | undefined) => {
    setJwtToken(prevState => ({
      ...prevState,
        refresh: refresh
    }))
  }

  const updateJwtToken = (value:JwtToken | null) => {
    if (jwtToken !== value) {
      setJwtToken(value);
    }
  }

  return {jwtToken, setJwtToken, updateJwtToken, updateAccess, updateRefresh}
}