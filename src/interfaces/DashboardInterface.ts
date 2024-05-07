import {IColor} from "react-color-palette";

export interface Input {
  name: string;
  description: string;
  dataUrl: string;
  pubName: string;
  welcomeMessage: string;
}
export interface DesignData {
  primary: IColor;
  primaryText: IColor;
  welcomeMessage: string;
}
export interface PostObject {
  user_id: string;
  model_id: string;
  data_url: string;
  description: string;
  pubName: string;
  configData: DesignData
}
export interface InputTypes {
  label: string;
  key: keyof Input;
  placeholder: string;
}

export interface InputItem {
  label: string;
  key: keyof Input;
  placeholder: string;
}


export interface DefaultInputComponentTypes {
  label: string;
  key: keyof Input;
  placeholder: string;
  updateInput: (value:keyof Input) => void;
}