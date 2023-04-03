import logo from './logo.svg';
import './App.css';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Detail from './components/Detail';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/* todo lo que no sean rutas deben ir fuera del Routes */}
      <Nav/> 
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home/>}/>
        <Route path={"/detail/:id"} element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
