import React from 'react'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

import { Link } from 'react-router-dom';



import { Navigation } from "swiper";

const Video = () => {

    const useReference = useRef();
    // const videoRefernce = useRef();

    const handlePlay = () => {
        useReference.current.play();
    }

    const handlePause = () => {
        useReference.current.pause();
    }

    // const clickPlay = () => {
    //     videoRefernce.current.play()
    // }

    // const clickPause = () => {
    //     videoRefernce.current.pause()
    // }

    return (
        <>
            <div className='d-flex justify-content-center d-grid gap-2 mt-3'>
                <button className='btn btn-primary' onClick={handlePlay}>
                    Play
                </button>
                <button className='btn btn-warning' onClick={handlePause}>
                    Pause
                </button>
            </div>

            <div className='text-center mt-3'>
                <button className='rounded'><Link to="/" className='text-decoration-none'>Go to home</Link></button>
            </div>
            



            {/* <video width='520' height='240' ref={useReference}>
            <source src='/Video/video1.mp4'/>
        </video> */}

            {/* <div>
                <button onClick={clickPlay}>
                    Play
                </button>
                <button onClick={clickPause}>
                    Pause
                </button>
            </div> */}
            {/* <video width='520' height='240' ref={videoRefernce}>
                <source src='/Video/video2.mp4' />
            </video> */}
            
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><video width='520' height='240' ref={useReference}>
                        <source src='/Video/video1.mp4' />
                    </video></SwiperSlide>
                    <SwiperSlide><video width='820' height='300' ref={useReference}>
                        <source src='/Video/video2.mp4' />
                    </video></SwiperSlide>


                </Swiper>
                

                
            </>
        </>




    )
}

export default Video