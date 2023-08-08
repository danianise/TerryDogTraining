import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Testimonial from './components/Testimonial';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <h1 id='main_h1'>Dog Training with Terry Cormier</h1>
      <img id='dog_banner' src="images/dog_banner.png"/>
      <NavBar />
      <Testimonial />
    </div>
  );
}

export default App;
