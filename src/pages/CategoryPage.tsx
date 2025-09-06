import React from 'react'
import SmallCard from '../components/SmallCard'
import rumah1 from "../assets/rumah1.png";
import rumah2 from "../assets/rumah2.png";

const CategoryPage = () => {
  return (
    <div style={{ display: "flex", gap: "45px", flexWrap: "wrap" }}>
      <SmallCard
        images={[rumah1, rumah2]}
        title="Woodville Residence"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />

      <SmallCard
        images={[rumah2, rumah1]}
        title="Wisma Indah"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 80 m² • LB 90 m² • 3 KT • 2 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="The Juanda"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah2, rumah1]}
        title="The Cemandi"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />

        <SmallCard
        images={[rumah1, rumah2]}
        title="Shaistanaya City"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />

        <SmallCard
        images={[rumah2, rumah1]}
        title="Permata Kwangsan R "
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="Permata gunung Anyar"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah2, rumah1]}
        title="Java Residence"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="Grand Sentosa Land "
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah2, rumah1]}
        title="Grand Harvest"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="Grand Alana Regency"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah2, rumah1]}
        title="Emran Residence"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="The Fazza"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah2, rumah1]}
        title="Breeze Icon Jaya Land"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
        <SmallCard
        images={[rumah1, rumah2]}
        title="Boulevard Juanda"
        desc="SIDOARJO KAB., JAWA TIMUR • LT 90 m² • LB 60 m² • 2 KT • 1 KM"
        detailPath="/detail"
      />
      </div>
  )
}

export default CategoryPage