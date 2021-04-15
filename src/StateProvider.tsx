import { FC } from "react";
import { createContext, useContext, useReducer } from "react";

export const StateContext: any = createContext({});

interface IStateProvider {
  reducer: any;
  initialState: any;
  children: any;
}

export const StateProvider: FC<IStateProvider> = ({
  reducer,
  initialState,
  children,
}): any => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
