import { useEffect, useState } from "react";
import ScreenHeading from "../hero-module/screenHeading";
import MobileHeading from "../hero-module/mobileHeading";

const Heading = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return (
    <div>
      {isMobile ? (
        <MobileHeading />
      ) : (
        <ScreenHeading />
      )}
    </div>
  );
};

export default Heading;
