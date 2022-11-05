import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import PrivateRouter from './PrivateRouter';
import MainPage from './mainPage';
import MultipleSelect from './checkBox';
import Profilesetting from './profileSetting'
import Messagespage from './mainPages/messagesPage';
import Feedpage from './mainPages/feedPage'
import Groupspage from './mainPages/groupsPage'
import Livepage from './mainPages/livePage'
import Coursespage from './mainPages/coursesPage'
import Supportpage from './mainPages/supportPage'
import Eventspage from './mainPages/eventsPage'
import Announcementpage from './mainPages/announcementPage'

function App() {
  return (
    <Router>
      <MainPage />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={
          <PrivateRouter>
            <MainPage />
          </PrivateRouter>
        } />
        <Route exact path='/messages' element={<Messagespage/>}/>
        <Route exact path='/feeds' element={<Feedpage/>}/>
        <Route exact path='/groups' element={<Groupspage/>}/>
        <Route exact path='/live' element={<Livepage/>}/>
        <Route exact path='/courses' element={<Coursespage/>}/>
        <Route exact path='/support' element={<Supportpage/>}/>
        <Route exact path='/events' element={<Eventspage/>}/>
        <Route exact path='/announcements' element={<Announcementpage/>}/>
      </Routes>
    </Router>
    
    // <MultipleSelect />
    // <Profilesetting/>

  );
}

export default App;
