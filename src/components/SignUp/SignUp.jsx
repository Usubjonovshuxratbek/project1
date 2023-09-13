import React from 'react'
import './SignUp.scss'
import { Fade } from 'react-reveal'

function SignUp() {
  return (
    <section className='sign'>
      <div className="sign__bg">
        <div className="container">
          <Fade bottom>
            <div className="sign__wrapper">
              <div className="info">
                <h3>Запишитесь на бесплатный урок сейчас!</h3>
                <p>Узнайте, как бесплатно получить сертификат на 2 недели занятий</p>
              </div>
              <div className="login">
                <h3>Запишитесь на бесплатное пробное занятие!</h3>
                <form className='form'>
                  <div className="name">
                    <span>* Имя</span>
                    <input type="text" required />
                  </div>
                  <div className="phone__number">
                    <span>* Телефон</span>
                    <input type="number" required />
                  </div>
                  <div className="box">
                    <input type="checkbox" required />
                    <p>* Я согласен на обработку моих <br /> <a href="/">персональных данных</a></p>
                  </div>
                  <button>ЗАПИСАТЬСЯ</button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default SignUp