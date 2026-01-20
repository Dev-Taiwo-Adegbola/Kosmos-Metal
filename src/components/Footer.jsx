import { Link, useNavigate } from "react-router";
import KosmosLogo from "./Logo";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contact-us", { state: { sender: email } });
  };
  return (
    <>
      <footer className="flex flex-wrap gap-15 py-15 px-5 md:px-10 lg:px-20  items-start bg-gray-100">
        <div className="flex flex-col-reverse gap-8 w-full md:w-[45%] lg:w-[30%]">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <span className="block text-lg font-bold text-gray-800">
              Contact Information
            </span>
            <li>
              <span className="text-[#BD0C0B] ">Head Office: </span>
              Km.5, Owo/Benin Express Road, Oba-Ile Junction, Akure, Ondo State.
            </li>
            <li>
              <span className="text-[#BD0C0B] ">Branch Office: </span>
              Araromi Airport Road, Oba-Ile, Akure North, Ondo State.
            </li>
            <li>
              <span className="text-[#BD0C0B] ">Phone: </span>
              <a href="tel:+2348037772798" className="text-gray-700">
                +234 803 777 2798
              </a>
            </li>
            <li>
              <span className="text-[#BD0C0B] ">Email: </span>
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <KosmosLogo />
            <p className="">
              Kosmos Metal Steel Construction Works Ltd. delivers durable,
              industry-grade steel structures.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 ">
          <h3 className="text-lg font-semibold text-gray-800">Quick links</h3>
          <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact-us">Contacts</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-800">Follow us</h3>
            <ul className="flex gap-4">
              <li>
                <a href="#facebook" className="text-gray-700">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-gray-700">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#linkedin" className="text-gray-700">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-lg font-semibold text-gray-800">
            Send us a message
          </h3>
          <p className="text-sm text-gray-700">
            We would love to hear from you!
          </p>
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-[#BD0C0B] transition"
            >
              Message us
            </button>
          </div>
        </div>
      </footer>
      <CopyrightSection />
    </>
  );
};
export default Footer;

export const CopyrightSection = () => {
  return (
    <div className="bg-[#BD0C0B] py-5">
      <div className="container mx-auto text-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Kosmos. All rights reserved.
        </p>
      </div>
    </div>
  );
};
