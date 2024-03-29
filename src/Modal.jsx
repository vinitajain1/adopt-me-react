import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const modalRoot = document.getElementById("modal");
  return createPortal(<div>{children}</div>, modalRoot);
}
