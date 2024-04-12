import {ReactNode} from "react";

export interface WhyWe {
  title: string,
  text: string,
  btnText: string,
  rightSideComp?: ReactNode,
  navScreen: string
}