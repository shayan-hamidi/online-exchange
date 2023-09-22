import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} mt={10}>
      <Box
        sx={{
          backgroundColor: "#faf0d7",
          color: "#fff",
          padding: "10px",
          marginTop: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                padding: "20px 0px",
                "& li::before": {
                  content: '"•"',
                  color: "#1D5D9B",
                  marginLeft: "8px",
                  fontSize: "18px",
                },
                "& li": {
                  listStyleType: "none",
                  color: "black",
                  fontSize: "14px",
                },
              }}
            >
              <Typography variant="h6" fontWeight={"bold"} color={"#33BBC5"}>
                ارزینو
              </Typography>
              <ul>
                <li onClick={() => navigate("/rules")} className="footer-link">
                  قوانین
                </li>
                {/* <li>Arzino Mag</li> */}
              </ul>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                padding: "20px 0px",
                "& li::before": {
                  content: '"•"',
                  color: "#1D5D9B",
                  marginLeft: "8px",
                  fontSize: "18px",
                },
                "& li": {
                  listStyleType: "none",
                  color: "black",
                  fontSize: "14px",
                },
              }}
            >
              <Typography variant="h6" fontWeight={"bold"} color={"#33BBC5"}>
                امکانات
              </Typography>
              <ul>
                <li
                  onClick={() => navigate("/academy")}
                  className="footer-link"
                >
                  آکادمی
                </li>
                <li
                  onClick={() => navigate("/benefits")}
                  className="footer-link"
                >
                  مزایا
                </li>
              </ul>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                padding: "20px 0px",
                "& li::before": {
                  content: '"•"',
                  color: "#1D5D9B",
                  marginLeft: "8px",
                  fontSize: "18px",
                },
                "& li": {
                  listStyleType: "none",
                  color: "black",
                  fontSize: "14px",
                },
              }}
            >
              <Typography variant="h6" fontWeight={"bold"} color={"#33BBC5"}>
                راهنما
              </Typography>
              <ul>
                <li
                  onClick={() => navigate("/aboutUs")}
                  className="footer-link"
                >
                  درباره ما
                </li>
                <li
                  onClick={() => navigate("/questions")}
                  className="footer-link"
                >
                  سوالات متداول
                </li>
              </ul>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                padding: "20px 0px",
                "& li::before": {
                  content: '"•"',
                  color: "#1D5D9B",
                  marginLeft: "8px",
                  fontSize: "18px",
                },
                "& li": {
                  listStyleType: "none",
                  color: "black",
                  fontSize: "14px",
                },
              }}
            >
              <Typography variant="h6" fontWeight={"bold"} color={"#33BBC5"}>
                تماس با ما
              </Typography>
              <ul>
                <li
                  onClick={() => navigate("/contactUs")}
                  className="footer-link"
                >
                  ارتباط با ما
                </li>
                <li
                  style={{
                    display: "flex",
                  }}
                >
                  <Grid container columnGap={1}>
                    <Grid item>
                      <a
                        className="footer-link"
                        href="https://www.linkedin.com/in/shayan-hamidi2001/"
                      >
                        <LinkedInIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        className="footer-link"
                        href="https://github.com/shayan-hamidi/online-exchange"
                      >
                        <GitHubIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        className="footer-link"
                        href="https://www.facebook.com/profile.php?id=100072877444506"
                      >
                        <FacebookIcon />
                      </a>
                    </Grid>
                  </Grid>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
}
