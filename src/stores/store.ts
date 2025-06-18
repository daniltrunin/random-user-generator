import { ref } from 'vue';
import { defineStore } from 'pinia';

const useMainStore = defineStore('mainStore', () => {
  const state = ref({
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Marilou',
      last: 'Robert',
    },
    location: {
      street: {
        number: 2104,
        name: 'Rue du Bon-Pasteur',
      },
      city: 'Aubervilliers',
      state: 'Vendée',
      country: 'France',
      postcode: 63385,
      coordinates: {
        latitude: '-17.2346',
        longitude: '102.5055',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'marilou.robert@example.com',
    login: {
      uuid: 'bd7e3c1f-9ed2-4de1-853d-7cdba28f18b9',
      username: 'ticklishkoala779',
      password: 'chance',
      salt: '6YlZ4fHu',
      md5: 'fc171e7c51ea4a0497b39b0b7deb82f6',
      sha1: '421c725fe3a6e8395b370f96f643473a5c2b959f',
      sha256: '87e46b815391ef8253ef658ad205ca4b8af27ef509e866a2ff4195f1a6881184',
    },
    dob: {
      date: '1994-03-23T13:56:15.547Z',
      age: 31,
    },
    registered: {
      date: '2017-03-12T14:17:06.729Z',
      age: 8,
    },
    phone: '01-59-15-75-83',
    cell: '06-09-19-05-14',
    id: {
      name: 'INSEE',
      value: '2940251997903 93',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/66.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/66.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/66.jpg',
    },
    nat: 'FR',
  });

  const handleChange = () => {
    state.value.gender = 'Male';
    // Добавить функционал -> По клику делает запрос на API и меняет на новые данные
  };

  return { state, handleChange };
});

export default useMainStore;
