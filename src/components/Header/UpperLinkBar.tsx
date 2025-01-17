
import React, {memo, useContext} from "react";
import "../../styles/main.css";
import "../../styles/coponentStyles/nav.css";
import "../../styles/coponentStyles/buttons.css";
import "../../styles/coponentStyles/homeStyles/homeMain.css";

import { IoCloseOutline } from "react-icons/io5";
import {MainContext} from "../../Context";
import NavAnchor from "./NavAnchor";

// STRINGS
const title:string = "Buche einen Termin!";
const href: string = "termin";

const UpperLinkBar: React.FC = () => {

  const {upperLinkBarVisible, updateLinkBarVisible} = useContext(MainContext);

  if (upperLinkBarVisible) {
    return(
      <div className={"flexCenter upperLinkBar pinkBg"} >
        <NavAnchor title={title} href={href} customClass={"whiteColor flexCenter"} />
        <button className={"offcanvasToggleButton"} onClick={() => updateLinkBarVisible(false)}>
          <IoCloseOutline size={20} color={"black"}/>
        </button>
      </div>
    );
  }
  return <></>
}

export default memo(UpperLinkBar);