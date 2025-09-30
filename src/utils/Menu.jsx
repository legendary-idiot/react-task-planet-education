import React from "react";
import { motion } from "framer-motion";
const _MOTION = motion;

const Menu = () => {
  return (
    <motion.nav
      className="flex justify-center my-16 px-6"
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 26, mass: 1 }}
    >
      <motion.ul
        className="menu menu-horizontal border border-[#E018E0] uppercase text-base"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        /* Removed continuous float to prevent perceived stutter */
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 6, x: 6 },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          whileHover={{
            scale: 1.002,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.998,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
        >
          <a className="text-white">Courses</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 6, x: 6 },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          whileHover={{
            scale: 1.002,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.998,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
        >
          <a className="text-white">Campuses</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 6, x: 6 },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          whileHover={{
            scale: 1.002,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.998,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
        >
          <a className="text-white">Partner Institutions</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 6, x: 6 },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          whileHover={{
            scale: 1.002,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.998,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
        >
          <a className="text-white">Student Testimonials</a>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 6, x: 6 },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          whileHover={{
            scale: 1.002,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.998,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
        >
          <a className="text-white">Stories</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Menu;
