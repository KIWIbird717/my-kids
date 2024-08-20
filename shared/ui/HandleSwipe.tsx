import { FC, ReactNode, useState } from "react";
import { cn } from "../lib/utils/cn";

type HandleSwipeUpProps = {
  className?: string;
  children?: ReactNode;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
};
export const HandleSwipe: FC<HandleSwipeUpProps> = (props) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe) {
      props.onSwipeUp && props.onSwipeUp();
    }

    if (isDownSwipe) {
      props.onSwipeDown && props.onSwipeDown();
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={cn(props.className, "w-full")}
    >
      {props.children}
    </div>
  );
};
