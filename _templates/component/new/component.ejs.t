---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from "react";
import cn from "classnames";
import styles from "./<%= name %>.module.css"

interface Props {
  className?: string;
}

const <%= name %> = ({ className }:Props) => {
  return <div className={cn(className)}></div>
};

export default React.memo(<%= name %>)
