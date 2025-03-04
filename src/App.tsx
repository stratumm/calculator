import { useReducer } from "react"

export const ACTIONS = {
  ADD: "add-digit",
  OPERATE: "operatte",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate"
}

export default function App() {

  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(useReducer, {})

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
      <button className="span-two">AC</button>
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
