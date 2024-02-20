import { useEffect, useState } from "react";

export default function useMobile() {
  const [mobile, setMobile] = useState(false);

  function handleMobile() {
    const width = window.innerWidth;
    setMobile(width < 1024);
  }

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return mobile;
}
