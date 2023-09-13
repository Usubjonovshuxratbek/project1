import React from 'react'
import './Courses.scss'
import English from '../../assets/img/english.jpg'
import Francais from '../../assets/img/francais.jpg'
import Nemis from '../../assets/img/nemis.jpg'
import Xitoy from '../../assets/img/xitoy.jpg'
import Russian from '../../assets/img/russian.jpg'
import Italia from '../../assets/img/Italiano.jpg'
import { Fade } from 'react-reveal'

function Courses() {
    return (
        <div className="courses">
            <div className="container">
                <div className="courses__inner">
                    <h2>МЫ ПРЕПОДАЕМ</h2>
                    <div className="cards">
                        <Fade bottom>
                            <div className="card">
                                <img src={English} alt="" />
                                <h3>Английский</h3>
                                <p>English</p>
                                <span>от 700 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                            <div className="card">
                                <img src={Francais} alt="" />
                                <h3>Французский</h3>
                                <p>Français</p>
                                <span>от 1 000 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                            <div className="card">
                                <img src={Nemis} alt="" />
                                <h3>Немецкий</h3>
                                <p>Deutsch</p>
                                <span>от 400 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card">
                                <img src={Xitoy} alt="" />
                                <h3>Китайский</h3>
                                <p>中国</p>
                                <span>от 500 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                            <div className="card">
                                <img src={Russian} alt="" />
                                <h3>Russian</h3>
                                <p>Русский</p>
                                <span>от 500 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                            <div className="card">
                                <img src={Italia} alt="" />
                                <h3>Итальянский</h3>
                                <p>Italiano</p>
                                <span>от 500 руб.</span>
                                <a href="#">Начать обучение</a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses