import { Users, Verified } from "./AllIcons";
import reputationImg from "../assets/images/reputation.webp";
import AboutUsImage from "../assets/images/hero2.webp";

const AboutUs = () => {
  return (
    <section className="pt-10 p-5 px-5 md:px-10 lg:px-20 flex flex-col gap-8 items-center">
      <h2 className="text-3xl font-bold text-center text-[#BD0C0B]">
        Our Reputation
      <span className="block w-[60px] h-[4px] bg-[#BD0C0B] mx-auto mt-2"></span>
      </h2>

      <div className="flex max-lg:flex-col items-center justify-between   gap-15 p-10  ">
        <div className=" size-full lg:size-[500px] ">
          <img src={reputationImg} alt="" className="rounded-2xl  size-full " />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="text-gray-600 w-[300px]  p-5 rounded-xl ">
            <Users style="size-[50px] fill-[#BD0C0B] mb-2 bg-[#bd0b0b27] rounded-lg p-2.5 animate-pulse" />
            <span className="font-bold block text-[#BD0C0B]">Best Teams</span>
            <span className="block text-[#1a1a1a]">
              Our team of Experts, and engineers are dedicated to building
              Durable, reliable products that stand the test of time.
            </span>
          </div>

          <div className="text-gray-600 w-[300px]  p-5 rounded-xl ">
            <Users style="size-[50px] fill-[#BD0C0B] mb-2 bg-[#bd0b0b27] rounded-lg p-2.5 animate-pulse " />
            <span className="font-bold block text-[#BD0C0B]">
              Best Services
            </span>
            <span className="block text-[#1a1a1a]">
              We pride ourselves on delivering exceptional customer service and
              support to our clients. What you want is what we deliver.
            </span>
          </div>

          <div className="text-gray-600 w-[300px]  p-5 rounded-xl ">
            <Verified style="size-[50px] fill-[#BD0C0B] mb-2 bg-[#bd0b0b27] rounded-lg p-2.5 animate-pulse stroke-[#BD0C0B] stroke-20" />
            <span className="font-bold block text-[#BD0C0B]">
              Best Product Quality
            </span>
            <span className="block text-[#1a1a1a]">
              We ensure the highest quality standards in our products and
              services, so you can trust us to deliver the best.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center lg:flex-row ">
        <img
          src={AboutUsImage}
          alt=""
          className="w-full min-h-[250px] lg:min-w-[70%]"
        />
        <div className=" w-[80%]  lg:min-w-[40%] bg-blue-600 text-white py-5 px-8 md:py-10 md:px-15 max-lg:-translate-y-[40%] lg:-translate-x-[40%] ">
          <span className="font-bold block text-2xl">About Kosmos</span>
          <p className=" ">
            Kosmos Metal Steel Construction Works Ltd. delivers durable,
            industry-grade steel structures, petroleum tankers, storage tanks,
            and filling station infrastructure across Nigeria.
          </p>

          <p className="mt-7 hidden md:block">
            We do Fabrication and delivery of kerosene and petrol tankers for
            fuel distributors, logistics companies, and industrial operators
            across Nigeria.
          </p>

          <button className="mt-7 bg-[#BD0C0B] text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
