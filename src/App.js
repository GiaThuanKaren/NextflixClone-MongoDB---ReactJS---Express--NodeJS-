import './grid.css'
import './App.css';

import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';
function App() {
  console.log(useSelector((state)=>state))
  return (
    <div className="App grid">
        <Header/>
    </div>
  );
}

export default App;
