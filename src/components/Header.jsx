import React from "react";
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
    <div className=" flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <img src={logo} className=" w-[80px] object-cover md:w-[115px]" />
        {menu.map((item) => (
          <div>
            <HeaderItem name={item.name} Icon={item.icon} />
          </div>
        ))}
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
