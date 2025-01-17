import {Fragment, useEffect} from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import Pricing from "./pages/payment/Pricing";
import MainContextProvider from "./hooks/useMainContext";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";
import Platforms from "./pages/Platforms";
import Guide from "./pages/guides/shopify";
import {shopifyGuideList} from "./img_exports/shoipifyImg";
import {wixGuideList} from "./img_exports/wixImg";
import {wPGuideList} from "./img_exports/wPImg";
import {sqSGuideList} from "./img_exports/squareImg";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/Auth";
import Terms from "./pages/Terms";
import Imprint from "./pages/Imprint";
import StatusPayment from "./pages/payment/SuccessPayment";
import RequestReset from "./pages/RequestResetPw";
import ResetPw from "./pages/ResetPw";
import {Provider} from 'react-redux';
import {persistor, store} from "./functions/redux/app/store/configureStore";
import { PersistGate } from 'redux-persist/integration/react';
import PrivateDemo from "./components/private_demo/main";

/*
sheduled task repair
setup for basic 1 refresh / m and premium 2 / m


 <script data-bot-id="EkHijDnTwC-sattt" defer="defer" type="text/javascript" async src="https://storage.googleapis.com/client_bot_code_bundle/bundle.js"></script>
    "></script>
 */

function App() {
  const action = useNavigationType();

  const location = useLocation();

  const pathname = location.pathname;



  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);


  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "Contact";
        metaDescription = "";
        break;
      case "/demo-page":
        title = "Demo";
        metaDescription = "";
        break;
      case "/pricing":
        title = "Prices";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <MainContextProvider>
            <Navbar />
              <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/private-demo/:bot" element={<PrivateDemo />} />

                <Route path="/register" element={<Auth login={false}/>} />
                <Route path="/login" element={<Auth login={true} />} />
                <Route path="/reset-password/:uid/:token/" element={<ResetPw />} />
                <Route path="/request-reset" element={<RequestReset />} />

                <Route path="/pricing" element={<Pricing />} />
                <Route path="/payment-success" element={<StatusPayment success={true} /> } />
                <Route path="/payment-failed" element={<StatusPayment success={false} /> } />

                <Route path="/terms-of-service" element={<Terms />} />
                <Route path="/imprint" element={<Imprint />} />

                <Route path="/supported-platforms" element={<Platforms />} />
                <Route path="/supported-platforms/shopify" element={<Guide title={"Shopify"} itemList={shopifyGuideList} />} />
                <Route path="/supported-platforms/wix" element={<Guide title={"Wix"} itemList={wixGuideList} />} />
                <Route path="/supported-platforms/wordpress" element={<Guide title={"WordPress"} itemList={wPGuideList} />} />
                <Route path="/supported-platforms/squarespace" element={<Guide title={"Squarespace"} itemList={sqSGuideList} />} />

              </Routes>
            <Footer />
          </MainContextProvider>
        </Fragment>
      </PersistGate>
    </Provider>
  );
}
export default App;


// source virtualenvwrapper.sh && workon prod_venv && /home/wired66/.virtualenvs/prod_venv/bin/python3.10.5 /home/wired66/chat_bot_webite/chat_bot_webite/tasks/check_data_refresh.py

