import CtaButton from "./CtaButton";

const StoryRow = ({ story }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
    <div>
      <img
        src={story.image}
        alt="story"
        className="w-full h-auto min-h-[380px] max-h-[450px] object-cover border-2 border-white"
      />
    </div>
    <div className="text-white">
      <h3 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
        {story.title}
      </h3>
      <p className="mt-4 text-white text-base max-w-xl">{story.desc}</p>
      <div className="mt-5 flex flex-col md:flex-row gap-4">
        {story.buttons.map((b) => (
          <CtaButton key={b.label} variant={b.variant}>
            {b.label}
          </CtaButton>
        ))}
      </div>
    </div>
  </div>
);

export default StoryRow;
