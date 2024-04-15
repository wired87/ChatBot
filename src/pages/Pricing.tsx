import {FunctionComponent, useState, useRef, useCallback, useEffect, ReactNode} from "react";
import "antd/dist/antd.min.css";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import {PriceSwitch} from "../components/Switch";
import PriceContainer from "../components/pricing/PriceContainer";
import {PricingSenderObject} from "../interfaces/PricingInterface";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useLoading} from "../hooks/useLoading";

// TODO BACKEND = IF 0 DAYS -> KILL ALL CHATS LEFT

export interface PriceDataInterface {
  title: string;
  pros?: string[];
  monthlyPrice?: string;
  annualPrice?: string;
  helpText?: string;
}

const priceData: PriceDataInterface[] = [
  {
    title: "Starter",
    pros: [
      "1 Bot",
      "750 monthly Chats",
    ],
    monthlyPrice: "9€",
    annualPrice: "99€"
  },
  {
    title: "Basic",
    pros: [
      "2 Bot's",
      "2000 monthly Chats",

    ],
    monthlyPrice: "26€",
    annualPrice: "270€"
  },
  {
    title: "Premium",
    pros: [
      "5 Bot's",
      "5000 monthly Chats",
    ],
    monthlyPrice: "54€",
    annualPrice: "549€"
  },
  {
    title: "Custom",
    helpText: "Sent us an E-mail at info@botworld.cloud."
  },
]
const checkEndpoint = "https://wired66.pythonanywhere.com/payment/checkout/"
const Pricing: FunctionComponent = () => {
  const intercomRef = useRef<HTMLButtonElement>(null);
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);

  const [purchaseObject, setPurchaseObject] = useState<PricingSenderObject | null>(null);

  const [annual, setAnnual] = useState<boolean>(false);

  const { loading, updateLoading } = useLoading();

  const updatePurchaseObject = (name: string, duration: string, planType: string) => {
    setPurchaseObject(
      {
        name: name,
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
    updateLoading();
    try {

        const response = await getUrl()
        if (response && response.checkout_session_url) {
          window.open(response.checkout_session_url, /*'_blank'*/);
        }
        console.log("RESPONSE ",response)
    }catch(e){
      console.log("Error:",e)
    } finally {
      updateLoading();
    }
  }

  useEffect(() => {
    if (purchaseObject) {
      responseProcess().then(() => {
        console.log("Fetching...");
      })
    }
  }, [purchaseObject]);

/*
  const purchaseRequest = () => {
    try {
      const res = await fetch(checkEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"refresh": token.refresh, "user_id": userID}),
      });
    }
  }

*/
  useEffect(() => {
    if ( purchaseObject?.planType && purchaseObject.name && purchaseObject.duration ) {
      // REQUEST STRIPE SESSION
    }
  }, [purchaseObject]);



  const updatePriceType = () => {
    setAnnual(!annual);
  }

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);

  const priceContainer = (updatePurchaseObject: (name: string, duration: string, planType: string) => void): ReactNode => {
    return priceData.map((item: PriceDataInterface) => (
        <PriceContainer item={item} annual={annual} updatePurchaseObject={updatePurchaseObject} loading={loading}/>
    ))
  }


  return (
    <>
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-main-colour font-work-sans">
        <section className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 bg-[url('/public/hero-section4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-reply-bg font-work-sans">
          <div className="flex-1 h-[412px] flex flex-col items-start justify-center py-6 px-[60px] box-border md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px]">
              <div className="self-stretch flex flex-col items-center justify-end py-5 px-0 gap-[30px]">

                <div className="self-stretch flex flex-row flex-wrap items-end justify-center text-21xl">
                  <div className="flex-1 flex flex-row items-end justify-center min-w-[380px]">
                    <div className="flex-1 relative leading-[50px] font-medium">
                      <p className="m-0">Choose the</p>
                      <p className="m-0">best plan for you and your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start py-[50px] px-[50px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start px-0">
            <div className="rounded-31xl flex flex-row items-center justify-start px-0 gap-[15px]">
              <div className="relative leading-[62px] font-medium">Monthly</div>
              <PriceSwitch  enabled={annual} updateEnabled={updatePriceType}/>
              <div className="relative leading-[62px] font-medium">Annual</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[50px] text-mini-9 text-operator-message-text">
            {
              priceContainer(
                updatePurchaseObject
              )
            }
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-base text-black font-body-regular-paragraph-small">
          <div className="self-stretch bg-reply-bg overflow-hidden flex flex-row items-center justify-start py-[60px] px-[100px]">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-5 px-0 gap-[20px_10px]">
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px] text-4xl font-h5">
                <b className="relative leading-[30px]">Newsletter</b>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[36px] text-mini text-dimgray-500 font-body-regular-paragraph-small">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-60 relative leading-[30px] inline-block">
                      Get timely updates from your favorite products
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-sm text-black">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/mail.svg"
                      />
                      <div className="relative leading-[150%]">
                        ilyas.traikia@yahoo.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
                <b className="self-stretch relative leading-[120%]">Services</b>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Email Marketing
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Brandings
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Campaign
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Offline
                  </button>
                </div>
              </div>
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
                <b className="self-stretch relative leading-[120%]">About</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">

                </div>
              </div>
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
                <b className="self-stretch relative leading-[120%]">Contact</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    LinkedIn
                  </button>
                </div>
              </div>
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
                <b className="self-stretch relative leading-[120%]">Help</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    FAQ
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            className="cursor-pointer [border:none] p-0 bg-main-colour w-12 rounded-81xl h-12 flex flex-row items-center justify-center" style={{ zIndex: "100", bottom: "60px", right:"20px",position: "fixed",
          }}
            onClick={openChotbotPopup}
          >
            <img
              className="w-8 relative h-8 shrink-0 object-cover"
              alt=""
              src="/iconlylightoutlinechat@2x.png"
            />
          </button>
          {isChotbotPopupOpen && (
            <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Top right"
              onOutsideClick={closeChotbotPopup}
            >
              <Chotbot onClose={closeChotbotPopup} />
            </PortalPopup>
          )}
          <div className="self-stretch bg-reply-bg overflow-hidden flex flex-row flex-wrap items-center justify-start py-5 px-[100px] gap-[60px] text-sm text-black-75-300">
            <div className="flex-1 relative leading-[150%] inline-block min-w-[420px]">
              Copyright© 2024. Stitch Construction. All Right Reserved.
            </div>
            <div className="flex flex-row items-center justify-end gap-[36px]">
              <div className="relative leading-[150%]">Terms of Service</div>
              <div className="relative leading-[150%]">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      {isChotbotPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          relativeLayerRef={intercomRef}
          onOutsideClick={closeChotbotPopup}
        >
          <Chotbot onClose={closeChotbotPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Pricing;
