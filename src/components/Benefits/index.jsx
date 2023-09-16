import { Box, Grid, Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export default function Benefits() {
  const benefitsList = [
    {
      icon: <GppGoodOutlinedIcon />,
      title: "امنیت بالا",
      description:
        "سایت صرافی ارزینو به امنیت بسیاری از اطلاعات و اموال شما توجه ویژه‌ای دارد. ما از استانداردهای برتر امنیتی استفاده می‌کنیم تا اطلاعات حساب کاربری شما و تراکنش‌های مالی شما را حفظ کنیم. با ارزینو، می‌توانید به آسانی و با اطمینان از امنیت داده‌های خود مطمئن شوید.",
    },
    {
      icon: <AccessibilityNewOutlinedIcon />,
      title: "دسترسی آسان و سریع",
      description:
        "سایت ارزینو دسترسی آسان و سریع به تمامی خدمات را فراهم می‌کند. با استفاده از وبسایت ما یا اپلیکیشن موبایل، می‌توانید به سرعت تراکنش‌های خود را انجام دهید و اطلاعات حساب خود را مدیریت کنید",
    },
    {
      icon: <QuestionAnswerOutlinedIcon />,
      title: "پشتیبانی ۲۴ ساعته",
      description:
        "تیم پشتیبانی ارزینو طی ۲۴ ساعت از شما پشتیبانی می‌کند. بدون توجه به زمان و مکان، ما همیشه آماده‌ایم تا به شما در موارد فنی یا انجام تراکنش‌های مالی کمک کنیم.",
    },
    {
      icon: <TrendingUpOutlinedIcon />,
      title: "تنوع ارزها",
      description:
        "ارزینو افتخار دارد که به شما دسترسی به یک تنوع وسیع از ارزهای دیجیتال را فراهم می‌کند. از بیتکوین و اتریوم تا ارزهای دیجیتال جدیدتر، ما انواع مختلف ارزها را در اختیار شما قرار می‌دهیم تا بتوانید به تنوعی بیشتر در سبد سرمایه‌گذاری‌تان دست پیدا کنید.",
    },
    {
      icon: <StarsOutlinedIcon />,
      title: "سیستم سفارش‌گذاری حرفه‌ای",
      description:
        "سیستم سفارش‌گذاری ارزینو با دقت و حرفه‌ای طراحی شده است تا به شما امکان دسترسی سریع به تراکنش‌های مختلف را بدهد. این سیستم به شما این امکان را می‌دهد که به سرعت و با آسانی ارزهای مختلف را خریداری یا فروش کنید.",
    },
    {
      icon: <SchoolOutlinedIcon />,
      title: "آکادمی ارزینو",
      description:
        "ما با آکادمی ارزینو یک پلتفرم آموزشی جامع راه اندازی کرده‌ایم که کاربران ما می‌توانند از منابع و دوره‌های آموزشی متنوع و تخصصی در زمینه‌های مختلف ارزهای دیجیتال بهره‌برند. اینجا می‌توانید اطلاعات و مهارت‌های لازم برای موفقیت در دنیای ارزهای دیجیتال را به دست آورید.",
    },
    {
      icon: <AppRegistrationOutlinedIcon />,
      title: "معاملات مستقیم با ارزهای محلی",
      description:
        "در ارزینو، ما این امکان را فراهم کرده‌ایم که معاملات مستقیم با ارزهای محلی انجام دهید. این به شما این امکان را می‌دهد که به راحتی ارزهای دیجیتال را با پول محلی خود تبدیل کنید و از نرخ ارز روز استفاده کنید.",
    },
    {
      icon: <InsertChartOutlinedRoundedIcon />,
      title: "اختیارات تحلیلی پیشرفته",
      description:
        "ما ابزارها و گزینه‌های تحلیلی پیشرفته‌ای را برای کاربران تازه‌کار و حرفه‌ای فراهم کرده‌ایم. این اختیارات شما را قادر می‌سازند تا با تحلیل نمودارها و شاخص‌های مالی مرتبط با ارزهای دیجیتال، تصمیم‌گیری بهتری در مورد سرمایه‌گذاری‌ها و تراکنش‌های خود داشته باشید.",
    },
    {
      icon: <AttachMoneyOutlinedIcon />,
      title: "کارمزد مناسب",
      description:
        "در ارزینو، ما به ارائه کارمزد‌های مناسب و شفاف برای تراکنش‌های ارزی افتخار می‌آوریم. شما می‌توانید با اطمینان از اینکه هزینه‌های پنهانی به شما تحمیل نمی‌شود و همچنین تعرفه‌های واضحی را برای خدمات ما خواهید داشت. این امر به شما کمک می‌کند تا هزینه‌های مرتبط با تراکنش‌های خود را مدیریت کنید.",
    },
  ];
  return (
    <Grid mt={6} container>
      <Grid item xs={10} margin={"0 auto"}>
        <Grid container>
          <Grid item xs={12} mb={3}>
            <Typography>مزایای ارزینو</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                columnGap: 4,
                rowGap: 2,
              }}
            >
              {benefitsList.map((item, i) => {
                return (
                  <>
                    <Grid
                      key={item.title}
                      item
                      sx={{
                        border: "2px solid #1D5D9B",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        svg: {
                          color: "#1D5D9B",
                        },
                        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                          <Box textAlign={"center"}>{item.icon}</Box>
                        </Grid>
                        <Grid item xs={12} mb={2}>
                          <Typography
                            textAlign={"center"}
                            color={"#1D5D9B"}
                            fontWeight={"bold"}
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            textAlign={"center"}
                            fontSize={"12px"}
                            color={"#33BBC5"}
                          >
                            {item.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
