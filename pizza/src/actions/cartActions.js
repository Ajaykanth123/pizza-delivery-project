
export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.Prices,
        price: pizza.Prices[0][varient] * quantity
    };

    // Dispatch the action first
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });

    // Access the state after dispatch
    const cartItems = getState().cartReducer.cartItems

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

