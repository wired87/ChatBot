import React, {memo, ReactNode, useContext, useEffect, useState} from "react";
import {MainContext} from "../../Context";
import {PriceDataInterface} from "../../pages/Pricing";
import {useNavigate} from "react-router-dom";

interface PriceContainerInterface {
  item: PriceDataInterface;
  annual: boolean;
  updatePurchaseObject: (name: string, duration: string, planType: string) => void;
}

const PriceContainer: React.FC<PriceContainerInterface> = (
  {
    item,
    annual,
    updatePurchaseObject
  }
) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const {user } = useContext(MainContext);

  useEffect(() => {
    if (user && user?.plan?.name === item.title) {
      console.log("DISABLED...")
      setButtonDisabled(true);
    }
  }, [item.title, user]);


  const getPurchaseButtonText = () => {
    if (user && user?.plan?.name === item.title)
    {
      return "current plan"
    }
    return "Get it!"
  }

  const getPurchaseCardHeading = () => {
    if (user && user?.plan?.name === item.title)
    {
      return item.title + "(current)"
    }
    return item.title
  }

  const getPrice = () => {
    if (!annual) {
      return {
        price: item.monthlyPrice,
        text: "( per month )"
      }
    }
    return {
      price: item.annualPrice,
      text: "( annual )"
    }
  }

  const priceSection = (): {} => {
    const price = getPrice();
    if (!(item.title == "Custom")) {
      return(
        <div className="self-stretch relative leading-[22.31px] text-center">
          <span className="font-medium">
            <span className="text-18xl-2">{price.price}</span> <br/>
            <span>{price.text}</span>
          </span>
        </div>
      )
    }
    return(
      <div className="self-stretch relative leading-[22.31px] text-center">
          <span className="font-medium">
            <span className="text-18xl-2">Contact us!</span> <br/>
          </span>
      </div>
    )
  }


  const listElements = (): ReactNode[] | ReactNode => {
    const array = item.pros;
    if (array && !(item?.title === "Custom")) {
      return array.map((item: string) => (
        <div key={item} className="self-stretch flex flex-row items-center justify-center gap-[13px]">
          <img
            className="w-[20px] relative h-[20px] caret-emerald-600 font-bold"
            alt=""
            src="/group-1189.svg"
          />
          <div style={{fontSize: 16}} className="flex-1 relative">
            {item}
          </div>
        </div>
      ));
    }else {
      return(
        <div className="flex-1 relative" style={{fontSize: 16}}>
          {
            item.helpText
          }
        </div>
      )
    }
  }

  const disablesButtonStyle = () => {
    if (buttonDisabled) {
      return {opacity: .4, color: "rgb(0,0,0)"}
    }
    return {cursor: "pointer"}
  }

  const handlePurchaseSubmit = () => {
    if (user?.uid) {
      updatePurchaseObject(
        "Pq2QiSzcjJ", // test uid: Pq2QiSzcjJ
        annual? "annual" : "monthly",
        item.title
      )
    }else {
      navigate("/") // TODO -> REDIRECT TO AUTH
    }
  }





  return(
    <div className="flex-1 rounded-[9.29px] [background:linear-gradient(144.59deg,_#edc4ff,_#c1f7ff)] h-[500px] flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]">
      <div className="w-[159px] rounded-[27.88px] bg-gray-100 h-[45px] flex flex-row items-center justify-center text-center text-base-7 text-gray-700">
        <div className="flex-1 relative uppercase font-medium">
          {
            getPurchaseCardHeading()
          }
        </div>
      </div>
      <>
        {
          priceSection()
        }
      </>
      <div className="self-stretch relative text-lg-6 leading-[22.31px] font-medium text-dimgray-100 text-center">

      </div>
      <button
        onClick={() => updatePurchaseObject(
          "Pq2QiSzcjJ", // test uid: Pq2QiSzcjJ
          annual? "annual" : "monthly",
          item.title
        )}
        disabled={buttonDisabled}
        style={disablesButtonStyle()}
        className="[border:none] p-0 bg-gray-100 self-stretch rounded-[5.58px] h-[45px] flex flex-row items-center justify-center">
        <div className="self-stretch flex-1 relative text-mini-9 leading-[22.31px] font-medium font-work-sans text-operator-message-text text-center flex items-center justify-center">
          {
            getPurchaseButtonText()
          }
        </div>
      </button>
      {
        listElements ?
          listElements() :
          null
      }
    </div>
  )
}

export default memo(PriceContainer);