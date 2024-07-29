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
import Blogs1Page from './pages/Blogs1.js';
import Blogs2Page from './pages/Blogs2.js';
import Blogs3Page from './pages/Blogs3.js';
import Blogs4Page from './pages/Blogs4.js';

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
         
      <Route path="/blogs1" element={<Blogs1Page />} />
         
      <Route path="/blogs2" element={<Blogs2Page />} />
         
      <Route path="/blogs3" element={<Blogs3Page />} />
         
      <Route path="/blogs4" element={<Blogs4Page />} />
    </Routes>
  );
}

export default App;
