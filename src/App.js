import './App.css';
import { Navbar } from './Components/Navbar';
import {Dashboard} from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar className="z-1000"> </Navbar>
      <Dashboard/>
      
    </div>
  );
}

export default App;
