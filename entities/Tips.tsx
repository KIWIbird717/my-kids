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
    // TODO: Поменять на top, left для чего absolute ?\
    //
    <div className="absolute top-[7.5rem]">
      <div className="absolute left-[12rem] top-[1.625rem]">
        <DietTip />
      </div>
      <div className="absolute left-[6.125rem] top-[2.625rem] min-[425px]:left-[7rem]">
        <SmokeTip />
      </div>
      <div className="absolute left-[1.3125rem] top-[6.8125rem]">
        <AidTip />
      </div>
      <div className="absolute left-[0.625rem] top-[13.375rem]">
        <ToothTip />
      </div>
      <div className="absolute left-[0.5625rem] top-[20.25rem]">
        <ConTip />
      </div>
      <div className="absolute left-[16.8125rem] top-[4.4375rem] min-[385px]:left-[17.5rem] min-[410px]:left-[18rem] min-[425px]:left-[19rem]">
        <WeightTip />
      </div>
      <div className="absolute left-[18.25rem] top-[10.325rem] min-[385px]:left-[19.5rem] min-[410px]:left-[20.5rem] min-[410px]:top-[11rem] min-[425px]:left-[21.5rem]">
        <AlchTip />
      </div>
      <div className="absolute left-[18rem] top-[17.44rem] min-[385px]:left-[19.5rem] min-[410px]:left-[20.5rem] min-[410px]:top-[18.5rem] min-[425px]:left-[21.5rem]">
        <InfecTip />
      </div>
    </div>
  );
}
