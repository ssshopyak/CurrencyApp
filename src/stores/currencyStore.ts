import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';
import {makePersistable, clearPersistedStore} from 'mobx-persist-store';

class CurrencyStore {
  isLogined: boolean = false;

  toLogin() {
    this.isLogined = true;
  }

  async clearPersistedData(): Promise<void> {
    await clearPersistedStore(this);
  }

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'CurrencyStore',
      properties: [],
      storage: AsyncStorage,
    });
  }
}

export default new CurrencyStore();
