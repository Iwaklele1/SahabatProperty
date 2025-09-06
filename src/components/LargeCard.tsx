// src/components/LargeCard.tsx
import React from "react";
import "../styles/LargeCard.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface LargeCardProps {
  title: string;
  description: string;
  address: string;
  advantages: string[];
  images: string[];
}

const LargeCard: React.FC<LargeCardProps> = ({
  title,
  description,
  address,
  advantages,
  images,
}) => {
  const navigate = useNavigate();

  return (
    <div className="large-card-container">
      {/* Bagian Kiri - Konten */}
      <div className="large-card-content">
        <h2 className="large-card-title">{title}</h2>
        <p className="large-card-desc">{description}</p>

        <p className="large-card-address">
          <strong>Alamat :</strong> {address}
        </p>

        <p className="large-card-subtitle">Keunggulan :</p>
        <ul className="large-card-list">
          {advantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button className="large-card-button" onClick={() => navigate("/detail")}>
          Show Details
        </button>
      </div>

      {/* Bagian Kanan - Gambar Swiper */}
      <div className="large-card-swiper">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="swiper-wrapper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Rumah ${index + 1}`} className="large-card-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LargeCard;
