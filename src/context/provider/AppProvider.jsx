import AppContext from "../store"
import { useReducer } from "react" 
import { reducer, initialState } from "../reducer/reducer" 

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider