import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./pages/Shared/Header/Header";
import Home from "./pages/home/Home/Home";
import AllQuestions from "./pages/AllQuestions/AllQuestions";
import FindQuestions from "./pages/FindQuestions/FindQuestions";
import Forum from "./pages/Forum/Forum";
import AskQuestions from "./pages/AskQuestions/AskQuestions";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
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
import FindNotes from './pages/FindNotes/FindNotes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/allQuestions" element={<AllQuestions />} />

          <Route path="/find-questions" element={<FindQuestions />} />
          <Route path="/find-notes" element={<FindNotes />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/ask-questions" element={<AskQuestions />} />
          <Route path="/add-notes" element={<AddNotes />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardWelcome />} />
            <Route path="/dashboard/welcome" element={<DashboardWelcome />} />
            <Route path="/dashboard/my-questions" element={<MyQuestions />} />
            <Route path="/dashboard/my-notes" element={<MyNotes />} />
            <Route
              path="/dashboard/pending-questions"
              element={<PendingQuestions />}
            />
            <Route path="/dashboard/pending-notes" element={<PendingNotes />} />
            <Route
              path="/dashboard/add-depertments"
              element={<AddDepertments />}
            />
            <Route
              path="/dashboard/manage-questions"
              element={<ManageQuestion />}
            />
            <Route path="/dashboard/make-admin" element={<MakeAdmin />} />{" "}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
