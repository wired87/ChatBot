import React, {memo, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


interface StatusProps {
  success: boolean;
}

const StatusPayment: React.FC<StatusProps> = (
  {
    success
  }
) => {

  const [sec, setSec] = useState<number>(5);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(sec => sec - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if ( sec === 0 ) {
      navigate("/dashboard", {replace: true, });
    }
  }, [sec]);

  const getSvg = () => {
    if ( success ) {
      return(
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
        </svg>
      )
    }else {
      return(
        <img
          className="w-[62px] relative rounded-8xs h-[41px] overflow-hidden shrink-0"
          alt=""
          src="/error.svg"
        />
      )
    }
  }

  const headingText = () => {
    if (success ) {
      return(
        <>
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Successful!
          </h3>
          <h4 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            It may take a few minutes till your plan will be active
          </h4>
        </>
      )
    }
    return(
      <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">failed!</h3>
    )
  }

  return (
    <div className="bg-gray-100 h-screen ">
      <div className="bg-white p-6 flex flex-col md:mx-auto justify-center items-center">
        {
          getSvg()
        }
        <div className="text-center">
          {
            headingText()
          }
          <p className="text-gray-600 my-2">You will be redirected to the Dashboard in</p>
          <p className="text-gray-600">{sec} seconds.</p>
        </div>
      </div>
    </div>
  )


}

export default memo(StatusPayment);