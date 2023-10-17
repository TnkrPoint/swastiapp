import './App.css';
import NavigationBar from './components/Navibar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Family from './pages/Family';
import Peer from './pages/Peers';
import Teachers from './pages/Teachers';
import Society from './pages/Society';
import Self from './pages/Self';
import FamilyTime from './pages/FamilyComponents/familytime';
import Privacy from './pages/FamilyComponents/privacy';
import RightProperties from './pages/FamilyComponents/rightproperties';
import Academics from './pages/FamilyComponents/academics';
import PassiveAgressive from './pages/FamilyComponents/passive agressive';
import MutualUnderstanding from './pages/FamilyComponents/mutual understanding';
import Pressure from './pages/FamilyComponents/pressure';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className='xyz'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/family" exact element={<Family />} />

            <Route path='/family/familytime' exact element={<FamilyTime />} />
            <Route path='/family/privacy' exact element={<Privacy />} />
            <Route path='/family/rightproperties' exact element={<RightProperties />} />
            <Route path='/family/cocurricular' exact element={<Academics />} />
            <Route path='/family/passiveagressive' exact element={<PassiveAgressive />} />
            <Route path='/family/mutualunderstanding' exact element={<MutualUnderstanding />} />
            <Route path='/family/pressure' exact element={<Pressure />} />


            <Route path="/peers" exact element={<Peer />} />
            <Route path="/school" exact element={<Teachers />} />
            <Route path="/society" exact element={<Society />} />
            <Route path="/self" exact element={<Self />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
