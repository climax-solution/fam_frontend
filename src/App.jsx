import woodKey from "./assets/Wood_key.png";
import silverKey from "./assets/Silver_Key.png";
import pounamuKey from "./assets/Pounamu_key_on_basd.png";
import {
  Carousel,
  ExclusiveText,
  Footer,
  HeroMain,
  Navbar,
  Timer,
} from "./components";
import backgroundImage from "./assets/BG1.png";
import mainKey from "./assets/Pounamu_key_on_basd.png";
import stars from "./assets/stars.png";
function App() {
  const products = [
    {
      id: 1,
      name: "WOODEN KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: woodKey,
    },
    {
      id: 1,
      name: "SILVER KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: silverKey,
    },
    {
      id: 1,
      name: "POUNAMU KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: pounamuKey,
    },
  ];

  return (
    <div className="bg-neutral-900 py-9 px-5  relative overflow-hidden">
      <img
        src={backgroundImage}
        className="absolute top-0 left-0 -z-0 scale-175 md:scale-150"
      />
      <div className="z-10 relative">
        <Navbar />
        <div className="flex flex-col items-center justify-self-end">
          <div className="w-full flex flex-row items-center justify-center">
            <Timer />
          </div>
          <div className="flex  flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/5 order-1">
              <HeroMain />
            </div>
            <div className="w-full md:w-2/5 hover-animation order-2">
              <img className="m-auto w-4/12" src={mainKey} />
            </div>
            <div className="w-full md:w-2/5 flex flex-col items-center order-3">
              <img src={stars} className="my-20  md:mb-20" />
              <div className="flex items-center md:mt-20">
                <div className="flex flex-col items-center mr-5">
                  <p className="text-white text-[30px] leading 10">333</p>
                  <p className="text-white text-sm leading-10">
                    Only 333 total
                  </p>
                </div>
                <div className="flex flex-col items-center mr-5">
                  <p className="text-white text-[30px] leading 10">35%</p>
                  <p className="text-white text-sm leading-10">Rare Keys</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-white text-[30px] leading 10">15%</p>
                  <p className="text-white text-sm leading-10">
                    Legendary Keys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExclusiveText />
        <div className="relative">
          <div>
            <Carousel products={products} />
          </div>
          <img
            className="hidden md:block absolute bottom-1/2 left-20"
            src={stars}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
