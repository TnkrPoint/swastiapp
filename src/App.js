import './App.css';
import NavigationBar from './components/Navibar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Family from './pages/Family';
import Peer from './pages/Peers';
import Teachers from './pages/Teachers';
import Society from './pages/Society';
import Self from './pages/Self';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/family" exact element={<Family />} />
          <Route path="/peers" exact element={<Peer />} />
          <Route path="/school" exact element={<Teachers />} />
          <Route path="/society" exact element={<Society />} />
          <Route path="/self" exact element={<Self />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
