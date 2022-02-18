import './App.css';
import { Home } from './components/pages/Home/Home';
import { AboutUsMain } from './components/layouts/AboutUs/AboutUsMain';
import { Contact } from './components/pages/Contact/Contact';
import { Counter } from './components/pages/CounterPage/Counter';
import { CounterImage } from './components/pages/CounterImagePage/CounterImage';
import { BotonOnPage } from './components/pages/BotonOnPage/BotonOnPage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUsMain/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/CounterImage" element={<CounterImage/>}/>
        <Route path="/BotonOnPage" element={<BotonOnPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}



export default App;
