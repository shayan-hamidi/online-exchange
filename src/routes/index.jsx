import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/aboutUs" element={<benefitsPage />} />
        <Route path="/aboutUs" element={<questionsPage />} />
      </Routes>
    </Router>
  );
}
