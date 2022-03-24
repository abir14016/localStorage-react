import React from 'react';
import { addToDb, removeFromDb, removeShoppingCart } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart = id => {
        removeFromDb(id)
    }
    const removeAll = () => {
        removeShoppingCart()
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={removeAll}>delete All</button>
        </div>
    );
};

export default Cosmetic;