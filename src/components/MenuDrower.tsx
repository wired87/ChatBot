import {FunctionComponent, ReactNode, useCallback, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export type MenuDrowerType = {
  onClose?: () => void;
  buttonLine: () => ReactNode;
};

const MenuDrower: FunctionComponent<MenuDrowerType> = ({ onClose, buttonLine }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);


  return (
    <div
      className="w-[280px] h-full relative bg-reply-bg flex flex-col items-start justify-start gap-[40px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] overflow-auto text-center text-12xl text-reply-bg font-body-regular-paragraph-small"
      data-animate-on-scroll
    >
      <div className="self-stretch bg-main-colour flex flex-col items-start justify-start p-5 gap-[40px]">
        <div className="flex flex-row items-center justify-start">
          <div onClick={() => navigate("/")} className="cursor-pointer relative leading-[120%] font-black">BotWorld</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[21px] overflow-hidden shrink-0 flex flex-row items-start justify-center">
            <img
              className="w-[21px] relative h-[21px]"
              alt=""
              src="/vector11.svg"
            />
            <div className="w-5 relative text-12xl leading-[120%] font-black font-body-regular-paragraph-small text-reply-bg text-center hidden">
              T
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-3 px-5 gap-[40px]">
        {
          buttonLine()
        }
      </div>
    </div>
  );
};

export default MenuDrower;
