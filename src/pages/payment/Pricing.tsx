import {FunctionComponent, useState, ReactNode, useCallback} from "react";
import "antd/dist/antd.min.css";

import {PriceSwitch} from "../../components/Switch";
import PriceContainer from "../../components/pricing/PriceContainer";
import {UserInterface} from "../../interfaces/userInterface";
import {useSelector} from "react-redux";

// TODO BACKEND = IF 0 DAYS -> KILL ALL CHATS LEFT

export interface PriceDataInterface {
  title: string;
  pros?: string[];
  monthlyPrice?: string;
  annualPrice?: string;
  helpText?: string;
  infoTextMonthlyChats?: string;
}

const priceData: PriceDataInterface[] = [
  {
    title: "Starter",
    pros: [
      "1 Bot",
      "500 monthly Chats",
      "max. 1000 pages/bot",
      "Full Customizable"
    ],
    monthlyPrice: "9€",
    annualPrice: "99€"
  },
  {
    title: "Basic",
    pros: [
      "2 Bot's",
      "2000 monthly Chats",
      "max. 1000 pages/bot",
      "1 data renewal / month",
      "Full Customizable",

    ],
    monthlyPrice: "26€",
    annualPrice: "270€"
  },
  {
    title: "Premium",
    pros: [
      "5 Bot's",
      "5000 monthly Chats",
      "max. 1000 pages/bot",
      "2 data renewal / month",
      "Full Customizable",
      'Remove "Powered by" branding '
    ],
    monthlyPrice: "54€",
    annualPrice: "549€"
  },
  {
    title: "Custom",
    helpText: "Sent us an E-mail at info@botworld.cloud."
  },
]
const Pricing: FunctionComponent = () => {

  const [annual, setAnnual] = useState<boolean>(false);

  const updatePriceType = () => {
    setAnnual(!annual);
  }

  const user: UserInterface | null | undefined = useSelector((state: any) => state.userSlice.user);


  const priceContainer = useCallback((): ReactNode => {
    return priceData.map((item: PriceDataInterface) => (
        <PriceContainer item={item} annual={annual} user={user || null} />
    ))
  }, [user, annual])


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
                      <p className="m-0">best plan for you </p>
                      <p className="m-0">and your business.</p>
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
              priceContainer()
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
