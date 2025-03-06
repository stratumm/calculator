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
  previousOperand?: string
  currentOperand?: string
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
      case ACTIONS.CLEAR:
        return {}
      default:
        return state
    }
  }



export default function App() {

  // the dispatch from OperationButton or Digitbutton sends it to the reducer here
  // it then checks for the type and the required operations needed to perform on it
  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(reducer, {}) 

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previousOperand">
          {previousOperand} {operation}
          <div className="currentOperand">
            {currentOperand}
          </div>
        </div>
      </div>
      <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button className="span-two">DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
    </div>
  )
}
