import React from "react";
import "../styles/SmallCard.css";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface SmallCardProps {
  images: string[]; // Array gambar untuk Swiper
  title: string;    // Judul rumah/perumahan
  desc: string;     // Deskripsi singkat rumah
  detailPath?: string; // Path ke halaman detail (opsional)
}

const SmallCard: React.FC<SmallCardProps> = ({
  images,
  title,
  desc,
  detailPath = "/detail", // Default jika tidak diisi
}) => {
  const navigate = useNavigate();

  return (
    <div className="small-card-container">
      {/* Swiper untuk gambar */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="small-card-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rumah ${index + 1}`} className="small-card-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Konten Card */}
      <div className="small-card-content">
        <h3 className="small-card-title">{title}</h3>
        <p className="small-card-desc">{desc}</p>

        {/* Tombol View Detail */}
        <div className="small-card-footer">
          <button
            className="small-card-button"
            onClick={() => navigate(detailPath)}
          >
            View Details
          </button>
          <FaShareAlt className="small-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
