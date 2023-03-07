import { useReducer } from 'react'
import { CardContext, CardDispatchContext } from './CSContext'
import reducer from './CSRducer'

interface CSProviderProps {
  children: React.ReactNode
}

const CSProvider = (props: CSProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { dom: null })
  return (
    <CardContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {props.children}
      </CardDispatchContext.Provider>
    </CardContext.Provider>
  )
}

export default CSProvider
