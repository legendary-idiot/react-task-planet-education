import TestimonialCard from "../utils/TestimonialCard";
import { motion } from "framer-motion";
const _MOTION = motion;

const testimonials = [
  {
    id: 1,
    image: "/assets/testimonials/Person1.jpg",
    quoteLine1: "LOREM IPSUM",
    quoteLine2: "LOREM IPSUM",
    nameMeta: "NAME \\ AGE \\ COURSE",
  },
  {
    id: 2,
    image: "/assets/testimonials/Person2.jpg",
    quoteLine1: "LOREM IPSUM",
    quoteLine2: "LOREM IPSUM",
    nameMeta: "NAME \\ AGE \\ COURSE",
  },
  {
    id: 3,
    image: "/assets/testimonials/Person3.jpg",
    quoteLine1: "LOREM IPSUM",
    quoteLine2: "LOREM IPSUM",
    nameMeta: "NAME \\ AGE \\ COURSE",
  },
  {
    id: 4,
    image: "/assets/testimonials/Person4.jpg",
    quoteLine1: "LOREM IPSUM",
    quoteLine2: "LOREM IPSUM",
    nameMeta: "NAME \\ AGE \\ COURSE",
  },
];

const StudentTestimonials = () => {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
      }}
    >
      <div className="relative px-4 md:px-6 lg:px-8 pb-12">
        <motion.h2
          className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase tracking-wide lg:mb-9"
          variants={{
            hidden: { y: 16, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 140,
                damping: 20,
                mass: 0.9,
              },
            },
          }}
        >
          Student
          <br />
          <span className="relative">
            <span className="w-[96%] h-[16px] sm:h-[24px] bg-[#8EC8EE] absolute bottom-1/5 left-0 right-0 mx-auto"></span>
            <span className="relative z-10">TESTIMONIALS</span>
          </span>
        </motion.h2>

        <div className="mt-10 md:mt-20">
          <motion.div
            className="flex gap-8 md:gap-12 pb-4 "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 140,
                      damping: 22,
                      mass: 0.9,
                    },
                  },
                }}
                whileHover={{ scale: 1 }}
                whileTap={{
                  scale: 0.99,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentTestimonials;
