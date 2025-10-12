import {
  VscLink,
  VscThumbsdownFilled,
  VscThumbsupFilled,
} from "react-icons/vsc";

import * as CD from "./CountryCardStyles";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import CommentButton from "./CommentButton";

const CountryCard = ({ country }) => {
  const { flags, name, region, flag, capital } = country;
  return (
    <CD.Container>
      <CD.ImageContainer>
        <CD.ExternalLink to={`/country/${name.common}`}>
          <VscLink />
        </CD.ExternalLink>
        <CD.Image src={flags.png} />
      </CD.ImageContainer>
      <CD.ContentContainer>
        <CD.Region>{region}</CD.Region>
        <CD.Name>{name.common}</CD.Name>
        <CD.CapitalContainer>
          {/* {capital.map((cp) => (
            <Capital>🌆 {cp}</Capital>
          ))} */}
        </CD.CapitalContainer>
        <CD.DescriptionContainer>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis autem consequuntur
          </p>
        </CD.DescriptionContainer>
        <CD.ReactionContainer>
          <LikeButton />
          <DislikeButton />
          <CommentButton />
        </CD.ReactionContainer>
      </CD.ContentContainer>
    </CD.Container>
  );
};

export default CountryCard;
