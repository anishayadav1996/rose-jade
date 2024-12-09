import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
        <div >
        <div className="xl:container  px-6 lg:px-16 mx-auto py-20">
            <Slider {...settings}>
                <div><img src="image1.jpg" alt="Slide 1" /></div>
                <div><img src="image2.jpg" alt="Slide 2" /></div>
                <div><img src="image3.jpg" alt="Slide 3" /></div>
            </Slider>
        </div>
        </div>
        </>
    );
};

export default Carousel;
