import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const OpenButton = styled.button`
  display: block;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
  ${(props) => props["$buttonCustomStyles"] || ""}
`;

export const Popover = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 10000;
  margin-top: 5px;

  ${(props) => props["$popoverCustomStyles"] || ""}
`;
