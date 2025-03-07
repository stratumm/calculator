import { ACTIONS } from "./App"

type OperationButtonType = {
    operation: string
    dispatch: React.Dispatch<{

        type: string
        payload: {
            operation: string
        }
    }>    
}

export default function OperationButton({dispatch, operation}: OperationButtonType) {
    return (
        <button onClick= {() => dispatch({type: ACTIONS.OPERATE, payload: { operation }})}>
            {operation}
        </button>
    )
}
