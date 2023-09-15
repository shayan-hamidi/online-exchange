import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Grid
      item
      sx={{
        height: "70px",
        background: "#FAF0D7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        margin: "0 auto",
        borderRadius: "0px 0px 60px 60px",
      }}
      xs={8}
    >
      {[
        { name: "خانه", route: "/" },
        { name: "سوالات متداول", route: "/questions" },
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
  );
}
