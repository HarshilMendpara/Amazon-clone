import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg' alt='' />
                <div className='home_row'>
                    <Product />
                    <Product />
                </div>
                <div className='home_row'>
                    <Product />
                    <Product />
                    <Product />

                </div>
                <div className='home_row'>
                    <Product />

                </div>
            </div>
        </div>
    )
}

export default Home
