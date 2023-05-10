import { Link, NavLink } from 'react-router-dom';
import Sandwich from '../Sandwich';
import CheckOutPage from '../../pages/CheckOutPage';

function Header() {
  function openCartNav () {
    document.getElementById("myCartNav").style.width = "100%";
  }
  function closeCartNav () {
    document.getElementById("myCartNav").style.width = "0%";
  }
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
      <CheckOutPage onOpen={openCartNav} onClose={closeCartNav}/>
    </header>
  );
}

export default Header;
