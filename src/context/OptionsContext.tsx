'use client';
import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Theme, Language } from '@/types/enum';
import { OPTION_ACTIONS as ACTION } from '@/types/enum';

type OptionsStateType = {
  theme: Theme;
  language: Language;
};
interface OptionsContextType {
  state: OptionsStateType;
  dispatch: React.Dispatch<{
    type: keyof typeof ACTION;
    payload?: Theme | Language;
  }>;
}

interface OptionsProviderProps {
  children: ReactNode;
}

const reducerInitialState: OptionsStateType = {
  theme: Theme.light,
  language: Language.en,
};

const optionsReducer = (
  state: { theme: Theme; language: Language },
  action: { type: keyof typeof ACTION; payload?: Theme | Language }
) => {
  switch (action.type) {
    case ACTION.SET_THEME:
      if (state.theme === Theme.dark) {
        return { ...state, theme: Theme.light };
      } else {
        return { ...state, theme: Theme.dark };
      }
    case ACTION.SET_LANGUAGE:
      if (action.payload === Language.sv) {
        return { ...state, language: Language.sv };
      } else {
        return { ...state, language: Language.en };
      }
    default:
      return state;
  }
};

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

export const useOptions = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }
  return context;
};

export function OptionsProvider({ children }: OptionsProviderProps) {
  const [state, dispatch] = useReducer(optionsReducer, reducerInitialState);

  return (
    <OptionsContext.Provider value={{ state, dispatch }}>
      {children}
    </OptionsContext.Provider>
  );
}
