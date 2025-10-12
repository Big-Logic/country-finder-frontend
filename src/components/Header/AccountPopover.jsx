import styled, { css } from "styled-components";
import Popover from "../Popover";
import useAuth from "../../hooks/useAuth";

const buttonStyles = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 0;
  background: transparent;
`;

const Username = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const UserImage = styled.span`
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  border-radius: 50%;
`;

const avatar =
  "https://derzobwvxhpxzzjepjin.supabase.co/storage/v1/object/public/country-finder-images/uifaces-alien-avatar.jpg";

const AccountPopover = () => {
  const { loginedUser } = useAuth();
  return (
    <Popover>
      <Popover.Button customStyles={buttonStyles}>
        {/* <Username>{loginedUser["first_name"]}</Username> */}
        <UserImage>
          {/* <img src={loginedUser["image_url"] || avatar} alt="Alfred" /> */}
        </UserImage>
      </Popover.Button>
      <Popover.Content>Hi There</Popover.Content>
    </Popover>
  );
};

export default AccountPopover;
