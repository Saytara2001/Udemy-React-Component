import React, { Component } from 'react'
import Cards from '../Card/Card'
import ParagraphCourse from './paragraphCourse'
import styles from './ContainerCourses.module.css'

class ContainerCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <section className={`container mt-5 ${styles['section-container']}`}>
                <h1>A Broad Selection of Courses</h1>
                <h4>Choose from 185,000 online video courses
                    with new additions published every month</h4>
                <ul className='p-0'>
                    <button className={styles['button-ul']}>Python</button>
                    <button className={styles['button-ul']}>Exel</button>
                    <button className={styles['button-ul']}>java</button>
                    <button className={styles['button-ul']}>Node</button>
                    <button className={styles['button-ul']}>.net</button>
                    <button className={styles['button-ul']}>React</button>
                </ul>
                <div className={styles['container-courses']}>
                    <ParagraphCourse />
                    <button className={styles.button}>Explore Python</button>
                    <section className="container-cards">
                        <Cards courses={this.props.courses} />
                    </section>
                </div>
            </section>
        )
    }
}

export default ContainerCourses
