
import {Card} from "antd";

import { FaSquarespace } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiBigcommerce } from "react-icons/si";
import {useNavigate} from "react-router-dom";

export default function Platforms() {

  const navigate = useNavigate();



  return (
    <div className="py-16 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Explore our integrations</h2>
        <p className="mb-12">Add a chatbot to your favorite platform without coding</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-auto max-w-6xl">

      <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/supported-platforms/guides/shopify")}>
          <FaShopify size={50} />
          <h3 className="font-semibold mb-2">Shopify</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
        <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/supported-platforms/guides/squarespace")}>
          <FaSquarespace size={50}/>
          <h3 className="font-semibold mb-2">Squarespace</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
        <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/supported-platforms/guides/wordpress")}>
          <FaWordpress size={50} />
          <h3 className="font-semibold mb-2">WordPress</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
        <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/supported-platforms/guides/wix")}>
          <FaWix size={50} />
          <h3 className="font-semibold mb-2">Wix</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
        <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/")}>
          <SiBigcommerce size={50} />
          <h3 className="font-semibold mb-2">BigCommerce</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
        <Card className="flex flex-col items-center p-6 text-center max-w-[400px] cursor-pointer" onClick={() =>  navigate("/")}>
          <ZapIcon className="mb-4 h-12 w-12" />
          <h3 className="font-semibold mb-2">Zapier</h3>
          <a className="text-blue-600 hover:underline" href="#">
            → Integration guide
          </a>
        </Card>
      </div>
    </div>
  )
}

function CircleDotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}


function DribbbleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function SquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}


function StoreIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}


function WandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}


function WholeWordIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="12" r="3" />
      <path d="M10 9v6" />
      <circle cx="17" cy="12" r="3" />
      <path d="M14 7v8" />
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}


function ZapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}