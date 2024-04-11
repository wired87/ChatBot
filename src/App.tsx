import { useEffect } from "react";
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
        title = "";
        metaDescription = "";
        break;
      case "/shop-page":
        title = "";
        metaDescription = "";
        break;
      case "/shoping-cart":
        title = "";
        metaDescription = "";
        break;
      case "/purchase-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/demo-page":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop-page" element={<ShopPage />} />
      <Route path="/shoping-cart" element={<ShopingCart />} />
      <Route path="/purchase-page" element={<PurchasePage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/demo-page" element={<DemoPage />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
export default App;
