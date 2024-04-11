import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type MenuDrowerType = {
  onClose?: () => void;
};

const MenuDrower: FunctionComponent<MenuDrowerType> = ({ onClose }) => {
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

  const onItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onItem3Click = useCallback(() => {
    navigate("/demo-page");
  }, [navigate]);

  const onItem4Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onItem5Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <div
      className="w-[280px] h-full relative bg-reply-bg flex flex-col items-start justify-start gap-[40px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] overflow-auto text-center text-12xl text-reply-bg font-body-regular-paragraph-small"
      data-animate-on-scroll
    >
      <div className="self-stretch bg-main-colour flex flex-col items-start justify-start p-5 gap-[40px]">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[120%] font-black">ChatBOT</div>
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
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[21px] flex flex-row items-start justify-center gap-[88.5px]">
            <div className="w-5 relative text-12xl leading-[120%] font-black font-body-regular-paragraph-small text-reply-bg text-center hidden">
              T
            </div>
            <img
              className="w-[21px] relative h-[21px]"
              alt=""
              src="/vector81.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[21px] flex flex-row items-start justify-center gap-[198px]">
            <div className="w-5 relative text-12xl leading-[120%] font-black font-body-regular-paragraph-small text-reply-bg text-center hidden">
              T
            </div>
            <img
              className="w-[21px] relative h-[21px]"
              alt=""
              src="/vector91.svg"
            />
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-3 px-5 gap-[40px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start"
          onClick={onItemClick}
        >
          <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-main-colour text-left">
            Home
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
          <b className="flex-1 relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-black text-left">
            Shop
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
          <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-main-colour text-left">
            PRODUCTS
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start"
          onClick={onItem3Click}
        >
          <b className="flex-1 relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-black text-left">
            Demo
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start"
          onClick={onItem4Click}
        >
          <b className="flex-1 relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-black text-left">
            Contact
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start"
          onClick={onItem5Click}
        >
          <b
            className="flex-1 relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-black text-left cursor-pointer"
            onClick={onPricingTextClick}
          >
            Pricing
          </b>
        </button>
      </div>
    </div>
  );
};

export default MenuDrower;
