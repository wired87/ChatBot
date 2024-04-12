import React, {memo} from "react";


const Reviews: React.FC = () => {
  return(
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px]">
        <button className="cursor-pointer [border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border gap-[10px] min-w-[580px] sm:flex-1 sm:flex-row sm:min-w-[400px]">
          <img
            className="self-stretch w-[200px] rounded-3xs max-h-full object-cover sm:w-40 sm:h-40"
            alt=""
            src="/img@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5 gap-[18px]">
            <div className="self-stretch relative text-base leading-[26px] font-manrope text-gray-500 text-left">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
              veniam rerum id rerum beatae. Quas rerum iste necessitatibus.
              At voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch relative text-base uppercase font-semibold font-manrope text-gray-500 text-left">
                Kyle Merwin
              </div>
              <div className="relative text-sm font-manrope text-gray-400 text-left">
                CO-owner
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border gap-[10px] min-w-[580px] sm:flex-1 sm:flex-row sm:min-w-[400px]">
          <img
            className="self-stretch w-[200px] rounded-3xs max-h-full object-cover sm:w-40 sm:h-40"
            alt=""
            src="/img@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5 gap-[18px]">
            <div className="self-stretch relative text-base leading-[26px] font-manrope text-gray-500 text-left">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
              veniam rerum id rerum beatae. Quas rerum iste necessitatibus.
              At voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch relative text-base uppercase font-semibold font-manrope text-gray-500 text-left">
                Kyle Merwin
              </div>
              <div className="relative text-sm font-manrope text-gray-400 text-left">
                CO-owner
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border gap-[10px] min-w-[580px] sm:flex-1 sm:flex-row sm:min-w-[400px]">
          <img
            className="self-stretch w-[200px] rounded-3xs max-h-full object-cover sm:w-40 sm:h-40"
            alt=""
            src="/img@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5 gap-[18px]">
            <div className="self-stretch relative text-base leading-[26px] font-manrope text-gray-500 text-left">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
              veniam rerum id rerum beatae. Quas rerum iste necessitatibus.
              At voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch relative text-base uppercase font-semibold font-manrope text-gray-500 text-left">
                Kyle Merwin
              </div>
              <div className="relative text-sm font-manrope text-gray-400 text-left">
                CO-owner
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2.5 bg-gray-200 flex-1 rounded-xl flex flex-row items-start justify-start box-border gap-[10px] min-w-[580px] sm:flex-1 sm:flex-row sm:min-w-[400px]">
          <img
            className="self-stretch w-[200px] rounded-3xs max-h-full object-cover sm:w-40 sm:h-40"
            alt=""
            src="/img@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5 gap-[18px]">
            <div className="self-stretch relative text-base leading-[26px] font-manrope text-gray-500 text-left">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
              veniam rerum id rerum beatae. Quas rerum iste necessitatibus.
              At voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch relative text-base uppercase font-semibold font-manrope text-gray-500 text-left">
                Kyle Merwin
              </div>
              <div className="relative text-sm font-manrope text-gray-400 text-left">
                CO-owner
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )

}

export default memo(Reviews);