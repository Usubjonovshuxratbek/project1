import React from 'react'
import './Main.scss'
import Calendar from '../../assets/img/calendar.svg'
import Search from '../../assets/img/search.svg'
import Professional from '../../assets/img/professional.svg'
import Graph from '../../assets/img/graph.svg'
import Guarantee from '../../assets/img/guarantee.svg'
import Teacher from '../../assets/img/teacher.svg'
import Fade from 'react-reveal/Fade';

function Main() {
    return (
        <section className='main'>
            <div className="container">
                <Fade bottom>
                    <div className="main__inner">
                        <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                        <div className="cards">
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Calendar} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Работаем 24/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Search} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Предоставляем <br /> учебные материалы!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Professional} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Преподаватели с <br /> большим опытом</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Graph} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Дистанционное <br /> обучение</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Guarantee} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Сертификаты школы и <br /> прохождении курса</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__inner">
                                    <div className="img">
                                        <img src={Teacher} alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Индивидуальная <br /> программа</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Main