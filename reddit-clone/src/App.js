import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './header';
// import Home from './home';
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
