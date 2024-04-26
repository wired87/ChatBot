import React, {memo, useEffect} from "react";
import {useParams} from "react-router-dom";




const PrivateDemo: React.FC = () => {

  const { bot } = useParams<{ bot: string; }>();

  useEffect(() => {
    if ( bot ) {
      console.log("Create script...");
      const script = document.createElement('script');

      console.log("Configure script...");
      script.src = "https://build-6o948etdj-angelus123s-projects.vercel.app/static/js/main.2f6cadb6.js";
      script.async = true;
      script.type = "text/javascript";
      script.setAttribute('data-id', bot || "");

      console.log("Adding script...");
      document.body.appendChild(script);

      return () => {
        console.log("Remove script...");
        document.body.removeChild(script);
      };
    }


  }, [bot]);

  return(
    <div></div>
  );
}


export default memo(PrivateDemo);