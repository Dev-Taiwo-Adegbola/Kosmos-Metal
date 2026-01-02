import { CopyrightSection } from "../components/Footer";
import { SecondaryHeroSection } from "../components/HeroSection";
import KerosineTanker from "../assets/images/PetrolTanker.webp";

import SurfaceTank from "../assets/images/surfacetank.jpeg";

import petrolTankerImg from "../assets/images/tanker1-1.webp";

import fillingStationCanopy from "../assets/images/canopy.jpeg";

import CustomMetal from "../assets/images/custom.JPG";

const OurServices = () => {
  return (
    <>
      <div className="">
        <SecondaryHeroSection
          title="Whtat We Do at Kosmos"
          description="Discover the range of services we offer to meet your needs."
        />

        <h2 className="text-3xl font-bold text-center mt-10 text-[#BD0C0B]">
          Our Services
          <span className="block w-[60px] h-[4px] bg-[#BD0C0B] mx-auto mt-2"></span>
        </h2>

        <div className="lg:p-20 flex flex-col gap-15 max-lg:items-center my-20">
          <div className="flex gap-15 items-center max-lg:flex-col bg-[#BD0C0B]/20 rounded-3xl max-md:w-[80%]  md:w-[60%] lg:min-w-full">
            <img
              src={petrolTankerImg}
              alt=""
              className=" h-[300px]  md:h-[400px] object-cover lg:w-[40%] lg:rounded-l-3xl max-lg:rounded-t-3xl w-full"
            />
            <div className="lg:w-[40%] p-5 md:p-10">
              <h3 className="text-2xl font-bold text-left  text-[#BD0C0B]">
                Petrol Tanker Fabrication
              </h3>
              <p>
                Our petrol tankers are constructed with safety and regulatory
                compliance in mind. From welding to finishing, every unit is
                fabricated to support secure fuel transportation for
                distributors and logistics operators.
              </p>
            </div>
          </div>

          <div className="flex gap-15 items-center max-lg:flex-col bg-[#BD0C0B]/20 rounded-3xl max-md:w-[80%]  md:w-[60%] lg:min-w-full flex-row-reverse">
            <img
              src={KerosineTanker}
              alt=""
              className="h-[300px]  md:h-[400px] object-cover lg:w-[40%] lg:rounded-r-3xl max-lg:rounded-t-3xl w-full"
            />
            <div className="lg:w-[40%] p-5 md:p-10">
              <h3 className="text-2xl font-bold text-left  text-[#BD0C0B]">
                Kerosene Tanker Fabrication
              </h3>
              <p className="">
                We design and fabricate high-capacity kerosene tankers
                engineered for safe transportation and long-term durability. Our
                tankers are built using quality steel materials and tested to
                withstand Nigerian road and operating conditions..
              </p>
            </div>
          </div>

          <div className="flex gap-15 items-center max-lg:flex-col bg-[#BD0C0B]/20 rounded-3xl max-md:w-[80%]  md:w-[60%] lg:min-w-full">
            <img
              src={SurfaceTank}
              alt=""
              className="h-[300px]  md:h-[400px] object-cover lg:w-[40%] lg:rounded-l-3xl max-lg:rounded-t-3xl w-full"
            />
            <div className="lg:w-[40%] p-5 md:p-10">
              <h3 className="text-2xl font-bold text-left  text-[#BD0C0B]">
                Surface Storage Tanks
              </h3>
              <p className="">
                We fabricate surface-mounted steel storage tanks suitable for
                petroleum products and industrial liquids. Our tanks are
                designed for strength, leak prevention, and operational
                efficiency.
              </p>
            </div>
          </div>

          <div className="flex gap-15 items-center max-lg:flex-col bg-[#BD0C0B]/20 rounded-3xl max-md:w-[80%]  md:w-[60%] lg:min-w-full flex-row-reverse ">
            <img
              src={fillingStationCanopy}
              alt=""
              className="h-[300px]  md:h-[400px] object-cover lg:w-[40%] lg:rounded-r-3xl max-lg:rounded-t-3xl w-full"
            />
            <div className="lg:w-[40%] p-5 md:p-10">
              <h3 className="text-2xl font-bold text-left  text-[#BD0C0B]">
                Filling Station Canopy Construction
              </h3>
              <p className="">
                Kosmos Metal Steel Construction Works Ltd. provides steel canopy
                fabrication and installation for filling stations, delivering
                strong, weather-resistant structures that enhance station safety
                and aesthetics.
              </p>
            </div>
          </div>

          <div className="flex gap-15 items-center max-lg:flex-col bg-[#BD0C0B]/20 rounded-3xl max-md:w-[80%]  md:w-[60%] lg:min-w-full flex-row-reverse ">
            <img
              src={CustomMetal}
              alt=""
              className="h-[300px]  md:h-[400px] object-cover lg:w-[40%] lg:rounded-r-3xl max-lg:rounded-t-3xl w-full"
            />
            <div className="lg:w-[40%] p-5 md:p-10">
              <h3 className="text-2xl font-bold text-left  text-[#BD0C0B]">
                Custom Steel Fabrication
              </h3>
              <p className="">
                We also handle custom steel fabrication projects based on client
                specifications, delivering tailored solutions for industrial and
                commercial applications..
              </p>
            </div>
          </div>
        </div>
      </div>
      <CopyrightSection />
    </>
  );
};
export default OurServices;
