import {Fragment, useContext, useEffect} from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import DemoPage from "./pages/DemoPage";
import Pricing from "./pages/Pricing";
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
import Auth from "./pages/auth/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const { checkSessionData } = useContext(MainContext)

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


  return (
    <Fragment>
      <MainContextProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home />} />

            <Route path="/register" element={<Auth login={false}/>} />
            <Route path="/login" element={<Auth login={true} />} />

            <Route path="/demo" element={<DemoPage />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/supported-platforms" element={<Platforms />} >
              <Route path="/shopify" element={<Guide title={"Shopify"} itemList={shopifyGuideList} />} />
              <Route path="/wix" element={<Guide title={"Wix"} itemList={wixGuideList} />} />
              <Route path="/wordpress" element={<Guide title={"WordPress"} itemList={wPGuideList} />} />
              <Route path="/squarespace" element={<Guide title={"Squarespace"} itemList={sqSGuideList} />} />
            </Route>
          </Routes>
        <Footer />
      </MainContextProvider>
    </Fragment>
  );
}
export default App;
