import { FunctionComponent } from "react";


const DemoPage: FunctionComponent = () => {

  return (

    <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-left text-21xl text-gray-800 font-chat-operator-quick-reply">

      <section className="self-stretch flex flex-row items-center justify-center py-[150px] px-0 bg-[url('/public/hero-section1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-19xl text-reply-bg font-h5">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center py-6 px-[60px] gap-[32px] md:pl-8 md:pr-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <b className="w-full relative tracking-[0.05em] leading-[50px] inline-block max-w-[800px] md:text-5xl md:leading-[30px]">
            Get to know the advantages and functions of ChatBot
          </b>
          <b className="w-full relative text-base leading-[30px] inline-block max-w-[900px] md:font-h5 md:text-base md:leading-[24px] sm:leading-[20px]">
            <p className="m-0">
              Don't have time for long sales discussions? No problem: Send us
              an inquiry and we will send you a suggestion by email on how we
              can work together to determine your needs - and how much your
              investment is.
            </p>
            <p className="m-0">
              You can also find a brief overview and FAQ about our offer
              further down on this page.
            </p>
          </b>
          <div className="self-stretch flex flex-col items-start justify-center sm:items-center sm:justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-8xs shadow-[0px_0px_14px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start">
              <button className="cursor-pointer py-[15px] px-5 bg-cornflowerblue rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[0.3px] border-solid border-gray-900">
                <b className="relative text-base leading-[150%] uppercase font-body-regular-paragraph-small text-reply-bg text-center">
                  Arrange a demo
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
      <div className="self-stretch bg-reply-bg flex flex-col items-center justify-center p-[100px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div  className="self-stretch flex flex-row flex-wrap items-center justify-center py-5 px-0 gap-[10px]">
          <div style={{backgroundColor: "red"}}
               className="display-flex rounded-xl bg-whitesmoke-100 overflow-hidden
          flex flex-col items-start justify-start py-[70px] px-20 box-border
          min-w-[400px] w-[80vw] min-h-[500px] h-[80vh] lg:pl-16 lg:pr-16
          lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
            <div style={{backgroundColor: "white"}}
                 className="
                 min-w-[200px] w-[30vw] min-h-[400px] h-[60vh]
                 self-stretch flex flex-col items-start justify-start
                 gap-[40px] py-5 px-3 ">
              <h5>
                Actions speak louder than words.
              </h5>
              <p>
                Convince yourself at a life Demo of our Bots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DemoPage;
