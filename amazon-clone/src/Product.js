import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const addToBasket = () => {
        if (user) {
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
        } else {
            history.push('/login');
        }
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
