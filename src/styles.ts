import styled from "styled-components";

export const colors = {
  darkGray: "#191919",
  midGold: "#cca64b",
  neonGreen: "#A4FFAF",
  gray: "#817D92",
  red: "#F64A4A",
  almostWhite: "#E6E5EA",
};

export const Wrapper = styled.div`
  width: 1366px;
  height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.darkGray};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.input`
  margin-right: 80px;
  height: 200px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.p`
  margin: 10px 0 20px 0;
  font-size: 36px;
  color: ${colors.midGold};
  font-family: "batFontLite";
  letter-spacing: 10px;
`;

export const StyledInput = styled.input`
  width: 200px;
  height: 80px;
  background-color: ${colors.almostWhite};
`;
