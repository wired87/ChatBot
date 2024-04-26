import React, {memo, ReactNode, useEffect, useState} from "react";
import {PriceDataInterface} from "../../pages/payment/Pricing";
import LoadingIndicator from "../LoadingIndicator";
import {useLoading} from "../../hooks/useLoading";
import axios from "axios";
import {PricingSenderObject} from "../../interfaces/PricingInterface";
import {useNavigate} from "react-router-dom";
import {UserInterface} from "../../interfaces/userInterface";
import InfoComponent from "../InfoComponent";

interface PriceContainerInterface {
  item: PriceDataInterface;
  annual: boolean;
  user: UserInterface | null;
}
const BASE_URL: string = process.env.REACT_APP_BASE_EDNPOINT!;
const CHECKOUT_ENP: string = process.env.REACT_APP_CHECKOUT_ENP!;
const checkEndpoint: string = `${BASE_URL + CHECKOUT_ENP}`;

const PriceContainer: React.FC<PriceContainerInterface> = (
  {
    item,
    annual,
    user
  }
) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const { loading, updateLoading } = useLoading();

  const [purchaseObject, setPurchaseObject] = useState<PricingSenderObject | null>(null);

  const navigate = useNavigate();

  const updatePurchaseObject = (name: string, duration: string, planType: string) => {
    setPurchaseObject(
      {
        user_id: name,
        duration: duration,
        planType: planType,
      }
    )
  }
  const getUrl = async () => {
    console.log("sendObject:", purchaseObject)
    const response = await axios.post(checkEndpoint, JSON.stringify(purchaseObject), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("Check Token Response", response.data);
    return response.data
  }

  const responseProcess = async() => {
    try {
      const response = await getUrl()
      if (response && response.checkout_session_url) {
        window.open(response.checkout_session_url, '_blank');
      }
      console.log("RESPONSE ",response)
    }catch(e){
      console.log("Error:",e)
    } finally {
      updateLoading(false);
    }
  }

  useEffect(() => {
    if (purchaseObject) {
      responseProcess().then(() => {
        console.log("Fetching...");
      })
    }
  }, [purchaseObject]);


  useEffect(() => {
    if (user && user?.plan?.name === item.title) {
      console.log("DISABLED...")
      setButtonDisabled(true);
    }
  }, [item.title, user]);


  const getPurchaseButtonText = () => {
    if (user && user?.plan?.name === item.title)
    {
      return "Current plan"
    }
    return "Get it!"
  }


  const getPrice = () => {
    if (!annual) {
      return {
        price: item.monthlyPrice,
        text: "monthly"
      }
    }
    return {
      price: item.annualPrice,
      text: "annual"
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


  const infoTextContainer = ( item: string, infotext: string ) => {
    if ( item.includes("Chats")) {
      return(
        <InfoComponent text={infotext} />
      )
    }
    return <></>
  }

  const listElements = (): ReactNode[] | ReactNode => {
    const array = item.pros;
    if (array && !(item?.title === "Custom")) {
      return array.map((textItem: string) => (
        <div key={textItem} className="self-stretch flex flex-row items-center justify-center gap-[13px]">
          <img
            className="w-[20px] relative h-[20px] caret-emerald-600 font-bold"
            alt=""
            src="/group-1189.svg"
          />
          <div style={{fontSize: 16}} className="flex-1 relative">
            {
              textItem
            }

            {
              infoTextContainer(textItem, item.infoTextMonthlyChats || "")
            }
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
    if (buttonDisabled || loading) {
      return {opacity: .4, color: "rgb(0,0,0)"}
    }
    return {cursor: "pointer"}
  }

  const handlePurchaseSubmit = () => {
    if (!(item.title === "Custom")) {
      updateLoading(true);
      const uid: string | undefined | null = user?.auth?.uid;
      if ( uid && uid?.length > 0 ) {
        updatePurchaseObject(
          uid,
          annual? "annual" : "monthly",
          item.title
        )
      } else {
        navigate("/login")
      }
    } else {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@botworld.cloud&su=Customer%20request&body=Hi%20BotWorld%20Team,\n", "_blank")
    }
  }


  const loadingContainerStyles = () => {
    if (loading) {
      return {opacity: .5}
    }
    return undefined
  }





  return(
    <div style={loadingContainerStyles()} className="flex-1 rounded-[9.29px]
    [background:linear-gradient(144.59deg,_#edc4ff,_#c1f7ff)] h-[500px]
    flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]    ">
      <div className="w-[159px] rounded-[27.88px] bg-gray-100 h-[45px] flex flex-row items-center
      justify-center text-center text-base-7 text-gray-700">
        <div className="flex-1 relative uppercase font-medium">
          {
            item.title
          }
        </div>
      </div>
      <>
        {
          priceSection()
        }
      </>
      <div className="self-stretch relative text-lg-6 leading-[22.31px] w-full font-medium
      text-dimgray-100 text-center flex items-center justify-center">
        <button
          onClick={handlePurchaseSubmit}
          disabled={buttonDisabled || loading}
          style={disablesButtonStyle()}
          className="[border:none] p-0 bg-gray-100 self-stretch rounded-[5.58px] h-[45px] flex
          flex-row items-center justify-center min-w-[340px]

          cursor-pointer
          ">
          <div className="self-stretch flex-1 relative text-mini-9 w-full leading-[22.31px] font-medium font-work-sans
           text-operator-message-text text-center flex items-center justify-center
           ">
            {
              getPurchaseButtonText()
            }
          </div>
          <LoadingIndicator loading={loading} />
        </button>
      </div>

      {
        listElements ?
          listElements() :
          null
      }
    </div>
  )
}

export default memo(PriceContainer);