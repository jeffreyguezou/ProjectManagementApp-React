import styled from "styled-components";
import { useRef, useState } from "react";
import Modal from "./Modal";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10%;
  gap: 25px;
`;
const InputLabels = styled.label`
  color: #1e293b;
  text-transform: uppercase;
  font-weight: 600;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledInput = styled.input`
  background-color: #e2dfdf;
  border-radius: 5px;
  min-height: 30px;
  &:focus-visible {
    border-bottom: 2px solid #494545;
    outline: none;
    box-shadow: none;
  }
`;
const StyledArea = styled.textarea`
  background-color: #e2dfdf;
  border-radius: 5px;
  &:focus-visible {
    border-bottom: 2px solid #494545;
    outline: none;
    box-shadow: none;
  }
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const SaveBtn = styled.button`
  background-color: #1d1717;
  color: white;
  padding: 5px;
  border-radius: 5px;
  width: 75px;
  &:hover {
    background-color: #a1a1aa;
    color: white;
  }
`;
const CancelBtn = styled.button`
  border-radius: 5px;
  width: 75px;
  color: #1d1717;
  &:hover {
    border: 1px solid #94a3b8;
    color: #030712;
  }
`;

const ProjectForm = ({ saveProjectClickHandler, cancelBtnClickHandler }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const modal = useRef();
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const saveProjectHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || desc.trim() === "" || date.trim() === "") {
      modal.current.open();
      return;
    } else {
      let project = {
        id: Math.floor(Math.random() * 100),
        title: title,
        desc: desc,
        date: date,
      };
      saveProjectClickHandler(project);
      setTitle("");
      setDate("");
      setDesc("");
    }
  };
  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
        <p>Looks like an input field is empty</p>
      </Modal>
      <StyledForm>
        <ButtonSection>
          <CancelBtn onClick={cancelBtnClickHandler}>Cancel</CancelBtn>
          <SaveBtn onClick={saveProjectHandler}>Save</SaveBtn>
        </ButtonSection>
        <InputArea>
          <InputLabels>TITLE</InputLabels>
          <StyledInput
            onChange={titleChangeHandler}
            value={title}
            type="text"
          ></StyledInput>
        </InputArea>
        <InputArea>
          <InputLabels>DESCRIPTION</InputLabels>
          <StyledArea onChange={descChangeHandler} value={desc}></StyledArea>
        </InputArea>
        <InputArea>
          <InputLabels>DUE DATE</InputLabels>
          <StyledInput
            onChange={dateChangeHandler}
            value={date}
            type="date"
          ></StyledInput>
        </InputArea>
      </StyledForm>
    </>
  );
};
export default ProjectForm;
