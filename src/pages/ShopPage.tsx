import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PortalPopup from "../components/PortalPopup";
import Chotbot from "../components/Chotbot";

const ShopPage: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);


  return (
    <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-center text-15xl text-black font-h5">
      <Navbar
        vector="/vector1.svg"
        onItem1Click={onItem1Click}
        onItem2Click={onItem2Click}
        onItem3Click={onItem3Click}
        onItem4Click={onItem4Click}
      />
      <section className="self-stretch flex flex-row items-center justify-center py-[150px] px-0 bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-19xl text-reply-bg font-h5">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <b className="self-stretch relative">
            <p className="[margin-block-start:0] [margin-block-end:20px] tracking-[0.05em] leading-[50px]">
              Conversational AI Platform
            </p>
            <p className="m-0 text-base leading-[30px]">
              Build, optimize and scale your chatbots and phonebots on one
              platform
            </p>
          </b>
          <div className="self-stretch flex flex-col items-center justify-center sm:items-center sm:justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start">
              <button className="cursor-pointer py-[15px] px-5 bg-cornflowerblue rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[0.3px] border-solid border-gray-900">
                <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-reply-bg text-center">
                  Start here
                </b>
                <img
                  className="w-[21px] relative h-[21px] hidden"
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/iconlylightlogin1.svg"
                />
              </button>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] gap-[64px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
          <b className="self-stretch relative leading-[30px] md:text-5xl md:text-center md:self-stretch md:w-auto">
            Top Picks For You
          </b>
          <div className="self-stretch relative text-lgi leading-[30px] font-body-regular-paragraph-small text-operator-message-text md:text-lgi md:text-center md:self-stretch md:w-auto">
            find a bright ideal to suit your taste with out great selection of
            suspension, floor and table lights.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] text-left text-xl text-main-secondary font-body-regular-paragraph-small">
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] box-border flex flex-col items-start justify-start p-4 border-[1px] border-solid border-shades-dark-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <img
                className="self-stretch max-w-full overflow-hidden h-[321px] shrink-0 object-cover"
                alt=""
                src="/img1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <b className="self-stretch relative text-4xl leading-[30px] font-h5 text-black text-left">
                      Web Service
                    </b>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                      <b className="relative leading-[120%]">$7.00</b>
                      <b className="relative text-base [text-decoration:line-through] leading-[120%] text-shades-dark-60">
                        $12.00
                      </b>
                    </div>
                    <img
                      className="w-[108.4px] relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/16231558095starrating-1.svg"
                    />
                  </div>
                  <button className="cursor-pointer p-0 bg-[transparent] w-10 rounded box-border h-10 flex flex-row items-center justify-center border-[1px] border-solid border-main-primary">
                    <b className="w-[22px] relative text-15xl leading-[120%] hidden font-body-regular-paragraph-small text-reply-bg text-left">
                      T
                    </b>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/shopping-bag.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-left text-base font-body-regular-paragraph-small">
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
  );
};

export default ShopPage;
