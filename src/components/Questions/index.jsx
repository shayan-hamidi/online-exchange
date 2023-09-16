import { Box, Grid, Typography } from "@mui/material";
import StyledAccordion from "./Accordion";

export default function Questions() {
  const questions = [
    {
      summary: "ارزینو چیست؟",
      details:
        "اگر قصد خرید ارزهای دیجیتال مانند بیت کوین را دارید یا می خواهید دارایی های دیجیتال خود را نقد کنید، ارزینو به شما کمک می کند در سریع‌ترین زمان به این هدف برسید. ارزینو، اولین و معتبرترین بازار ایرانی تبادل ارزهای دیجیتال برای کسانی است که به دنبال یک راهکار امن، مطمئن، سریع، راحت و ارزان برای تبدیل دارایی های خود هستند. در این بازار خریداران و فروشندگان بدون هیچ واسطه‌ای با یکدیگر معامله می‌نمایند. از جمله مهم‌ترین دستاوردهای ارزینو، کاهش ریسک حاصل از بلوکه شدن اموال فعالان ایرانی در بازارهای خارجی، شفافیت بیش‌تر قیمت ارزهای دیجیتال در بازار ایران برای خریداران و فروشندگان محترم، تبدیل سریع و آسان ریال به ارزهای دیجیتال و برعکس و کاهش هزینه‌های خرید و فروش به دلیل حذف واسطه‌هاست.",
      expanded: true,
    },
    {
      summary: "بیت‌کوین چیست؟",
      details:
        "بیت کوین یکی از انواع ارزهای دیجیتال (کوین) است که به منظور انتقال سریع، امن و ارزان پول بدون نیاز به هیچ بانک یا واسطه ای ایجاد شده است. بیت کوین ها در کیف پول های اختصاصی ذخیره شده و به صورت الکترونیکی انتقال پیدا می کنند. پس از معرفی در سال 2009، ارزش بیت کوین به دلیل مقدار محدود و افزایش محبوبیت و تقاضا، به سرعت افزایش یافته است.",
    },
    {
      summary: "در حال حاضر ارزینو چه مقدار کمیسیون معامله دریافت می نماید؟",
      details:
        "در حال حاضر کارمزد یا هزینه معامله در ارزینو به صورت درصدی و براساس پله های مختلف از ۰.۳۵ تا ۰.۲ درصد برحسب حجم معاملات کاربر در سی روز گذشته محاسبه میشود. به دلیل عدم وجود قانون در زمینه تبادل ارزهای دیجیتال در ایران، در حال حاضر هیچ گونه هزینه اضافی اعم از مالیات و ... متوجه کاربران محترم نخواهد بود.",
    },
    {
      summary:
        "چرا می بایست اطلاعات شخصی خود را برای خرید و فروش ارزهای دیجیتال ارائه دهم؟",
      details:
        "ارزینو، همگام با مقررات جهانی و داخلی، ملزم به احراز هویت کاربران محترم جهت ارائه خدمات خرید و فروش ارزهای دیجیتال خواهد بود. تیم ارزینو متعهد می باشد که این اطلاعات را به صورت کاملاً محرمانه و به منظور حفظ امنیت سرمایه ی کاربران محترم، دریافت و محفوظ بدارد.",
    },
    {
      summary: "چه رمزارزهایی می توانم واریز یا برداشت نمایم؟",
      details:
        "در حال حاضر در ارزینو امکان تبدیل ریال به بیت کوین، لایت کوین، اتریوم ،تتر، ریپل، بایننس کوین، استلار، ایاس و بالعکس وجود دارد. همچنین امکان تبدیل رمزارزها به رمزارز تتر و بالعکس نیز در قالب بازار حرفه ای خواهد بود. در آینده نزدیک، رمزارزهای بیشتری به ارزینو اضافه خواهد شد.",
    },
  ];
  return (
    <Grid container mt={5}>
      <Grid item xs={12} md={8} margin={"0 auto"}>
        <Box padding={4}>
          <Typography mb={2} variant="h4" color={"#33BBC5"} fontWeight={"800"}>
            سوالات متداول
          </Typography>
          <StyledAccordion accordionList={questions} />
        </Box>
      </Grid>
    </Grid>
  );
}
