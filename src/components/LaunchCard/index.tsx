import "./style.sass";

import React, { FC } from "react";

import classnames from "classnames";

export interface IProps {
  text: string;
  date: string;
  title: string;
  success: boolean;
  detailed: boolean;
}

export const LaunchCard: FC<IProps> = ({
  success,
  title,
  text,
  date,
  detailed,
}) => (
  <div className={"LaunchCard"}>
    <div
      className={classnames(
        "LaunchCard__diode",
        success ? "LaunchCard__diode--success" : "LaunchCard__diode--fail"
      )}
    ></div>
    <div className={"LaunchCard__title"}>{title}</div>
    <div className={"LaunchCard__date"}>{date}</div>
    {detailed && <div className={"LaunchCard__text"}>{text}</div>}
  </div>
);
