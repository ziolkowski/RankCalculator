import {
  Wrapper,
  Header,
  Logo,
  Content,
  StyledInput,
  Inner,
} from "./styles";
import batLogo from "./assets/front70.png";

export const Calculator = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Logo type="image" src={batLogo} />
        </Header>
        <Content>
          <Inner>
            <StyledInput type="number" />
            <StyledInput type="number" />
          </Inner>
        </Content>
      </Wrapper>
    </>
  );
};
