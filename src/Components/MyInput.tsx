import { StyledInput } from "../styles";

export interface IInputProps {
  title: string;
  value: string;
}

export const MyInput = (props: IInputProps) => {
  return <StyledInput type="number"></StyledInput>;
};
