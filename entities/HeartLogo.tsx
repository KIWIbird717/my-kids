import Image from "next/image";
import BgHeart from "../public/bgUnion.svg";
import SmallHeartLogo from "../public/heartsmalllogo.png";

export default function HeartLogo() {
  return (
    <div className="absolute left-0">
      <Image
        src={SmallHeartLogo}
        alt="smallheartlogo"
        className="absolute left-[5rem] top-[13.8125rem]"
      />
      <BgHeart />
    </div>
  );
}
