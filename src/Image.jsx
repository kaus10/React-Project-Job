import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";





import { Navigation } from "swiper";

const Image = () => {
    return (

        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="text-center">
                    <img src="/Image/img1.jpg" className="rounded" alt="portrait1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/Image/img2.jpg" className="rounded" alt="portrait2" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/Image/img3.jpg" className="rounded" alt="portrait3" />
                </SwiperSlide>

            </Swiper>



        </>

    )
}

export default Image