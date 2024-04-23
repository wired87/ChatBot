import {Fragment, useContext, useEffect} from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import DemoPage from "./pages/DemoPage";
import Pricing from "./pages/payment/Pricing";
import MainContextProvider from "./hooks/useMainContext";
import {MainContext} from "./Context";
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
import {useUser} from "./hooks/useUser";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const { checkSessionData, user, updateUser } = useContext(MainContext);

  const { checkUserAvailability } = useUser();

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


  useEffect(() => {
    checkSessionData();
  }, []);


  useEffect(() => {
    const localUser = checkUserAvailability();
    if ( user ) {
      updateUser(user);

    }
    }, []);

  return (
    <Fragment>
      <MainContextProvider>
        <Navbar user={user}/>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="/register" element={<Auth login={false}/>} />
            <Route path="/login" element={<Auth login={true} />} />
            <Route path="/reset-password/:uid/:token/" element={<ResetPw />} />
            <Route path="/reset-request/" element={<RequestReset />} />

            <Route path="/demo" element={<DemoPage />} />

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
  );
}
export default App;
