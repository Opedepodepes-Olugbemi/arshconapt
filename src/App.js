import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutPage from './pages/About.js';
import ErrorPage from './pages/Error.js';
import LoginPage from './pages/Login.js';
import ResetpasswordPage from './pages/Resetpassword.js';
import ProjectsPage from './pages/Projects.js';
import BlogsPage from './pages/Blogs.js';
import PrivacyPage from './pages/Privacy.js';
import ContactPage from './pages/Contact.js';
import DashboardPage from './pages/Dashboard.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/about" element={<AboutPage />} />
         
      <Route path="/error" element={<ErrorPage />} />
         
      <Route path="/login" element={<LoginPage />} />
         
      <Route path="/resetpassword" element={<ResetpasswordPage />} />
         
      <Route path="/projects" element={<ProjectsPage />} />
         
      <Route path="/blogs" element={<BlogsPage />} />
         
      <Route path="/privacy" element={<PrivacyPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
         
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
