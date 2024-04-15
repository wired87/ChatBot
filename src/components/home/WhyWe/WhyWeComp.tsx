import React, {memo, useMemo} from "react";
import {WhyWe} from "../../../interfaces/homeInterface";
import {useNavigate} from "react-router-dom";
import {ToolIconComp} from "./ToolIconContainer";





const textArray: WhyWe[] = [
  {
    title: "Easy setup",
    text: "Easye then filling out the shipping address! \n -> Just give your Bot a name, \n -> Tell him the url or your Website ... \n ... and e after 15 min of training, your bot is ready for the Game! ",
    btnText: "Check out our Demo",
    rightSideComp: "",
    navScreen: "/"
  },
  {
    title: "Easy integration",
    text: "Our no code integration guide made it easy for you set everything up! Still have a questions?\n" +
      "              Contact us witch your issue!",
    btnText: "info@botworld.cloud",
    rightSideComp: "",
    navScreen: "/"
  },
  {
    title: "Supported by various platforms",
    text: "Be not limited! Include your Bot on our partner platforms as e.g. WIX and Shopify by " +
      "following our easy guide.",
    btnText: "Read the guide!",
    rightSideComp: <ToolIconComp />,
    navScreen: "/"
  },
  {
    title: "Best priced!",
    text: "Although our prices are the lowest our Quality standard is Germany*s best. We want to give every, " +
      "also even small businesses to explore and integrate the force of AI on their Platforms!",
    btnText: "Check if out!",
    rightSideComp: "",
    navScreen: "/pricing"
  },

]

const WhyWeComp: React.FC = () => {

  const navigate = useNavigate()

  const Content = useMemo(() => {
    return textArray.map((item: WhyWe) => (
        <div className="[border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border gap-[10px] min-w-[580px] sm:flex-1 sm:flex-row sm:min-w-[400px]">
          <div className="border-amber-800 p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border min-w-[600px]">
            <div className="self-stretch w-[820px] flex flex-col items-start justify-center py-0 px-2.5 box-border gap-[18px]">
              <div className="w-20 rounded-81xl shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] box-border h-20 flex flex-row items-center justify-center border-[1px] border-solid border-main-colour">
                <div className="flex flex-row items-center justify-center p-[5px]">
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/asterisk.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative text-base uppercase font-semibold font-manrope text-gray-500 text-left">
                  {
                    item.title
                  }
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[26px] font-manrope text-gray-500 text-left">
                {
                  item.text
                }
              </div>
              <button
                className="cursor-pointer py-[3px] px-[15px] bg-[transparent] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-center justify-center border-[1px] border-solid border-shades-dark-10"
                onClick={() => navigate(item.navScreen)}
              >
                <div className="relative text-base font-medium font-poppins text-operator-message-text text-left">
                  {
                    item.btnText
                  }
                </div>
              </button>
            </div>
          </div>
        </div>


    ))
  }, [textArray])


  return(
    <>
    <div className="self-stretch flex flex-col items-center justify-center">
      <b className="self-stretch relative leading-[30px] md:text-5xl">
        Whe we?
      </b>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] w-[100%]">
        {
          Content
        }
      </div>
    </div>
    </>
  )
}


export default memo(WhyWeComp)