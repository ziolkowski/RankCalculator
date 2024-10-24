import { StyledInput } from "../styles";

export interface IInputProps {
  title: string;
  value: string;
}

export const MyInput = (props: IInputProps) => {
    console.log(props);
  return <StyledInput type="number"></StyledInput>;
};
