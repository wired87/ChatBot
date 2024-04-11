import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ShopingCart: FunctionComponent = () => {
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

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/purchase-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-6xl text-black font-poppins">
      <Navbar
        vector="/vector1.svg"
        onItem1Click={onItem1Click}
        onItem2Click={onItem2Click}
        onItem3Click={onItem3Click}
        onItem4Click={onItem4Click}
      />
      <section className="self-stretch flex flex-row items-center justify-center py-[150px] px-0 bg-[url('/public/hero-section5@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-19xl text-reply-bg font-h5">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <b className="self-stretch relative">
            <p className="m-0 tracking-[0.05em] leading-[50px]">{`KI-Chatbots & Phonebots`}</p>
            <p className="m-0 tracking-[0.05em] leading-[50px]">
              auf einer einzigartigen Plattform
            </p>
            <p className="m-0 text-base leading-[30px]">&nbsp;</p>
            <ul className="m-0 font-inherit text-base pl-[21px]">
              <li className="mb-0">
                <span className="leading-[30px]">
                  Sie wollen 2024 auf Bots mit Generative AI setzen?
                </span>
              </li>
              <li className="mb-0">
                <span className="leading-[30px]">
                  Sie wollen mit Automatisierung Kosten senken und die Effizienz
                  steigern?
                </span>
              </li>
              <li>
                <span className="leading-[30px]">{`Smarte Bots für eine Vielzahl an Branchen & Use Cases`}</span>
              </li>
            </ul>
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
      <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] gap-[64px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-0 sm:pr-0 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center text-center">
          <b className="self-stretch relative md:text-5xl md:text-center md:self-stretch md:w-auto">
            Shopping Continue
          </b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start p-4 gap-[20px] text-lg text-gray-600">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[400px]">
            <div className="self-stretch rounded-lg flex flex-col items-start justify-center pt-[30px] px-[15px] pb-[50px] gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch relative font-medium">
                  Shopping cart
                </div>
                <div className="self-stretch relative text-sm font-medium font-nunito">
                  You have 3 item in your cart
                </div>
              </div>
              <div className="self-stretch rounded-mini bg-reply-bg box-border h-20 flex flex-row items-center justify-start py-0 pr-2.5 pl-0 gap-[18px] border-[1px] border-solid border-gainsboro-200 sm:w-[400px]">
                <img
                  className="w-20 rounded-lg h-20 object-cover"
                  alt=""
                  src="/img2@2x.png"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[5px]">
                  <div className="self-stretch relative font-medium">
                    Italy Pizza
                  </div>
                  <div className="self-stretch relative text-sm font-medium font-nunito">
                    Extra cheese and toping
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[20px] text-center text-sm text-darkslategray-100">
                  <input
                    className="[border:none] [outline:none] font-semibold font-raleway text-3xl bg-[transparent] self-stretch w-10 flex flex-row items-center justify-start py-[30px] px-[5px] box-border text-darkslategray-100"
                    placeholder="1"
                    type="number"
                  />
                  <div className="w-[92px] flex flex-row items-center justify-between">
                    <div className="flex-1 relative font-medium">$1000</div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[25px] h-[25px] bg-[url('/public/delete@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-mini bg-reply-bg box-border h-20 flex flex-row items-center justify-start py-0 pr-2.5 pl-0 gap-[18px] border-[1px] border-solid border-gainsboro-200 sm:w-[400px]">
                <img
                  className="w-20 rounded-lg h-20 object-cover"
                  alt=""
                  src="/img2@2x.png"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[5px]">
                  <div className="self-stretch relative font-medium">
                    Italy Pizza
                  </div>
                  <div className="self-stretch relative text-sm font-medium font-nunito">
                    Extra cheese and toping
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[20px] text-center text-sm text-darkslategray-100">
                  <input
                    className="[border:none] [outline:none] font-semibold font-raleway text-3xl bg-[transparent] self-stretch w-10 flex flex-row items-center justify-start py-[30px] px-[5px] box-border text-darkslategray-100"
                    placeholder="1"
                    type="number"
                  />
                  <div className="w-[92px] flex flex-row items-center justify-between">
                    <div className="flex-1 relative font-medium">$1000</div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[25px] h-[25px] bg-[url('/public/delete@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-mini bg-reply-bg box-border h-20 flex flex-row items-center justify-start py-0 pr-2.5 pl-0 gap-[18px] border-[1px] border-solid border-gainsboro-200 sm:w-[400px]">
                <img
                  className="w-20 rounded-lg h-20 object-cover"
                  alt=""
                  src="/img2@2x.png"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[5px]">
                  <div className="self-stretch relative font-medium">
                    Italy Pizza
                  </div>
                  <div className="self-stretch relative text-sm font-medium font-nunito">
                    Extra cheese and toping
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[20px] text-center text-sm text-darkslategray-100">
                  <input
                    className="[border:none] [outline:none] font-semibold font-raleway text-3xl bg-[transparent] self-stretch w-10 flex flex-row items-center justify-start py-[30px] px-[5px] box-border text-darkslategray-100"
                    placeholder="1"
                    type="number"
                  />
                  <div className="w-[92px] flex flex-row items-center justify-between">
                    <div className="flex-1 relative font-medium">$1000</div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[25px] h-[25px] bg-[url('/public/delete@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-mini bg-shades-dark-10 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-14 px-[37px] box-border min-w-[400px] text-dimgray-400">
            <div className="self-stretch rounded-lg bg-main-colour h-[62px] flex flex-col items-center justify-center text-6xl text-reply-bg">
              <div className="w-[198px] relative font-light inline-block h-[35.3px] shrink-0">
                Order Summary
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[30px] px-4 border-b-[1px] border-solid border-darkgray">
              <div className="flex-1 relative font-light inline-block h-[50.2px]">
                <span>{`By placing your order, you agree to our company `}</span>
                <span className="text-operator-message-text">
                  Privacy policy
                </span>
                <span>{` and `}</span>
                <span className="text-operator-message-text">
                  Conditions of use.
                </span>
              </div>
            </div>
            <div className="self-stretch relative font-light text-center">
              Items (3)
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-5 px-0">
              <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-4 border-b-[0.5px] border-solid border-gray-300">
                <div className="flex-1 relative font-light flex items-center h-[25.1px]">
                  Shipping:
                </div>
                <div className="flex-1 relative font-light text-right flex items-center h-[25.1px]">
                  10.00
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-4 border-b-[0.5px] border-solid border-gray-300">
                <div className="flex-1 relative font-light flex items-center h-[25.1px]">
                  Before tax:
                </div>
                <div className="flex-1 relative font-light text-right flex items-center h-[25.1px]">
                  3010.00
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-4 border-b-[0.5px] border-solid border-gray-300">
                <div className="flex-1 relative font-light flex items-center h-[25.1px]">
                  Tax Collected:
                </div>
                <div className="flex-1 relative font-light text-right flex items-center h-[25.1px]">
                  10.00
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-[5px] px-4 text-6xl text-operator-message-text">
                <div className="flex-1 relative font-light">Order Total:</div>
                <div className="flex-1 relative font-light text-right">
                  3030.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-5 px-0 text-base text-reply-bg font-body-regular-paragraph-small">
          <div
            className="rounded-3xs bg-main-colour overflow-hidden flex flex-row items-start justify-start py-6 px-12 cursor-pointer"
            onClick={onPrimaryButtonContainerClick}
          >
            <b className="relative leading-[120%]">Next</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base font-body-regular-paragraph-small">
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
        <div className="self-stretch bg-reply-bg flex flex-row items-center justify-end py-0 px-[100px]">
          <div className="h-[60px] w-[60px] rounded-81xl bg-main-colour box-border flex flex-col items-center justify-center z-[100] fixed bottom-[60] right-[20] border-[1px] border-solid border-reply-bg md:z-[100] md:fixed md:bottom-[20] md:right-[5]">
            <button className="cursor-pointer [border:none] p-0 bg-main-colour w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/iconlylightoutlinechat2@2x.png"
              />
            </button>
          </div>
        </div>
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

export default ShopingCart;
