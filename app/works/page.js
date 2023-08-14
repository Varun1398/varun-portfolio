"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { card } from "../constants/item";
import WorksCard from "./WorksCard";
function page() {
    const router = useRouter()
  return (
    <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
      {card.map((item, index) => {
        return (
          <WorksCard
            key={index}
            image={item.image}
            imageTitle={item.imageTitle}
            name={item.name}
            description={item.description}
            onClick={() => router.push(item.onClick)}
          />
        );
      })}
    </div>
  );
}

export default page;
