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
import 4BedroomDuplexApartmentPage from './pages/4_bedroom_duplex_apartment.js';
import SemiDetachedDuplexApartmentsPage from './pages/Semi-detached_duplex_apartments.js';
import 8UnitsSemiDetachedAtIbadanLereAdigunPage from './pages/8_units_semi-detached_at_ibadan_lere_adigun.js';
import 3BedroomFlatPeaceEstatePage from './pages/3_bedroom_flat_peace_estate.js';
import SemiDetachedDuplexPeaceEstatePage from './pages/Semi_detached_duplex__peace_estate.js';

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
         
      <Route path="/4bedroomduplexapartment" element={<4BedroomDuplexApartmentPage />} />
         
      <Route path="/semidetachedduplexapartments" element={<SemiDetachedDuplexApartmentsPage />} />
         
      <Route path="/8unitssemidetachedatibadanlereadigun" element={<8UnitsSemiDetachedAtIbadanLereAdigunPage />} />
         
      <Route path="/3bedroomflatpeaceestate" element={<3BedroomFlatPeaceEstatePage />} />
         
      <Route path="/semidetachedduplexpeaceestate" element={<SemiDetachedDuplexPeaceEstatePage />} />
    </Routes>
  );
}

export default App;
