import dash_01 from "../assets/img/guide/shopify/dash_01.png";
import dash0 from "../assets/img/guide/shopify/dash0.png";
import dash02 from "../assets/img/guide/shopify/dash02.png";

import {GuideProps} from "../pages/guides/shopify";



export const shopifyGuideList: GuideProps[] = [
  {
    text: "4. Go to your Shopify dashboard and click on Online Store from the menu. It is located under the Sales channels section.",
    img: dash_01,
  },
  {
    text: "5. Edit your theme by clicking the ellipsis icon next to your current theme and choosing Edit code.",
    img: dash02,
  },
  {
    text: "6. Find and open the theme.liquid file From the sidebar where the list of files is displayed. Paste the embed code in the <head> section. You can paste it anywhere between the opening '< head>' tag and the closing '< /head>' tag.",
    img: dash0,
  },
]