import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {

  return (
      <div>
        <Menu>
          <NavLink to="/" className="menu__item">Главная</NavLink>
          <NavLink to="/drift" className="menu__item">Дрифт-такси</NavLink>
          <NavLink to="/timeattack" className="menu__item">Time Attack</NavLink>
          <NavLink to="/forza" className="menu__item">Forza Karting</NavLink>
        </Menu>
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
