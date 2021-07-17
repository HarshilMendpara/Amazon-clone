import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg' alt='' />
                <div className='home_row'>
                    <Product
                        title='Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X|L43M4-4AIN (Black)'
                        price={29999}
                        image='https://images-na.ssl-images-amazon.com/images/I/612oGaxp3DS._SX679_.jpg'
                        rating={5} />
                    <Product
                        title='Boult Audio ProBass Thunder Over-Ear Wireless Bluetooth Headphones with Mic, Headset with Passive Noise Cancellation & Long Battery Life'
                        price={1199}
                        image='https://images-na.ssl-images-amazon.com/images/I/81bgqR0BQhL._SX522_.jpg'
                        rating={5} />

                </div>
                <div className='home_row'>
                    <Product
                        title='HP Z3700 Wireless Mouse Silver'
                        price={1099}
                        image='https://images-na.ssl-images-amazon.com/images/I/61JJAJc%2BMgL._SY550_.jpg'
                        rating={5} />
                    <Product
                        title='OnePlus Nord CE 5G (Charcoal Ink, 12GB RAM, 256GB Storage)'
                        price={27999}
                        image='https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SX679_.jpg'
                        rating={5} />
                    <Product
                        title="
                        Adidas Men's Adivat M Running Shoe"
                        price={1349}
                        image='https://m.media-amazon.com/images/I/71kfO4VXDFL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5} />

                </div>
                <div className='home_row'>

                    <Product
                        title='HP Envy x360 Convertible Touchscreen 13.3-inch (33.78 cms) FHD Laptop (3rd Gen Ryzen 5 4500U/8GB/512GB SSD/Win 10 Home/Night Fall Black/1.32kg), 13-ay0045AU'
                        price={67999}
                        image='https://images-na.ssl-images-amazon.com/images/I/61nTgrUV%2BjL._SX522_.jpg'
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
