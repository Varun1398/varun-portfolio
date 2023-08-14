"use client";
import React from "react";
import Links from "./Links";
import { NavLink } from "@/app/constants/item";

function DropMenu({ setDrop }) {
  return (
    <div className='fixed bg-white top-5 right-5 left-5 rounded-3xl shadow-2xl shadow-slate-500 z-50' onClick={() => setDrop(false)}>
      <nav className='flex flex-col'>
        <ul className='min-h-[40vh] rounded-3xl lg:min-h-[30rem] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]'>
           {
            NavLink.map((item)=>{
              return  <Links 
              name={item.name}
              path={item.path}
              last={item.last}
              />
            })
           }
        </ul>
      </nav>
    </div>
  );
}

export default DropMenu;
