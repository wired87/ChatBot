import { FunctionComponent, useState, useRef, useCallback } from "react";
import Chotbot from "../components/Chotbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/home/Contact";

const ContactUs: FunctionComponent = () => {
  const intercomRef = useRef<HTMLButtonElement>(null);
  const [isChotbotPopupOpen, setChotbotPopupOpen] = useState(false);

  const openChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(true);
  }, []);

  const closeChotbotPopup = useCallback(() => {
    setChotbotPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-9xl text-operator-message-text font-poppins">
        <section className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 bg-[url('/public/hero-section3@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-19xl text-reply-bg font-h5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] gap-[32px]">
              <b className="self-stretch relative">
                <p className="m-0 tracking-[0.05em] leading-[50px]">
                  Let's get in touch
                </p>
                <p className="m-0 text-xl leading-[30px]">
                  We're open for any suggestion or just to have a nice conversation

                </p>
              </b>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </>
  );
};

export default ContactUs;
