import StoryRow from "../utils/StoryRow";

const stories = [
	{
		id: 1,
		image: "/assets/stories/Story_Image_1.jpg",
		title: "INDUCTION IN VCAD CANARY WHARF CAMPUS",
		desc:
			"If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
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
				<span className='text-[#E018E0]'>BUILD YOUR PORTFOLIO</span>
			</>
		),
		desc:
			"If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
		buttons: [{ label: "Read article", variant: "primary" }],
	},
];



const Stories = () => {

	return (
		<section className="relative overflow-hidden">
			<div className="relative px-4 md:px-6 lg:px-8 py-16 md:py-20 space-y-16">
				<h2 className="text-white font-extrabold text-4xl xsm:text-5xl sm:text-6xl xl:text-7xl uppercase">STORIES</h2>
				<StoryRow story={stories[0]} />
				<StoryRow story={stories[1]} />
			</div>
		</section>
	);
};

export default Stories;


