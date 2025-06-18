<script setup lang="ts">
import styles from './aside-component.module.css';

import useMainStore from '../../stores/store.ts';

const mainStore = useMainStore();

const props = defineProps({
  state: Object,
});

const handleClick = () => {
  mainStore.handleChange();
};
</script>

<template>
  <div :class="styles.aside">
    <img :class="styles.picture" :src="props.state.picture.large" alt="Profile Picture" />
    <div :class="styles.block">
      <div :class="styles.data">
        <span :class="styles.key">Username</span
        ><span :class="styles.value">{{ props.state.login.username }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Email</span
        ><span :class="styles.value">{{ props.state.email }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Gender</span
        ><span :class="styles.value">{{ props.state.gender }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Age</span
        ><span :class="styles.value">{{ props.state.dob.age }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Date of birth</span
        ><span :class="styles.value">{{ props.state.dob.date.slice(0, 10) }}</span>
      </div>
      <div :class="styles.data">
        <span :class="styles.key">Nationality</span
        ><span :class="styles.value">{{ props.state.nat }}</span>
      </div>
    </div>
    <v-btn @click="handleClick" color="secondary" variant="tonal"> CHANGE </v-btn>
  </div>
</template>
