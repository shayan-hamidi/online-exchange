import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/images/Golshenas.jpeg";
import AVTR2 from "../../assets/images/Khani.jpeg";
import AVTR3 from "../../assets/images/Alikhani.jpg";
import AVTR4 from "../../assets/images/Aslani.jpg";
import AVTR5 from "../../assets/images/Ghasemi.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Grid, Typography } from "@mui/material";
function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: "حامد گلشناس",
      review:
        "یکی از بهترین ویژگی‌های این سایت صرافی، رابط کاربری ساده و قابل فهم آن است. حتی اگر کسی تازه‌کار باشد، به راحتی می‌تواند تراکنش‌ها را انجام دهد و از خدمات آن بهره‌برد.",
    },
    {
      avatar: AVTR2,
      name: "محمد خانی",
      review:
        "تجربه من با این سایت صرافی بسیار مثبت بوده است. واسه من که امنیت مالی اولویت دارد، استفاده از این سرویس به عنوان یک جایگزین امن و قابل اعتماد برای صرافی‌های سنتی بسیار مهم است.",
    },
    {
      avatar: AVTR3,
      name: "علی اصلانی",
      review:
        "سایت صرافی آنلاین عالی‌ای است! واسه من که تازه وارد دنیای ارزهای دیجیتال شدم، امکان خرید و فروش آسان و مطمئنی ارائه می‌دهد. واقعاً از پشتیبانی مشتریان عالی و سرعت تأیید تراکنش‌ها تعجب‌زده‌ام.",
    },
    {
      avatar: AVTR5,
      name: "زهرا قاسمی",
      review:
        "من در سایت صرافی اینجا حساب می‌کنم و همیشه راضی بوده‌ام. تأیید تراکنش‌ها در عرض چند دقیقه انجام می‌شود و امکان انتقال سریع وجه به حساب بانکی من فوق‌العاده است.",
    },
    {
      avatar: AVTR4,
      name: "عرفان علیخانی",
      review:
        "من به عنوان یک معامله‌گر فعال از این سایت صرافی استفاده می‌کنم و از تنوع ارزهای دیجیتالی که ارائه می‌دهند بسیار خرسند هستم. همچنین، حجم معاملات بالا و انتخاب‌های متعدد در بازارهای مختلف را دوست دارم.",
    },
  ];
  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      <Grid item xs={11}>
        <section id="testimonials">
          <Typography
            mt={4}
            mb={2}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"#33BBC5"}
            variant="h5"
          >
            نظرات کاربران
          </Typography>
          <Swiper
            className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {data.map(({ avatar, name, review, position }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <Box className="client__avatar">
                    <img width={65} src={avatar} alt={name} />
                  </Box>
                  <h5 className="client__name">{name}</h5>
                  {position ? <h6>{position}</h6> : null}
                  <small className="client__review">{review}</small>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </Grid>
    </Grid>
  );
}

export default Testimonials;
