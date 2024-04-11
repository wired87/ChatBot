import { FunctionComponent } from "react";

export type ChotbotType = {
  onClose?: () => void;
};

const Chotbot: FunctionComponent<ChotbotType> = ({ onClose }) => {
  return (
    <div className="w-[420px] rounded-[18px] shadow-[10px_10px_40px_rgba(0,_0,_0,_0.08),_5px_14px_80px_rgba(26,_26,_26,_0.12)] h-[660px] overflow-hidden flex flex-col items-start justify-start max-w-full max-h-full text-center text-lg text-header-body-text font-body-regular-paragraph-small">
      <div className="self-stretch bg-main-colour flex flex-row items-center justify-start p-5 gap-[30px]">
        <div className="w-2 relative leading-[18px] font-black hidden"></div>
        <div className="flex flex-row items-center justify-start gap-[14px] text-left font-chat-operator-quick-reply">
          <div className="flex flex-row items-center justify-start">
            <div className="w-[46px] rounded-[125px] box-border flex flex-col items-start justify-end border-[3px] border-solid border-gainsboro-100">
              <img
                className="w-10 relative rounded-[50%] h-10 object-cover"
                alt=""
                src="/ellipse-6@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="relative leading-[18px] font-semibold">Bothrs</div>
            <div className="flex flex-row items-center justify-start gap-[4px] text-sm">
              <img
                className="w-[13.3px] relative h-[13.5px]"
                alt=""
                src="/-icon-alarm.svg"
              />
              <div className="relative leading-[18px]">A few minutes</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end">
          <button
            className="cursor-pointer [border:none] p-px bg-[transparent] overflow-hidden flex flex-row items-center justify-start gap-[10px]"
            onClick={onClose}
          >
            <div className="w-2 relative text-lg leading-[18px] font-abril-fatface text-operator-message-text text-right hidden">
              t
            </div>
            <img className="w-4 relative h-4" alt="" src="/vector8.svg" />
          </button>
        </div>
      </div>
      <div className="self-stretch flex-1 relative bg-reply-bg overflow-hidden text-left text-mini text-operator-message-text font-chat-operator-quick-reply">
        <div className="absolute top-[20px] left-[20px] w-[383px] flex flex-col items-end justify-end gap-[16px]">
          <div className="self-stretch flex flex-col items-end justify-end">
            <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
              <div className="w-8 flex flex-col items-start justify-end">
                <img
                  className="w-8 rounded-81xl h-8 object-cover"
                  alt=""
                  src="/img11@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-end">
                <div className="rounded-3xs bg-operator-message-bg flex flex-col items-start justify-start py-4 px-[18px] box-border max-w-[300px]">
                  <div className="w-full relative leading-[140%] inline-block max-w-[260px]">
                    👋 Hi there! How can I help?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-[6px] text-reply-bg">
            <div className="rounded-md bg-main-colour overflow-hidden flex flex-row items-center justify-end py-4 px-[19px] box-border max-w-[300px]">
              <div className="flex-1 relative leading-[140%] inline-block max-w-[260px]">
                I’m just browsing!
              </div>
            </div>
            <div className="relative text-smi leading-[120%] text-stamp-text">
              2m ago. Seen
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-end">
            <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
              <div className="w-8 flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border">
                <img
                  className="w-8 rounded-81xl h-8 object-cover"
                  alt=""
                  src="/img11@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-end gap-[6px]">
                <div className="rounded-3xs bg-operator-message-bg flex flex-col items-start justify-start py-4 px-[18px] box-border max-w-[300px]">
                  <div className="w-full relative leading-[140%] inline-block max-w-[260px]">
                    <p className="m-0">No problem. </p>
                    <p className="m-0">
                      If you need help you can type below to ask a question 👇
                    </p>
                  </div>
                </div>
                <div className="relative text-smi leading-[120%] text-stamp-text">
                  Bot・Just now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[20px] bottom-[22.8px] w-[377px] flex flex-col items-end justify-end gap-[10px] text-right text-reply-bg">
          <div className="flex flex-col items-end justify-end">
            <div className="rounded-md bg-main-colour overflow-hidden flex flex-row items-center justify-end py-3 px-3.5 box-border max-w-[384px]">
              <div className="relative leading-[20px] inline-block max-w-[355px]">
                How can you help me?
              </div>
            </div>
          </div>
          <div className="rounded-md bg-main-colour overflow-hidden flex flex-row items-center justify-end py-3 px-3.5 box-border max-w-[384px]">
            <div className="relative leading-[20px] inline-block max-w-[255px]">
              Another quick reply
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-300 h-[1.2px]" />
      <div className="self-stretch bg-reply-bg h-[66px] flex flex-col items-center justify-start p-5 box-border">
        <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-1">
          <input
            className="[border:none] [outline:none] font-chat-operator-quick-reply text-mini bg-[transparent] flex-1 flex flex-row items-center justify-center py-0 px-4 text-stamp-text"
            placeholder="Type a reply..."
            type="text"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[12px]">
            <div className="w-1 relative text-base leading-[135%] font-abril-fatface text-reply-icons text-left hidden">
              
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start relative gap-[10px]">
              <img className="w-5 relative h-5 z-[0]" alt="" />
              <img
                className="w-[87.5%] absolute !m-[0] h-3/4 top-[12.5%] right-[4%] bottom-[12.5%] left-[8.5%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/vector.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chotbot;
