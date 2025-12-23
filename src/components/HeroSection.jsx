
const HeroSection = () => {
  return (
    <section className="mt-22 p-5 px-5 md:px-10 h-125 lg:px-20 hero-bg flex max-lg:flex-col items-center justify-center text-center rounded-b-[250px] ">
      <div className=" flex flex-col items-center  lg:w-[60%]">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-lg:text-center text-white">
          <span className="block">
            Metal & Steel Solutions for Fuel Infrastructure
          </span>
          <span className="block mt-6 text-lg font-normal">
            Engineered petrol, kerosene & surface tanks and robust
            filling-station canopies — safety, durability, and precision
            fabrication.
          </span>
        </h2>
        <div className="flex max-md:flex-col gap-2 md:gap-5 my-5 md:my-10">
          <button className="mt-6 px-10 py-3 bg-blue-600 text-white rounded-4xl font-semibold hover:bg-[#BD0C0B] transition">
            Request a Quote
          </button>
          <button className="mt-6 px-10 py-3 bg-blue-600 text-white rounded-4xl font-semibold hover:bg-[#BD0C0B] transition">
            View Our Projects
          </button>
        </div>
      </div>
      {/* <div className=" w-full lg:w-[45%] my-4 h-100 lg:h-96 overflow-hidden rounded-lg">
         <video
          className="w-full h-full object-cover"
          src={Herovideo}
          
          
          muted
        /> 
      </div> */}
    </section>
  );
};
export default HeroSection;
