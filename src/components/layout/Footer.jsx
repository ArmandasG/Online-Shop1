import { Link } from "react-router-dom";
import { useRespCtx } from "../../context/ResponsiveContextProvider";

function Footer() {
  const { windowWidth } = useRespCtx();
  return (
    <footer className="mt-4 text-xl">
      <div className="flex justify-around lg:justify-center lg:gap-40">
        <Link to={"/contact"}>Contact Us</Link>
        {windowWidth >= 1024 ? <Link to={"/what-to-know"}>Press</Link> : ""}
        {windowWidth >= 1024 ? <Link to={"/find-us"}>Find Us</Link> : ""}
        <Link to={"/about"}>About Us</Link>
      </div>
      <div className="flex justify-center mt-11">
        &copy; 2023 all rights reserved
      </div>
    </footer>
  );
}

export default Footer;
