import { React, useState, useEffect } from 'react'
import axios from 'axios';
import './home.css'
import { Link } from 'react-router-dom';
import logo from './../assets/Near Basket(1)(1).png'
import { BsCartCheckFill } from "react-icons/bs";
import details from './Detail'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';
import { Pagination, Navigation, Mousewheel, Keyboard, EffectCoverflow } from 'swiper/modules';
import Detail from './Detail';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';

// import Reviews from './Reviews/Reviews';

function Home() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);
    const [query, setQuery] = useState(null);
    const [results, setResults] = useState([]);


    const fetchCategories = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/api/get-categories`);
            console.log(response.data.data);
            setCategories(response.data.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

   


    // const getProducts = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:7000/api/get-products`);
    //         console.log(response.data.data);
    //         setProducts(response.data.data);
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //     }
    // };
    // useEffect(() => {
    //     getProducts();
    // }, []);


    return (
        <>
            <div className='home-pg'>
                <div className='Navbar'>
                    <div className='left-part'>
                        <div id='logo'>
                            <img src={logo} alt='' />
                        </div>
                        <div className='name'>
                            <div id='near'>NEAR</div>
                            <div id='basket'>BASKET</div>

                        </div>
                        <div>
                           <SearchBar/> 
                        </div>
                    </div>
                    <div className='right-part'>
                        <div className='buttonn'>
                            <button className='login-button'>Login</button>
                            <hr />
                            <button className='signup-button'>Signup</button>
                        </div>
                        <Link to = '/myCart'><button className='MyCart'><BsCartCheckFill />My Cart</button></Link>
                        
                    </div>


                </div>
                <div className='header'>
                    <div className='img'>
                        <img src='https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg' alt='' />
                        <div className='text'>NearBasket: Your groceries delivered swiftly, right from our basket to your doorstep.</div>
                    </div>
                </div>
                <div className='Content'>
                    <h2>Categories</h2>

                    {/* <Swiper
                        // onSwiper={{ setSwiperRef }}
                        slidesPerView={7}
                        cssMode={true}
                        Mousewheel={true}
                        // centeredSlides={true}
                        spaceBetwee={10}
                        Keyboard={true}
                        // pagination={true}
                        // navigation={true}
                        modules={[Pagination, Navigation, Mousewheel, Keyboard]}

                    >
                        <SwiperSlide className='sliderContent'>
                            <Link to = {`/products/${category}`}>
                            <div id='sliderimg'><img src={dairyImg} alt='' /></div>
                            <div id='slider-text'>
                                <h5>Fresh Dairy Goods</h5>
                            </div>
                            </Link> 
                        </SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={fruits_veges} alt='' /></div><div id='slider-text'><h5>Fruits & Vegetables</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={coldDrinks} alt='' /></div><div id='slider-text'><h5>Icy Delights</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={spices} alt='' /></div><div id='slider-text'><h5>Spice Bazaar</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={pulses} alt='' /></div><div id='slider-text'><h5>Pulses</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={flour} alt='' /></div><div id='slider-text'><h5>Essential Grains</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={breakfast} alt='' /></div><div id='slider-text'><h5>Breakfast Bonanza</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={spreads} alt='' /></div><div id='slider-text'><h5>Delicious Dips & Sauces</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={proteins} alt='' /></div><div id='slider-text'><h5>Protien</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={oil} alt='' /></div><div id='slider-text'><h5>Ghee & Oil</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={instantfoods} alt='' /></div><div id='slider-text'><h5>Instant Foods</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={cleaningItems} alt='' /></div><div id='slider-text'><h5>Hygiene Essentials</h5></div></SwiperSlide>
                        <SwiperSlide className='sliderContent'><div id='sliderimg'><img src={snacks} alt='' /></div><div id='slider-text'><h5>Crunchy Corner</h5></div></SwiperSlide>

                    </Swiper> */}

                    <Swiper
                        slidesPerView={7}
                        cssMode={true}
                        Mousewheel={true}
                        spaceBetwee={10}
                        Keyboard={true}
                        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    >
                        {categories.map(product => (
                            <SwiperSlide key={product._id} className='sliderContent'>
                                <Link to={`/get-products/${product.name}`}>
                                    <div id='sliderimg'>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div id='slider-text'>
                                        <h5>{product.name}</h5>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                {/* <Reviews /> */}

                <Footer />
            </div >
        </>
    )
}

export default Home