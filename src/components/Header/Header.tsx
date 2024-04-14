import React, { memo, useContext } from "react";
import "../../../styles/main.css";
import "../../../styles/coponentStyles/nav.css";
import "../../../styles/coponentStyles/buttons.css";
import HeaderItems from "./HeaderItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {MainContext} from "../../Context";
import {getWindowWidth} from "../../hooks/useWindowWidth";
import OffcanvasBootstrap from "./BsModal";

const Header: React.FC = () => {

  const { show, updateShow } = useContext(MainContext);
  const navigate = useNavigate();

  const transformHeader = () => {
    const width: number = getWindowWidth();
    if (width > 960) {
      return (
        <HeaderItems />
      )
    }
    return (
      <button className={"offcanvasToggleButton flexCenter"} onClick={() => updateShow(true)}>
        <RxHamburgerMenu size={30} />
      </button>
    )
  }

  return (
    <>
      <header id="home" className={"headerContainer d-flex justify-content-center align-items-center flex-row "}>
        {
          transformHeader()
        }
        <div className="row banner">
          <div className="banner-text">

          </div>
        </div>

        <p className="scrolldown">
        </p>
      </header>
      <OffcanvasBootstrap show={show} updateShow={updateShow} />
    </>
  );
}

export default memo(Header);