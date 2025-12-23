import kosmosLogo from "../assets/images/kosmosLogo.webp";

const KosmosLogo = () => {
  return (
    <div className="flex gap-5 items-center w-32.5">
      <img src={kosmosLogo} alt="Kosmos Logo" className="size-12" />
      <h1 className="font-semibold text-[21px]">Kosmos</h1>
    </div>
  );
};
export default KosmosLogo;
