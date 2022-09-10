import React from 'react'
import Header from './Heading/Header'
import NavBar from './NavBar/NavBar'
import ContainerCourses from './Tap/ContainerCourses'

function HomePage(props) {
  return (
    <>
      <NavBar />
      <main className="container-body">
        <Header />
        <ContainerCourses courses={props.courses} />
      </main>
    </>
  )
}

export default HomePage
