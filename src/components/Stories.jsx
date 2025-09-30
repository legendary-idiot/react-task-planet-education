import StoryRow from "../utils/StoryRow";
import { motion } from "framer-motion";
const _MOTION = motion;

const stories = [
  {
    id: 1,
    image: "/assets/stories/Story_Image_1.jpg",
    title: "INDUCTION IN VCAD CANARY WHARF CAMPUS",
    desc: "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    buttons: [
      { label: "Read article", variant: "primary" },
      { label: "View full gallery", variant: "ghost" },
    ],
  },
  {
    id: 2,
    image: "/assets/stories/Story_Image_2.jpg",
    title: (
      <>
        BE READY FOR APPLYING! FIVE TIPS TO{" "}
        <span className="text-[#E018E0]">BUILD YOUR PORTFOLIO</span>
      </>
    ),
    desc: "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    buttons: [{ label: "Read article", variant: "primary" }],
  },
];

const Stories = () => {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.3, delayChildren: 0.25 } },
      }}
    >
      <div className="relative px-4 md:px-6 lg:px-8 py-16 md:py-20 space-y-16">
        <motion.h2
          className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase"
          variants={{
            hidden: { y: 18, opacity: 0, scale: 0.98 },
            show: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 90,
                damping: 28,
                mass: 1.05,
                delay: 0.08,
              },
            },
          }}
        >
          STORIES
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.3, delayChildren: 0.18 } },
          }}
          className="space-y-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.96 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 30,
                  mass: 1.05,
                },
              },
            }}
          >
            <StoryRow story={stories[0]} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.96 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 30,
                  mass: 1.05,
                },
              },
            }}
          >
            <StoryRow story={stories[1]} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stories;
