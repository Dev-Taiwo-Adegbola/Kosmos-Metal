import { useNavigate } from "react-router";

const ContactSec = () => {
  const navigate = useNavigate();
  return (
    <section
      className="py-20  bg-[#000000a8] bg-[url('./assets/images/canopy.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay flex flex-col gap-3 md:gap-5 items-center"
      id="contacts"
    >
      <h2 className="text-white text-3xl font-bold text-center">
        Get in touch with Kosmos Metal Steel Construction Works Ltd.
      </h2>
      <p className="text-white text-center">We would love to hear from you!</p>
      <p className="text-white text-center">
        Feel free to reach out to us through any of the channels below.
      </p>
      <p className="text-white text-center">
        Email:{" "}
        <a href="mailto:kosmosmetalconstructionworkltd@gmail.com">
          kosmosmetalconstructionworkltd@gmail.com
        </a>
      </p>
      <p className="text-white text-center">
        Just one call away: <a href="tel:+2348037772798">+234 803 777 2798</a>
      </p>
      <button
        onClick={() => navigate("/contact-us")}
        className="mt-5 px-10 py-3 bg-blue-600 text-white rounded-4xl font-semibold hover:bg-[#BD0C0B] transition"
      >
        Get in Touch
      </button>
    </section>
  );
};
export default ContactSec;
