import React from 'react'
import "./Header2.css"
import Basket from '../../pages/Site/Basket/Basket';
import { searchBooks } from '../../redux/slice/dataSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Header2 = () => {
    // const dispatch = useDispatch()
    return (
        <div className='header' style={{ width: '100%' }}>
            <div className="header__top">
                <div className="header__image">
                    <img src="https://htmldemo.net/pustok/pustok/image/logo.png" />
                </div>
                <div className="header__phone">
                    <i className="fa-solid fa-headphones-simple" style={{ color: "#62ab00", fontSize: "40px" }}></i>
                    <div>
                        <span>Free Support 24/7 <br /> <b>+01-202-555-0181</b></span>
                    </div>
                </div>
                <div className="dropdown__list">
                    <div className="dropdown">
                        <span className="home">Home <i className='fa-solid fa-chevron-down'></i></span>
                        <div className="dropdown__content">
                            <ul className="list">
                                <li className="home">Home One</li>
                                <li className="home">Home Two</li>
                                <li className="home">Home Three</li>
                                <li className="home">Home Four</li>
                                <li className="home">Home Five</li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown2">
                        <span className="home">Shop <i className='fa-solid fa-chevron-down'></i></span>
                        <div className="dropdown__content2">
                            <div className="ul-list">
                                <ul className="list2">
                                    <li className="shop">SHOP GRID</li>
                                    <li className="shop">Fullwidth</li>
                                    <Link to='shop' style={{ textDecoration: 'none', color: 'black' }}><li className="shop">Left Sidebar</li></Link>
                                    <li className="shop">Right Sidebar</li>
                                </ul>
                                <ul className="list2">
                                    <li className="shop">SHOP LIST</li>
                                    <li className="shop">Fullwidth</li>
                                    <li className="shop">Left Sidebar</li>
                                    <li className="shop">Right Sidebar</li>
                                </ul>
                                <ul className="list2">
                                    <li className="shop">PRODUCT DETAILS 1</li>
                                    <li className="shop">Product Details Page</li>
                                    <li className="shop">Product Details Affiliate</li>
                                    <li className="shop">Product Details Group</li>
                                    <li className="shop">Product Details Variables</li>
                                </ul>
                                <ul className="list2">
                                    <li className="shop">PRODUCT DETAILS 2</li>
                                    <li className="shop">Left Thumbnail</li>
                                    <li className="shop">Right Thumbnail</li>
                                    <li className="shop">Left Gallery</li>
                                    <li className="shop">Right Gallery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown3">
                        <span className="home">Pages <i className='fa-solid fa-chevron-down'></i></span>
                        <div className="dropdown__content3">
                            <ul className="list3">
                                <Link to='/wishlist'><li className="home" id='wishlist'>Wishlist</li></Link>
                                <li className="home">Home Two</li>
                                <li className="home">Home Three</li>
                                <li className="home">Home Four</li>
                                <li className="home">Home Five</li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown4">
                        <span className="home">Blog <i className='fa-solid fa-chevron-down'></i></span>
                        <div className="dropdown__content4">
                            <ul className="list4">
                                <li className="home">Home One</li>
                                <li className="home">Home Two</li>
                                <li className="home">Home Three</li>
                                <li className="home">Home Four</li>
                                <li className="home">Home Five</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="contact">Contact</span>
                    </div>
                </div>
            </div>

            <div className="header__bottom">
                <div className="select__input">
                    <select className="select">
                      
                        <option disabled hidden selected> Browse Categories</option>
                        <option>Arts & Photography</option>
                        <option>Biographies</option>
                        <option>Business & Money</option>
                        <option>Calendars</option>
                        <option>Children's Books</option>
                        <option>Comics</option>
                        <option>Performance Filters</option>
                        <option>Cookbooks</option>
                        <option>Accessories</option>
                        <option>Education</option>
                        <option>More Categories</option>
                    </select>

                    <div>
                        <input className="searchInp" placeholder='Search entire store here' onChange={() => {
                            // dispatch(searchBooks())
                        }} />
                        <button className="searchBtn">Search</button>
                    </div>
                </div>

                <div className="login__shopping">
                    <div className="login">
                        <span><b>Login</b> <br /> or Register</span>
                    </div>
                    <div className="shopping">

                    </div>
                    <div>
                        <span>Shopping Cart</span>
                        <br />
                        <span className="price">
                            £0.00
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2