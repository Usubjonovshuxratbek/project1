import React from 'react'
import './Works.scss'
import WorksImg from '../../assets/img/works.jpg'

function Works() {
  return (
    <section className='works'>
      <div className="works__bg">
        <div className="container">
          <div className="works__wrapper">
            <div className="img">
              <img src={WorksImg} alt="" />
            </div>
            <div className="info">
              <h3>КАК ЭТО РАБОТАЕТ?</h3>
              <div className="boxs">
                <div className="box">
                  <span>01</span>
                  <h4>Заявка</h4>
                  <p>Вы оставляете заявку на бесплатное занятие</p>
                </div>
                <div className="box">
                  <span>02</span>
                  <h4>Мы перезваниваем</h4>
                  <p>Наш менеджер связывается с Вами.</p>
                </div>
                <div className="box">
                  <span>03</span>
                  <h4>Начинаем заниматься</h4>
                  <p>Начинаете заниматься и получаете результат!</p>
                </div>
                <div className="box">
                  <span>04</span>
                  <h4>Оплата</h4>
                  <p>Осуществляете оплату удобным для вас способом</p>
                </div>
              </div>
              <a href="#">Оставить заявку</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works