import { Grid, Typography } from "@mui/material";
import homeChart from "../../assets/images/home-chart.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
export default function Home() {
  const profitsData = [
    {
      // icon: GppGoodOutlinedIcon,
      title: "امنیت",
      description: "توضیحات",
    },
    {
      //   icon: QuestionAnswerOutlinedIcon,
      title: "ارتباط مستقیم",
      description: "توضیحات",
    },
    {
      //   icon: TrendingUpOutlinedIcon,
      title: "ارز های متعدد",
      description: "توضیحات",
    },
  ];
  return (
    <Grid container>
      {/* Nav */}
      <Grid
        item
        sx={{
          height: "80px",
          background: "#FAF0D7",
        }}
        xs={12}
      >
        sssd
      </Grid>
      {/* Nav */}
      <Grid item>
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
          alignItems={"center"}
          sx={{ background: "red" }}
        >
          <Grid item xs={12}>
            <Typography>مزایای صرافی بیشتر بخوانید.</Typography>
          </Grid>
          <Grid item>
            <Grid container></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
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
      </Grid>
    </Grid>
  );
}
