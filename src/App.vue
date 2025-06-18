<script setup lang="ts">
import { ref } from 'vue';

import styles from './App.module.css';

import AsideComponent from './components/Aside/aside-component.vue';
import MainComponent from './components/Main/main-component.vue';

import useMainStore from './stores/store.ts';

const mainStore = useMainStore();

const mainState = ref(mainStore.state);
const isNull = ref(mainStore.isNullState.isNull);

import request from './services/request.ts';

const handleRequest = async () => {
  const result = await request();

  mainState.value = result;
  isNull.value = false;

  console.log('Вывод mainState.value после передачи туда результата: ', mainState.value);
};
</script>

<template>
  <div v-if="isNull" :class="styles['no-data']">
    <v-btn @click="handleRequest" :class="styles.button" color="primary" variant="plain">
      START
    </v-btn>
  </div>
  <div v-else :class="styles.data">
    <AsideComponent :state="mainState" />
    <MainComponent :state="mainState" />
  </div>
</template>
