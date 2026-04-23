import styled from "styled-components";

export const DateInput = styled.input`
  width: 200px;
  height: 18px;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 10px 45px 10px 10px;
  background: #d7d7d7;
  border: none;
  font-weight: 400;
  font-size: 12px;
  color: #7e7e7e;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateBtn = styled.button`
  border-radius: 0 20px 20px 0;
  fill: #000;
  width: 35px;
  height: 35px;
  background-color: #000;
  border: none;
  position: relative;
  right: 39px;
  top: 2px;
  margin-left: 7px;
  cursor: pointer;
`;

export const DateText = styled.p`
  font-weight: 400;
  font-size: 12px;
`;

export const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 149px;
`;
