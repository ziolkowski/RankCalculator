import {
  Wrapper,
  Header,
  Logo,
  Content,
  Inner,
  MyText,
  colors,
  ResultText,
} from "./styles";
import batLogo from "./assets/front70.png";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Result, getResult } from "./helper";

export const Calculator = () => {
  const [winnerPoints, setWinnerPoints] = useState<number | "">("");
  const [winnerWeight, setWinnerWeight] = useState<number | "">("");
  const [looserPoints, setLooserPoints] = useState<number | "">("");
  const [looserWeight, setLooserWeight] = useState<number | "">("");
  const [result, setResult] = useState<Result | null>();

  useEffect(() => {
    if (winnerPoints && winnerWeight && looserPoints && looserWeight) {
      const result = getResult({
        winnerPoints: winnerPoints,
        winnerWeight: winnerWeight,
        looserPoints: looserPoints,
        looserWeight: looserWeight,
      });
      setResult(result);
    }
  }, [winnerPoints, winnerWeight, looserPoints, looserWeight]);

  const validateWeight = (input: string) => {
    if (input === "") return "";
    const i = Number(input);
    if (i > 300) return 300;
    if (i < 1) return 1;
    return i;
  };
  const validatePoints = (input: string) => {
    if (input === "") return "";
    const i = Number(input);
    if (i > 1999) return 1999;
    if (i < 1) return 1;
    return i;
  };

  return (
    <>
      <Wrapper>
        <Header>
          <Logo type="image" src={batLogo} />
        </Header>
        <Content>
          <Inner>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                background: colors.green,
                margin: "5px;",
              }}
            >
              <MyText>Winner</MyText>
              <Box>
                <TextField
                  type="number"
                  label="Points"
                  variant="outlined"
                  value={winnerPoints}
                  onChange={(e) => {
                    setWinnerPoints(validatePoints(e.target.value));
                  }}
                />
                <TextField
                  type="number"
                  label="Kg"
                  variant="outlined"
                  value={winnerWeight}
                  onChange={(e) =>
                    setWinnerWeight(validateWeight(e.target.value))
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                background: colors.red,
              }}
            >
              <MyText>Looser</MyText>
              <Box>
                <TextField
                  type="number"
                  label="Points"
                  variant="outlined"
                  value={looserPoints}
                  onChange={(e) =>
                    setLooserPoints(validatePoints(e.target.value))
                  }
                />
                <TextField
                  type="number"
                  label="Kg"
                  variant="outlined"
                  value={looserWeight}
                  onChange={(e) =>
                    setLooserWeight(validateWeight(e.target.value))
                  }
                />
              </Box>
            </Box>
          </Inner>
          <Box
            sx={{
              p: 2,
              width: "600px",
              display: "flex",
              background: colors.darkGray,
              visibility:
                winnerPoints &&
                winnerWeight &&
                looserPoints &&
                looserWeight &&
                winnerPoints !== 0 &&
                winnerWeight !== 0 &&
                looserPoints !== 0 &&
                looserWeight !== 0
                  ? "visible"
                  : "hidden",
            }}
          >
            <ResultText $color={colors.green}>
              {winnerPoints}
              {"+"}
              {result?.diff}
              {"="}
              {result?.winnerPoints}
            </ResultText>
            <ResultText $color={colors.red}>
              {looserPoints}
              {"-"}
              {result?.diff}
              {"="}
              {result?.looserPoints}
            </ResultText>
          </Box>
        </Content>
      </Wrapper>
    </>
  );
};
