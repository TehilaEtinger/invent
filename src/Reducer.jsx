export default function reducer(state = { stock: [], sold: [], cart: [] }, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        stock: action.payload,
      };
    case 'ADD_TO_CART':
      console.log({
        ...state,
        cart: [...state.cart, action.payload],
      })
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
       case 'REMOVE_FROM_CART':
      const productIdToRemove = action.payload;
      console.log({
        ...state,
        cart: state.cart.filter(item => item.id !== productIdToRemove),
      })
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== productIdToRemove),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

      case 'UPDATE_QUANTITY':
        const { id, quantity } = action.payload;
        const updatedItems = state.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );

        return {
          ...state,
          cart: updatedItems,
        };
      
    case 'COMPLETE_PURCHASE':
      // Assuming action.payload contains the list of products sold and other relevant details
      // Update the sold table with the sold products
      const updatedSold = [...state.sold, ...action.payload];
      // Reduce the stock quantity in the stock table for the sold products
      const updatedStock = state.stock.map(product => {
        const soldProduct = action.payload.find(soldItem => soldItem.id === product.id);
        if (soldProduct) {
          return {
            ...product,
            quantity: product.quantity - soldProduct.quantity,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        sold: updatedSold,
        stock: updatedStock,
        cart: [], // Clear the cart after completing the purchase
      };
    default:
      return state;
  }
}
