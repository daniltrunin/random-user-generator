import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './types.ts';

const useMainStore = defineStore('mainStore', () => {
  const state = ref<User>({
    gender: null,
    name: {
      title: null,
      first: null,
      last: null,
    },
    location: {
      street: {
        number: null,
        name: null,
      },
      city: null,
      state: null,
      country: null,
      postcode: null,
      coordinates: {
        latitude: null,
        longitude: null,
      },
      timezone: {
        offset: null,
        description: null,
      },
    },
    email: null,
    login: {
      uuid: null,
      username: null,
      password: null,
      salt: null,
      md5: null,
      sha1: null,
      sha256: null,
    },
    dob: {
      date: null,
      age: null,
    },
    registered: {
      date: null,
      age: null,
    },
    phone: null,
    cell: null,
    id: {
      name: null,
      value: null,
    },
    picture: {
      large: null,
      medium: null,
      thumbnail: null,
    },
    nat: null,
  });

  const isNullState = ref({
    isNull: true,
  });

  const handleChange = () => {
    state.value.gender = 'Male';
    // Добавить функционал -> По клику делает запрос на API и меняет на новые данные
  };

  return { state, isNullState, handleChange };
});

export default useMainStore;
