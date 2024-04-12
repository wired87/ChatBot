import { FunctionComponent, useState, useCallback } from "react";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PurchasePage: FunctionComponent = () => {
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-base text-black font-h5">
        <div className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 bg-[url('/public/hero-section2@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-reply-bg">
          <div className="self-stretch flex-1 flex flex-col items-center justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <b className="self-stretch relative">
              <p className="m-0 text-19xl">
                <span>
                  <span className="tracking-[0.05em] leading-[50px]">{`KI-Chatbots & Phonebots`}</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="tracking-[0.05em] leading-[50px]">
                    auf einer einzigartigen Plattform
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span className="leading-[30px]">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="leading-[30px]">
                  <span>
                    Beantworten Sie bis zu 80 % der Kundenanfragen ohne
                    menschliches Zutun. Steigern Sie die Anzahl Ihrer Leads,
                    bieten Sie großartigen Support und erhöhen Sie Ihren Umsatz
                    mit unserer KI-gesteuerten Kundenservice-Lösung.
                  </span>
                </span>
              </p>
              <ul className="m-0 font-inherit pl-[21px]">
                <li>
                  <span className="leading-[30px]">
                    <span>
                      Sie wollen 2024 auf Bots mit Generative AI setzen?
                    </span>
                  </span>
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
        </div>
        <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] gap-[40px] text-6xl font-poppins lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center text-center">
            <b className="self-stretch relative md:text-5xl md:text-center md:self-stretch md:w-auto">
              Checkout
            </b>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] text-operator-message-text">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[400px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                <div className="relative">Shipping Address</div>
                <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-[47px] px-[45px] gap-[26px] text-lg border-[3px] border-solid border-shades-dark-10">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[18px] text-6xl">
                    <input
                      className="cursor-pointer m-0 w-[39.8px] rounded-536xl box-border h-[39.8px] flex flex-row items-center justify-center border-[1px] border-solid border-blueviolet"
                      type="radio"
                    />
                    <div className="flex-1 relative font-light">
                      Add New Address
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative leading-[20px] font-light">
                        First Name
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative leading-[20px] font-light">
                        First Name
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch relative font-light">
                      Street Address
                    </div>
                    <input
                      className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[39px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative font-light">
                        Road
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative font-light">
                        State
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative font-light">
                        Zip
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[18px]">
                    <button className="cursor-pointer py-[15px] px-12 bg-[transparent] w-[203px] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] box-border flex flex-row items-center justify-center border-[1px] border-solid border-shades-dark-10">
                      <div className="relative text-3xl font-poppins text-operator-message-text text-left">
                        cancel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[15px] px-12 bg-main-colour flex-1 rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] h-[67px] flex flex-row items-center justify-center box-border min-w-[240px]">
                      <div className="relative text-3xl font-poppins text-reply-bg text-center">
                        Save this Address
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[400px] text-3xl">
              <div className="self-stretch relative text-6xl">Payment</div>
              <div className="self-stretch flex flex-col items-start justify-start text-lg">
                <div className="self-stretch rounded-lg flex flex-col items-start justify-start pt-20 px-[45px] pb-[98px] gap-[45px] border-[3px] border-solid border-shades-dark-10 md:py-5 md:px-4 md:box-border sm:pl-4 sm:pr-4 sm:pb-[98px] sm:box-border">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[18px] text-6xl">
                    <input
                      className="cursor-pointer m-0 w-[39.8px] rounded-536xl box-border h-[39.8px] flex flex-row items-center justify-center border-[1px] border-solid border-blueviolet"
                      type="radio"
                    />
                    <div className="flex-1 relative font-light">
                      Credit or Debit card
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[13px] pr-4 pl-[23px] gap-[12px] border-[1px] border-solid border-silver">
                        <input
                          className="[border:none] [outline:none] font-light font-poppins text-lg bg-[transparent] flex-1 flex flex-row items-center justify-start py-0 px-[162px] text-operator-message-text sm:max-w-[430px]"
                          placeholder="****  ***   3458 "
                          type="text"
                        />
                        <img
                          className="w-[62px] relative rounded-8xs h-[41px] overflow-hidden shrink-0"
                          alt=""
                          src="/icons.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[26px]">
                        <div className="flex-1 rounded-lg box-border h-[67px] flex flex-row items-center justify-start py-0 pr-4 pl-[23px] min-w-[112px] border-[1px] border-solid border-silver">
                          <input
                            className="[border:none] [outline:none] font-light font-poppins text-lg bg-[transparent] flex-1 relative text-operator-message-text text-left"
                            placeholder="04 / 03"
                            type="text"
                          />
                        </div>
                        <div className="flex-1 rounded-lg box-border h-[67px] flex flex-row items-center justify-start py-0 pr-4 pl-[23px] min-w-[112px] border-[1px] border-solid border-silver">
                          <input
                            className="[border:none] [outline:none] bg-[transparent] flex-1 flex flex-row items-start justify-start"
                            type="text"
                          />
                        </div>
                        <div className="flex-1 rounded-lg box-border h-[67px] flex flex-row items-center justify-start py-0 pr-4 pl-[23px] min-w-[112px] border-[1px] border-solid border-silver">
                          <input
                            className="[border:none] [outline:none] font-light font-poppins text-lg bg-[transparent] flex-1 relative text-operator-message-text text-left"
                            placeholder="58295"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <input
                          className="m-0 w-[30px] relative rounded-8xs h-[30px]"
                          type="checkbox"
                        />
                        <div className="flex-1 relative font-light">
                          Save this credit card for later use
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <input
                          className="m-0 w-[30px] relative rounded-8xs box-border h-[30px] border-[1px] border-solid border-silver"
                          type="checkbox"
                        />
                        <div className="flex-1 relative font-light">
                          Billing address same as shipping address
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                    <div className="self-stretch h-[82px] flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch relative font-light">
                        Street Address
                      </div>
                      <input
                        className="[outline:none] bg-[transparent] self-stretch flex-1 rounded-lg flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                        type="text"
                      />
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[39px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                        <div className="self-stretch relative font-light">
                          Road
                        </div>
                        <input
                          className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                          type="text"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                        <div className="self-stretch relative font-light">
                          State
                        </div>
                        <input
                          className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                          type="text"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                        <div className="self-stretch relative font-light">
                          Zip
                        </div>
                        <input
                          className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-[50px] flex flex-col items-start justify-start py-2.5 px-4 border-[1px] border-solid border-silver"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[18px]">
                    <button className="cursor-pointer py-[15px] px-12 bg-[transparent] w-[203px] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] box-border flex flex-row items-center justify-center border-[1px] border-solid border-shades-dark-10">
                      <div className="relative text-3xl font-poppins text-operator-message-text text-left">
                        cancel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[15px] px-12 bg-main-colour flex-1 rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] h-[67px] flex flex-row items-center justify-center box-border min-w-[240px]">
                      <div className="relative text-3xl font-poppins text-reply-bg text-center">
                        Save
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-reply-bg shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start py-[27.5px] px-[45px]">
                <div className="w-[698px] flex flex-row items-center justify-start gap-[23px]">
                  <input
                    className="cursor-pointer m-0 w-[39.8px] relative rounded-[50%] bg-reply-bg shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] h-[39.8px]"
                    type="radio"
                  />
                  <div className="relative font-light">Paypal</div>
                </div>
                <img
                  className="w-[62px] relative rounded h-[41px] overflow-hidden shrink-0"
                  alt=""
                  src="/payment-logo.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-reply-bg shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start py-[21px] px-[45px]">
                <div className="w-[701px] flex flex-row items-center justify-start gap-[23px]">
                  <input
                    className="cursor-pointer m-0 w-[39.8px] relative rounded-[50%] bg-reply-bg shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] h-[39.8px]"
                    type="radio"
                  />
                  <div className="relative font-light">Stripe</div>
                </div>
                <div className="rounded-8xs bg-blueviolet overflow-hidden flex flex-row items-center justify-center py-0 px-[18px] text-17xl text-reply-bg">
                  <b className="relative">S</b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-5 px-0 text-base text-reply-bg font-body-regular-paragraph-small">
            <div className="rounded-3xs bg-main-colour overflow-hidden flex flex-row items-start justify-start py-6 px-12">
              <b className="relative leading-[120%]">Confirm Order</b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start font-body-regular-paragraph-small">
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
            <button
              className="cursor-pointer p-0 bg-main-colour h-[60px] w-[60px] rounded-81xl box-border flex flex-col items-center justify-center z-[100] fixed bottom-[60] right-[20] border-[1px] border-solid border-reply-bg md:z-[100] md:fixed md:bottom-[20] md:right-[5]"
              onClick={openChotbotPopup}
            >
              <button className="cursor-pointer [border:none] p-0 bg-main-colour w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/iconlylightoutlinechat3@2x.png"
                />
              </button>
            </button>
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
      {isChotbotPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeChotbotPopup}
        >
          <Chotbot onClose={closeChotbotPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PurchasePage;
