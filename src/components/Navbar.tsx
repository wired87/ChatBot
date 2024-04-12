import { FunctionComponent, useState, useCallback } from "react";
import MenuDrower from "./MenuDrower";
import PortalDrawer from "./PortalDrawer";
import {useNavigate} from "react-router-dom";
import {NavbarHook} from "../interfaces/navbarHook";
export type NavbarType = {
  vector?: string;
};

const buttonValueArray: NavbarHook[] = [
  {
    title: "Home",
    screen: "/",
  },
  {
    title: "Demo",
    screen: "/demo",
  },
  {
    title: "Contact",
    screen: "/contact-us",
  },
  {
    title: "Pricing",
    screen: "/pricing",
  }
]




const Navbar: FunctionComponent<NavbarType> = ({
  vector,
}) => {
  const [isMenuDrowerOpen, setMenuDrowerOpen] = useState(false);

  const openMenuDrower = useCallback(() => {
    setMenuDrowerOpen(true);
  }, []);

  const closeMenuDrower = useCallback(() => {
    setMenuDrowerOpen(false);
  }, []);

  const navigate = useNavigate();

  const buttonLine = () => {
    return buttonValueArray.map((item: any) => (
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start"
        onClick={() => navigate(item.screen)}>
        <div className="relative text-base leading-[150%] uppercase font-medium font-body-regular-paragraph-small text-main-colour text-center">
          {
            item.title
          }
        </div>
      </button>
    ))
  }


  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start text-center text-12xl text-main-colour font-body-regular-paragraph-small">
        <div className="self-stretch rounded-2xl bg-reply-bg h-[85px] flex flex-row items-center justify-between py-6 px-[60px] box-border md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[120%] font-black">botWorld</div>
          </div>
          <div className="flex flex-row items-start justify-center py-3 px-0 gap-[40px] md:hidden">
            {
              buttonLine()
            }
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] md:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[10px]">
              <img className="w-[21px] relative h-[21px]" alt="" src={vector} />
              <b className="w-2.5 relative text-base leading-[150%] uppercase hidden font-body-regular-paragraph-small text-operator-message-text text-center">
                T
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden hidden flex-row items-start justify-start gap-[10px]">
              <b className="w-2.5 relative text-base leading-[150%] uppercase hidden font-body-regular-paragraph-small text-operator-message-text text-center">
                T
              </b>
              <img
                className="w-[21px] relative h-[21px]"
                alt=""
                src="/vector2.svg"
              />
            </button>
            <div className="w-6 relative h-6">
              <img
                className="absolute h-[77.08%] w-[70.83%] top-[11.67%] right-[13.33%] bottom-[11.25%] left-[15.83%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/login@2x.png"
              />
            </div>
          </div>
          <div
            className="h-8 w-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center cursor-pointer md:flex"
            onClick={openMenuDrower}
          >
            <img className="w-6 relative h-4" alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
      {isMenuDrowerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeMenuDrower}
        >
          <MenuDrower onClose={closeMenuDrower} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Navbar;
/*
 <img
                className="w-[81.1px] relative h-px hidden"
                alt=""
                src="/line-2.svg"
              />
 */