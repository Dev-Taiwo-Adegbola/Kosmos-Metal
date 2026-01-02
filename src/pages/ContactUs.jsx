import { useState } from "react";
import { SecondaryHeroSection } from "../components/HeroSection";
import { FaceBookIcon, InstaIcon } from "../components/AllIcons";
import { CopyrightSection } from "../components/Footer";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <SecondaryHeroSection
        title="Get in Touch with us Today"
        description="We would love to hear from you. Please reach out with any questions or comments."
      />

      <div className="max-w-6xl lg:min-w-full mx-auto lg:p-20 p-6 ">
        <h2 className="text-3xl font-bold text-center text-[#BD0C0B]">
          Contact Information
          <span className="block w-[60px] h-[4px] bg-[#BD0C0B] mx-auto mt-2"></span>
        </h2>
        <div id="contactUs" className=" flex items-center max-lg:flex-col  ">
          <div className="overflow-hidden flex flex-col justify-between w-[50%] max-lg:w-full bg-[#BD0C0B] max-lg:p-10 lg:px-20 lg:py-10 pl-10 mt-15 lg:min-h-[70vh] h-fit text-white ">
            <div >
              
              <h1 className="text-2xl font-semibold rounded-4xl  mb-10 py-2 px-4 w-fit text-white underline">
                Contact us through any of these
              </h1>
              <h2 className="text-xl font-semibold rounded-4xl py-2 px-4 w-fit bg-white text-[#BD0C0B]">
                Office Address
              </h2>
              <p className="mt-5">
                <span className="font-semibold text-blue-500">
                  Head Office:{" "}
                </span>
                Km.5, Owo/Benin Express Road, Oba-Ile Junction, Akure, Ondo
                State.
              </p>

              <p className="">
                <span className="font-semibold text-blue-500">
                  Branch Office:
                </span>{" "}
                Araromi Airport Road, Oba-Ile, Akure North, Ondo State.
              </p>
              <h2 className="text-xl font-semibold rounded-4xl mt-10 mb-3 py-2 px-4 w-fit bg-white text-[#BD0C0B]">
                Contacts
              </h2>
              <p className="">
                <span className="font-semibold text-blue-500">Phone:</span>{" "}
                <a href="tel:+2348037772798" className="text-white">
                  0803 777 2798
                </a>
              </p>
              <p className="">
                <span className="font-semibold text-blue-500">Whatsapp:</span>{" "}
                <a href="https://wa.me/+2348037772798" className="text-white">
                  0803 777 2798
                </a>
              </p>

              <p className="">
                <span className="font-semibold text-blue-500">Email:</span>{" "}
                <a href="mailto:kosmos@gmail.com" className="text-white">
                  kosmos@gmail.com
                </a>
              </p>

              <h2 className="text-xl font-semibold rounded-4xl mt-10 mb-3 py-2 px-4 w-fit bg-white text-[#BD0C0B]">
                Social handles
              </h2>
              <span className="flex gap-2 mt-4">
                <FaceBookIcon style={'size-[30px] fill-white'} />
                <InstaIcon style={'size-[30px] fill-white'} />
              </span>
            </div>
            {/* <img src={footerImg} alt="" className="" /> */}
          </div>
          <form
            className="  flex flex-col gap-4 lg:min-h-[70vh] max-lg:w-full w-[50%] max-lg:px-5 max-lg:py-10 p-20 pb-0 text-lg"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h2 className="text-2xl text-[#BD0C0B] underline  mb-10">
              {" "}
              Send us a message
            </h2>
            <input
              type="hidden"
              name="access_key"
              value="fd03389d-1188-4ca9-ad4e-"
            ></input>
            <input type="hidden" name="redirect" value="false"></input>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              id="name"
              name="name"
              required
              className=" peer/one border-b-2 border-[#BD0C0B] outline-0  p-2"
            />
            <label
              htmlFor="name"
              className={` transition-all peer-focus:text-[#BD0C0B] peer-focus/one:-top-20  peer-focus/one:text-[#BD0C0B] relative -top-12 left-2 ${
                fullName ? "-top-20 text-[#BD0C0B]" : ""
              }`}
            >
              Your Name
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              required
              className="peer/two border-b-2 border-[#BD0C0B] outline-0  p-2 "
            />
            <label
              htmlFor="email"
              className={` transition-all  peer-focus/two:-top-20 peer-focus/two:text-[#BD0C0B] relative -top-12 left-2 ${
                email ? "-top-20 text-[#BD0C0B]" : ""
              }`}
            >
              Your Email
            </label>

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              name="message"
              required
              className="peer/three resize-none border-b-2 border-[#BD0C0B] outline-0  p-2 min-h-[200px]  "
            ></textarea>
            <label
              htmlFor="message"
              className={`three transition-all peer-focus:text-[#BD0C0B] peer-focus/three:-top-[235px] peer-focus/three:text-[#BD0C0B] relative -top-[210px] left-2 ${
                message ? "-top-[235px] text-[#BD0C0B]" : ""
              }`}
            >
              Your Message
            </label>
            {/* <p className="my-8 text-[#BD0C0B]/80">Kindly fill all fields with valid information, as all information provided will be required by our Team for proper Response</p> */}
            <button type="submit" className="bg-[#BD0C0B] h-18 text-white p-2">
              Send
            </button>
          </form>
        </div>
      </div>
      <CopyrightSection />
    </div>
  );
};
export default ContactUs;
