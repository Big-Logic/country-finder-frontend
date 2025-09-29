import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
`;

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  font-size: 2rem;
  border-radius: 50%;
  transition: background 0.2s;
  &.active,
  &:hover:not(:disabled) {
    background: #007bff;
    color: #fff;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
