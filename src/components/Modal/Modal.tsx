import cn from "classnames";
import { MODAL_CONTAINER_ID } from "const/dom";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export interface ModalProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const modalRoot = document.getElementById(MODAL_CONTAINER_ID)!;

class Modal extends PureComponent<ModalProps> {
  private containerRef = React.createRef<HTMLDivElement>();
  private el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement("div");
  }

  public componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  public render() {
    const { isOpen, children, className } = this.props;
    if (isOpen) {
      return ReactDOM.createPortal(
        <div ref={this.containerRef} className={cn(styles.modal, className)}>
          {children}
        </div>,
        this.el
      );
    }
    return null;
  }
}

export default Modal;
