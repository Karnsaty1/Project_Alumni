
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Alumni from './Components/Alumni';
import Navbar from './Components/Navbar';
import Success from './Components/Success';
import JobPortal from './Components/JobPortal';
import AddPost from './Components/AddPost';
import Donation from './Components/Donation';
import CalendarView from './Components/CalendarView';
import Home from './Components/Home';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    loadData();
  }, []);
  return (
      <Router>
       {loading?(<Loading/>):(


<>



        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signUp/:id" element={<SignUp />} />
          <Route path="/logIn/:id" element={<LogIn />} />

          {/* Protected Routes */}
          <Route path="/select/:id" element={<Alumni/>} />
          <Route path="/navbar/:id" element={<Navbar/>} />
          <Route path="/card/:id" element={<Success/>} />
          <Route path="/job/:id" element={<JobPortal/>} />
          <Route path="/post/:id" element={<AddPost/>} />
          <Route path="/donate/:id" element={<Donation/>} />
          <Route path="/event/:id" element={<CalendarView/>} />
        </Routes>
        </>
               )}
      </Router>
  );
}

export default App;
