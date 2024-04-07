import React from "react";
import './Companies.css'
import { DiProlog } from "react-icons/di";
import { GiGuardedTower } from "react-icons/gi";
import { SiEquinixmetal } from "react-icons/si";
import { GiDigitalTrace } from "react-icons/gi";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <DiProlog cursor={'pointer'} color="blueviolet" size={'104'}/>
        <GiGuardedTower cursor={'pointer'} color="blueviolet" size={'104'}/>
        <SiEquinixmetal cursor={'pointer'} color="blueviolet" size={'112'}/>
        <GiDigitalTrace cursor={'pointer'} color="blueviolet" size={'104'}/>
      </div>
    </section>
  );
};

export default Companies;
