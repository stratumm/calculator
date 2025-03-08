import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./styles.css"

export const ACTIONS = {
  ADD: "add-digit",
  OPERATE: "operate",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate"
}

type StateType = {
  previousOperand?: string,
  currentOperand?: string,
  operation?: string
}

type ActionType = {
    type: string
    payload?: {
      digit?: string
      operation?: string
    }
}

function reducer(state: StateType, {type, payload}: ActionType) {
    switch(type) {
      case ACTIONS.ADD:
        if (state.currentOperand === undefined && payload?.digit === "0"){
          return state
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload?.digit}`
        }
      case ACTIONS.OPERATE:
        if (state.previousOperand && state.operation && state.currentOperand) {
          return {
            ...state,
            previousOperand: (eval(`${state.previousOperand} ${state.operation} ${state.currentOperand}`)).toString(),
            currentOperand: undefined,
            operation: payload?.operation
          }
        }
        if (state.currentOperand) {
          return {
            ...state,
            operation: payload?.operation,
            previousOperand: state.currentOperand,
            currentOperand: undefined
          }
        }
        return state
      case ACTIONS.CLEAR:
        return {}
      case ACTIONS.DELETE:
        return {
          ...state,
          currentOperand: state.currentOperand?.slice(0, -1)
        }
      case ACTIONS.EVALUATE:
        if (state.previousOperand && state.currentOperand && state.operation) {
          return {
            ...state,
            currentOperand: (eval(`${state.previousOperand} ${state.operation} ${state.currentOperand}`)).toString(),
            previousOperand: undefined,
            operation: undefined
          }
        }
        return state
      default:
        return state
    }
}

export default function App() {
  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(reducer, {}) 

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE })}>
        DEL
      </button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  )
}