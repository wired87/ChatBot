import React, {memo} from "react";
import PaymentTrustSection from "./Footer/PaymentTrustSection";


export const Footer: React.FC = () => {
  return(
    <div className="self-stretch flex flex-col items-start justify-start text-base text-black font-body-regular-paragraph-small">
      <div className="self-stretch bg-reply-bg overflow-hidden flex flex-row items-center justify-start py-[60px] px-[100px]">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-5 px-0 gap-[20px_10px]">
          <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px] text-4xl font-h5">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[36px] text-mini text-dimgray-500 font-body-regular-paragraph-small">
              <div className="flex flex-col items-start justify-start">
              </div>
            </div>
          </div>

          <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
            <b className="self-stretch relative leading-[120%]">Contact</b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/mail.svg"
              />
              <p>
                info@botworld.cloud
              </p>
            </div>
          </div>
          <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
            <b className="self-stretch relative leading-[120%]">Help</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <a href={"/#faq1"} className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                FAQ
              </a>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
            <b className="self-stretch relative leading-[120%]">Legal</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                Privacy Policy
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-regular-paragraph-small text-black-75-300 text-left inline-block">
                Terms of Service
              </button>
            </div>
          </div>
          <div className="flex-1 h-[175px] flex flex-col items-start justify-start gap-[24px] min-w-[220px]">
            <b className="self-stretch relative leading-[120%]">Payment Methods</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <PaymentTrustSection />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-reply-bg overflow-hidden flex flex-row flex-wrap items-center justify-center py-5 px-[100px] gap-[60px] text-sm text-black-75-300">
        Copyright© 2024. BotWorld by codingWizard. All Right Reserved.
      </div>
    </div>
  )
}


export default memo(Footer);


/*
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
 */