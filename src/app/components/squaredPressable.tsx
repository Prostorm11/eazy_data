import React from "react";
import "./squaredPressable.css";

type SquaredPressableProps = {
  icon: React.ReactNode;
  info: string;
  icon_color?: string;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  pressed?: boolean;
  border?: string;
};

const SquaredPressable: React.FC<SquaredPressableProps> = ({ icon, info, icon_color, background, onClick, pressed, border }) => {
  return (
    <div
      onClick={onClick}
      className="icon-text"
      style={{ background: background, cursor: "pointer", border: border }} 
    >
      <div style={{ color: icon_color }}>
        {icon}
      </div>
      <p>{info}</p>
    </div>
  );
};

export default SquaredPressable;
