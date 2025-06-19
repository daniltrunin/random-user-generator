<script setup lang="ts">
import styles from './main-component.module.css';

import useMainStore from '../../stores/store.ts';
const mainStore = useMainStore();
const mainState = mainStore.state;
</script>

<template>
  <div :class="styles.main">
    <h1 :class="styles.fullname">
      {{ mainState.name.title }} {{ mainState.name.first }} {{ mainState.name.last }}
    </h1>
    <div :class="styles.block"></div>

    <hr :class="styles.separator" />

    <div :class="styles.inner">
      <h1 :class="styles['block-naming']">Location</h1>
      <div :class="styles['block-wrapper']">
        <div :class="[styles.block, styles['block-left']]">
          <div :class="styles.data">
            <span :class="styles.key">Street</span
            ><span :class="styles.value"
              >{{ mainState.location.street.number }} {{ mainState.location.street.name }}</span
            >
          </div>
          <div :class="styles.data">
            <span :class="styles.key">City</span
            ><span :class="styles.value">{{ mainState.location.city }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">State</span
            ><span :class="styles.value">{{ mainState.location.state }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Country</span
            ><span :class="styles.value">{{ mainState.location.country }}</span>
          </div>
        </div>
        <div :class="[styles.block, styles['block-right']]">
          <div :class="styles.data">
            <span :class="styles.key">Postcode</span
            ><span :class="styles.value">{{ mainState.location.postcode }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Coordinates</span
            ><span :class="styles.value"
              >{{ mainState.location.coordinates.latitude }}
              {{ mainState.location.coordinates.longitude }}</span
            >
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Timezone</span
            ><span :class="styles.value"
              >{{ mainState.location.timezone.offset }}
              {{ mainState.location.timezone.description }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <hr :class="styles.separator" />

    <div :class="styles.block">
      <h1 :class="styles['block-naming']">Registration data</h1>
      <div :class="styles['block-wrapper']">
        <div :class="[styles.block, styles['block-left']]">
          <div :class="styles.data">
            <span :class="styles.key">uuid</span
            ><span :class="styles.value">{{ mainState.login.uuid }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Login</span
            ><span :class="styles.value">{{ mainState.login.username }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Password</span
            ><span :class="styles.value">{{ mainState.login.password }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Salt</span
            ><span :class="styles.value">{{ mainState.login.salt }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">MD5</span
            ><span :class="styles.value">{{ mainState.login.md5 }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">SHA1</span
            ><span :class="styles.value">{{ mainState.login.sha1 }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">SHA256</span
            ><span :class="styles.value">{{ mainState.login.sha256 }}</span>
          </div>
        </div>
      </div>
    </div>

    <hr :class="styles.separator" />

    <div :class="styles.block">
      <h1 :class="styles['block-naming']">When registered?</h1>
      <div :class="styles['block-wrapper']">
        <div :class="[styles.block, styles['block-left']]">
          <div :class="styles.data">
            <span :class="styles.key">Date</span
            ><span :class="styles.value">{{ mainState.registered.date }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Age</span
            ><span :class="styles.value">{{ mainState.registered.age }}</span>
          </div>
        </div>
      </div>
    </div>

    <hr :class="styles.separator" />

    <div :class="styles.inner">
      <div :class="[styles.block, styles['block-left']]">
        <div :class="styles.data">
          <span :class="styles.key">Phone</span
          ><span :class="styles.value">{{ mainState.phone }}</span>
        </div>
        <div :class="styles.data">
          <span :class="styles.key">Cell</span
          ><span :class="styles.value">{{ mainState.cell }}</span>
        </div>
        <div :class="styles.data">
          <span :class="styles.key">id</span
          ><span :class="styles.value">{{ mainState.id.name }} {{ mainState.id.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
