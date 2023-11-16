import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { AddBtn } from "./LeftSideBar";
const ErrorModal = styled.dialog`
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;
const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <ErrorModal ref={dialog}>
      {children}
      <form method="dialog">
        <AddBtn>Close</AddBtn>
      </form>
    </ErrorModal>,
    document.getElementById("modal-root")
  );
});
export default Modal;
