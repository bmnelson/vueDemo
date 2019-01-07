<template>
    <el-aside :style="asider">
        <el-menu router
                 :show-timeout="400"
                 :default-active="$route.path"
                 mode="vertical"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF"
                 class='menu_wrap'>
            <template v-for="item in menus" :key="">
                <div v-if="!item.hidden&&item.children">
                    <el-menu-item :index="item.path" v-if="hasOnlyOneChildrenComponents(item)">
                        <menu-item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></menu-item>
                    </el-menu-item>
                    <el-submenu v-else>
                        <template slot="title">
                            <menu-item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></menu-item>
                        </template>
                        <el-menu-item-group v-if="item.children">
                            <el-menu-item :index="child.path" v-for="child in item.children" :key="">
                                <menu-item v-if="child.meta" :icon="child.meta.icon"
                                           :title="child.meta.title"></menu-item>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
    import MenuItem from "@/View/layout/SideBar/Item";

    export default {
        name: 'SideBarItem',
        components: {MenuItem},
        data() {
            return {
                asider: {
                    borderRight: '1px solid #eee',
                    // color: '#A7ADB4',
                    backgroundColor: '#304156'
                },
                menus: this.$router.options.routes
            }
        },

        methods: {
            hasOnlyOneChildrenComponents: function (component) {
                console.log(component, "check this out");
                if (component.children) {
                    if (component.children.length === 1) {
                        return true;
                    }
                    return false;
                }
            },
            resolvePath: function () {

            },
            isExternal: function () {

            }
        }
    }
</script>