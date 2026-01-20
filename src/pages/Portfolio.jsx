import { SecondaryHeroSection } from "../components/HeroSection";
import first from "../assets/images/gallery/first.jpg";
import second from "../assets/images/gallery/second.jpg";
import third from "../assets/images/gallery/third.jpg";
import forth from "../assets/images/gallery/forth.jpg";
import fifth from "../assets/images/gallery/fifth.jpg";
import sixth from "../assets/images/gallery/sixth.jpg";
import seventh from "../assets/images/gallery/seventh.jpg";
import eigth from "../assets/images/gallery/eigth.jpg";
import nineth from "../assets/images/gallery/nineth.jpg";
import tenth from "../assets/images/gallery/tenth.jpg";
import eleventh from "../assets/images/gallery/eleventh.jpg";
import twelveth from "../assets/images/gallery/twelveth.jpg";
import thirteen from "../assets/images/gallery/thirteen.jpg";
import forteen from "../assets/images/gallery/forteen.jpg";
import fifteen from "../assets/images/gallery/fifteen.jpg";
import sixteen from "../assets/images/gallery/sixteen.jpg";
import seventeen from "../assets/images/gallery/seventeen.jpg";
import eighteen from "../assets/images/gallery/eighteen.jpg";
import nineteen from "../assets/images/gallery/nineteen.jpg";
import twenty from "../assets/images/gallery/twenty.jpg";
import twentyOne from "../assets/images/gallery/twentyOne.jpg";

const Portfolio = () => {
  return (
    <>
      <SecondaryHeroSection
        title="Our Portfolio"
        description="Explore our diverse range of projects and solutions."
      />

      <div className="grid grid-cols-1 gap-4 p-5 md:p-11 auto md:grid-cols-2 lg:grid-cols-3 ">
        <Img src={first} />
        <Img src={second} />
        <Img src={third} />
        <Img src={forth} />
        <Img src={fifth} />
        <Img src={sixth} />
        <Img src={seventh} />
        <Img src={eigth} />
        <Img src={nineth} />
        <Img src={tenth} />
        <Img src={eleventh} />
        <Img src={twelveth} />
        <Img src={thirteen} />
        <Img src={forteen} />
        <Img src={fifteen} />
        <Img src={sixteen} />
        <Img src={seventeen} />
        <Img src={eighteen} />
        <Img src={nineteen} />
        <Img src={twenty} />
        <Img src={twentyOne} />
      </div>
    </>
  );
};

const Img = ({ src }) => {
  return <img src={src} alt="" className="rounded-2xl h-[300px] w-full" />;
};
export default Portfolio;
