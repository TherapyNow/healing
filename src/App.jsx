import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import PrivateRoute from './components/PrivateRoute/privateRoute';
import Scroll from './components/Scroll/Scroll';
import { AuthProvider } from './contexts/AuthContext';
import About from './pages/About/About';
import BlogsPage from './pages/Blogs/BlogsPage';
import SingleBlogPage from './pages/Blogs/SingleBlogPage';
import BookAppointment from './pages/Book/BookAppointment';
import BuyTicket from './pages/buyTicket/BuyTicket';
import Contact from './pages/Contact/Contact';
import ContactThanks from './pages/Contact/ContactThanks';
import Home from './pages/Home/Home';
import LearnMore from './pages/Learn-More-Page/LearnMore';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import SignupPage from './pages/Signup/SignupPage';
import Team from './pages/Team/Team';
import BuyTicketThanks from './pages/buyTicket/BuyTicketThanks';
import TherapistCreate from './pages/therapistCreate/TherapistCreate';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
          <Navbar />
          <Scroll />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/therapistCreate" element={<TherapistCreate />} />
            <Route path="/ContactThanks" element={<ContactThanks />} />
            <Route path="/buyticketthanks" element={<BuyTicketThanks />} />
            <Route path="/buyticket" element={<PrivateRoute />}>
              <Route path="/buyticket" element={<BuyTicket />}/>
            </Route>
            <Route path="/book" element={<PrivateRoute />}>
              <Route path="/book" element={<BookAppointment />} />
            </Route>
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;