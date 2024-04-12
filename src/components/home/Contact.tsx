import React, {memo} from "react";

const Contact: React.FC = () => {
  return(
    <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-5 px-0 gap-[10px] text-left text-9xl text-operator-message-text font-poppins">
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
                <div className="flex-1 relative">+49 176 73 86 79 52</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icsharpemail.svg"
                />
                <div className="flex-1 relative">info@botworld.cloud</div>
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
                  Klingestr. 22, 01159 Dresden
                  Germany
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between">
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
  )
}

export default memo(Contact);