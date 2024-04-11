import { FunctionComponent, useState, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DemoPage: FunctionComponent = () => {
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onItem1Click = useCallback(() => {
    navigate("/shop-page");
  }, [navigate]);

  const onItem2Click = useCallback(() => {
    navigate("/shoping-cart");
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
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-21xl text-gray-800 font-chat-operator-quick-reply">
        <Navbar
          vector="/vector1.svg"
          onItem1Click={onItem1Click}
          onItem2Click={onItem2Click}
          onItem3Click={onItem3Click}
          onItem4Click={onItem4Click}
        />
        <section className="self-stretch flex flex-row items-center justify-center py-[150px] px-0 bg-[url('/public/hero-section1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-19xl text-reply-bg font-h5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <b className="w-full relative tracking-[0.05em] leading-[50px] inline-block max-w-[800px] md:text-5xl md:leading-[30px]">
              Get to know the advantages and functions of ChatBot
            </b>
            <b className="w-full relative text-base leading-[30px] inline-block max-w-[900px] md:font-h5 md:text-base md:leading-[24px] sm:leading-[20px]">
              <p className="m-0">
                Don't have time for long sales discussions? No problem: Send us
                an inquiry and we will send you a suggestion by email on how we
                can work together to determine your needs - and how much your
                investment is.
              </p>
              <p className="m-0">
                You can also find a brief overview and FAQ about our offer
                further down on this page.
              </p>
            </b>
            <div className="self-stretch flex flex-col items-start justify-center sm:items-center sm:justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start">
                <button className="cursor-pointer py-[15px] px-5 bg-cornflowerblue rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[0.3px] border-solid border-gray-900">
                  <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-reply-bg text-center">
                    Arrange a demo
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
            <div className="flex-1 rounded-xl bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[70px] px-20 box-border min-w-[400px] lg:pl-16 lg:pr-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                <div className="self-stretch relative font-medium md:text-3xl sm:text-3xl">
                  Get to know
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <Accordion className="self-stretch" defaultExpanded={true}>
                      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                        <Typography>
                          Do you want to rely on chatbots and generative AI in
                          2024?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          No problem: Send us an inquiry and we will send you a
                          suggestion by email on how we can work together to
                          determine your needs - and how much your investment
                          is.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="self-stretch" defaultExpanded={true}>
                      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                        <Typography>
                          Do you want to reduce costs and increase efficiency?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          No problem: Send us an inquiry and we will send you a
                          suggestion by email on how we can work together to
                          determine your needs - and how much your investment
                          is.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="self-stretch">
                      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                        <Typography>
                          Do you want to rely on chatbots and generative AI in
                          2024?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          No problem: Send us an inquiry and we will send you a
                          suggestion by email on how we can work together to
                          determine your needs - and how much your investment
                          is.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[400px] text-xs text-operator-message-text font-poppins">
              <div className="self-stretch relative text-21xl font-medium font-chat-operator-quick-reply text-gray-800 md:text-3xl sm:text-3xl">
                Arrange a chatbot demo
              </div>
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
              <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px] text-base text-gray-800 font-chat-operator-quick-reply">
                <input
                  className="m-0 w-[30px] relative rounded-8xs box-border h-[30px] border-[1px] border-solid border-silver"
                  type="checkbox"
                />
                <div className="flex-1 relative">
                  {" "}
                  I agree that Chatbot may contact me by email or telephone to
                  provide me with offers related to their services and products.
                  I am aware that I can revoke this consent at any time with
                  future effect, by sending an e-mail to info@chatbot.com The
                  legality until revocation is not affected. Read our privacy
                  policy for more information. *
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
                <button className="cursor-pointer [border:none] py-[15px] px-12 bg-main-colour rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                  <div className="w-[118px] relative text-base font-medium font-poppins text-reply-bg text-center inline-block shrink-0">
                    Submit
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
          onOutsideClick={closeChotbotPopup}
        >
          <Chotbot onClose={closeChotbotPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DemoPage;
