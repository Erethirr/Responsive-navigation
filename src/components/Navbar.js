import { useState } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import Menu from "./Menu";

export default function Navbar(props) {
  let [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <navbar className="w-full flex flex-col items-center">
      <div className="flex flex-row justify-between items-center bg-slate-800 w-11/12 h-20 rounded-lg px-3 mt-5">
        <h3 className="mx-3 text-base sm:text-xl md:text-2xl text-white">
          Responsive navigation test
        </h3>
        <HamburgerMenuBtn
          className="lg:hidden w-6 flex flex-col"
          handleClick={handleClick}
        />
        <Menu className="hidden lg:inline" />
      </div>
      {isShown && (
        <Menu className="w-11/12 h-full bg-slate-800 flex flex-col justify-center items-center rounded-lg py-3" />
      )}
    </navbar>
  );
}
