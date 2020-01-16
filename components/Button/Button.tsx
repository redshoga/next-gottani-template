import * as React from "react";
import styles from "./Button.scss";

export const Button: React.SFC<{}> = props => (
  <button className={styles.example}>{props.children}</button>
);
