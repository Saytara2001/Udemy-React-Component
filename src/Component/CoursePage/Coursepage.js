import React from 'react'
import { useParams } from 'react-router-dom'
import CardCourseBuy from '../CardCourseBuy/CardCourseBuy'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import BodyCourse from './BodyCourse'
import Description from './ComponentCourse/Descriptions/Description'
import HeaderCourse from './ComponentCourse/Header/HeaderCourse'
const Coursepage = (props) => {

  const { id } = useParams();
  const course = props.courses.filter(item => item.id == id)?.[0];

  return (
    <div>
      <CardCourseBuy courses={props.courses} />
      <NavBar />
      <HeaderCourse courses={props.courses} />
      <BodyCourse courses={props.courses} />
      <Footer />
    </div>
  )
}

export default Coursepage
