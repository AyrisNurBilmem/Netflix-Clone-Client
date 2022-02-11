import React from "react";
import Header from "../../components/header/Header";
import { middlepartData } from "../../data/middlepartData";
import MiddlePart from "../../components/middlepart/MiddlePart";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      {middlepartData &&
        middlepartData.map((data, id) => (
          <MiddlePart
            key={id}
            title={data.title}
            description={data.description}
            img={data.img}
            video={data.video}
            videoClass={data.videoClass}
            reverse={data.reverse}
          />
        ))}

      <Faq />
      <Footer />
    </>
  );
};

export default Landing;
