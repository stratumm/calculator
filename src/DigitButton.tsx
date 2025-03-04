import { ACTIONS } from "./App"

type DigitButtonType = {
    digit: string;
    dispatch: React.Dispatch<{
      type: string;
      payload: {
      digit: string;
      };
    }>;
};

export default function DigitButton({ dispatch, digit }: DigitButtonType) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD, payload: { digit } })}>
      {digit}
    </button>
  );
}
