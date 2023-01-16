import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemTocartHandler = () => {};

  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
