import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/images/Golshenas.jpeg";
import AVTR2 from "../../assets/images/Khani.jpeg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: "حامد گلشناس",
      position: "منابع انسانی در نادین سافت",
      review:
        "شایان یکی از بهترین ها در بین تمام افرادی است که تا به حال با آنها کار کرده ام. او همیشه وقت شناس و دانش او گسترده ، عالی و نتیجه محور است .برای حداکثر رضایت مشتری تلاش می کند. کارهای چالش برانگیز را به او بسپارید، کارهایی که دیگران با آن دست و پنجه نرم می کنند، و او آنها را به انجام خواهد رساند. او فردی قابل اعتماد است و من همیشه برای او احترام زیادی قائل می باشم",
    },
    {
      avatar: AVTR2,
      name: "محمد خانی",
      position: "سرپرست تیم برنامه نویسان سمت کاربر در نادین سافت",
      review:
        "شایان سطح بالایی از مهارت های فنی توسعه وب را نشان داده و نیروی ارزشمندی در پروژه های ما می باشد.او اشتتیاق زیادی را برای پیشرفت شخصی و حرفه خود نشان می دهد.او به سرعت یاد می گیرد و من در آینده هیچ تردیدی برای همکاری با شایان نخواهم داشت",
    },
    // {
    //   avatar: AVTR3,
    //   name: "Tina Snow",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    // },
    // {
    //   avatar: AVTR4,
    //   name: "Tina Snow",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    // },
  ];
  return (
    <section id="testimonials">
      <Typography mt={4} mb={2} textAlign={"center"}>
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
  );
}

export default Testimonials;
