import AboutUsImage from "../assets/images/hero2.webp";
import { CopyrightSection } from "../components/Footer";
import { SecondaryHeroSection } from "../components/HeroSection"

const AboutUs = () => {
  return (
    <>
    <div>
        <SecondaryHeroSection
          
          title="Learn more about Kosmos"
          description="Learn more about our company and values."
        />

        <h2 className="text-3xl font-bold text-center mt-10 text-[#BD0C0B]">
          About Us
          <span className="block w-[60px] h-[4px] bg-[#BD0C0B] mx-auto mt-2"></span>
        </h2>
        <p className="w-[80%] md:w-[60%] lg:w-[40%] text-center mx-auto pt-10">Kosmos Metal Steel Construction Works Ltd. delivers durable,
            industry-grade steel structures, petroleum tankers, storage tanks,
            and filling station infrastructure across Nigeria.</p>

        <div className="flex flex-col  items-center lg:flex-row p-5 md:p-20 ">
          
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

          
        </div>
      </div>
    </div>
    <CopyrightSection />
    </>
  )
}
export default AboutUs