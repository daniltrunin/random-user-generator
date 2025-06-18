<script setup lang="ts">
import { ref } from 'vue';

import AsideComponent from './components/Aside/aside-component.vue';
import MainComponent from './components/Main/main-component.vue';

import useMainStore from './stores/store.ts';

const mainStore = useMainStore();

const mainState = ref(mainStore.state);
</script>

<template>
  <AsideComponent :state="mainState" />
  <MainComponent :state="mainState" />
</template>
