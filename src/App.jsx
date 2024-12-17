// HOOKS
import { Outlet } from 'react-router-dom';
// NAVBAR
import Navbar from './components/Navbar/Navbar';
// CSS
import './App.css';

function App() {
  return (
    <div>
      <div className='App'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
