import Cart from "../components/Cart";
import { useItemsCtx } from "../context/ItemsContextProvider";
import PropTypes from 'prop-types'

function CheckOutPage({ onOpen, onClose }) {
  const { cartArr } = useItemsCtx();
  return (
    <div className="text-2xl">
      <h4 className="cursor-pointer" onClick={onOpen}>
        CART ({cartArr.length})
      </h4>
      <Cart myCartNav="myCartNav" onClose={onClose} />
    </div>
  );
}

CheckOutPage.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

export default CheckOutPage;
