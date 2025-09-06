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
      title: "Woodville Residence",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
      title: "Wisma Indah",
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
    {
       title: "The Juanda",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "The Cemandi",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "Shaistanaya City",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "Permata Kwangsan R",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "Permata gunung Anyar",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "Java Residence",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "Grand Sentosa Land",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "Grand Harvest",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "Grand Alana Regency",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "Emran Residence",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "The Fazza",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah2, rumah1],
    },
    {
       title: "Breeze Icon Jaya Land",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
      ],
      images: [rumah1, rumah2],
    },
    {
       title: "Boulevard Juanda",
      description:
        "Java Residence diciptakan dengan tujuan untuk memberikan solusi hunian terbaik bagi masyarakat dengan menghadirkan perumahan.",
      address:
        "Jl. Embong Kali, Babadan, Junwangi, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
      advantages: [
        "7 menit ke ke rs mitra keluarga",
        "6 menit ke unimas district",
        "6 menit ke mcdonald’s waru",
        "10 menit ke pasar sukodono",
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
