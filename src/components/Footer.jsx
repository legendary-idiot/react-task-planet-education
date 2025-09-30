
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="text-white mx-auto max-w-[1536px] px-4 md:px-6 lg:px-8 py-6">
			<div className="flex flex-col md:flex-row items-center justify-between gap-6">
				<img src="/assets/Nav_Logo.png" alt="Victoria College" className="h-12 w-auto object-contain" />
				<div className="border border-[#8EC7EE] text-[#8EC7EE] px-4 sm:px-8 py-2">
					<ul className="flex flex-wrap items-center gap-5 text-sm sm:text-lg">
						<li><a href="#" className="hover:underline">Policies</a></li>
						<li><a href="#" className="hover:underline">Contact us</a></li>
						<li><a href="#" className="hover:underline">Meet the Team</a></li>
						<li><a href="#" className="hover:text-white"><FiFacebook /></a></li>
						<li><a href="#" className="hover:text-white"><FiInstagram /></a></li>
						<li><a href="#" className="hover:text-white"><FiLinkedin /></a></li>
					</ul>
				</div>
			</div>
			<p className="text-[12px] md:text-sm text-center md:text-left font-light text-white/80 mt-4">
				© 2025 Victoria College of Arts and Design, All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;


