import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 2rem;
  text-align: center;
`;

const StyledLogo = styled.span`
  font-family: "Moo Lah Lah", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
`;

const Logo = () => {
  return (
    <Container>
      <StyledLogo>Co/Finder</StyledLogo>
    </Container>
  );
};

export default Logo;
