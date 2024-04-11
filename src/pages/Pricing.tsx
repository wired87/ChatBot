import { FunctionComponent, useState, useRef, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Switch } from "antd";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Pricing: FunctionComponent = () => {
  const intercomRef = useRef<HTMLButtonElement>(null);
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onItem1Click = useCallback(() => {
    navigate("/shop-page");
  }, [navigate]);

  const onItem2Click = useCallback(() => {
    navigate("/demo-page");
  }, [navigate]);

  const onItem3Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onItem4Click = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);

  const [showPrice, setshowPrice] = useState(false);


const heandelPrice:any =  (showPrice: boolean)=>{
  setshowPrice(showPrice);
  console.log(`working`);
}


  return (
    <>
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-main-colour font-work-sans">
        <Navbar
          vector="/vector1.svg"
          onItemClick={onItemClick}
          onItem1Click={onItem1Click}
          onItem2Click={onItem2Click}
          onItem3Click={onItem3Click}
          onItem4Click={onItem4Click}
        />
        <section className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 bg-[url('/public/hero-section4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-reply-bg font-work-sans">
          <div className="flex-1 h-[412px] flex flex-col items-start justify-center py-6 px-[60px] box-border md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px]">
              <div className="self-stretch flex flex-col items-center justify-end py-5 px-0 gap-[30px]">
                <div className="self-stretch relative leading-[62px] font-medium">
                  Professional Plans
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-center text-21xl">
                  <div className="flex-1 flex flex-row items-end justify-center min-w-[380px]">
                    <div className="flex-1 relative leading-[50px] font-medium">
                      <p className="m-0">Choose the</p>
                      <p className="m-0">best plan for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start py-[100px] px-[50px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start py-[50px] px-0">
            <div className="rounded-31xl flex flex-row items-center justify-start py-[5px] px-0 gap-[15px]">
              <div className="relative leading-[62px] font-medium">Monthly</div>
              {/* <Switch className="w-[70px]" style={{ width: 70 }} /> */}
              <Switch className="w-[70px]" style={{ width: 70 }} onClick={heandelPrice} checked={showPrice}/>
              <div className="relative leading-[62px] font-medium">Yearly</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[50px] text-mini-9 text-operator-message-text">
            <div className="flex-1 rounded-[9.29px] bg-reply-bg shadow-[0px_0.9px_74.36px_rgba(0,_0,_0,_0.06)] h-[800px] flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]">
              <div className="w-28 rounded-[27.88px] bg-whitesmoke-200 h-[45px] flex flex-row items-center justify-center text-base-7 text-gray-700">
                <div className="relative uppercase font-medium">Starter</div>
              </div>
              {/* <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$99</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$699</span>
                  <span> (Per Year)</span>
                </span>
              </div> */}
               {(showPrice == false) ? (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$99</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              ): (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$699</span>
                  <span> (Per Year)</span>
                </span>
              </div>
              )}
              {/*  */}
              <div className="self-stretch relative text-lg-6 leading-[22.31px] font-medium text-dimgray-100 text-center">{`(20% Savings) `}</div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-[5.58px] [background:linear-gradient(91.2deg,_#edc4ff,_#c1f2ff)] h-[45px] flex flex-row items-center justify-center">
                <div className="flex-1 relative text-mini-9 leading-[22.31px] font-medium font-work-sans text-operator-message-text text-center">
                  Sign Up for free
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Conduct up to 5 Job interview per month
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Automated job interview questions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">AI-powered interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Candidate rating by AI</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Results reporting to the dashboard
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Informaed HR decision-making
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[9.29px] [background:linear-gradient(144.59deg,_#edc4ff,_#c1f7ff)] h-[800px] flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]">
              <div className="w-[159px] rounded-[27.88px] bg-reply-bg h-[45px] flex flex-row items-center justify-center text-base-7 text-gray-700">
                <div className="relative uppercase font-medium">
                  Professional
                </div>
              </div>
              {/* <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$129</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$1200</span>
                  <span> (Per Year)</span>
                </span>
              </div> */}
               {(showPrice == false) ? (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$129</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              ): (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$1200</span>
                  <span> (Per Year)</span>
                </span>
              </div>
              )}
              <div className="self-stretch relative text-lg-6 leading-[22.31px] font-medium text-dimgray-100 text-center">{`(22% Savings) `}</div>
              <button className="cursor-pointer [border:none] p-0 bg-gray-100 self-stretch rounded-[5.58px] h-[45px] flex flex-row items-center justify-center">
                <div className="self-stretch flex-1 relative text-mini-9 leading-[22.31px] font-medium font-work-sans text-operator-message-text text-center flex items-center justify-center">
                  Get Started
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Conduct up to 5 Job interview per month
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Automated job interview questions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">AI-powered interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Candidate rating by AI</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Results reporting to the dashboard
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Priority Customer Support</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Advance analytics and insights
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Custom branding options</div>
              </div>
            </div>
            <div className="flex-1 rounded-[9.29px] [background:linear-gradient(144.59deg,_#edc4ff,_#c1f7ff)] h-[800px] flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]">
              <div className="w-[159px] rounded-[27.88px] bg-gray-100 h-[45px] flex flex-row items-center justify-center text-center text-base-7 text-gray-700">
                <div className="flex-1 relative uppercase font-medium">
                  Enterprise
                </div>
              </div>
              {(showPrice == false) ? (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$156</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              ): (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$899</span>
                  <span> (Per Year)</span>
                </span>
              </div>
              )}
              <div className="self-stretch relative text-lg-6 leading-[22.31px] font-medium text-dimgray-100 text-center">{`(50% Savings) `}</div>
              <button className="cursor-pointer [border:none] p-0 bg-gray-100 self-stretch rounded-[5.58px] h-[45px] flex flex-row items-center justify-center">
                <div className="self-stretch flex-1 relative text-mini-9 leading-[22.31px] font-medium font-work-sans text-operator-message-text text-center flex items-center justify-center">
                  Get Started
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Unlimited job interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Automated job interview questions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">AI-powered interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Results reporting to the dashboard
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Priority Customer Support</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Advanced analytics and insights
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Custom branding options</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Enhanced security features
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[9.29px] [background:linear-gradient(144.59deg,_#edc4ff,_#c1f7ff)] h-[800px] flex flex-col items-center justify-start p-[30px] box-border gap-[26px] min-w-[390px] max-w-[420px]">
              <div className="w-[159px] rounded-[27.88px] bg-gray-100 h-[45px] flex flex-row items-center justify-center text-center text-base-7 text-gray-700">
                <div className="flex-1 relative uppercase font-medium">
                  Premium
                </div>
              </div>
              {(showPrice == false) ? (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$200</span>
                  <span> (Per Month)</span>
                </span>
              </div>
              ): (
                <div className="self-stretch relative leading-[22.31px] text-center">
                <span className="font-medium">
                  <span className="text-18xl-2">$1200</span>
                  <span> (Per Year)</span>
                </span>
              </div>
              )}
              <div className="self-stretch relative text-lg-6 leading-[22.31px] font-medium text-dimgray-100 text-center">{`(70% Savings) `}</div>
              <button className="cursor-pointer [border:none] p-0 bg-gray-100 self-stretch rounded-[5.58px] h-[45px] flex flex-row items-center justify-center">
                <div className="self-stretch flex-1 relative text-mini-9 leading-[22.31px] font-medium font-work-sans text-operator-message-text text-center flex items-center justify-center">
                  Get Started
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Unlimited job interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Automated job interview questions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">AI-powered interviews</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Results reporting to the dashboard
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Priority Customer Support</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Advanced analytics and insights
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">Custom branding options</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="w-[14.9px] relative h-[14.9px]"
                  alt=""
                  src="/group-1189.svg"
                />
                <div className="flex-1 relative">
                  Enhanced security features
                </div>
              </div>
            </div>
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Our Story
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Benefits
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Team
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Career
                  </button>
                </div>
              </div>
              <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
                <b className="self-stretch relative leading-[120%]">Contact</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Facebook
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Twitter
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                    Instagram
                  </button>
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
          {/* <div className="w-[60px] h-[60px] rounded-81xl bg-main-colour box-border flex flex-col items-center justify-center z-[60] fixed bottom-[60] right-[20] border-[1px] border-solid border-reply-bg md:z-[60] md:fixed md:bottom-[20] md:right-[5] sm:z-[100] sm:fixed sm:bottom-[20] sm:right-[5]">
          <button className="cursor-pointer [border:none] p-0 bg-main-colour w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/iconlylightoutlinechat@2x.png"
            />
          </button>
        </div> */}
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
            {/*  */}
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
