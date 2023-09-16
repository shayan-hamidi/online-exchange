import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
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
              xs={12}
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
              <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                ارزینو
              </Typography>
              <ul>
                <li>درباره ما</li>
                <li>Arzino Mag</li>
                <li>سوالات متداول</li>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
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
              <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                امکانات
              </Typography>
              <ul>
                <li style={{ marker: { color: "black" } }}>درباره ما</li>
                <li>Arzino Mag</li>
                <li>سوالات متداول</li>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
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
              <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                راهنما
              </Typography>
              <ul>
                <li>درباره ما</li>
                <li>Arzino Mag</li>
                <li>سوالات متداول</li>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
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
              <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                تماس با ما
              </Typography>
              <ul>
                <li>درباره ما</li>
                <li>Arzino Mag</li>
                <li>سوالات متداول</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
}
