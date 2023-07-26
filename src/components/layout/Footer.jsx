import { Link } from "react-router-dom";

function Footer() {
  return <footer className="mt-4 text-xl">
    <div className="flex justify-around">
    <Link to={'/contact'}>Contact Us</Link>
    <Link to={'/about'}>About Us</Link>
    </div>
  <div className="flex justify-center mt-11">&copy; 2023 all rights reserved</div>
  </footer>
}

export default Footer;
