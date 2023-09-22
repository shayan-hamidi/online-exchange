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
        <Route path="/online-exchange" element={<HomePage />} />
        <Route path="/online-exchange/aboutUs" element={<AboutPage />} />
        <Route path="/online-exchange/contactUs" element={<ContactPage />} />
        <Route path="/online-exchange/benefits" element={<BenefitsPage />} />
        <Route path="/online-exchange/questions" element={<QuestionsPage />} />
        <Route path="/online-exchange/rules" element={<RulesPage />} />
        <Route path="/online-exchange/academy" element={<AcademyPage />} />
        {/* <Route path="/magezine" element={<MagezinePage />} /> */}
      </Routes>
      <Footer />
    </Grid>
  );
}
