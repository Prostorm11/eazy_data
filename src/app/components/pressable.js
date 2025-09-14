import "./pressable.css";

import { ReactNode, MouseEventHandler } from "react";



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
}) => {
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
