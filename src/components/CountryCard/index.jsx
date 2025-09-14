import styled from "styled-components";
import { VscThumbsdownFilled, VscThumbsupFilled } from "react-icons/vsc";
import { Link } from "react-router";
const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  max-width: 500px;
  display: grid;
  grid-template-rows: 22rem 1fr;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const ReactionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 2rem;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ReactionButton = styled.button``;

const CommentButton = styled.button`
  display: block;
  width: 100%;
  border: 1px solid blue;
  padding: 1rem;
  text-align: center;
  border-radius: 100px;
`;

const Region = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 0;
`;

const Capital = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0;
`;

const CapitalContainer = styled.div``;

const DescriptionContainer = styled.div`
  margin: 2rem 0;
`;

const DetailLink = styled(Link)`
  display: block;
  width: 100%;
  background-color: blue;
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 100px;
  margin-top: 2rem;
`;

const CountryCard = ({ country }) => {
  const { flags, name, region, flag, capital } = country;
  return (
    <Container>
      <ImageContainer>
        <Image src={flags.png} />
      </ImageContainer>
      <ContentContainer>
        <Region>{region}</Region>
        <NameContainer>
          <h3>{name.common}</h3>
          <span>{flag}</span>
        </NameContainer>

        <CapitalContainer>
          {/* {capital.map((cp) => (
            <Capital>🌆 {cp}</Capital>
          ))} */}
        </CapitalContainer>

        <DescriptionContainer>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis autem consequuntur
          </p>
        </DescriptionContainer>

        <ReactionContainer>
          <ReactionItem>
            <ReactionButton>
              <VscThumbsupFilled />
            </ReactionButton>
            200
          </ReactionItem>
          <ReactionItem>
            <ReactionButton>
              <VscThumbsdownFilled />
            </ReactionButton>
            200
          </ReactionItem>
          <ReactionItem>
            <CommentButton>Comment</CommentButton>
          </ReactionItem>
        </ReactionContainer>
        <DetailLink to={`/countries/{ccn3}`}>View Country</DetailLink>
      </ContentContainer>
    </Container>
  );
};

export default CountryCard;
