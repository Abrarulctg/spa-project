import React from 'react';
import friends from '../../fakeData/friends';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    let total =0;
    for (let i=0; i<cart.length; i++)
    {
        const friend = cart[i];
        total = total + friend.sallary;
    }

    return (
        <div>
            <h4>Friends Summary:</h4>
            <p>Friends Added: {cart.length} </p>
            <h5>Total Sallary: {total}</h5>
        </div>
    );
};

export default Cart;