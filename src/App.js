import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import PrivateRouter from './PrivateRouter';
import MainPage from './mainPage';
import InboxPage from './inboxPage';
import OutboxPage from './outboxPage';
import TrashPage from './trashPage';

function App() {
  return (
    <Router>
      <MainPage />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/name' element={
          <PrivateRouter>
            <MainPage />
          </PrivateRouter>
        } />
        <Route exact path='/inbox' element={<InboxPage />} />
        <Route exact path='/outbox' element={<OutboxPage />} />
        <Route exact path='/trash' element={<TrashPage />} />
      </Routes>
    </Router>

  );
}

export default App;
