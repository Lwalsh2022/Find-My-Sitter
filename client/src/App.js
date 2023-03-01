import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';   
import Header from './components/Header';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Projects/>
      <Contact/> 
    </div>
  );
}

export default App;