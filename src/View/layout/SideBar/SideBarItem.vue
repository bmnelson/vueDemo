<template>
  <el-aside :style="asider">
    <el-menu
      router
      :show-timeout="400"
      :default-active="$route.path"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      class='menu_wrap'
    >
      <template>
        <div
          v-for="(item,index) in menus"
          :key="`${index}_key`"
        >
          <div v-if="!item.hidden&&item.children">
            <el-menu-item
              :index="item.path"
              v-if="hasOnlyOneChildrenComponents(item)"
            >
              <menu-item
                v-if="item.meta"
                :icon="item.meta.icon"
                :title="item.meta.title"
              ></menu-item>
            </el-menu-item>
            <el-submenu
              v-else
              :index="item.path"
            >
              <template slot="title">
                <menu-item
                  v-if="item.meta"
                  :icon="item.meta.icon"
                  :title="item.meta.title"
                ></menu-item>
              </template>
              <el-menu-item-group v-if="item.children">
                <el-menu-item
                  :index="child.path"
                  v-for="child in item.children"
                >
                  <menu-item
                    v-if="child.meta"
                    :icon="child.meta.icon"
                    :title="child.meta.title"
                  ></menu-item>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </div>

      </template>
    </el-menu>
  </el-aside>
</template>
<style scoped>
.menu_wrap {
  border-right: none;
}
</style>
<script>
import MenuItem from "@/View/layout/SideBar/Item";

export default {
  name: "SideBarItem",
  components: { MenuItem },
  data() {
    return {
      asider: {
        borderRight: "1px solid #eee",
        // color: '#A7ADB4',
        backgroundColor: "#304156",
        width: "200px"
      },
      menus: this.$router.options.routes
    };
  },

  methods: {
    hasOnlyOneChildrenComponents: function(component) {
      if (component.children) {
        if (component.children.length === 1) {
          return true;
        }
        return false;
      }
    },
    resolvePath: function() {},
    isExternal: function() {}
  }
};
</script>