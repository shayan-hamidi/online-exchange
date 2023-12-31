import { Box, Grid, Typography } from "@mui/material";
import aboutUs1 from "../../assets/images/aboutUs1.svg";

export default function About() {
  return (
    <Grid container mt={5}>
      <Grid item xs={11} md={8} margin={"0 auto"}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          columnGap={1}
          rowGap={9}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              color={"#33BBC5"}
              fontWeight={"800"}
              mb={2}
            >
              در آینده سرمایه‌گذاری کن
            </Typography>
            <Typography>
              دورنمای ارزینو کمک به کاربران برای شروع آسان و در ادامه،
              حرفه‌ای‌تر شدن در معاملات ارز دیجیتال است و برای خلق تجربه‌
              سرمایه‌گذاری نوین، از شروع تا ادامه‌ این مسیر همراهتان هستیم.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={5}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img width={350} src={aboutUs1} alt="aboutUsPNG" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={11}
        md={8}
        margin={"0 auto"}
        mt={12}
        sx={{
          background: "white",
          borderRadius: "16px",
          padding: "24px 24px 40px",
        }}
      >
        <Typography textAlign={"center"} variant="h5" mb={3}>
          ما که هستیم و چه می کنیم؟
        </Typography>
        <Box>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "12px", md: "14px" }}
          >
            ارزینو محصول شرکت «سنا ایمن مبادله» از برجسته‌ترین شرکت‌های حوزه‌
            فناوری اطلاعات و ارتباطات، مدیریت مالی و سرمایه‌گذاری متشکل از
            خبرگان حوزه فناوری و مدیریت مالی است. تیم ارزینو با توجه به نیاز
            بازار و اهمیت ارزهای دیجیتال در آینده‌ی بازارهای مالی، تصمیم به
            ایجاد یک پلتفرم معاملاتی برای خریدوفروش ارزهای دیجیتال گرفت. در حال
            حاضر، ارزینو به‌عنوان یکی از بزرگترین و معتبرترین صرافی‌های ارز
            دیجیتال در ایران شناخته می‌شود که با تکیه بر فناوری بلاکچین، امکان
            خریدوفروش رمزارزهایی مانند بیت‌کوین، اتریوم و آلت‌کوین‌های مختلف را
            فراهم کرده است. ارزینو با در نظر گرفتن الزامات قانونی و حقوقی برای
            سرمایه‌گذاران، سعی در ارائه بهترین خدمات با بالاترین امنیت به
            مشتریان خود را دارد و در این زمینه به منظور تضمین امنیت تراکنش‌های
            مالی و حریم خصوصی کاربران، از استانداردهای امنیتی بالا و روش‌های
            احراز هویت مطمئن، استفاده می‌کند. ‌ تغییر و تحولات همیشگی بازار ارز
            دیجیتال، باعث شده تا ارزینو با بکارگیری فناوری‌های به‌روز و با تلاش
            مداوم برای بهبود عملکرد و حفاظت از دارایی کاربران، خدمات با کیفیتی
            را فراهم کند. از این رو، شما می‌توانید با استفاده از ابزارهای مختلف
            از ساده تا حرفه‌ای در هر زمان و مکان با خیالی آسوده، ارزهای دیجیتال
            را معامله و دارایی‌های خود را مدیریت کنید و به‌راحتی به رمزارزهای
            خود دسترسی داشته باشید.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
