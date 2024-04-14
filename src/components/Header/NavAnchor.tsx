
import React, {memo, useContext} from "react";
import "../../styles/coponentStyles/nav.css";
import "../../styles/main.css";
import {MainContext} from "../../Context";
import {getWindowWidth} from "../../hooks/useWindowWidth";

export interface NavAnchorInterface {
  title: string;
  customClass?: string;
  href: string;
}

const NavAnchor: React.FC<NavAnchorInterface> = (
  {
    title,
    href,
    customClass
  }
) => {

  const {updateShow} = useContext(MainContext);

  const closeModalOnClick = () => {
    const width:number = getWindowWidth();
    console.log("width:", width);
    if (width < 960) {
      updateShow(false);
    }
  }

  return(
    <div className={"fullWidthHeight  headerAnchorWrap"}>
      <a onClick={() => closeModalOnClick} href={href} className={`headerListAnchor ${customClass}`}>
        {title}
      </a>
    </div>
  );
}

export default memo(NavAnchor);