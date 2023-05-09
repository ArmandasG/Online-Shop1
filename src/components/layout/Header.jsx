import { Link, NavLink } from 'react-router-dom';
import Sandwich from './Sandwich';

function Header() {
  return (
    <header className='container flex justify-between pt-4'>
      {/* <nav className='hidden'>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/clothes'}>Clothes</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>
        <NavLink to={'/checkout'}>Check Out</NavLink>
      </nav> */}
      <Sandwich />
      <div>
        <Link to={'/'}>Clothes It</Link>
      </div>
      <div>
        CART
      </div>
    </header>
  );
}

export default Header;
