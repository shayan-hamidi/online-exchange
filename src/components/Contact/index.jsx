import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import contactUs from "../../assets/images/contactUs.svg";
import { useRef } from "react";
import emailjs from "emailjs-com";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export default function Contact() {
  const form = useRef();
  const constsendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_online-exchange",
        "template_sl0onaa",
        form.current,
        "JmK7QIb4jhfmMc7K-"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <Grid
      container
      sx={{
        width: "85%",
        margin: "0 auto",
        marginTop: "90px",
      }}
    >
      <Grid item xs={12} md={6}>
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" color={"#33BBC5"} fontWeight={"800"}>
              تماس با ما
            </Typography>
          </Grid>
          <Grid item>
            <form ref={form} onSubmit={constsendEmail}>
              <Grid container rowSpacing={1}>
                <Grid item xs={12} md={10}>
                  <TextField
                    type="text"
                    name="name"
                    placeholder={"نام و نام خانوادگی"}
                    required
                    inputProps={{
                      style: {
                        height: "10px",
                        minWidth: "100px",
                      },
                    }}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    type="email"
                    name="email"
                    placeholder={"ایمیل"}
                    required
                    inputProps={{
                      style: {
                        height: "10px",
                        minWidth: "100px",
                      },
                    }}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    name="message"
                    placeholder={"پیام شما"}
                    required
                    inputProps={{
                      style: {
                        height: "80px",
                        minWidth: "100px",
                      },
                    }}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    sx={{
                      background: "#1D5D9B",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  >
                    ارسال پیام
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Grid container rowGap={1} columnGap={1}>
              <Grid
                item
                xs={12}
                sm={5}
                md={3.9}
                sx={{
                  background: "#CDEBFF",
                  minHeight: "100px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  svg: {
                    color: "#1D5D9B",
                  },
                }}
              >
                <ChatBubbleOutlineOutlinedIcon />
                <Typography sx={{ fontWeight: "bold", color: "#1D5D9B" }}>
                  واتس اپ
                </Typography>
                <Typography sx={{ color: "#1D5D9B" }} variant="caption">
                  09301023512
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                md={3.9}
                sx={{
                  background: "#CDEBFF",
                  minHeight: "100px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  svg: {
                    color: "#1D5D9B",
                  },
                }}
              >
                <SendOutlinedIcon />
                <Typography sx={{ fontWeight: "bold", color: "#1D5D9B" }}>
                  تلگرام
                </Typography>
                <Typography sx={{ color: "#1D5D9B" }} variant="caption">
                  09301023512
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                md={3.9}
                sx={{
                  background: "#CDEBFF",
                  minHeight: "100px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  svg: {
                    color: "#1D5D9B",
                  },
                }}
              >
                <EmailOutlinedIcon />
                <Typography sx={{ fontWeight: "bold", color: "#1D5D9B" }}>
                  ایمیل
                </Typography>
                <Typography sx={{ color: "#1D5D9B" }} variant="caption">
                  shayan@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img width={400} src={contactUs} alt="contactUs" />
          </Grid>
          <Grid item xs={10} mt={3}>
            <Typography>
              با دانلود اپلیکیشن تجربه راحت تری را برای خود بسازید{" "}
            </Typography>
            <Box
              my={3}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                svg: {
                  color: "#4CAF50",
                },
              }}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <span style={{ margin: "0px 5px" }}>
                  <CheckCircleOutlinedIcon />
                </span>
                <Typography>سریع تر</Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <span style={{ margin: "0px 5px" }}>
                  <CheckCircleOutlinedIcon />
                </span>
                <Typography>امن تر</Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <span style={{ margin: "0px 5px" }}>
                  <CheckCircleOutlinedIcon />
                </span>
                <Typography>پرداخت آنلاین</Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <span style={{ margin: "0px 5px" }}>
                  <CheckCircleOutlinedIcon />
                </span>
                <Typography>عضویت</Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#1D5D9B",
                color: "white !important",
                borderRadius: "8px",
              }}
              disabled
            >
              دانلود اپلیکیشن
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
