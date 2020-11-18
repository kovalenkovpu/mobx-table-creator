// import { observable, action } from 'mobx-react-lite';
import { makeAutoObservable } from 'mobx';
import { getPets, GetPetsParams } from 'src/services/pets';

import { RootStore } from './rootStore';

export interface IPetStoreTable {
  data: [];

  getData(params: GetPetsParams): void;
}

export class PetStoreTable implements IPetStoreTable {
  private rootStore: RootStore;

  data: [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  getData = async (params: GetPetsParams) => {
    // example of communication between stores
    this.rootStore.isDataLoading = true;

    const denormalizedData = await getPets(params);
    const data = await denormalizedData.json();

    this.data = data;

    this.rootStore.isDataLoading = false;
  };
}