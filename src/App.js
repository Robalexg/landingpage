import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Courses/>
      <Footer/>
    </div>
  );
}

export default App;
