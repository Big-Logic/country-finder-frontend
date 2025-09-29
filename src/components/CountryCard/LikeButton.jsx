import * as CD from "./CountryCardStyles";
import { VscThumbsupFilled } from "react-icons/vsc";
const LikeButton = () => {
  return (
    <CD.ReactionItem>
      <CD.ReactionButton>
        <VscThumbsupFilled />
      </CD.ReactionButton>
      200
    </CD.ReactionItem>
  );
};

export default LikeButton;
