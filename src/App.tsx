import {useContext, useEffect} from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ShopingCart from "./pages/ShopingCart";
import PurchasePage from "./pages/PurchasePage";
import ContactUs from "./pages/ContactUs";
import DemoPage from "./pages/DemoPage";
import Pricing from "./pages/Pricing";
import MainContextProvider from "./hooks/useMainContext";
import {MainContext} from "./Context";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";

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
    <MainContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/shoping-cart" element={<ShopingCart />} />
          <Route path="/purchase-page" element={<PurchasePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      <Footer />
    </MainContextProvider>
  );
}
export default App;
