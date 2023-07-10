import ButtonWithOutline from "./ButtonWithOutline";

export default function HeroMain() {
  return (
    <div className="px-4 sm:px-6">
      <div>
        <h1 className="mt-4 text-center md:text-left text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          It's time to unlock the{" "}
          <span className="text-[#26E2FF]">FAMVERSE</span>
        </h1>
        <p className="mt-3 text-base text-center md:text-left text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
          ad ad non deserunt sunt.
        </p>
        <div className="flex flex-row justify-center md:justify-start">
          <ButtonWithOutline text={"MINT FAM PASS"} />
        </div>
      </div>
    </div>
  );
}
