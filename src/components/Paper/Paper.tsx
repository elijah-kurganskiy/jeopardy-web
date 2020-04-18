import cn from "classnames";
import React from "react";
import styles from "./Paper.module.css";
import { Props } from "./Paper.types";

export default class Paper extends React.PureComponent<Props> {
  public render() {
    const { className, children } = this.props;
    return (
      <div className={cn(styles.paper, styles.paper_color_primary, className)}>
        {children}
      </div>
    );
  }
}
