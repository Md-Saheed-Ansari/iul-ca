import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner";
import DepartmentOverview from "../../components/DepartmentOverview";
import DepartmentInfo from "../../components/DepartmentInfo";
import HeroTemplate from "./HeroTemplate"

const Overview = () => {

  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
  
       useEffect(() => {
          setTimeout(() => {
            setStats({ programs: 3, teachers: 56, research: 43 });
          }, 1000);
        }, []);

  return (
    <>
      <PageBanner breadcrumb="Home / About / Overview" />
      <HeroTemplate stats={stats}/>
      <DepartmentOverview/>
      <DepartmentInfo/>
    </>
  );
}

export default Overview;