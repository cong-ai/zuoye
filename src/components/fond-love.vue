<template>
  <div>
    <div>
      <span>请选择你喜欢的专栏</span>
      <br />
      <input type="checkbox" v-model="hobby" value="科幻" />科幻
      <input type="checkbox" v-model="hobby" value="喜剧" />喜剧
      <input type="checkbox" v-model="hobby" value="动漫" />动漫
      <input type="checkbox" v-model="hobby" value="冒险" />冒险
      <input type="checkbox" v-model="hobby" value="科技" />科技
      <input type="checkbox" v-model="hobby" value="军事" />军事
      <input type="checkbox" v-model="hobby" value="娱乐" />娱乐
      <input type="checkbox" v-model="hobby" value="奇闻" />奇闻
    </div>
    {{ hobby.join(",") }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobby: [],
    };
  },
};
</script>
