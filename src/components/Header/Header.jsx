import React from 'react'
import './Header.scss'
import Logo from '../../assets/img/logo.svg'
import Fade from 'react-reveal/Fade';

function Header() {
    return (
        <div className='header'>
            <div className="header__bg">
                <div className="container">
                    <Fade bottom>
                        <nav className='nav'>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <div className="logo">
                                        <div className="img">
                                            <a href="/"><img src={Logo} alt="" /></a>
                                        </div>
                                        <div className="info">
                                            <h2>Language Master</h2>
                                            <p>Курсы иностранных языков</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='nav__item'>
                                    <div className="location">
                                        <div className="img">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p>Россия, 125040, г. Москва, <br /> Ленинский проспект, дом</p>
                                        </div>
                                    </div>
                                    <div className="phone__number">
                                        <div className="img">
                                            <i className="bi bi-telephone"></i>
                                        </div>
                                        <div className="info">
                                            <span>+7 (123) 123-45-67</span>
                                            <p>Заказать звонок</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </Fade>
                    <Fade bottom>
                        <div className="hero">
                            <h2>ПРОКАЧАЙ СВОЙ АНГЛИЙСКИЙ ЗА 2 МЕСЯЦА!</h2>
                            <p>Индивидуальные уроки английского языка с русскоязычными преподавателями и носителями языка не выходя из дома </p>
                        </div>
                    </Fade>
                    <Fade bottom>
                    <div className="hero__inner">
                        <h2>Начните обучение прямо сейчас!</h2>
                        <form>
                            <div className="input__group">
                                <div className="name">
                                    <span>* Имя</span>
                                    <input type="text" required />
                                </div>
                                <div className="phone__number">
                                    <span>* Телефон</span>
                                    <input type="number" required />
                                </div>
                            </div>
                            <button>ЗАПИСАТЬСЯ</button>
                        </form>
                        <div className="box">
                            <input type="checkbox" />
                            <p>* Я согласен на обработку моих <a href="/">персональных данных</a></p>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header