import React, {memo} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Icon, Typography} from "@mui/material";


const FAQ: React.FC = () => {
  return(
    <div className="self-stretch flex flex-col items-center justify-start text-21xl text-gray-800 font-chat-operator-quick-reply" id={"faq"}>
      <div className="w-full rounded-[32px] bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[70px] px-20 box-border max-w-[1260px] lg:pl-16 lg:pr-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
          <div className="self-stretch relative font-medium whitespace-pre-wrap md:text-3xl sm:text-3xl">
            Frequently Ask Questions
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <Accordion className="self-stretch" defaultExpanded={true}>
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How can I purchase Osama WIF?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To purchase Osama WIF (OWIF) cryptocurrency, create an
                    account on a crypto exchange that supports OWIF trading
                    pairs like OWIF/BTC or OWIF/USDT (e.g. Binance, WIF
                    HATbase, Kraken). Enable two-factor authentication,
                    deposit funds by transferring cryptocurrency from your
                    wallet or via bank transfer, navigate to the trading
                    view, place a buy order for your desired OWIF pair
                    specifying amount and price, and once filled, withdraw
                    OWIF WIF HAT to your personal crypto wallet. Research
                    thoroughly before investing due to market volatility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How can I purchase Osama WIF?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To purchase Osama WIF (OWIF) cryptocurrency, create an
                    account on a crypto exchange that supports OWIF trading
                    pairs like OWIF/BTC or OWIF/USDT (e.g. Binance, WIF
                    HATbase, Kraken). Enable two-factor authentication,
                    deposit funds by transferring cryptocurrency from your
                    wallet or via bank transfer, navigate to the trading
                    view, place a buy order for your desired OWIF pair
                    specifying amount and price, and once filled, withdraw
                    OWIF WIF HAT to your personal crypto wallet. Research
                    thoroughly before investing due to market volatility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How can I purchase Osama WIF?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To purchase Osama WIF (OWIF) cryptocurrency, create an
                    account on a crypto exchange that supports OWIF trading
                    pairs like OWIF/BTC or OWIF/USDT (e.g. Binance, WIF
                    HATbase, Kraken). Enable two-factor authentication,
                    deposit funds by transferring cryptocurrency from your
                    wallet or via bank transfer, navigate to the trading
                    view, place a buy order for your desired OWIF pair
                    specifying amount and price, and once filled, withdraw
                    OWIF WIF HAT to your personal crypto wallet. Research
                    thoroughly before investing due to market volatility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How can I purchase Osama WIF?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To purchase Osama WIF (OWIF) cryptocurrency, create an
                    account on a crypto exchange that supports OWIF trading
                    pairs like OWIF/BTC or OWIF/USDT (e.g. Binance, WIF
                    HATbase, Kraken). Enable two-factor authentication,
                    deposit funds by transferring cryptocurrency from your
                    wallet or via bank transfer, navigate to the trading
                    view, place a buy order for your desired OWIF pair
                    specifying amount and price, and once filled, withdraw
                    OWIF WIF HAT to your personal crypto wallet. Research
                    thoroughly before investing due to market volatility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="self-stretch">
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography>How can I purchase Osama WIF?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To purchase Osama WIF (OWIF) cryptocurrency, create an
                    account on a crypto exchange that supports OWIF trading
                    pairs like OWIF/BTC or OWIF/USDT (e.g. Binance, WIF
                    HATbase, Kraken). Enable two-factor authentication,
                    deposit funds by transferring cryptocurrency from your
                    wallet or via bank transfer, navigate to the trading
                    view, place a buy order for your desired OWIF pair
                    specifying amount and price, and once filled, withdraw
                    OWIF WIF HAT to your personal crypto wallet. Research
                    thoroughly before investing due to market volatility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-11 bg-reply-bg rounded-31xl flex flex-row items-center justify-start">
              <div className="relative text-xl leading-[32px] font-chat-operator-quick-reply text-main-colour text-left">
                Find More FAQs
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FAQ)