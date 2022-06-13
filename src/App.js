import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import LandingPage from './pages';
import AboutUS from './pages/aboutUs';
import Sponsors from './pages/sponsors';
import Events from './pages/events';
import Contact from './pages/contact'
import Competition from './pages/competitions';
import OurTeam from './pages/ourTeam';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AeroZone from './pages/aerozone';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUS/>}/>
        <Route path='/sponsors' element={<Sponsors/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/competitions' element={<Competition />} />
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/aerozone' element={<AeroZone/>}/>
      </Routes>
    </Router>
  );
}

export default App;
