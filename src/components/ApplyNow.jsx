import React from "react";
import CourseVideoThumbnail from "/assets/Course_Video_Thumbnail.png";
import { motion } from "framer-motion";
const _MOTION = motion;

const ApplyNow = () => {
  return (
    <section className="bg-[#030A2E] px-6">
      <motion.div
        className="flex flex-col lg:flex-row gap-2 items-start xl:items-center h-[700px] sm:h-[800px] lg:h-[490px] xl:h-[530px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Left Column - Inspirational Text */}
        <div className="max-w-md mx-auto">
          {/* Large Quotation Marks */}
          <motion.p
            className="text-white max-w-[320px] text-8xl lg:text-9xl leading-0 font-bold opacity-90"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            “
          </motion.p>
          <motion.h2
            className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-14 pl-12"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
              },
            }}
          >
            A World where{" "}
            <span className="text-[#8EC8EE] uppercase">EVERYONE</span> has the{" "}
            <span className="text-[#8EC8EE]">opportunity</span> to fulfil their
            potential
          </motion.h2>
          <motion.p
            className="text-white max-w-[300px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[315px] text-right text-8xl lg:text-9xl font-bold opacity-90"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              },
            }}
          >
            ”
          </motion.p>
        </div>

        {/* Right Column - Video and CTA */}
        <div className="relative">
          <motion.img
            src={CourseVideoThumbnail}
            alt="Digital Marketing Course Video"
            className="w-full h-auto shadow-2xl pr-8"
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          <motion.div
            className="bg-[#061665] py-10 px-8 flex flex-col xl:flex-row gap-4 xl:gap-12 items-start xl:items-center absolute top-[85%] left-1/3 z-30"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="flex-1 text-[#8EC8EE] font-bold text-lg sm:text-3xl">
              There's Still Time to Apply for September 2025
            </h3>
            <motion.button
              className="btn rounded-none bg-[#8EC8EE] text-[#061665] text-base sm:text-xl font-extrabold py-6 px-6 md:px-9 hover:bg-[#8EC8EE]/80 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Courses
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ApplyNow;
