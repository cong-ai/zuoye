<template>
  <div>
    <div>
      <fondLove />
    </div>
    <br />
    <br />
    <br />
    <div>
      <walKing />
    </div>
    <br />
    <p>--------------------------</p>
    <div>
      <modIfied />
    </div>
  </div>
</template>

<script>
import fondLove from "./components/fond-love.vue";
import walKing from "./components/wal-king.vue";
import modIfied from "./components/mod-ified.vue";
export default {
  data() {
    return {};
  },

  components: {
    fondLove,
    walKing,
    modIfied,
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
