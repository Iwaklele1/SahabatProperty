import React from 'react'
import SmallCard from '../components/SmallCard'
import rumah1 from "../assets/rumah1.png";
import rumah2 from "../assets/rumah2.png";

const CategoryPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <SmallCard
        images={[rumah1, rumah2]}
        title="Perum Jaya Regency Sedati"
        location="Sidoarjo"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />

      <SmallCard
        images={[rumah2, rumah1]}
        title="Perum Sedati Indah"
        location="Sidoarjo"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 80 m² • LB 90 m² • 3 KT • 2 KM"
        detailPath="/detail"
      /></div>
  )
}

export default CategoryPage