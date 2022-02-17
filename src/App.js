import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AskQuestions from './Pages/AskQuestions/AskQuestions';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/Dashboard/ManageQuestions/ManageQuestion';
import MyQuestions from './Pages/Dashboard/MyQuestions/MyQuestions';
import PendingQuestions from './Pages/Dashboard/PendingQuestions/PendingQuestions';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FindQuestions from './Pages/FindQuestions/FindQuestions';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/find-questions' element={<FindQuestions />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/ask-questions' element={<AskQuestions />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='/dashboard' element={<DashboardWelcome />} />
            <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
            <Route path='/dashboard/my-questions' element={<MyQuestions />} />
            <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />
            <Route path='/dashboard/manage-questions' element={<ManageQuestion />} />
            <Route path='/dashboard/make-admin' element={<MakeAdmin />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;