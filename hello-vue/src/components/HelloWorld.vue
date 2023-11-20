<template>
  <div>
    <input v-model="userInput" type="number" />
    <button @click="submitInput">決定</button>
    <div v-if="allInputs.length === 4">
      <h2>入力結果（降順）:</h2>
      <ul>
        <li v-for="input in sortedInputs" :key="input.userId">
          User {{ input.userId }}: {{ input.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: '',
      allInputs: []
    };
  },
  computed: {
    sortedInputs() {
      return [...this.allInputs].sort((a, b) => b.value - a.value);
    }
  },
  methods: {
    async submitInput() {
      const response = await axios.post('/api/submit', {
        userId: this.$route.params.userId,
        value: this.userInput
      });
      this.allInputs = response.data;
      this.userInput = '';
    }
  }
};
</script>