import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Nav } from './components/nav';
import HomePage from './pages/homePage';
import TownCenterPage from './pages/townCenterPage';
import CavePage from './pages/cavePage';
import { BlackSmithPage } from './pages/blackSmithPage';

function App() {
  return (
    <div>
        <Header/>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/townCenter' element={<TownCenterPage/>}></Route>
            <Route path='/cueva' element={<CavePage/>}></Route>
            <Route path='/blackSmith' element={<BlackSmithPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>

  );
}

export default App;
