import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import { Grid } from "@mui/material";
import BenefitsPage from "../pages/Benefits";
import QuestionsPage from "../pages/Questions";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import RulesPage from "../pages/Rules";
import AcademyPage from "../pages/Academy";

export default function MainRoutes() {
  return (
    <Grid container>
      <NavBar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        {/* <Route path="/magezine" element={<MagezinePage />} /> */}
      </Routes>
      <Footer />
    </Grid>
  );
}
