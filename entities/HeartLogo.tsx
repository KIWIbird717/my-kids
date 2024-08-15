import Image from "next/image";
import BgHeart from "../public/bgUnion.svg";
import SmallHeartLogo from "../public/heartsmalllogo.png";

export default function HeartLogo() {
  return (
    <div className="relative mr-[3.95rem]">
      <Image
        src={SmallHeartLogo}
        alt="smallheartlogo"
        className="absolute ml-[5rem] mt-[13.8125rem]"
      />
      <BgHeart />
    </div>
  );
}
