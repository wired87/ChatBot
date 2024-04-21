import React, {memo} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Icon, Typography} from "@mui/material";


const FAQ: React.FC = () => {
  return(
    <div className="self-stretch flex mt-5 flex-col items-center justify-start text-21xl text-gray-800 font-chat-operator-quick-reply" id={"faq"}>
      <div className="w-full rounded-[32px] bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[70px] px-20 box-border max-w-[1260px] lg:pl-16 lg:pr-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
          <div className="self-stretch relative font-medium whitespace-pre-wrap md:text-3xl sm:text-3xl">
            Frequently Ask Questions
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <Accordion className="self-stretch" defaultExpanded={true}>
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>Why should i d this?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Improve your users experience by offer them instant information from your website without the
                    annoying search process.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch" defaultExpanded={true}>
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Simply Register or Login to your account, create a bot by just giving him a name and the url od your website.
                    We will contact you when your bot is ready for action.
                    Our integration guide will lead you.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>Did I need to code to use this service?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    No! Our Integrations is 100% NoCode.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How is the service limited??</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We offer wide spectrum of different plan types to get sure its customized to your requirements.
                    Every plan includes a certain amount of monthly chat which will be defined as foolowed:
                    1 chat = 1 - 20 messages from one customer over a life cycle of 30min.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>My website content has changed. Will the bot automatically updated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Each of our plans has a different amount of "Free content refresh's". Nothing there for you?
                    Get in touch witth your speciffic needs. We will find a way.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FAQ)