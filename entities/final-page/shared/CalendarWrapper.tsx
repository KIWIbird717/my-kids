"use client";

import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Calendar } from "./Calendar";

type CalendarWrapperProps = {
  isShown: boolean;
};

export const CalendarWrapper: FC<CalendarWrapperProps> = (props) => {
  const [isCalendarShown, setIsCalendarShown] = useState(props.isShown);

  useEffect(() => {
    setIsCalendarShown(props.isShown);
  }, [props.isShown]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isCalendarShown ? 1 : 0, y: isCalendarShown ? 0 : 50 }}
      className="w-full"
    >
      <h3 className="ml-[30px] h-[29px] text-[16px] font-bold leading-[26px] text-white">
        Благоприятные дни зачатия
      </h3>

      <Calendar />
    </motion.div>
  );
};
