import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
