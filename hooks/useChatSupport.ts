import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/zqtov32oqk4wf3xuecrsr9yh2kmzz1pc.js";

    document.body.appendChild(script);
  }, []);
};

