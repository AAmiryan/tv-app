import { menuItems } from "../../constats";
import {
  Avatar,
  BottomText,
  BottomTextContainer,
  Menu,
  MenuItem,
  MenuText,
  SidebarContainer,
} from "./styled";

const LeftMenu: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem className="avatar">
        <Avatar src="/avatar.webp"></Avatar>
        <MenuText>Daniel</MenuText>
      </MenuItem>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            className={item.name === "Home" ? "active" : ""}
          >
            <img src={`/${item.icon}`} alt={item.name}></img>
            <MenuText>{item?.name}</MenuText>
          </MenuItem>
        ))}
      </Menu>
      <BottomTextContainer>
        <BottomText>LANGUAGE</BottomText>
        <BottomText>GET HELP</BottomText>
        <BottomText>EXIT</BottomText>
      </BottomTextContainer>
    </SidebarContainer>
  );
};

export default LeftMenu;
