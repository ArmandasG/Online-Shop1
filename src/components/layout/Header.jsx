import { Link, NavLink } from 'react-router-dom';
import Burger from '../Burger';
import CheckOutPage from '../../pages/CheckOutPage';
import { useItemsCtx } from '../../store/ItemsContextProvider';

function Header() {

  const { setCartIsOpen, cartIsOpen } = useItemsCtx()

  function openCartNav () {
    const cartNav = document.getElementById("myCartNav")
    if (cartIsOpen) {
      cartNav.style.width = '0';
      setCartIsOpen(false) ;
    } else {
      cartNav.style.width = '100%'
      setCartIsOpen(true)
    }
  }
  function closeCartNav () {
    document.getElementById("myCartNav").style.width = "0%";
    setCartIsOpen(false)
  }
  
  return (
    <header className={`container flex justify-between pt-4 pb-4 mb-4 ${cartIsOpen ? 'sticky top-0 bg-white' : ''}`} id='myHeader'>
      {/* <nav className='hidden'>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/clothes'}>Clothes</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>
        <NavLink to={'/checkout'}>Check Out</NavLink>
      </nav> */}
      <Burger closeCartNav={closeCartNav} />
      <div>
        <Link onClick={closeCartNav} className='text-4xl font-bold text-center pl-8' to={'/'}>SHOPER</Link>
      </div>
      <CheckOutPage onOpen={openCartNav} onClose={closeCartNav}/>
    </header>
  );
}

export default Header;
