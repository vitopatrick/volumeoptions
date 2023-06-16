import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/czi8zdl54noiuuikpe3yerbq6vspzaok.js";

    document.body.appendChild(script);
  }, []);
};


