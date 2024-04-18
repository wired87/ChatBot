import React, {memo, ReactNode} from "react";

export interface GuideProps {
  text: string;
  img: any;
}

export interface GuideComponentProps {
  itemList: GuideProps[];
  title: string;
}

// bg-[url('/public/hero-section6@3x.png')]
const Guide: React.FC<GuideComponentProps> = (
  {
    itemList,
    title
  }
) => {

  const guideSection = (): ReactNode[] => {
    return itemList.map((item: GuideProps): ReactNode => (

      <section className="
      mb-6
      self-stretch flex flex-col items-start [padding-left:50px] justify-start py-[50px] px-0 bg-cover bg-no-repeat
      bg-[top] bg-gray-100 text-left text-base text-black font-h5">
        <p>
          {
            item.text
          }
        </p>
        <img className={"resize-contain max-w-[80vw]"} src={item.img} alt="example_img.png"/>
      </section>
      )
    )
  }


  return(
    <div className="w-full relative bg-reply-bg overflow-hidden flex flex-col  justify-start items-start text-center
    text-15xl text-black font-h5 ">
      <h2 className={"ml-[50px]"}>{title} Integration Guide</h2>
        {
          guideSection()
        }
    </div>
      )
}

export default memo(Guide)