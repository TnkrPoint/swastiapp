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
import SelfConfidence from './pages/SelfComponents/selfconfidence';
import Personalhygiene from './pages/SelfComponents/personalhygiene';
import Identityinformation from './pages/SelfComponents/identityinformation';
import Substanceabuse from './pages/SelfComponents/substanceabuse';
import Attitude from './pages/SelfComponents/attitude';
import BodyImage from './pages/SelfComponents/bodyimage';
import Discrimination from './pages/soceity/discrimination';
import Antisocial from './pages/soceity/antisocial';
import Expectations from './pages/soceity/expectations';
import Socialnorms from './pages/soceity/socialnorms';
import Expressingwithpeer from './pages/Peers/Expressingwithpeer';
import RumorsandDerogatory from './pages/Peers/RumorsandDerogatory';
import SocialMedia from './pages/Peers/SocialMedia';
import Friendshipissues from './pages/Peers/friendshipissues';
import Acceptingresponsibility from './pages/teachers/acceptingresponsibility';
import Effectivecomm from './pages/teachers/effectivecomm';
import Impression from './pages/teachers/impression';
import Knowingboundaries from './pages/teachers/knowingboundaries';
import Respect from './pages/teachers/respect';


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
            <Route path="/peers/expressing" exact element={<Expressingwithpeer />} />
            <Route path="/peers/rumors" exact element={<RumorsandDerogatory />} />
            <Route path="/peers/socialmedia" exact element={<SocialMedia />} />
            <Route path="/peers/frindshipissues" exact element={<Friendshipissues />} />

            <Route path="/school" exact element={<Teachers />} />
            <Route path="/teachers/acceptingresponsibility" exact element={<Acceptingresponsibility />} />
            <Route path="/teachers/effectivecomm" exact element={<Effectivecomm />} />
            <Route path="/teachers/impression" exact element={<Impression />} />
            <Route path="/teachers/knowingboundaries" exact element={<Knowingboundaries/>} />
            <Route path="/teachers/respect" exact element={<Respect />} />

            <Route path="/society" exact element={<Society />} />
            <Route path="/society/discrimination" exact element={<Discrimination />} />
            <Route path="/society/antisocial" exact element={<Antisocial />} />
            <Route path="/society/expectations" exact element={<Expectations />} />
            <Route path="/society/socialnorms" exact element={<Socialnorms />} />

            <Route path="/self" exact element={<Self />} />
            <Route path='/self/selfconfidence' exact element={<SelfConfidence />} />
            <Route path='/self/personalhygiene' exact element={<Personalhygiene />} />
            <Route path='/self/substanceabuse' exact element={<Substanceabuse />} />
            <Route path='/self/attitude' exact element={<Attitude />} />
            <Route path='/self/body' exact element={<BodyImage />} />
            <Route path='/self/identity' exact element={<Identityinformation />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
