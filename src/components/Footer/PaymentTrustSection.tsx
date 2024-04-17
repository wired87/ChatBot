import React, {memo} from "react";
import { FaIdeal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
const iconSize = 50
const PaymentTrustSection: React.FC = () => {
  return(
    <div className={"flex h-[200px] flex-col  min-w-[300px]"}>
      <div className={"flex flex-col gap-[20px]"}>
        <div className={"flex flex-row gap-[50px] "}>
          <FaIdeal size={iconSize}/>
          <SiMastercard  size={iconSize}/>
        </div>
        <div className={"flex flex-row gap-[50px] "}>
          <FaCcVisa  size={iconSize}/>
          <FaPaypal  size={iconSize}/>
        </div>
      </div>
      <div className={"flex flex-row py-[30px]"}>
        <p style={{marginRight: 10}}>Powered by</p>
        <FaStripe  size={iconSize}/>
      </div>
    </div>
  )
}

export default memo(PaymentTrustSection);