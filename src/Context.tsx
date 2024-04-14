import {createContext} from "react";
import {UserInterface} from "./interfaces/userInterface";

export const MainContext = createContext(
  {
    user: null as UserInterface | null,
    updateUser: ((value:UserInterface | null) => {}),
    checkSessionData: () => {},

    upperLinkBarVisible: true,
    updateLinkBarVisible: (value:boolean) => {},

    show: false,
    updateShow: (value:boolean) => {}
  });