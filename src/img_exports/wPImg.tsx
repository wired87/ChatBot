import d1 from "../assets/img/guide/wordpress/d1.png";
import d2 from "../assets/img/guide/wordpress/d2.png";
import d3 from "../assets/img/guide/wordpress/d3.png";
import d4 from "../assets/img/guide/wordpress/d4.png";
import d5 from "../assets/img/guide/wordpress/d5.png";
import d6 from "../assets/img/guide/wordpress/d6.png";
import d7 from "../assets/img/guide/wordpress/d7.png";
import {GuideProps} from "../pages/guides/shopify";

export const wPGuideList: GuideProps[] = [
  {
    text: "4. Open your WordPress dashboard and go to Plugins > Add new plugin.",
    img: d1,
  },
  {
    text: "Search for the \"Insert Headers And Footers\" plugin and install the one by WPBrigade.",
    img: d2,
  },
  {
    text: "6. Once installed, activate the plugin.\n" +
      "\n" +
      "7. go to Settings > WP Headers and Footers from the sidebar.",
    img: d3,
  },
  {
    text: "8. Paste the chatbot widget code in the header section and click Save Changes. ",
    img: d4,
  },
  {
    text: "Method 2: Using the theme editor\n" +
      "\n" +
      "1. Open your WordPress dashboard.\n" +
      "\n" +
      "2. From the sidebar menu, select Appearance > Theme File Editor.",
    img: d5,
  },
  {
    text: "3. Under the \"Theme Files\" section (right side of the screen), search and open the header.php file.",
    img: d6,
  },
  {
    text: "4. Paste the chatbot widget code before the closing '< /head>' tag.",
    img: d7,
  },
]