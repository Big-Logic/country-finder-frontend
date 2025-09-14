import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  overflow-y: auto;
  //add custom styles if provided
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const StyledOpenButton = styled.button``;

export const ContentBox = styled(motion.div)`
  width: 300px;
  height: 100% !important;
  background: #fff;
  color: #000;
  overflow-y: auto;
  position: relative;

  //add custom styles if provided
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dimmed-gray);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
