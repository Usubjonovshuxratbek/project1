import React from 'react'
import './OurTeachers.scss'
import TeacherOne from '../../assets/img/teacher-1.jpg'
import TeacherTwo from '../../assets/img/teacher-2.jpg'
import TeacherThree from '../../assets/img/teacher-3.jpg'
import TeacherFour from '../../assets/img/teacher-4.jpg'
import { Fade } from 'react-reveal'

function OurTeachers() {
  return (
    <section className='our__teachers'>
      <div className="container">
        <Fade bottom>
          <div className="our__teachers-inner">
            <h2>НАШИ ПРЕПОДАВАТЕЛИ</h2>
            <div className="cards">
              <div className="card">
                <img src={TeacherOne} alt="" />
                <h3>Daniel</h3>
                <p>Английский</p>
                <a href="#">Записаться на курс</a>
              </div>
              <div className="card">
                <img src={TeacherTwo} alt="" />
                <h3>Мелехова Нина</h3>
                <p>Английский</p>
                <a href="#">Записаться на курс</a>
              </div>
              <div className="card">
                <img src={TeacherThree} alt="" />
                <h3>Ольга Макарчик</h3>
                <p>Немецкий</p>
                <a href="#">Записаться на курс</a>
              </div>
              <div className="card">
                <img src={TeacherFour} alt="" />
                <h3>Нина Матвеева</h3>
                <p>Английский</p>
                <a href="#">Записаться на курс</a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default OurTeachers