export type Athlete = {
  weight: number;
  points: number;
};

export type Data = {
  winnerPoints: number;
  looserPoints: number;
  winnerWeight: number;
  looserWeight: number;
};

export type Result = {
  winnerPoints?: number;
  looserPoints?: number;
  diff?: number;
  winnerNoWeightPoints: number;
  looserNoWeightPoints: number;
  noWeightDiff: number;
};

export const getResult = (
  data: Data,
  weightAdjusted: boolean = true
): Result => {
  let result = {} as Result;
  const substract = data.winnerPoints - data.looserPoints;
  const diffParam = substract / -20;
  const howMuchToLimit = Math.min(2000 - data.winnerPoints, data.looserPoints);
  const limitParam = 1 + Math.ceil((2000 - howMuchToLimit) / 600);
  const noWeightDiff = Math.round(Number((100 + diffParam) / limitParam));
  if (!weightAdjusted) {
    result.winnerNoWeightPoints = calculateWithLimit(data.winnerPoints, noWeightDiff);
    result.looserNoWeightPoints = calculateWithLimit(data.looserPoints, -noWeightDiff);
    result.noWeightDiff = noWeightDiff;
  } else {
    const weightMultiplier = getWeightAdjustedMultiplier(
      data.winnerWeight,
      data.looserWeight
    );
    const withWeightDiff = Math.round(noWeightDiff * weightMultiplier);
    result.winnerPoints = calculateWithLimit(data.winnerPoints, withWeightDiff);
    result.looserPoints = calculateWithLimit(data.looserPoints, -withWeightDiff);
    result.diff = withWeightDiff;
  }

  return result;
};

const calculateWithLimit = (x: number, y: number): number => {
  const result = x + y;
  if (y >= 0) {
    return result > 1999 ? 1999 : result;
  }

  return result < 1 ? 1 : result;
};

const getWeightAdjustedMultiplier = (
  winnerWeight: number,
  looserWeight: number
): number => {
  const substract = winnerWeight - looserWeight;
  const diffParam = substract / 50;
  let lowerWeight = Math.min(winnerWeight, looserWeight);
  if (lowerWeight < 50) {
    lowerWeight = 50;
  }

  let weightImportance = (150 - lowerWeight) / 100;
  if (weightImportance < 0.2) {
    weightImportance = 0.2;
  }

  const adjustedDiffParam = 1 - diffParam < 0 ? 0 : 1 - diffParam;
  const multiplier = 1 + weightImportance * (adjustedDiffParam - 1);

  return multiplier;
};
