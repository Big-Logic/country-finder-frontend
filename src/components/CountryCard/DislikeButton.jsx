import * as CD from "./CountryCardStyles";
import { VscThumbsdownFilled } from "react-icons/vsc";
function DislikeButton() {
  return (
    <CD.ReactionItem>
      <CD.ReactionButton>
        <VscThumbsdownFilled />
      </CD.ReactionButton>
      200
    </CD.ReactionItem>
  );
}

export default DislikeButton;
