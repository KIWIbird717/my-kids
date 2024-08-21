import { cn } from "@/shared/lib/utils/cn";

export const OtherPayMethodsBtn = () => {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      Выбрать другой вид оплаты
    </button>
  );
};
