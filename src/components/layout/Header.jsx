import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <Link to={'/'}>Logo</Link>
      </div>
      <nav>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/clothes'}>Clothes</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>
        <NavLink to={'/checkout'}>Check Out</NavLink>
      </nav>
    </header>
  );
}

export default Header;
