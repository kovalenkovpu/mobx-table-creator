import React from 'react';

import { RootStore } from 'src/stores/rootStore';
import { RootStoreContext } from 'src/contexts'

export const useStores = (): RootStore => React.useContext(RootStoreContext);