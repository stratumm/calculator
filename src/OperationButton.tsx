import { ACTIONS } from "./App"

type OperationButtonType = {
    digit: String
    dispatch: React.Dispatch<{
        type: String
        payload: {
            digit: String;
        }
    }>
}

export default function OperationButton({dispatch, digit}: OperationButtonType) {
    return (
        <button onClick= {() => dispatch({type: ACTIONS.OPERATE, payload: { digit }})}> 
        </button>
    )
}
