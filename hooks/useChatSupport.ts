import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/1tdcup5a2akjn7j8x8tixht1lhzm9ltn.js";

    document.body.appendChild(script);
  }, []);
};
