import styled from "styled-components";

export const colors = {
  darkGray: "#191919",
  red: "#f5c4bc",
  almostWhite: "#E6E6E6",
  green: "#bcf5c4",
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyText = styled.p`
  margin: auto;
  text-align: center;
  width: 100%;
  font-size: 30px;
  color: ${colors.darkGray};
  font-family: "batFontLite";
  letter-spacing: 10px;
`;

export const ResultText = styled.p<{ $color: string }>`
  text-align: center;
  width: 100%;
  font-size: 28px;
  letter-spacing: 5px;
  font-family: "batFontLite";
  color: ${(props) => props.$color};
`;
