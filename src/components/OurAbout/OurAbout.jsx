import React from 'react'
import './OurAbout.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AvatOne from '../../assets/img/avat-1.jpg'
import AvatTwo from '../../assets/img/avat-2.jpg'
import AvatThree from '../../assets/img/avat-3.jpg'
import AvatFour from '../../assets/img/avat-4.jpg'
import { Fade } from 'react-reveal'

function OurAbout() {
  return (
    <section className='our__about'>
      <div className="container">
        <Fade bottom>
          <div className="our__about-inner">
            <h2>ЧТО О НАС ГОВОРЯТ?</h2>
            <div className="our__abour__wrapper">
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src={AvatOne} alt="" />
                    </div>
                    <div className="boxx">
                      <h3>Виктория</h3>
                      <p>Отдавала своего сына подучить язык. За пару месяцев успехи по иностранному заметно выросли, ребенок стал практически свободно разговаривать на нем, хотя до этого заметно отставал от одноклассников. Спасибо!</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src={AvatTwo} alt="" />
                    </div>
                    <div className="boxx">
                      <h3>Никита</h3>
                      <p>Перед сдачей TOEFL обратился сюда - просто отличная школа, объясняют все максимально доступно и понятно, без зубрежки. Большое спасибо, благодаря Вам сдал экзамен.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src={AvatThree} alt="" />
                    </div>
                    <div className="boxx">
                      <h3>Милана</h3>
                      <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src={AvatFour} alt="" />
                    </div>
                    <div className="boxx">
                      <h3>Ольга и Виктор</h3>
                      <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="our__about__wrapper-lap">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatOne} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Виктория</h3>
                    <p>Отдавала своего сына подучить язык. За пару месяцев успехи по иностранному заметно выросли, ребенок стал практически свободно разговаривать на нем, хотя до этого заметно отставал от одноклассников. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatTwo} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Никита</h3>
                    <p>Перед сдачей TOEFL обратился сюда - просто отличная школа, объясняют все максимально доступно и понятно, без зубрежки. Большое спасибо, благодаря Вам сдал экзамен.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatThree} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Милана</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatFour} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Ольга и Виктор</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
            <div className="our__about__wrapper-tab">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatOne} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Виктория</h3>
                    <p>Отдавала своего сына подучить язык. За пару месяцев успехи по иностранному заметно выросли, ребенок стал практически свободно разговаривать на нем, хотя до этого заметно отставал от одноклассников. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatTwo} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Никита</h3>
                    <p>Перед сдачей TOEFL обратился сюда - просто отличная школа, объясняют все максимально доступно и понятно, без зубрежки. Большое спасибо, благодаря Вам сдал экзамен.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatThree} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Милана</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatFour} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Ольга и Виктор</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
            <div className="our__about__wrapper-phone">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatOne} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Виктория</h3>
                    <p>Отдавала своего сына подучить язык. За пару месяцев успехи по иностранному заметно выросли, ребенок стал практически свободно разговаривать на нем, хотя до этого заметно отставал от одноклассников. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatTwo} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Никита</h3>
                    <p>Перед сдачей TOEFL обратился сюда - просто отличная школа, объясняют все максимально доступно и понятно, без зубрежки. Большое спасибо, благодаря Вам сдал экзамен.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatThree} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Милана</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="img">
                    <img src={AvatFour} alt="" />
                  </div>
                  <div className="boxx">
                    <h3>Ольга и Виктор</h3>
                    <p>Перед полетом в Англию решили подтянуть английский по двухмесячной программе. Не только восстановили уже забытые знания из школьной программы, но и освоили много нового - разговорный английский стал на уровне. Спасибо!</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default OurAbout