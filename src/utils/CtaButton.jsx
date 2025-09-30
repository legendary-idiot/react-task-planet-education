const CtaButton = ({ children, variant = "primary" }) => {
	const base =
		"inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-colors cursor-pointer";
	const variants = {
		primary: "bg-[#8EC8EE] text-[#061665] hover:bg-[#8EC8EE]/80",
		ghost: "bg-transparent text-white border border-[#8EC8EE] hover:bg-white/10",
	};
	return <button className={`${base} ${variants[variant]}`}>{children}</button>;
};


export default CtaButton;