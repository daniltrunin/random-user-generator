<script setup lang="ts">
import styles from './aside-component.module.css';

import useMainStore from '../../stores/store.ts';
const mainStore = useMainStore();
const mainState = mainStore.state;

const handleChange = () => {
  mainStore.handleChange();
};
</script>

<template>
  <div :class="styles.aside">
    <img :class="styles.picture" :src="mainState?.picture.large" alt="Profile Picture" />
    <div :class="styles.block">
      <div :class="styles.data">
        <span :class="styles.key">Username</span
        ><span :class="styles.value">{{ mainState?.login.username }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Email</span
        ><span :class="styles.value">{{ mainState?.email }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Gender</span
        ><span :class="styles.value">{{ mainState?.gender }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Age</span
        ><span :class="styles.value">{{ mainState?.dob.age }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Date of birth</span
        ><span :class="styles.value">{{ mainState?.dob.date?.slice(0, 10) }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Nationality</span
        ><span :class="styles.value">{{ mainState?.nat }}</span>
      </div>
    </div>
    <div :class="styles.buttons">
      <v-btn color="primary" variant="flat">SAVE</v-btn>
      <v-btn @click="handleChange" color="secondary" variant="tonal">CHANGE</v-btn>
    </div>
  </div>
</template>
