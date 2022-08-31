import logo from './logo.svg';
import './App.css';
import data from './Component/Card'
import './Component/card.css'
import Cards from './Component/Card';
import ParagraphHead from './Component/paragraphTitle';
import HeadTitle from './Component/headTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <section className="container p-4">
            <h1>A Broad Selection of Courses</h1>
            <h4>Choose from 185,000 online video courses 
                with new additions published every month</h4>
            <ul>
                <button className='btn active'>Python</button>
                <button className='btn active'>Exel</button>
                <button className='btn active'>java</button>
                <button className='btn active'>Node</button>
                <button className='btn active'>.net</button>
                <button className='btn active'>React</button>
            </ul>
            <div className="container-courses">
                <HeadTitle />
                <ParagraphHead />
                <button>Explore Python</button>
                <section className="container-cards">
                    <Cards />
                </section>
                
            </div>
        </section>
    </div>
  );
}

export default App;
