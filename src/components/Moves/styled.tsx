import styled from "styled-components";

interface IMovesDescriptionProps {
  bgImage?: string;
}

export const MovesDescriptionContainer = styled.div<IMovesDescriptionProps>`
  width: calc(100vw - 78px);
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : "none"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
