import Cart from "../components/Cart";
import { useItemsCtx } from "../store/ItemsContextProvider";

function CheckOutPage({onOpen, onClose}) {
  const { cartArr } = useItemsCtx()
  return (
  <div className='text-2xl'>
    <h4 className="cursor-pointer" onClick={onOpen}>CART ({cartArr.length})</h4>
    <Cart myCartNav='myCartNav' onClose={onClose} />
  </div>
  )
}

export default CheckOutPage;
