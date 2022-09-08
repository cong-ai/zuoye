<template>
  <div>
    <div v-for="(obj, index) in arr" :key="index" style="display: inline-block">
      <input type="checkbox" v-model="list" :value="obj" />
      <span>{{ obj }}</span>
    </div>
    <p>和为：{{ sumS }}</p>
  </div>
</template>

<script>
export default {
  name: "sumMation",
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      list: [],
    };
  },

  computed: {
    sumS() {
      console.log(this.arr);
      return this.list.reduce((sum, val) => sum + val, 0);
    },
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
