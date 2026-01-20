import { useState } from "react";
import { MenuIcon, XIcons } from "./AllIcons";

import KosmosLogo from "./Logo";
import { Link, useNavigate } from "react-router";

const PageHeader = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-5 px-5 md:px-10 lg:px-20 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <KosmosLogo />

      <nav
        className={`transition-all fixed inset-0  max-lg:bg-[#BD0C0B] max-lg:text-white lg:text-[#BD0C0B]  ${
          menuToggle ? "  translate-x-0" : " -translate-x-[120%]"
        } lg:static lg:translate-0 p-25 lg:p-0`}
      >
        <button
          onClick={() => setMenuToggle(!menuToggle)}
          className="lg:hidden absolute right-10  top-5"
        >
          <XIcons style={"w-[35px] fill-white"} />
        </button>
        <ul className="flex max-lg:flex-col max-lg:gap-y-15 items-center gap-10 text-sm font-semibold max-lg:text-lg">
          <li className=" relative group">
            <Link onClick={() => setMenuToggle(!menuToggle)} to="/">
              Home
            </Link>
            <span className="block w-[0%] h-[2px] bg-[#BD0C0B] mx-auto mt-1 group-hover:w-[50%] transition-all"></span>
          </li>
          <li className=" relative group">
            <Link onClick={() => setMenuToggle(!menuToggle)} to="/about-us">
              About Us
            </Link>
            <span className="block w-[0%] h-[2px] bg-[#BD0C0B] mx-auto mt-1 group-hover:w-[50%] transition-all"></span>
          </li>
          <li className=" relative group">
            <Link onClick={() => setMenuToggle(!menuToggle)} to="/services">
              Services
            </Link>
            <span className="block w-[0%] h-[2px] bg-[#BD0C0B] mx-auto mt-1 group-hover:w-[50%] transition-all"></span>
          </li>
          <li className=" relative group">
            <Link onClick={() => setMenuToggle(!menuToggle)} to="/portfolio">
              Portfolio
            </Link>
            <span className="block w-[0%] h-[2px] bg-[#BD0C0B] mx-auto mt-1 group-hover:w-[50%] transition-all"></span>
          </li>
          {/* <li className=" relative group">
            <Link  to="/contact-us">
              Contacts
            </Link>
            <span className="block w-[0%] h-[2px] bg-[#BD0C0B] mx-auto mt-1 group-hover:w-[50%] transition-all"></span>
          </li> */}

          <button
            onClick={() => {
              setMenuToggle(!menuToggle);
              navigate("/contact-us");
            }}
            className="lg:hidden px-10 py-3 bg-blue-600 text-white rounded-4xl font-semibold hover:bg-[#BD0C0B] transition"
          >
            Contact us
          </button>
        </ul>
      </nav>
      <button
        onClick={() => {
          setMenuToggle(!menuToggle);
          navigate("/contact-us");
        }}
        className="hidden lg:block px-10 py-3 bg-blue-600 text-white rounded-4xl font-semibold hover:bg-[#BD0C0B] transition"
      >
        Contact us
      </button>
      <button onClick={() => setMenuToggle(!menuToggle)} className="lg:hidden">
        <MenuIcon style={"w-[40px] fill-"} />
      </button>
    </header>
  );
};
export default PageHeader;
