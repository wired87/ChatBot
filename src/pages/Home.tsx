import React, {FunctionComponent, useContext} from "react";

import { useNavigate } from "react-router-dom";

import WhyWeComp from "../components/home/WhyWe/WhyWeComp";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";
import { RiOpenaiFill } from "react-icons/ri";
import {MainContext} from "../Context";
import { RiMenu2Fill } from "react-icons/ri";

const Home: FunctionComponent = () => {

  const { user } = useContext(MainContext)

  const navigate = useNavigate();

  const getStartedRedirect = () => {
    if (user && user?.auth?.uid) {
      return "/dashboard"
    }
    return "/login"
  }

  return (
    <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-center text-15xl text-black font-h5">
      <section className="self-stretch flex flex-row items-center justify-center py-[150px] px-0 bg-[url('/public/hero-section6@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-reply-bg font-h5">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <b className="w-full relative inline-block max-w-[1200px]">
            <p className="m-0 text-19xl">
              <span>
                <span className="tracking-[0.05em] leading-[50px]">{`Create your own Support assistant`}</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="tracking-[0.05em] leading-[50px]">
                  In less then 5 minutes!
                </span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[30px]">
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[30px]">
                <span>
                  Summarize content from your website without any search process
                </span>
              </span>
            </p>

            <ul className="m-0 font-inherit pl-[21px]">
              <li className="mb-0 ">
                <span className="leading-[30px] flex flex-row items-center">
                  <span style={{marginRight: 10}}>
                    Optimize the user experience with force of Generative AI integration
                  </span>
                  <RiOpenaiFill size={30} color={"white"}/>
                </span>
              </li>
              <li className="mb-0">
                <span className="leading-[30px]">
                  <span>
                    Save time and money while maximize your efficiently and workflow
                  </span>
                </span>
              </li>
              <li>
                <span className="leading-[30px]">
                  <span>{`For a variety of industries & use cases`}</span>
                </span>
              </li>
            </ul>
          </b>
          <div className="self-stretch flex flex-col items-start justify-center sm:items-center sm:justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start">
              <button onClick={() => navigate(getStartedRedirect())} className="cursor-pointer py-[15px] px-5 bg-cornflowerblue rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[0.3px] border-solid border-gray-900">
                <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-reply-bg text-center">
                  Get started
                </b>
                <img
                  className="w-[21px] relative h-[21px] hidden"
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/iconlylightlogin1.svg"
                />
              </button>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] gap-[64px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <WhyWeComp />
        <div className="self-stretch flex flex-col items-center justify-center">
          <b className="self-stretch relative leading-[30px] md:text-5xl">
            What did our customers say?
          </b>
        </div>
        <Reviews />
        <FAQ />

      </div>
    </div>
  );
};

export default Home;
