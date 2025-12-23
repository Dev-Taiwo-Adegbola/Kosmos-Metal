import KerosineTanker  from "../assets/images/PetrolTanker.webp";

import SurfaceTank from "../assets/images/surfacetank.jpeg";

import petrolTankerImg from "../assets/images/tanker1-1.webp";

import fillingStationCanopy from "../assets/images/canopy.jpeg";

import CustomMetal from "../assets/images/custom.JPG";


const OurServices = () => {
  return (
    <section className="pt-10 p-5 px-5 md:px-10 lg:px-20 flex flex-col gap-8 items-center">
          <h2 className="text-3xl font-bold text-center text-[#BD0C0B]">
            Our Services
            <span className="block w-[60px] h-[4px] bg-[#BD0C0B] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-5 rounded-lg shadow relative">
              <img src={KerosineTanker} alt="" className="h-[300px] w-full object-cover" />
              <h3 className="mt-3 text-xl font-bold text-[#BD0C0B]">Kerosene Tanker Fabrication</h3>
              <p className="text-white absolute bg-amber-800 flex flex-col justify-center  text-center p-10 inset-0 opacity-0 hover:opacity-100 transition">
                <span className="text-xl font-bold ">Kerosene Tanker Fabrication</span>
                We design and fabricate high-capacity kerosene tankers engineered for safe transportation and long-term durability. Our tankers are built using quality steel materials and tested to withstand Nigerian road and operating conditions.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow relative">
              <img src={petrolTankerImg} alt="" className="h-[300px] w-full object-cover" />
              <h3 className="mt-3  text-xl font-bold text-[#BD0C0B]">Petrol Tanker Fabrication</h3>
              <p className="text-white absolute bg-amber-800 flex flex-col justify-center  text-center p-10 inset-0 opacity-0 hover:opacity-100 transition">
                <span className="text-xl font-bold ">Petrol Tanker Fabrication</span>
                Our petrol tankers are constructed with safety and regulatory compliance in mind. From welding to finishing, every unit is fabricated to support secure fuel transportation for distributors and logistics operators.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow relative">
              <img src={SurfaceTank} alt="" className="h-[300px] w-full object-cover" />
              <h3 className="mt-3  text-xl font-bold text-[#BD0C0B]">Surface Storage Tanks</h3>
              <p className="text-white absolute bg-amber-800 flex flex-col justify-center  text-center p-10 inset-0 opacity-0 hover:opacity-100 transition">
                <span className="text-xl font-bold ">Surface Storage Tanks</span>
                We fabricate surface-mounted steel storage tanks suitable for petroleum products and industrial liquids. Our tanks are designed for strength, leak prevention, and operational efficiency.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow relative">
              <img src={fillingStationCanopy} alt="" className="h-[300px] w-full object-cover" />
              <h3 className="mt-3  text-xl font-bold text-[#BD0C0B]">Filling Station Canopy Construction</h3>
              <p className="text-white absolute bg-amber-800 flex flex-col justify-center  text-center p-10 inset-0 opacity-0 hover:opacity-100 transition">
                <span className="text-xl font-bold ">Filling Station Canopy Construction</span> 
                Kosmos Metal Steel Construction Works Ltd. provides steel canopy fabrication and installation for filling stations, delivering strong, weather-resistant structures that enhance station safety and aesthetics.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow relative">
              <img src={CustomMetal} alt="" className="h-[300px] w-full object-cover" />
              <h3 className="mt-3  text-xl font-bold text-[#BD0C0B]">Custom Steel Fabrication</h3>
              <p className="text-white absolute bg-amber-800 flex flex-col justify-center  text-center p-10 inset-0 opacity-0 hover:opacity-100 transition">
                <span className="text-xl font-bold ">Custom Steel Fabrication</span>  
                We also handle custom steel fabrication projects based on client specifications, delivering tailored solutions for industrial and commercial applications.
              </p>
            </div>
          </div>
        </section>
  )
}
export default OurServices