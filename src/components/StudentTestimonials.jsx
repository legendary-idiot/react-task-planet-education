import TestimonialCard from "../utils/TestimonialCard";


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
		<section className="relative overflow-hidden">
			<div className="relative px-4 md:px-6 lg:px-8 pb-12">
				<h2 className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase tracking-wide lg:mb-9">
					Student<br />
					<span className="relative">
						<span className="w-[96%] h-[16px] sm:h-[24px] bg-[#8EC8EE] absolute bottom-1/5 left-0 right-0 mx-auto"></span>
						<span className="relative z-10">TESTIMONIALS</span>
					</span>
				</h2>

				<div className="mt-10 md:mt-20">
					<div className="flex gap-8 md:gap-12 pb-4 ">
						{testimonials.map((t) => (
							<TestimonialCard key={t.id} t={t} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentTestimonials;


