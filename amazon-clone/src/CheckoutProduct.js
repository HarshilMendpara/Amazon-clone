import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout_product'>
            <img className='checkout_product_image' src={image} alt='' />

            <div className='checkout_product_info'>

                <p className='checkout_product_title'>{title}</p>

                <p className='checkout_product_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkout_product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p> ⭐ </p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
