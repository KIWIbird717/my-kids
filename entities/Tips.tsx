import AidTip from "@/shared/ui/tips/AidTip";
import AlchTip from "@/shared/ui/tips/AlchTip";
import ConTip from "@/shared/ui/tips/ConTip";
import DietTip from "@/shared/ui/tips/DietTip";
import InfecTip from "@/shared/ui/tips/InfecTip";
import SmokeTip from "@/shared/ui/tips/SmokeTip";
import ToothTip from "@/shared/ui/tips/ToothTip";
import WeightTip from "@/shared/ui/tips/WeightTip";

export default function Tips() {
  return (
    // TODO: Поменять на top, left для чего absolute ?
    <div className="relative mt-[1.8125rem]">
      <div className="absolute left-[12rem] top-[1.625rem]">
        <DietTip />
      </div>
      <div className="absolute ml-[6.125rem] mt-[2.625rem]">
        <SmokeTip />
      </div>
      <div className="absolute ml-[1.3125rem] mt-[6.8125rem]">
        <AidTip />
      </div>
      <div className="absolute ml-[0.625rem] mt-[13.375rem]">
        <ToothTip />
      </div>
      <div className="absolute ml-[0.5625rem] mt-[20.25rem]">
        <ConTip />
      </div>
      <div className="absolute ml-[16.8125rem] mt-[4.4375rem]">
        <WeightTip />
      </div>
      <div className="absolute ml-[18.25rem] mt-[10.325rem]">
        <AlchTip />
      </div>
      <div className="absolute ml-[17.5rem] mt-[17.44rem]">
        <InfecTip />
      </div>
    </div>
  );
}
