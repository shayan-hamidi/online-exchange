import { Box, Grid, Typography } from "@mui/material";
import homeChart from "../../assets/images/home-chart.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Testimonials from "../Testimonials";
import { Link } from "react-router-dom";

export default function Home() {
  const profitsData = [
    {
      icon: <GppGoodOutlinedIcon />,
      title: "امنیت بالا",
      description:
        "ارزینو با استفاده از روش‌های مختلف مثل تایید دو مرحله‌ای و ذخیره‌سازی سرد، دارایی کاربران را در بالاترین سطح امنیت نگهداری می‌کند.",
    },
    {
      icon: <QuestionAnswerOutlinedIcon />,
      title: "پشتیبانی ۲۴ ساعته",
      description:
        "گفت‌وگو با پشتیبانی ارزینو در تمام ساعات شبانه‌روز با چت آنلاین، ایمیل، سیستم تیکتینگ و تلفنی، امکان‌پذیر است و کارشناسان واحد پشتیبانی همواره آماده‌ی پاسخ به سوالات و کمک به کاربران هستند.",
    },
    {
      icon: <TrendingUpOutlinedIcon />,
      title: "تنوع ارزها",
      description:
        "معامله‌ پرطرفدارترین و محبوب‌ترین رمزارزها در ارزینو امکان‌پذیر است. تنوع رمزارزها در ارزینو به کاربران کمک می‌کند تا بتوانند انتخاب‌های متنوعی را در زمان معامله داشته باشند و سبد خرید مناسبی ایجاد و مدیریت کنند.",
    },
  ];
  return (
    <Grid container mt={8}>
      <Grid item xs={12} sx={{ margin: "0 auto" }}>
        <Grid container display={"flex"} justifyContent={"center"} px={3}>
          <Grid item xs={12} md={5} paddingRight={5}>
            <Typography color={"#1D5D9B"} fontWeight={"bold"} variant="h4">
              با خیال راحت و مطمعن تر انتقال ریالی انجام دهید
            </Typography>
            <Typography color={"#33BBC5"} variant="body2" mt={2}>
              در این صرافی میتوانید به سرعت نور خرید و فروش کنید و در کوتاه ترین
              زمان از سراسر دنیا ارز به ایران بفرستید و در ایران به ریال دریافت
              کنید و یا از ایران ریال به حساب افراد در کشور های دیگر ارسال کنید
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img width={300} src={homeChart} alt="homeChart" />
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          my={5}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={3}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#33BBC5"}
              variant="h5"
              sx={{ margin: "0px 10px" }}
            >
              مزایای صرافی
            </Typography>
            <Link
              style={{
                color: "#F4D160",
              }}
              to={"/benefits"}
            >
              بیشتر بخوانید...
            </Link>
          </Grid>
          <Grid item xs={12} paddingX={5}>
            <Grid container rowGap={2} sx={{ width: "100%" }}>
              {profitsData.map((item) => {
                return (
                  <Grid
                    key={item.title}
                    xs={12}
                    sm={5}
                    md={3.9}
                    lg={3}
                    item
                    sx={{
                      height: "200px",
                      borderRadius: "1rem",
                      border: "1px solid #1D5D9B",
                      background: "#F0F9FF",
                      boxShadow: "0px 0px 0px 0px #F4D160",
                      margin: "0 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        height: "65% !important",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        svg: {
                          fontSize: "55px",
                        },
                      }}
                    >
                      <Box>{item.icon}</Box>
                      <Typography
                        fontWeight={"bold"}
                        color={"#33BBC5"}
                        fontSize={"18px"}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        justifySelf: "end",
                      }}
                      textAlign={"center"}
                      paddingBottom={2}
                      px={1}
                      variant="caption"
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Testimonials />
      </Grid>
    </Grid>
  );
}
