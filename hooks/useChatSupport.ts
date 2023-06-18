import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/s66abvilsatagmkq028sivdlevo8uhjj.js";

    document.body.appendChild(script);
  }, []);
};
