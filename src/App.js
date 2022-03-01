import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider.js/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AllBooks from './Pages/AllBooks/AllBooks';

import AllQuestions from './Pages/AllQuestions/AllQuestions';
import Contact from './Pages/Contact/Contact';
import AddBooksDashboard from './Pages/Dashboard/AddBooksDashboard/AddBooksDashboard';
import AddDepertments from './Pages/Dashboard/AddDepertMents/AddDepertments';
import AddQuestionDashboard from './Pages/Dashboard/AddQuestionDashboard/AddQuestionDashboard';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/Dashboard/ManageQuestions/ManageQuestion';
import MyBooks from './Pages/Dashboard/MyBooks/MyBooks';
import MyQuestions from './Pages/Dashboard/MyQuestions/MyQuestions';
import PendingQuestions from './Pages/Dashboard/PendingQuestions/PendingQuestions';
import EditProfile from './Pages/Dashboard/UserProfile/EditProfile';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FindQuestions from './Pages/FindQuestions/FindQuestions';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/allQuestions" element={<AllQuestions />} />
          <Route path="/allBooks" element={<AllBooks />} />
          <Route path='/find-questions' element={<FindQuestions />} />
          <Route path='/forum' element={<Forum />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='/dashboard' element={<DashboardWelcome />} />
            <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
            <Route path='/dashboard/my-questions' element={<MyQuestions />} />
            <Route path='/dashboard/my-books' element={<MyBooks />} />
            <Route path='/dashboard/add-question' element={<AddQuestionDashboard />} />
            <Route path='/dashboard/add-books' element={<AddBooksDashboard />} />
            <Route path='/dashboard/user-profile' element={<UserProfile />} />
            <Route path='/dashboard/edit-profile' element={<EditProfile />} />
            <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />
            <Route path='/dashboard/add-depertments' element={<AddDepertments />} />

            <Route path='/dashboard/manage-questions' element={<ManageQuestion />} />
            <Route path='/dashboard/make-admin' element={<MakeAdmin />} /> </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;