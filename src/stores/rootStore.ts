import { makeAutoObservable } from 'mobx';
import { PetStoreTable } from './petStore';

export class RootStore {
  isDataLoading = false;

  petStore: PetStoreTable;

  constructor() {
    this.petStore = new PetStoreTable(this);

    makeAutoObservable(this);
  }
}

export default new RootStore();