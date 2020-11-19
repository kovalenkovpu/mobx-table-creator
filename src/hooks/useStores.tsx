import React from 'react';

import { RootStore } from 'src/stores/root-store';
import { RootStoreContext } from 'src/contexts'

export const useStores = (): RootStore => React.useContext(RootStoreContext);