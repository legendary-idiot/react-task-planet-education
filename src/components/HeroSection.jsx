import HeroImage from "../../public/assets/Hero_Image.png";

const HeroSection = () => {
  return (
    <div className="space-y-8 md:spacey-y-0 md:flex md:justify-between md:gap-4 items-center px-6">
      <div className="flex-1 space-y-4 md:space-y-8">
        <h3 className="uppercase text-[45px] sm:text-[70px] md:[text-90px] lg:text-[100px] xl:text-[110px] 2xl:text-[150px] leading-tight font-extrabold text-wrap">
          Welcome to VCAD
        </h3>
        <p className="text-lg sm:text-xl font-light">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <button className="btn bg-[#8EC8EE] text-[#061665] hover:bg-[#8EC8EE]/70 font-bold px-8 py-4 text-base">
          Apply Now
        </button>
      </div>
      <div className="flex-1">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="w-full md:h-[600px] xl:h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
