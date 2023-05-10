import { Link, NavLink } from 'react-router-dom';
import Sandwich from '../Sandwich';

function Header() {
  return (
    <header className='flex justify-between pt-4 pb-4 align-middle'>
      {/* <nav className='hidden'>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/clothes'}>Clothes</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>
        <NavLink to={'/checkout'}>Check Out</NavLink>
      </nav> */}
      <Sandwich />
      <div>
        <Link className='text-4xl' to={'/'}>Shoper</Link>
      </div>
      <div className='text-2xl'>
        CART
      </div>
    </header>
  );
}

export default Header;
