<template>
    <div>
        <el-container :style="container">
            <el-aside width="260px" :style="asider">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>-GitHub-</template>
                        <el-menu-item-group>
                            <template slot="title">Repository</template>
                            <el-menu-item index="1-1">
                                <router-link to="/createrepo">
                                    <li>Create Respository</li>
                                </router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/showrepo">
                                    <li>Check Respository</li>
                                </router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 15px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 30px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="showRepositories">Your Repositories</el-dropdown-item>
                            <el-dropdown-item>Add New Repositories</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>{{userinfo.login}}</span>
                    <img class="avatar" :src="userinfo.avatar_url"/>
                </el-header>

                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>
<style>
    .avatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        padding: 10px;
    }
</style>
<script>


    import {mapState, mapGetters, mapActions} from 'vuex';
    import {USERINFO_IMMU} from "../../store/mutation-types";
    import size from '../../utils/getSize';

    export default {
        name: "user",
        data() {
            return {
                container: {
                    height: size.height,
                    border: '2px solid #eee'
                },
                asider: {
                    height: size.height,
                    backgroundColor: '#fff'
                }
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        methods: {
            loadUserInfo: function () {
                let tokenInfo = this.$token.loadToken();
                let that = this;
                this.$http.get(this.$config.userInfoUri, {
                    access_token: tokenInfo.access_token
                }).then((rs) => {
                    that.$store.commit(USERINFO_IMMU, rs);
                })
            }
        },
        mounted() {
            this.loadUserInfo();
        },
        destroyed() {
            clearTimeout(this.t)
        }
    }
</script>