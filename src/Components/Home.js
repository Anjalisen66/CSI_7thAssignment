import { React, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import logo from './../assets/Near Basket(1)(1).png'
import { BsCartCheckFill } from "react-icons/bs";
import coldDrinks from './../assets/coldDrink2.jpg'
import dairyImg from './../assets/dairy.jpg'
import fruits_veges from './../assets/veges.jpg'
import spices from './../assets/spices(2).png'
import pulses from './../assets/pulses.webp'
import flour from './../assets/flour.jpg'
import breakfast from './../assets/breakfast.jpg'
import spreads from './../assets/spreads.webp'
import proteins from './../assets/protiens.webp'
import oil from './../assets/oil.avif'
import instantfoods from './../assets/instantfoods.jpg'
import cleaningItems from './../assets/hygiene(2).jpg'
import snacks from './../assets/snacks.jpg'
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
// import Reviews from './Reviews/Reviews';

function Home() {
    const [swiperRef, setSwiperRef] = useState(null);
    // const swiperParams1 = {
    //     onSwiper: { setSwiperRef },
    //     slidesPerView: 7,
    //     cssMode: true,
    //     Mousewheel: true,
    //     // centeredSlides={true}
    //     spaceBetween: 10,
    //     Keyboard: true,
    //     // pagination={true}
    //     // navigation={true}
    //     modules: [Pagination, Navigation, Mousewheel, Keyboard]

    // }

    // const swiperParams2 = {
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 3,
    //     coverflowEffect: {
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //     }
    // },
    // modules:[EffectCoverflow]


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
                        <input
                            type="search"
                            // onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search"
                        />
                    </div>
                    <div className='right-part'>
                        <div className='button'>
                            <button className='loginbutton'>Login</button>
                            <hr />
                            <button className='signupbutton'>Signup</button>
                        </div>
                        <button className='MyCart'><BsCartCheckFill />My Cart</button>
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
                    <div className='categories'>
                        <div className='category-1'>
                            {/* <div id='DairyProducts'>
                    <div id='category-img'>
                    <img src={dairyImg} alt=''/>
                    </div>
                    <h3>Dairy Products</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={fruits_veges} alt=''/>
                    </div>
                    <h3>Fruits and Vegetables</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={coldDrinks} alt=''/>
                    </div>
                    <h3>Cold Drinks</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={spices} alt=''/>
                    </div>
                    <h3>Spices</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={pulses} alt=''/>
                    </div>
                    <h3>Pulses</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={flour} alt=''/>
                    </div>
                    <h3>Flours</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={breakfast} alt=''/>
                    </div>
                    <h3>Breakfast</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={spreads} alt=''/>
                    </div>
                    <h3>Spreads</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={proteins} alt=''/>
                    </div>
                    <h3>Proteins</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={oil} alt=''/>
                    </div>
                    <h3>Ghee and Oil</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={instantfoods} alt=''/>
                    </div>
                    <h3>Instant Foods</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={cleaningItems} alt=''/>
                    </div>
                    <h3>Hygene Essentials</h3>
                </div>
                <div id='coldDrinks'>
                    <div id='category-img'>
                    <img src={snacks} alt=''/>
                    </div>
                    <h3>Snack Time</h3>
                </div> */}
                        </div>
                    </div>

                    <Swiper
                        // onSwiper={{ setSwiperRef }}
                    slidesPerView={7}
                    cssMode= {true}
                    Mousewheel= {true}
                         // centeredSlides={true}
                    spaceBetwee= {10}
                    Keyboard={true}
                         // pagination={true}
                         // navigation={true}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}

                    >
                    <SwiperSlide className='sliderContent'>
                        <Link to ='/api/get-products/Dairy-Products'>
                        <div id='sliderimg'><img src={dairyImg} alt='' /></div>
                        <div id='slider-text'>
                            <h5>Fresh Dairy Goods</h5>                            
                            </div>
                            </Link></SwiperSlide>
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

                </Swiper>
                {/* 
                <Swiper {...swiperParams2}
                >
                    <SwiperSlide slider-content2>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>*/}
            </div>
            {/* <Reviews /> */}

            <Footer/>
        </div >
            </>
            )
}

export default Home