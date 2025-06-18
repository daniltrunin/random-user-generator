<script setup lang="ts">
import styles from './main-component.module.css';

const props = defineProps({
  state: Object,
});
</script>

<template>
  <div :class="styles.main">
    <h1 :class="styles.fullname">
      {{ props.state.name.title }} {{ props.state.name.first }} {{ props.state.name.last }}
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
              >{{ props.state.location.street.number }} {{ props.state.location.street.name }}</span
            >
          </div>
          <div :class="styles.data">
            <span :class="styles.key">City</span
            ><span :class="styles.value">{{ props.state.location.city }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">State</span
            ><span :class="styles.value">{{ props.state.location.state }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Country</span
            ><span :class="styles.value">{{ props.state.location.country }}</span>
          </div>
        </div>
        <div :class="[styles.block, styles['block-right']]">
          <div :class="styles.data">
            <span :class="styles.key">Postcode</span
            ><span :class="styles.value">{{ props.state.location.postcode }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Coordinates</span
            ><span :class="styles.value"
              >{{ props.state.location.coordinates.latitude }}
              {{ props.state.location.coordinates.longitude }}</span
            >
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Timezone</span
            ><span :class="styles.value"
              >{{ props.state.location.timezone.offset }}
              {{ props.state.location.timezone.description }}</span
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
            ><span :class="styles.value">{{ props.state.login.uuid }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Login</span
            ><span :class="styles.value">{{ props.state.login.username }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Password</span
            ><span :class="styles.value">{{ props.state.login.password }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Salt</span
            ><span :class="styles.value">{{ props.state.login.salt }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">MD5</span
            ><span :class="styles.value">{{ props.state.login.md5 }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">SHA1</span
            ><span :class="styles.value">{{ props.state.login.sha1 }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">SHA256</span
            ><span :class="styles.value">{{ props.state.login.sha256 }}</span>
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
            ><span :class="styles.value">{{ props.state.registered.date.slice(0, 10) }}</span>
          </div>
          <div :class="styles.data">
            <span :class="styles.key">Age</span
            ><span :class="styles.value">{{ props.state.registered.age }}</span>
          </div>
        </div>
      </div>
    </div>

    <hr :class="styles.separator" />

    <div :class="styles.inner">
      <div :class="[styles.block, styles['block-left']]">
        <div :class="styles.data">
          <span :class="styles.key">Phone</span
          ><span :class="styles.value">{{ props.state.phone }}</span>
        </div>
        <div :class="styles.data">
          <span :class="styles.key">Cell</span
          ><span :class="styles.value">{{ props.state.cell }}</span>
        </div>
        <div :class="styles.data">
          <span :class="styles.key">id</span
          ><span :class="styles.value">{{ props.state.id.name }} {{ props.state.id.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
