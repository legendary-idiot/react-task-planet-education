import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const _MOTION = motion;

const campuses = [
  {
    title: "CANARY WHARF",
    img: "/assets/Canary_Image.png",
  },
  {
    title: "BOROUGH",
    img: "/assets/Borough_Image.png",
    accent: "bg-[#00FFD2]",
  },
  {
    title: "MANCHESTER",
    img: "/assets/Manchester_Image.png",
  },
];

const Sticker = ({ text, className }) => (
  <div
    className={`inline-flex items-center font-extrabold text-base md:text-lg px-4 py-2 rotate-[-14deg] ${className}`}
  >
    {text}
  </div>
);

const Card = ({ campus }) => (
  <motion.div
    className="group relative isolate overflow-hidden bg-white/5 backdrop-blur"
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.img
      src={campus.img}
      alt={campus.title}
      className="w-[245px] h-auto object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
    />
    <motion.a
      href="#"
      className="absolute top-0 inset-0 h-10 flex items-center gap-2 sm:gap-8 py-4 px-3 md:px-4 bg-[#8EC8EE] backdrop-blur-sm hover:bg-[#8EC8EE]/60 hover:scale-[0.99]"
      whileHover={{ y: -1 }}
    >
      <span className="text-[11px] xsm:text-[14px] md:text-base lg:text-lg font-extrabold text-[#061665] tracking-wider">
        {campus.title}
      </span>
      <span className="text-[#061665] text-[12px] sm:text-lg">
        <FaArrowRight />
      </span>
    </motion.a>
  </motion.div>
);

const CampusesSection = () => {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#061665CC]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Floating stickers */}
      <div className="hidden lg:block absolute lg:left-4 xl:left-1/12 top-1/3">
        <Sticker text="CANARY WHARF" className="text-white bg-[#FF379E]" />
      </div>
      <div className="hidden lg:block absolute lg:right-4 xl:right-1/12 top-1/2">
        <Sticker
          text="BOROUGH"
          className="bg-[#00FFD2] text-[#061665] rotate-[16deg]"
        />
      </div>
      <div className="hidden lg:block absolute lg:left-4 xl:left-1/12 bottom-1/5">
        <Sticker
          text="MANCHESTER"
          className="bg-[#8EC8EE] rotate-[14deg] text-[#061665] "
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-32 bg-[#030A2E]" />
      <div className="relative max-w-[1200px] flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Cards grid */}
        <motion.div
          className="w-fit flex gap-3 md:gap-4 relative z-[1]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {campuses.map((c) => (
            <Card key={c.title} campus={c} />
          ))}
        </motion.div>

        {/* Heading and copy */}
        <div className="text-center mt-10 md:mt-12">
          <h2 className="text-white font-extrabold relative text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase">
            <span className="relative">
              <span className="w-[98%] h-[16px] sm:h-[24px] bg-[#8EC8EE] absolute bottom-1/5 left-0 right-0 mx-auto"></span>
              <span className="relative z-10">Campuses</span>
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-base md:text-xl text-white">
            We have multiple locations across the UK, all strategically situated
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CampusesSection;
