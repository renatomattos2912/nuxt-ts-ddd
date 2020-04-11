<template>
  <v-navigation-drawer v-model="drawer" :clipped="true" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

interface User {
  firstName: string;
  lastName: number;
}

export default Vue.extend({
  name: 'YourComponent',

  props: {
    user: {
      type: Object,
      required: true,
    } as PropOptions<User>,
  },

  data() {
    return {
      message: 'This is a message',
    };
  },

  computed: {
    fullName(): string {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
});
</script>

<style></style>
