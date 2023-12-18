import React from "react";
import * as styles from "./Content-tw-styles";
const Content = ({ title, data, variant = "defaultStyle" }) => {
  const style = styles[variant] || styles["defaultStyle"];
  return (
    <div className={style.content}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.data}>{`${variant}############${data}`}</p>
    </div>
  );
};

export default Content;
