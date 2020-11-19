import React from 'react';

import { RootStore } from 'src/stores/root-store';

export const RootStoreContext = React.createContext<RootStore>({} as RootStore);

export interface StoreProviderProps {
  store: RootStore;
  children: React.ReactNode;
}

export const RootStoreProvider: React.FC<StoreProviderProps> = ({
  store,
  children,
}) => (
  <RootStoreContext.Provider value={store}>
    {children}
  </RootStoreContext.Provider>
);