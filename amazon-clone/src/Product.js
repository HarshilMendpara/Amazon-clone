import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <div className='product_info'>
                        <p>{title}</p>
                        <p className='product_price'>
                            <strong>{value}</strong>
                        </p>
                        <div className='product_rating'>
                            {Array(rating).fill().map((_, i) => (
                                <p> ⭐ </p>
                            ))}
                        </div>
                    </div>
                </>
            )}

                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
