import styled from "styled-components";

export const RecommendedContainer = styled.div`
  width: 35vw;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 2;
  img {
    width: 35vw;
  }
  .textContainer {
    display: flex;
    gap: 16px;
    flex-direction: row;
  }
`;
export const Category = styled.h4`
  color: #87888a;
  font-weight: 800;
  margin: 0;
`;

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const Button = styled.button`
  border: none;
  background-color: white;
  border-color: #d9d9d9;
  color: black;
  font-size: 14px;
  height: 40px;
  padding: 4px 15px;
  border-radius: 20px;
  width: 90px;
`;

export const PrimaryButton = styled(Button)`
  background-color: #1720c1;
  color: white;
`;

export const Text = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
