import React from "react";
import { motion } from "framer-motion";
const _MOTION = motion;
import StudyImage from "/assets/Course_Image.png";

const StudySection = () => {
  return (
    <section className="bg-[#030A2E] py-8 px-6">
      <div className="max-w-[1536px] mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Left Column - Study Image */}
          <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
            <motion.img
              src={StudyImage}
              alt="Study Image"
              className="w-full h-auto object-cover shadow-2xl"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <motion.h2
              className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase tracking-wide lg:mb-9"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              WHAT WILL YOU <br />
              <span className="relative">
                <span className="w-4/5 h-[16px] sm:h-[24px] bg-[#061665] absolute bottom-1/5 left-0 right-0 mx-auto"></span>
                <span className="relative z-10">STUDY?</span>
              </span>
            </motion.h2>

            <motion.p
              className="text-white text-lg lg:text-xl leading-relaxed max-w-2xl"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
                },
              }}
            >
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional industry connections, which will help to prepare you
              for a rewarding career in the creative and tech industries.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="flex-1 btn rounded-none bg-[#8EC8EE] text-[#061665] text-base sm:text-xl font-extrabold px-9 py-4 sm:py-7 hover:bg-[#8EC8EE]/80 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Courses
              </motion.button>
              <motion.button
                className="flex-1 btn border border-[#8EC8EE] bg-transparent rounded-none text-[8EC8EE] text-base sm:text-xl font-extrabold px-9 py-4 sm:py-7 hover:bg-white hover:text-[#030A2E] transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Prospectus
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudySection;
