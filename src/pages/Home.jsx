import React from "react";
import Menu from "../utils/menu";
import StudySection from "../components/StudySection";
import ApplyNow from "../components/ApplyNow";

const Home = () => {
  return (
    <div>
      <Menu />
      <section className="space-y-16">
        <StudySection />
        <ApplyNow />
      </section>
    </div>
  );
};

export default Home;
