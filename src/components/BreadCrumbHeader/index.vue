<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="item in breadCrumbList"
        :key="item.path"
      >{{item.name}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return { breadCrumbList: null };
  },
  watch: {
    $route() {
      this.getBreadCrumbs();
    }
  },
  created() {
    this.getBreadCrumbs();
  },
  methods: {
    getBreadCrumbs() {
      console.log(this.$route);
      console.log(this.$route.matched, "matched route");
      let matched = this.$route.matched.filter(item => {
        return true;
      });
      this.breadCrumbList = matched;

      // console.log(matched, "matched");
    }
  }
};
</script>
