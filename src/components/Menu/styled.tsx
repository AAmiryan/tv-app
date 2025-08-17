import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px 10px;
  width: 50px;

  background: rgba(0, 0, 0, 1);

  transition: width 0.5s ease, background 0.3s ease;

  &:hover {
    width: 200px;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 20px 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  ${SidebarContainer}:hover & {
    margin-top: unset;
  }
`;

export const MenuItem = styled.li<{ background?: string }>`
  margin: 10px 0;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease;
  padding: 8px 12px;
  border-radius: 8px;

  img {
    width: 18px;
    height: 18px;
  }

  &.avatar {
    display: none;

    ${SidebarContainer}:hover & {
      display: flex;
      align-items: center;
      padding: 20px 10px;
      padding: 5px;
    }
  }

  &.active {
    background: rgba(23, 32, 193, 0.3);
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${SidebarContainer}:hover & {
      width: 100%;
      border-radius: 8px;
      justify-content: start;
    }
  }

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 18px;
  display: none;

  ${SidebarContainer}:hover & {
    display: inline;
  }
`;

export const Avatar = styled.img`
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
`;

export const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: none;
  ${SidebarContainer}:hover & {
    margin-top: 6vw;
    padding-left: 10px;
    display: flex;
  }
`;
export const BottomText = styled.div`
  color: #544f4f;
  font-weight: 600;
  font-size: 16px;
`;
