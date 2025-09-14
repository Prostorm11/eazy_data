import "./pressable.css";

import { ReactNode, MouseEventHandler } from "react";

type PressableProps = {
  onPress?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  padd?: string | number;
  width?: string | number;
  selector?: boolean;
  pressed?: boolean;
  background?: string;
  height?: string | number;
  radius?: string | number;
};

const Pressable = ({
  onPress,
  children,
  padd,
  width,
  selector,
  pressed,
  background,
  height,
  radius,
}: PressableProps) => {
  return (
    <div
      onClick={onPress}
      className={`${selector ? "press1" : "press2"} ${
        (!pressed && !!selector) ? "colorchange1" : ""
      } ${(!pressed && !selector) ? "colorchange2" : ""}`}
      style={{
        padding: padd,
        width: width,
        backgroundColor: background,
        height: height,
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
};

export default Pressable;
