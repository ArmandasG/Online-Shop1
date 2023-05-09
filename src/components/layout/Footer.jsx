import { Link } from "react-router-dom";

function Footer() {
  return <footer className="mt-4">
    <div className="flex justify-around">
    <Link to={'/contact'}>Contact Us</Link>
    <Link to={'/about'}>About Us</Link>
    </div>
  <div className="flex justify-center mt-11">Copyright 2023 &copy; </div>
  </footer>
}

export default Footer;
