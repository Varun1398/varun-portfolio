"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import DropMenu from "./DropMenu";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const router = useRouter();
  const [drop, setDrop] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between px-6 py-6 cursor-default">
        <Link href="/" className="uppercase test-[1.5rem] z-50 ml-4">
          Varun <span className="text-gray-400">Sharma</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button
            icon={<BsFillArrowRightCircleFill />}
            label="Contact"
            onCLick={() => router.push("/contact")}
          />
          <div className="rounded-full bg-gray-300 p-2 z-[999999]">
            {drop ? (
              <GrFormClose
                className="text-[1.5rem] cursor-pointer"
                onClick={() => setDrop(!drop)}
              />
            ) : (
              <RxHamburgerMenu className="text-[1.5rem] cursor-pointer" onClick={() => setDrop(!drop)}/>
            )}
          </div>
        </div>
      </div>
      {/* drop menu */}
      <AnimatePresence>
      {drop && <DropMenu setDrop={setDrop}/>}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
