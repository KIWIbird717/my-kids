import Image from "next/image";
import pregPhoto from "../public/preg1.png";
import React from "react";

export default function PregPhotoCircle() {
  return (
    <div className="absolute ml-[1.5rem] mt-[166px] h-[240px] w-[240px] rounded-[50%] bg-btn opacity-50 shadow-smallCircle">
      <Image src={pregPhoto} alt="preg" className="mix-blend-luminosity" />
    </div>
  );
}
