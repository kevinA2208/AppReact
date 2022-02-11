import './App.css';
import { Home } from './components/pages/Home/Home';
import { AboutUsMain } from './components/layouts/AboutUs/AboutUsMain';
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
      </Routes>
    </BrowserRouter>
    
  );
}



export default App;
