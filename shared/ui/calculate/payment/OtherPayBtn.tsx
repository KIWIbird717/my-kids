import Link from "next/link";
import React from "react";

export const OtherPayBtn = () => {
  return (
    <Link
      href={``}
      className={
        "relative flex w-[18.25rem] items-center justify-center rounded-[1.25rem] border-[2px] border-btn bg-transparent bg-gradient-to-bl py-[0.75rem] text-[1.125rem] font-normal leading-[1.625rem] text-white"
      }
    >
      Другие спосабы оплаты
    </Link>
  );
};
