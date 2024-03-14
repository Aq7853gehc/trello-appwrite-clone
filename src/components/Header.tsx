"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex  flex-col md:flex-row justify-between items-center bg-gray-500/10 p-5 rounded-b-2xl">
        <div className="absolute left-0 top-0 bg-gradient-to-br from-pink-500 to-indigo-400 h-96 w-full rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src={"/trello.png"}
          alt=""
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1  w-full justify-end">
          {/* Search */}
          <form className="flex items-center space-x-4 bg-white p-2 shadow-md rounded-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-1 outline-none"
            />
            <button hidden>Search</button>
          </form>
          {/* Avtar */}
          <Avatar
            name="Aquib Ahmed"
            color="#0055d1"
            round
            size="50"
            className="p-0 m-0"
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex tex-base items-center p-5 font-light shadow-xl pr-5 text-sm rounded-xl bg-white w-fit italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className="h-10 w-10 text-[#0055d1] " />
          GPT summerising your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
