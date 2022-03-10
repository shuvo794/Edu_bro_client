
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider.js/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AdminBlogs from './Pages/AdminDashboard/AdminBlogs/AdminBlogs';
import AdminBooks from './Pages/AdminDashboard/AdminBooks/AdminBooks';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminLabs from './Pages/AdminDashboard/AdminLabs/AdminLabs';
import AdminNotes from './Pages/AdminDashboard/AdminNotes/AdminNotes';
import AdminWelcome from './Pages/AdminDashboard/AdminWelcome/AdminWelcome';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import BlogDetails from './Pages/AllBlogs/BlogDetails';
import AllBooks from './Pages/AllBooks/AllBooks';
import BooksDetails from './Pages/AllBooks/BooksDetails';
import AllLabs from './Pages/AllLabs/AllLabs';
import AllNotes from './Pages/AllNotes/AllNotes';
import AllQuestions from './Pages/AllQuestions/AllQuestions';
import Contact from './Pages/Contact/Contact';
import AddBlogsDashboard from './Pages/Dashboard/AddBlogsDashboard/AddBlogsDashboard';
import AddBooksDashboard from './Pages/Dashboard/AddBooksDashboard/AddBooksDashboard';
import AddLabsDashboard from './Pages/Dashboard/AddLabsDashboard/AddLabsDashboard';
import AddNotesDashboard from './Pages/Dashboard/AddNotesDashboard/AddNotesDashboard';
import AddQuestionDashboard from './Pages/Dashboard/AddQuestionDashboard/AddQuestionDashboard';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/Dashboard/ManageQuestions/ManageQuestion';
import MyBlogs from './Pages/Dashboard/MyBlogs/MyBlogs';
import MyBooks from './Pages/Dashboard/MyBooks/MyBooks';
import MyNotes from './Pages/Dashboard/MyNotes/MyNotes';
import MyQuestions from './Pages/Dashboard/MyQuestions/MyQuestions';
import PendingQuestions from './Pages/Dashboard/PendingQuestions/PendingQuestions';
import EditProfile from './Pages/Dashboard/UserProfile/EditProfile';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FindBooks from './Pages/FindBooks/FindBooks';
import FindQuestions from './Pages/FindQuestions/FindQuestions';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home/Home';
import MyLabs from './Pages/MyLabs/MyLabs';
import QuestionDetailsSolve from './Pages/QuestionDetailsSolve/QuestionDetailsSolve';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';





/* import Header from "./pages/Shared/Header/Header";
 import Home from "./pages/home/Home/Home";
 import AllQuestions from "./pages/AllQuestions/AllQuestions"; 
import FindQuestions from "./pages/FindQuestions/FindQuestions";
import Forum from "./pages/Forum/Forum";
import AskQuestions from "./pages/AskQuestions/AskQuestions"; 
 import Dashboard from "./pages/Dashboard/Dashboard/Dashboard"
import DashboardWelcome from "./pages/Dashboard/DashboardWelcome/DashboardWelcome"; 
import MyQuestions from "./pages/Dashboard/MyQuestions/MyQuestions";
import PendingQuestions from "./pages/Dashboard/PendingQuestions/PendingQuestions";
import AddDepertments from "./pages/Dashboard/AddDepertMents/AddDepertments";
import ManageQuestion from "./pages/Dashboard/ManageQuestions/ManageQuestion";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./pages/Shared/Footer/Footer";
import MyNotes from "./pages/MyNotes/MyNotes";
import AddNotes from "./pages/AddNotes/AddNotes";
import PendingNotes from "./pages/PandingNodes/PandingNodes";
import FindNotes from './pages/FindNotes/FindNotes'; */

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
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/allNotes" element={<AllNotes />} />
            <Route path="/allLabs" element={<AllLabs />} />
            <Route path='/find-questions' element={<FindQuestions />} />
            <Route path='/forum' element={<Forum />} />

            {/* Admin Dashboard  */}

            <Route path='/admin-dashboard' element={<AdminDashboard />}>
              <Route path='/admin-dashboard' element={<AdminWelcome />} />
              <Route path='/admin-dashboard/welcome' element={<AdminWelcome />} />
              <Route path='/admin-dashboard/admin-blogs' element={<AdminBlogs />} />
              <Route path='/admin-dashboard/admin-notes' element={<AdminNotes />} />
              <Route path='/admin-dashboard/admin-books' element={<AdminBooks />} />
              <Route path='/admin-dashboard/admin-labs' element={<AdminLabs />} />
            </Route>

            {/* User Dashboard  */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='/dashboard' element={<DashboardWelcome />} />
              <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
              <Route path='/dashboard/my-questions' element={<MyQuestions />} />
              <Route path='/dashboard/my-books' element={<MyBooks />} />
              <Route path='/dashboard/my-blogs' element={<MyBlogs />} />
              <Route path='/dashboard/my-notes' element={<MyNotes />} />
              <Route path='/dashboard/my-labs' element={<MyLabs />} />
              <Route path='/dashboard/add-question' element={<AddQuestionDashboard />} />
              <Route path='/dashboard/add-books' element={<AddBooksDashboard />} />
              <Route path='/dashboard/add-notes' element={<AddNotesDashboard />} />
              <Route path='/dashboard/add-labs' element={<AddLabsDashboard />} />
              <Route path='/dashboard/add-blogs' element={<AddBlogsDashboard />} />
              <Route path='/dashboard/user-profile' element={<UserProfile />} />
              <Route path='/dashboard/edit-profile' element={<EditProfile />} />
              <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />
              <Route path='/dashboard/manage-questions' element={<ManageQuestion />} />
              <Route path='/dashboard/make-admin' element={<MakeAdmin />} /> </Route>
            {/*             <Route path='/book-details/:id' element={<BooksDetails />} /> */}
            <Route path='/question-details/:id' element={<QuestionDetailsSolve />} />
            <Route path='/blog-details/:id' element={<BlogDetails />} />
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
