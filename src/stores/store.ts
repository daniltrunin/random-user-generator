import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './types.ts';
import request from '../services/request.ts';

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
      large: undefined,
      medium: undefined,
      thumbnail: undefined,
    },
    nat: null,
  });

  const isNull = ref(true);

  const handleStart = async () => {
    const result = await request();
    Object.assign(state.value, result);
    isNull.value = false;

    console.log('handleStart: ', result);
  };

  const handleChange = async () => {
    const result = await request();
    Object.assign(state.value, result);

    console.log('handleChange: ', result);
  };

  return { state, isNull, handleStart, handleChange };
});

export default useMainStore;
