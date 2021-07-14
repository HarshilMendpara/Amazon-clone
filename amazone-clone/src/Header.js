import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' alt='amazone_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='header_search'>
                <input type='text' className='header_search_input' />
                <SearchIcon className='header_search_icon' />
            </div>

            <div className='header_nav'>

                <div className='header_option'>

                    <span className='header_option_line_one'>
                        Hello Guest
                    </span>
                    <span className='header_option_line_two'>
                        Sign In
                    </span>

                </div>

                <div className='header_option'>

                    <span className='header_option_line_one'>
                        Returns
                    </span>
                    <span className='header_option_line_two'>
                        & Orders
                    </span>

                </div>

                <div className='header_option'>

                    <span className='header_option_line_one'>
                        Your
                    </span>
                    <span className='header_option_line_two'>
                        Prime
                    </span>

                </div>
                <Link to='/checkout'>

                    <div className='header_option_basket'>
                        <ShoppingCartIcon />
                        <span className='header_option_line_two header_basket_count'>{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </div >
    )
}

export default Header;