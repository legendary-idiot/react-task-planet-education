import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

const TestimonialCard = ({ t }) => (
	<div className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] aspect-[3/4] rotate-[13deg] border-2 border-[#E018E0] overflow-hidden hover:rotate-0 hover:scale-[85%] hover:cursor-pointer">
		<img src={t.image} alt={t.nameMeta} className="absolute inset-0 h-full w-full object-cover" />
		<div className="absolute inset-0 bg-[#061665CC]" />
		<div className="absolute inset-0 p-6 sm:p-7 md:p-8 flex flex-col justify-center">
			<p className="text-white font-extrabold text-xl sm:text-2xl leading-tight tracking-wide">
				“ {t.quoteLine1}
			</p>
			<p className="text-white font-extrabold text-xl sm:text-2xl leading-tight tracking-wide">
				{t.quoteLine2} ”
			</p>
			<p className="mt-5 text-white/85 text-xs sm:text-sm tracking-wide">
				{t.nameMeta}
			</p>
			<div className="mt-2 flex items-center gap-3 text-white text-lg">
				<FiFacebook />
				<FiInstagram />
				<FiLinkedin />
			</div>
		</div>
	</div>
);

export default TestimonialCard;