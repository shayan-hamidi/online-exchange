import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import { Grid } from "@mui/material";
import BenefitsPage from "../pages/Benefits";
import QuestionsPage from "../pages/Questions";

export default function MainRoutes() {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          height: "80px",
          background: "#FAF0D7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
        }}
        xs={12}
      >
        {[
          { name: "خانه", route: "/" },
          { name: "سوالات", route: "/questions" },
          { name: "مزایا", route: "/benefits" },
          { name: "درباره ما", route: "/aboutUs" },
          { name: "تماس با ما", route: "contactUs" },
        ].map((item) => {
          return (
            <Link className="nav-link" to={item.route} key={item.route}>
              {item.name}
            </Link>
          );
        })}
      </Grid>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Grid>
  );
}
