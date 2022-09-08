<template>
  <div class="wrap">
    <div class="nav_left" id="navLeft">
      <div class="nav_content">
        <span
          @click="pfn(index)"
          :class="{ active: bool === index }"
          v-for="(obj, index) in arr"
          :key="obj.id"
          >{{ obj.name }}</span
        >
      </div>
    </div>
    <div class="down">
      <i class="iconfont icon-xiajiantoubeifen gray"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: "0",
          name: "热门",
        },
        {
          id: "621",
          name: "\u5496\u5561",
        },
        {
          id: "627",
          name: "\u996e\u98df",
        },
        {
          id: "279",
          name: "\u7537\u88c5",
        },
        {
          id: "294",
          name: "\u5973\u88c5",
        },
        {
          id: "122",
          name: "\u773c\u955c",
        },
        {
          id: "339",
          name: "\u5185\u8863\u914d\u9970",
        },
        {
          id: "391",
          name: "\u6bcd\u5a74",
        },
        {
          id: "35",
          name: "\u978b\u9774",
        },
        {
          id: "39",
          name: "\u8fd0\u52a8",
        },
        {
          id: "153",
          name: "\u7bb1\u5305",
        },
        {
          id: "119",
          name: "\u7f8e\u5986\u4e2a\u62a4",
        },
        {
          id: "355",
          name: "\u5bb6\u7eba",
        },
        {
          id: "51",
          name: "\u9910\u53a8",
        },
        {
          id: "334",
          name: "\u7535\u5668",
        },
        {
          id: "369",
          name: "\u5bb6\u88c5",
        },
        {
          id: "10",
          name: "\u5bb6\u5177",
        },
        {
          id: "223",
          name: "\u6570\u7801",
        },
        {
          id: "429",
          name: "\u6c7d\u914d",
        },
        {
          id: "546",
          name: "\u5065\u5eb7\u4fdd\u5065",
        },
        {
          id: "433",
          name: "\u5b9a\u5236",
        },
      ],
      bool: 0,
    };
  },
  methods: {
    pfn(index) {
      this.bool = index;
    },
  },
};
</script>

<style>
.wrap {
  width: 100%;
  display: flex;
  margin: 0.2rem 0 0 0;
  position: relative;
}

/*左侧的导航样式*/
.nav_left {
  width: 21.1875rem;
  overflow: scroll;
}

.nav_left::-webkit-scrollbar {
  display: none;
}

.nav_content {
  white-space: nowrap;
  padding: 0 0.7rem;
}

.nav_content span {
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-size: 0.875rem;
}

.nav_content .active {
  border-bottom: 2px solid #7f4395;
  color: #7f4395;
}

.nav_left,
.down {
  float: left;
}

/*右侧导航部分*/
.down {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gray {
  color: gray;
  display: inline-block;
  vertical-align: middle;
}
</style>
