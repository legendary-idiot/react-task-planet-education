import React from "react";

const partners = [
	{
		name: "Ravensbourne University London",
		logo: "/assets/Ravensbourne_Logo.png",
	},
	{
		name: "Arts University Plymouth",
		logo: "/assets/Plymouth_Logo.png",
	},
];

const PartnerInstitutions = () => {
	return (
		<section className="relative overflow-hidden bg-[#030A2E]">
			<div className="relative  px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col gap-8 md:flex-row justify-between items-center">
				<div>
					<h2 className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase tracking-wide lg:mb-9">
						Partner<br />
						<span className="relative">
							<span className="w-[96%] h-[16px] sm:h-[24px] bg-[#FF379E] absolute bottom-1/5 left-0 right-0 mx-auto"></span>
							<span className="relative z-10">Institutions</span>
						</span>
					</h2>
					<p className="mt-6 text-white text-base lg:text-lg max-w-xl">
						Ravensbourne University London and Arts University Plymouth are renowned for their innovation in digital media, design, and the arts. Through these strategic collaborations, we provide our students with access to cutting-edge resources, expert faculty, and industry-driven learning environments that prepare them for successful careers in the creative sector.
					</p>
				</div>
				<div className="flex flex-col gap-10">
					{partners.map((p) => (

						<img
							src={p.logo}
							alt={p.name}
							className="h-24 sm:h-28 w-auto object-contain drop-shadow"
						/>

					))}
				</div>
			</div>
		</section>
	);
};

export default PartnerInstitutions;


