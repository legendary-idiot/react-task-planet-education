import React from "react";
import Menu from "../utils/Menu";
import StudySection from "../components/StudySection";
import ApplyNow from "../components/ApplyNow";
import CampusesSection from "../components/CampusesSection";
import PartnerInstitutions from "../components/PartnerInstitutions";
import StudentTestimonials from "../components/StudentTestimonials";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <div>
      <Menu />
      <section className="space-y-16">
        <StudySection />
        <ApplyNow />
        <CampusesSection />
        <PartnerInstitutions />
        <StudentTestimonials />
        <Stories />
      </section>
    </div>
  );
};

export default Home;
