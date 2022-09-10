import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Component/Heading/Header'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Component/NavBar/NavBar';
import Header from './Component/Heading/Header';
import ContainerCourses from './Component/Tap/ContainerCourses';
import Coursepage from './Component/CoursePage/Coursepage';
import HomePage from './Component/HomePage';
import { Component, useEffect } from 'react';
import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []

    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/courses').then(response => {
      this.setState({
        courses: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const { courses } = this.state;
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage courses={courses} />} />
          <Route path='/coursePage/:id' element={<Coursepage courses={courses} />} />
        </Routes>
      </>
    );
  }
}

export default App;
