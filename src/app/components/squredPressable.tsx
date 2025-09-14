import React from "react";
import "./squaredPressable.css";

const SquaredPressable = ({ icon, info, icon_color, background, onClick,pressed,border }: { icon: React.ReactNode; info: string; icon_color: string; background: string | null; onClick: () => void; pressed: boolean; border: string | null; }) => {
  return (
    <div
      onClick={onClick}
      className="icon-text"
      style={{ background: background ?? undefined, cursor: "pointer", border: border ?? undefined }} 
    >
      <div style={{ color: icon_color }}>
        {icon}
      </div>
      <p>{info}</p>
    </div>
  );
};

export default SquaredPressable;
