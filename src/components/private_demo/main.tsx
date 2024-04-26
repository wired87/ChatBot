import React, {memo, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Helmet } from 'react-helmet';


const PrivateDemo: React.FC = () => {

  const { bot } = useParams<{ bot: string; }>();

  useEffect(() => {
    if ( bot ) {
      console.log("Create script...");
      const script = document.createElement('script');
      const head = document.querySelector("head");
      console.log("Configure script...");
      script.src = "https://build-6o948etdj-angelus123s-projects.vercel.app/static/js/main.2f6cadb6.js";
      script.async = true;
      script.type = "text/javascript";
      script.setAttribute('data-id', bot || "");
      script.onload = () => console.log("Script loaded successfully.");
      script.onerror = (e) => console.log("Script failed to load:", e);

      console.log("Adding script...");
      if ( head ) {
        console.log("Append script to head");
        head.appendChild(script);
      } else {
        console.log("Appending sacript failed...")
      }


      return () => {
        console.log("Remove script...");
        document.body.removeChild(script);
      };
    }

  }, [bot]);



  return(
    <div>
      <Helmet>
        <script src="https://build-6o948etdj-angelus123s-projects.vercel.app/static/js/main.2f6cadb6.js"></script>
      </Helmet>
    </div>
  );
}


export default memo(PrivateDemo);