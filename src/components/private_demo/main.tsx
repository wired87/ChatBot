import React, {memo, useEffect} from "react";
import {useParams} from "react-router-dom";




const PrivateDemo: React.FC = () => {

  useEffect(() => {
    const { bot } = useParams<{ bot: string; }>();
    const script = document.createElement('script');
    script.src = "https://build-6o948etdj-angelus123s-projects.vercel.app/static/js/main.2f6cadb6.js";
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute('data-id', bot || "");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return(
    <div></div>
  );
}


export default memo(PrivateDemo);