import {createContext, Dispatch, SetStateAction} from "react";
import {UserInterface} from "./interfaces/userInterface";

export const MainContext = createContext(
  {
    user: null as UserInterface | null,
    updateUser: ((value:UserInterface | null) => {}),
    checkSessionData: () => {},

    upperLinkBarVisible: true,
    updateLinkBarVisible: (value:boolean) => {},

    show: false,
    updateShow: (value:boolean) => {},

    defaultPostRequest: async (
      postUrl: string,
      postObject: object,
      setError: Dispatch<SetStateAction<string>>,
      setResponse: Dispatch<SetStateAction<any>>,
      setStatus?: Dispatch<SetStateAction<number>>,
      toolAction?:boolean
    ) => Promise<any>,
  });