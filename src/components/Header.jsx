import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleHover = () => setToggle(!toggle);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className=" flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className=" w-[80px] object-cover md:w-[115px]" />
        <div className=" hidden md:flex md:gap-8">
          {menu.map((item) => (
            <div key={""}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>

        <div className=" flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <div key={""}>
                  <HeaderItem name={""} Icon={item.icon} />
                </div>
              )
          )}
          <div className=" md:hidden" onClick={toggleHover}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className=" absolute mt-3 bg-[#121212]
             border-[1px] p-3 border-gray-700 px-5 py 4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem key={""} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://static.wikia.nocookie.net/414489b4-4488-4f3b-8df8-290c0a3788b5"
          className=" w-[40px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
