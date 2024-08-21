import ErrorSvg from "@/public/ErrorRed.svg";
import SmallCross from "@/public/SmallCrossRed.svg";
import { OtherPayMethodsBtn } from "@/shared/ui/calculate/payment-error/OtherPayMethodsBtn";
import { RetryPaymentBtn } from "@/shared/ui/calculate/payment-error/RetryPaymentBtn";

export default function PaymentErrorModal() {
  return (
    <div className="absolute bottom-0 z-[888] h-[400px] w-screen rounded-t-[24px] bg-[#1c1b33] shadow-toggleBtnShadow">
      <div className="absolute mt-[85px] h-[1px] w-full bg-[#252346] shadow-lineShadow" />
      <div className="absolute ml-[40px] mt-[45px] flex items-center justify-center">
        <div className="absolute z-[20]">
          <ErrorSvg />
        </div>
        <div className="absolute z-[21]">
          <SmallCross />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute h-[22px] w-screen rounded-[50%] bg-[#8427FB80] blur-[26px]" />
        <div className="relative mr-[85px] mt-[26px] flex flex-col items-center">
          <span className="text-[24px] font-semibold leading-[32px] tracking-[-0.02em] text-white">
            Оплата не прошла
          </span>
          <div className="mt-[43px] flex flex-col pl-[15px]">
            <span className="text-[26px] font-normal leading-[24px] tracking-[-0.02em] text-[#C8B8FF]">
              Оплата в 9$ не прошла
            </span>
            <p className="mt-[16px] text-[20px] font-medium leading-[24.46px] tracking-[-0.02em] text-[#F0E0FF]">
              Возможно вы выбрали не ту карту, выберите другой вид оплаты.
            </p>
          </div>
        </div>
        <div className="mt-[25px] flex w-screen flex-col items-center justify-center gap-[8px] px-[20px]">
          <OtherPayMethodsBtn />
          <RetryPaymentBtn />
        </div>
      </div>
    </div>
  );
}
