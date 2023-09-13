import React from 'react'
import './Certificates.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import CertificateOne from '../../assets/img/certificate-1.png'
import CertificateTwo from '../../assets/img/certificate-2.png'
import CertificateThree from '../../assets/img/certificate-3.png'
import CertificateFour from '../../assets/img/certificate-4.png'
import CertificateFive from '../../assets/img/certificate-5.png'
import CertificateSix from '../../assets/img/certificate-6.png'
import CertificateSeven from '../../assets/img/certificate-7.png'
import CertificateEight from '../../assets/img/certificate-8.png'
import { Fade } from 'react-reveal'

function Certificates() {

    return (
        <section className='certificate'>
            <div className="container">
                <Fade bottom>
                    <div className="certificate__inner">
                        <h2>СЕРТИФИКАТЫ</h2>
                        <div className="certificate__wrapper">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={CertificateOne} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateTwo} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateThree} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFour} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFive} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSix} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSeven} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateEight} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="certificate__wrapper-lap">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={50}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={CertificateOne} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateTwo} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateThree} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFour} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFive} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSix} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSeven} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateEight} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="certificate__wrapper-tab">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={50}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={CertificateOne} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateTwo} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateThree} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFour} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFive} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSix} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSeven} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateEight} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="certificate__wrapper-phone">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={50}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={CertificateOne} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateTwo} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateThree} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFour} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateFive} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSix} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateSeven} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={CertificateEight} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Fade>
            </div>
        </section >
    )
}

export default Certificates