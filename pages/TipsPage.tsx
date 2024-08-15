import Tips from "@/entities/Tips";
import React from "react";

export default function TipsPage() {
  return (
    <div className="relative mt-[81px] flex flex-col">
      <span className="max-w-[20.5rem] text-[1rem] leading-[1.625rem] text-white">
        Планируя беременность и пол вашего малыша, вам нужно на протяжении всей беременности:
      </span>
      <Tips />
    </div>
  );
}
