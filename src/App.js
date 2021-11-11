import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
