import { cn } from "@/lib/utils";
import React from "react";
import styles from "./input-group.module.css";

const InputGroup = ({ className, children }) => {
  return (
    <div className={cn(styles.inputGroup, className ?? "")}>
      {children}
    </div>
  );
};

const Input = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      className={cn(styles.inputControl, className ?? "")}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      ref={ref}
      {...rest}
    />
  );
});

const InputGroupText = ({ className, children }) => {
  return (
    <div className={cn(styles.inputGroupText, className ?? "")}>
      {children}
    </div>
  );
};

InputGroup.Text = InputGroupText;
InputGroup.Input = Input;

export default InputGroup;

