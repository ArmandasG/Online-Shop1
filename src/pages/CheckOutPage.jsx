import Cart from "../components/Cart";

function CheckOutPage({onOpen, onClose}) {
  console.log('onOpen ===', onOpen);
  return (
  <div className='text-2xl'>
    <h4 className="cursor-pointer" onClick={onOpen}>CART(amount)</h4>
    <Cart myCartNav='myCartNav' onClose={onClose} />
  </div>
  )
}

export default CheckOutPage;
