import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

// import required modules
import { Pagination } from "swiper/modules";

const images = [
    {
        id: 1,
        src: "./Images/landingImg.png",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        src: "https://media.istockphoto.com/id/1453455775/photo/handmade-door-hanging-decoration-handicraft-sea-shell.jpg?s=2048x2048&w=is&k=20&c=rMNWrojJOK5FHDjNrrh94WwjX6wCda7lSU2nsFTuygI=",
    },
];

const Hero = () => {
    return (
        <section className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map((image) => {
                    return (<SwiperSlide className="mainSwiper">
                        <img src={image.src} alt="bgImg" />
                        <div className="hero-wrapper">
                            <h3>
                                "Where History Meets Home: Discover Timeless
                                Treasures."
                            </h3>
                            <h5>Antiques Unearthed, Stories Rediscovered."</h5>
                            <button>Explore Now</button>
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
        </section>

    );
};

export default Hero;
