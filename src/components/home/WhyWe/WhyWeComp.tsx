import React, {memo, useMemo} from "react";
import {WhyWe} from "../../../interfaces/homeInterface";
import {useNavigate} from "react-router-dom";
import {ToolIconComp} from "./ToolIconContainer";





const textArray: WhyWe[] = [
  {
    title: "Easy setup",
    text: "Just give your bot a name, give him the URL of your\n" +
      "              Website and you will receive after 15 min an E-Mail from us\n" +
      "              that your personal support assistant has been ready trained.",
    btnText: "Check out our Demo",
    rightSideComp: "",
    navScreen: "/"
  },
  {
    title: "Easy integration",
    text: "Our Nocode integrtion guide made it easy for you set everything up! Still have a question?\n" +
      "              Feel free to contact us witch your issues.",
    btnText: "Read the guide!",
    rightSideComp: "",
    navScreen: "/"
  },
  {
    title: "Supported by various platforms",
    text: "Be not limited! You can use our Bot on various Platforms as e.g. WIX and Shopify.",
    btnText: "Get informed",
    rightSideComp: <ToolIconComp />,
    navScreen: "/"
  },
  {
    title: "Fair priced",
    text: "Even if our service and performance shoot through the roof,\n" +
      "              our prices remain low.",
    btnText: "Check if out!",
    rightSideComp: "",
    navScreen: "/"
  },

]

const WhyWeComp: React.FC = () => {

  const navigate = useNavigate()

  const Content = useMemo(() => {
    return textArray.map((item: WhyWe) => (
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px]">
          <div className="[border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border min-w-[580px]">
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
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px]">
        {
          Content
        }
      </div>
    </div>
    </>
  )
}


export default memo(WhyWeComp)