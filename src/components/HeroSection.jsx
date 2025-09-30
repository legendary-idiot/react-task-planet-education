import HeroImage from "../../public/assets/Hero_Image.png";
import { motion } from "framer-motion";
const _MOTION = motion;

const HeroSection = () => {
  return (
    <motion.div
      className="space-y-8 md:spacey-y-0 md:flex md:justify-between md:gap-4 items-center px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      <div className="flex-1 space-y-4 md:space-y-8">
        <motion.h3
          className="uppercase text-[45px] sm:text-[70px] md:[text-90px] lg:text-[100px] xl:text-[110px] 2xl:text-[150px] leading-tight font-extrabold text-wrap"
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          Welcome to VCAD
        </motion.h3>
        <motion.p
          className="text-lg sm:text-xl font-light"
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
            },
          }}
        >
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </motion.p>
        <motion.button
          className="btn bg-[#8EC8EE] text-[#061665] md:text-lg rounded-none hover:bg-[#8EC8EE]/70 font-bold px-10 py-6 text-base"
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
            },
          }}
        >
          Apply Now
        </motion.button>
      </div>
      <div className="flex-1">
        <motion.img
          src={HeroImage}
          alt="Hero Image"
          className="w-full md:h-[600px] xl:h-auto object-cover"
          variants={{
            hidden: { scale: 0.95, opacity: 0 },
            show: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
