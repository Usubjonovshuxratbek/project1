import React from 'react'
import Header from '../../components/Header/Header'
import OurTeachers from '../../components/OurTeachers/OurTeachers'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Main from '../../components/Main/Main'
import Courses from '../../components/Courses/Courses'
import Works from '../../components/Works/Works'
import Certificates from '../../components/Certificates/Certificates'
import SignUp from '../../components/SignUp/SignUp'
import OurAbout from '../../components/OurAbout/OurAbout'

function Home() {
  return (
    <div>
      <Header />
        <Main />
        <Courses />
        <Works />
        <About />
        <Certificates />
        <SignUp />
        <OurTeachers />
        <OurAbout />
        <Contact />
    </div>
  )
}

export default Home