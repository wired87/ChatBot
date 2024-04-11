import { FunctionComponent, useState, useRef, useCallback } from "react";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ContactUs: FunctionComponent = () => {
  const intercomRef = useRef<HTMLButtonElement>(null);
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);
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

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-9xl text-operator-message-text font-poppins">
        <Navbar
          vector="/vector1.svg"
          onItem1Click={onItem1Click}
          onItem2Click={onItem2Click}
          onItem3Click={onItem3Click}
          onItem4Click={onItem4Click}
        />
        <section className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 bg-[url('/public/hero-section3@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-19xl text-reply-bg font-h5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] gap-[32px]">
              <b className="self-stretch relative">
                <p className="m-0 tracking-[0.05em] leading-[50px]">
                  Let's get in touch
                </p>
                <p className="m-0 text-xl leading-[30px]">
                  We're open for any suggestion or just to have a chat
                </p>
              </b>
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
        <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-5 px-0 gap-[10px]">
            <div className="flex-1 bg-whitesmoke-400 overflow-hidden flex flex-col items-start justify-start p-10 box-border min-w-[420px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[23px] gap-[80px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch relative font-semibold">
                    Contact Information
                  </div>
                  <div className="self-stretch relative text-lg text-dimgray-200">
                    Say something to start a live chat!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-end gap-[20px] text-base text-dimgray-300">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsphonecall.svg"
                    />
                    <div className="flex-1 relative">+1012 3456 789</div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icsharpemail.svg"
                    />
                    <div className="flex-1 relative">demo@gmail.com</div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
                    <div className="overflow-hidden flex flex-row items-start justify-start py-0.5 px-1 relative gap-[10px]">
                      <img
                        className="w-[16.5px] relative h-[21px] z-[0]"
                        alt=""
                        src="/vector4.svg"
                      />
                      <img
                        className="w-[24.9%] absolute !m-[0] h-[25.2%] top-[28%] right-[37.55%] bottom-[46.8%] left-[37.55%] max-w-full overflow-hidden max-h-full z-[1]"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 relative">
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between">
                <div className="flex flex-row items-end justify-start gap-[24px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-[30px] relative rounded-[50%] bg-main-colour h-[30px] z-[0]" />
                    <img
                      className="w-6/12 absolute !m-[0] h-2/5 top-[30%] right-[23.33%] bottom-[30%] left-[26.67%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-[30px] relative rounded-[50%] bg-main-colour h-[30px] z-[0]" />
                    <img
                      className="w-6/12 absolute !m-[0] h-3/6 top-[23.33%] right-[23.33%] bottom-[26.67%] left-[26.67%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-[30px] relative rounded-[50%] bg-main-colour h-[30px] z-[0]" />
                    <img
                      className="w-6/12 absolute !m-[0] h-[33.33%] top-[33.33%] right-[23.33%] bottom-[33.33%] left-[26.67%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/vector6.svg"
                    />
                  </div>
                </div>
                <div className="w-[138px] h-[138px] flex flex-row items-start justify-start relative">
                  <div className="w-[calc(100%_+_131px)] !m-[0] absolute top-[24px] right-[-168px] left-[37px] flex flex-row items-start justify-start z-[0]">
                    <div className="w-[269px] relative rounded-[50%] bg-main-colour h-[269px]" />
                  </div>
                  <div className="w-full !m-[0] absolute top-[calc(50%_-_69px)] right-[0px] left-[0px] flex flex-row items-start justify-start z-[1]">
                    <div className="w-[138px] relative rounded-[50%] bg-darkslategray-200 h-[138px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[400px] text-xs">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[360px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    First Name
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-10 flex flex-row items-start justify-start py-2.5 px-4 border-[0.5px] border-solid border-silver"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[360px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Last Name
                  </div>
                  <input
                    className="[outline:none] font-medium font-poppins text-xs bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-4 text-operator-message-text border-[0.5px] border-solid border-silver"
                    placeholder="David"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[360px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Email
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch rounded-lg box-border h-10 flex flex-row items-start justify-start py-2.5 px-4 border-[0.5px] border-solid border-silver"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[360px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Phone Number
                  </div>
                  <input
                    className="[outline:none] font-medium font-poppins text-xs bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-4 text-operator-message-text border-[0.5px] border-solid border-silver"
                    placeholder="+1 1236584526"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] min-w-[360px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Message
                  </div>
                  <div className="self-stretch rounded-xl box-border h-[120px] flex flex-row items-start justify-start p-4 border-[1px] border-solid border-silver">
                    <input
                      className="[border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] flex-1 relative leading-[20px] text-gray-300 text-left"
                      placeholder="Write your message.."
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[47px] text-sm">
                <div className="w-[815px] hidden flex-col items-start justify-start gap-[14px]">
                  <div className="self-stretch relative leading-[20px] font-semibold inline-block h-[20.4px] shrink-0">
                    Select Subject?
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[19px] text-xs">
                    <div className="flex flex-row items-center justify-end gap-[10px]">
                      <div className="overflow-hidden flex flex-row items-center justify-end">
                        <img
                          className="w-[13px] relative h-[13.2px]"
                          alt=""
                          src="/vector7.svg"
                        />
                      </div>
                      <div className="w-[92px] relative leading-[20px] inline-block h-[20.4px] shrink-0">
                        General Inquiry
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[10px]">
                      <img
                        className="w-[13px] relative h-[13.2px] overflow-hidden shrink-0"
                        alt=""
                        src="/teenyiconstickcirclesolid.svg"
                      />
                      <div className="w-[92px] relative leading-[20px] inline-block h-[20.4px] shrink-0">
                        General Inquiry
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[10px]">
                      <img
                        className="w-[13px] relative h-[13.2px] overflow-hidden shrink-0"
                        alt=""
                        src="/teenyiconstickcirclesolid.svg"
                      />
                      <div className="w-[92px] relative leading-[20px] inline-block h-[20.4px] shrink-0">
                        General Inquiry
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[15px] px-12 bg-main-colour rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start">
                  <div className="w-[118px] relative text-base font-medium font-poppins text-reply-bg text-center inline-block shrink-0">
                    Send Message
                  </div>
                </button>
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

export default ContactUs;
