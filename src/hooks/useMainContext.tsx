import {useUser} from "./useUser";
import React, {memo} from "react";
import {MainContextProviderInterface} from "../interfaces/HookInterface";
import { MainContext } from "../Context";

const MainContextProvider: React.FC<MainContextProviderInterface> = (
  {
    children
  }
) => {


  const {
    checkSessionData,
    user,
    updateUser
  } = useUser();

  const elements = {
    checkSessionData,
    user,
    updateUser
  }

  return(
    <MainContext.Provider value={elements}>
      {children}
    </MainContext.Provider>
  );
}

export default memo(MainContextProvider);