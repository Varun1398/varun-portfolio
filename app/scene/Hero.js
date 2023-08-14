"use client";

import Button from "@/components/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function Hero() {
  const router = useRouter();
  const [moustPosition, setMousePostion] = useState({
    x: 0,
    y: 0,
  });
  const [cusorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePostion({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variant = {
    default: {
      x: moustPosition.x - 16,
      y: moustPosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: moustPosition.x - 75,
      y: moustPosition.y - 75,
      backgroundColor: "rgb(244,244,244)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }}
        viewport={{ once: false, animate: 0.25 }}
        className="flex flex-col item-center justify-center h-[88vh] px-[5%] select-none"
      >
        <div>
          <motion.div
            className="cursor"
            variants={variant}
            animate={cusorVariant}
          />
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="md:text-[6.0rem] text-[3-rem] uppercase leading=[1.2]"
          >
            <span className="text-gray-500">Professional</span>{" "}
            <span className="text-black-500">Front-End Developer</span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full pt-16">
          <div
            className="w-[330px]"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <p>
              PROFESSIONAL FRONT-END DEVELOPER HARNESSING THE POWER OF DESIGN TO
              ACHIEVE ONLINE GOALS
            </p>
          </div>
          <div className="md:w-[500px] w-[370px] flex flex-col gap-6 items-start">
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Experienced ReactJs Frontend Developer passionate about
              technology. Eager to learn and deliver innovative solutions. Fast
              learner, committed to excellence.
            </p>

            <Button
              onCLick={()=>router.push("/contact")}
              label="Connect With Me"
              icon={<BsFillArrowRightCircleFill size={28} />}
              black
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
