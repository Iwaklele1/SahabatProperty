// src/pages/HomePage.tsx
import React from "react";
import LargeCard from "../components/LargeCard";
import HeroSection from "../components/HeroSection";

// Import gambar rumah
import rumah1 from "../assets/rumah1.png";
import rumah2 from "../assets/rumah2.png";

const HomePage: React.FC = () => {
  // Data dinamis untuk LargeCard
  const largeCards = [
    {
      title: "JAVA RESIDENCE SUKODONO",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan yang tidak hanya terjangkau namun juga berada di kawasan strategis. Java Residence telah memiliki portfolio progres pembangunan yang tersebar luas di daerah Sidoarjo.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
        "7 menit ke polsek waru",
      ],
      images: [rumah1, rumah2],
    },
    {
      title: "SUKODONO PARK RESIDENCE",
      description:
        "Sukodono Park Residence menawarkan konsep hunian modern dengan lokasi strategis dekat pusat kota dan fasilitas umum.",
      address:
        "Jl. Raya Sukodono, Kecamatan Sukodono, Kabupaten Sidoarjo, Jawa Timur 61257",
      advantages: [
        "5 menit ke pusat kota",
        "7 menit ke sekolah internasional",
        "10 menit ke rumah sakit",
        "Dekat tol Juanda",
      ],
      images: [rumah2, rumah1],
    },
  ];

  return (
    <div>
      <HeroSection />
      {largeCards.map((card, index) => (
        <LargeCard
          key={index}
          title={card.title}
          description={card.description}
          address={card.address}
          advantages={card.advantages}
          images={card.images}
        />
      ))}
    </div>
  );
};

export default HomePage;
