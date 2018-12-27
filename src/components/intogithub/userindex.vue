<template>
    <div>
        <el-container :style="container">
            <el-aside width="260px" :style="asider">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>-GitHub-</template>
                        <el-menu-item-group>
                            <template slot="title">操作</template>
                            <el-menu-item index="1-1">新增项目</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 30px">
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

                <el-main>
                    <el-table :data="repositories" v-loading="loading">
                        <el-table-column align="left" min-width="30%" prop="name" label="Project-Name" width="140">
                        </el-table-column>
                        <el-table-column align="center" prop="owner.login" label="Owner" width="120">
                        </el-table-column>
                        <el-table-column align="right" prop="description" label="Description">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style>
    .avatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        padding:10px;
    }
</style>
<script>


    import {mapState, mapGetters, mapActions} from 'vuex';
    import {FETCH_REPOSITRIES} from "../../store/action-type";
    import {USERINFO_IMMU, ISLOADING} from "../../store/mutation-types";
    import size from '../../utils/getSize';

    export default {
        name: "user",
        data() {
            return {
                container: {
                    height: size.height,
                    border: '2px solid #eee'
                },
                asider:{
                    height:size.height,
                    backgroundColor:'#fff'
                }
            }
        },
        computed: {
            ...mapGetters([
                'repositories',
                'userinfo',
                'loading'
            ])
        },
        methods: {
            loadUserInfo: function () {
                let tokenInfo = this.$token.loadToken();
                let that = this;
                this.$http.get(this.$config.userInfoUri, {
                    header: {
                        "Accept": "application/json"
                    },
                    params: {
                        access_token: tokenInfo.access_token
                    }
                }).then((rs) => {
                    that.$store.commit(USERINFO_IMMU, rs);

                })
            },
            showRepositories: function () {
                let that = this;
                this.$store.commit(ISLOADING, true);
                console.log(this.$store.state.loading);
                this.$store.dispatch(FETCH_REPOSITRIES, {headers: {"Accept": "application/json"}}).then(() => {
                    this.t = setTimeout(() => {
                        that.$store.commit(ISLOADING, false);
                    }, 2000);

                });
            }
        },
        mounted() {
            this.loadUserInfo();
        },
        destroyed(){
            clearTimeout(this.t)
        }
    }
</script>