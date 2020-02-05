import React from "react";
import "./AuthWrapper.scss";
import { SvgRender } from "../common";
import image from "../../assets/icons/image.svg";

const AuthWrapper = ({ child, withIcon }) => {
  return (
    <div className="authentication">
      {child}
      <div className="right-part">
        {withIcon && <SvgRender path={image} style={{ fill: "black" }} />}
      </div>
    </div>
  );
};

export default AuthWrapper;
