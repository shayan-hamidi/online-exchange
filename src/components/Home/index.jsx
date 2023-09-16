import { Box, Grid, Typography } from "@mui/material";
import homeChart from "../../assets/images/home-chart.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Testimonials from "../Testimonials";

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
    <Grid container>
      {/* Nav */}
      {/* <Grid
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
            <Link className="nav-link" to={item.route}>
              {item.name}
            </Link>
          );
        })}
      </Grid> */}
      {/* Nav */}
      <Grid item xs={12} sx={{ margin: "0 auto" }}>
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid item>
            <Typography>
              با خیال راحت و مطمعن تر انتقال ریالی انجام دهید
            </Typography>
            <Typography>
              در این صرافی میتوانید به سرعت نور خرید و فروش کنید و در کوتاه ترین
              زمان از سراسر دنیا ارز به ایران بفرستید و در ایران به ریال دریافت
              کنید و یا از ایران ریال به حساب افراد در کشور های دیگر ارسال کنید
            </Typography>
          </Grid>
          <Grid item>
            <img width={350} src={homeChart} alt="homeChart" />
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Typography textAlign={"center"}>
              مزایای صرافی بیشتر بخوانید.
            </Typography>
          </Grid>
          <Grid item xs={12} paddingX={5}>
            <Grid container sx={{ width: "100%" }}>
              {profitsData.map((item) => {
                return (
                  <Grid
                    key={item.title}
                    xs={3}
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
                      <Typography>{item.title}</Typography>
                    </Box>
                    <Typography
                      sx={{
                        justifySelf: "end",
                      }}
                      textAlign={"center"}
                      paddingBottom={2}
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
      {/* <Grid
        item
        sx={{
          height: "80px",
          background: "#FAF0D7",
          position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
        }}
      >
        ssss
      </Grid> */}
    </Grid>
  );
}
