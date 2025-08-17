import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import type { ITrendingItem, TrendingNowProps } from "../../types";

const TrendingNow: React.FC<TrendingNowProps> = ({
  data,
  setSetSelectedMoves,
}) => {
  const onSelectImage = (movie: ITrendingItem) => {
    setSetSelectedMoves(movie);
  };

  return (
    <div style={{ 
      width: "90vw", 
      position: "relative", 
      zIndex: 3,
      paddingBottom: "20px"
    }}>
      <h2 style={{ 
        color: "white", 
        marginBottom: "16px", 
        fontSize: "24px", 
        fontWeight: "600" 
      }}>
        Trending Now
      </h2>
      <Swiper
        slidesPerView={8}
        spaceBetween={8}
        pagination={false}
        allowTouchMove={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 5.5,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
          1080: {
            slidesPerView: 6.3,
            spaceBetween: 10,
          },
          1180: {
            slidesPerView: 6.3,
            spaceBetween: 12,
          },
          1280: {
            slidesPerView: 7.5,
            spaceBetween: 12,
          },
          1440: {
            slidesPerView: 8.5,
            spaceBetween: 12,
          },
        }}
      >
        {data?.map((movie, i) => (
          <SwiperSlide
            key={i}
            style={{
              marginLeft: "8px",
            }}
          >
            <img
              width={150}
              src={movie?.CoverImage}
              onClick={() => onSelectImage(movie)}
              style={{ cursor: "pointer" }}
              alt={movie?.Title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingNow;
