<script setup lang="ts">
import { computed } from 'vue';

import styles from './App.module.css';

import AsideComponent from './components/Aside/aside-component.vue';
import MainComponent from './components/Main/main-component.vue';

import useMainStore from './stores/store.ts';
const mainStore = useMainStore();
const isNull = computed(() => mainStore.isNull);

const handleStart = async () => {
  await mainStore.handleStart();
};
</script>

<template>
  <div v-if="isNull" :class="styles['no-data']">
    <v-btn @click="handleStart" :class="styles.button" color="primary" variant="plain">
      START
    </v-btn>
  </div>
  <div v-else :class="styles.data">
    <AsideComponent />
    <MainComponent />
  </div>
</template>
