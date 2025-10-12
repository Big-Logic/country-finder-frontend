import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  max-width: 500px;
  display: grid;
  grid-template-rows: 24rem 1fr;
`;

export const ImageContainer = styled.div`
  border-radius: 20px;
  /* overflow: hidden; */
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  border-radius: 20px;
`;

export const ExternalLink = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  background-color: blue;
  border-radius: 50%;
  z-index: 100;
  transform: translate(-25%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ContentContainer = styled.div`
  padding: 1.5rem;
`;

export const ReactionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 2rem;
`;

export const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ReactionButton = styled.button``;

export const CommentButton = styled.button`
  display: block;
  width: 100%;
  border: 1px solid blue;
  padding: 1rem;
  text-align: center;
  border-radius: 100px;
`;

export const Region = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Name = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Capital = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0;
`;

export const CapitalContainer = styled.div``;

export const DescriptionContainer = styled.div`
  margin: 1rem 0 2rem 0;
`;
