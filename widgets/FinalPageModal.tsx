"use client";

import { cn } from "@/shared/lib/utils/cn";
import { HandleSwipe } from "@/shared/ui/HandleSwipe";
import React, { FC, useState } from "react";
import { Sheet } from "react-modal-sheet";

export const FinalPageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <HandleSwipe onSwipeUp={() => setIsOpen(true)} className="h-[60px]" />

      <Sheet isOpen={isOpen} snapPoints={[0.64, 0]} onClose={() => setIsOpen(false)}>
        <Sheet.Container className="!rounded-t-[44px] !bg-transparent bg-modalSheetBg pl-[32px] pr-[25px] backdrop-blur-[50px]">
          <Sheet.Content>
            <div className="relative mt-[7px] flex w-[319px] flex-col items-center">
              <div className="h-[22px] w-[286px] rounded-[50%] bg-[#8427FB80] blur-[26px]"></div>
              <span className="h-[29px] w-[319px] text-start text-[16px] font-bold leading-[19.2px] text-white">
                Что и как делать?
              </span>
            </div>
            <Sheet.Scroller draggableAt="both">
              <div className="mt-[38px] flex flex-col items-center justify-center gap-[21px]">
                <div className="flex flex-row">
                  <div className="flex w-[69px] flex-col">
                    <h3 className="text-[14px] font-normal leading-[16.41px] text-white">Шаг 1</h3>
                    <div className="h-[1px] w-full border-[1px] border-dashed border-[#CFCFE6]" />
                  </div>
                  <div className="flex w-[252px] flex-col items-center text-white">
                    <h2 className="font-medium leading-[16.8px]">Как подготовить себя к родам</h2>
                    <p className="mt-[8px] w-[222px] text-[10px] font-normal leading-[14px]">
                      Лорем ипсум долор сит амет, доценди инимицус еффициенди цум ут. Ех миним
                      сцаевола нам, но ратионибус цонцлудатуряуе сеа. Велит цонсецтетуер дуо ин,
                      чоро рецусабо елояуентиам усу ат, ребум тимеам омиттантур мел ин. Ид хис
                      цонсул елецтрам глориатур, ест ад улламцорпер инструцтиор. Поссим волутпат
                      тхеопхрастус еа сеа, те дисцере лаборес перципитур хис.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex w-[69px] flex-col">
                    <h3 className="text-[14px] font-normal leading-[16.41px] text-white">Шаг 2</h3>
                    <div className="h-[1px] w-full border-[1px] border-dashed border-[#CFCFE6]" />
                  </div>
                  <div className="flex w-[252px] flex-col items-center text-white">
                    <h2 className="w-[222px] text-start font-medium leading-[16.8px]">
                      Отслеживание результатов
                    </h2>
                    <p className="mt-[8px] w-[222px] text-[10px] font-normal leading-[14px]">
                      Лорем ипсум долор сит амет, доценди инимицус еффициенди цум ут. Ех миним
                      сцаевола нам, но ратионибус цонцлудатуряуе сеа. Велит цонсецтетуер дуо ин,
                      чоро рецусабо елояуентиам усу ат, ребум тимеам омиттантур мел ин. Ид хис
                      цонсул елецтрам глориатур, ест ад улламцорпер инструцтиор. Поссим волутпат
                      тхеопхрастус еа сеа, те дисцере лаборес перципитур хис.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex w-[69px] flex-col">
                    <h3 className="text-[14px] font-normal leading-[16.41px] text-white">Шаг 3</h3>
                    <div className="h-[1px] w-full border-[1px] border-dashed border-[#CFCFE6]" />
                  </div>
                  <div className="flex w-[252px] flex-col items-center text-white">
                    <h2 className="w-[222px] font-medium leading-[16.8px]">Первое сердцебиение</h2>
                    <p className="mt-[8px] w-[222px] text-[10px] font-normal leading-[14px]">
                      Лорем ипсум долор сит амет, доценди инимицус еффициенди цум ут. Ех миним
                      сцаевола нам, но ратионибус цонцлудатуряуе сеа. Велит цонсецтетуер дуо ин,
                      чоро рецусабо елояуентиам усу ат, ребум тимеам омиттантур мел ин. Ид хис
                      цонсул елецтрам глориатур, ест ад улламцорпер инструцтиор. Поссим волутпат
                      тхеопхрастус еа сеа, те дисцере лаборес перципитур хис.
                    </p>
                  </div>
                </div>
              </div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
};
