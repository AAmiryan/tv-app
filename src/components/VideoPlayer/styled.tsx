import styled from "styled-components";

export const VideoPlayerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
