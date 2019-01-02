<template>
    <div>
        <el-container :style="container">
            <el-header class="el-he" :style="header">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 30px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="showRepositories">Your Repositories</el-dropdown-item>
                        <el-dropdown-item>Add New Repositories</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{userinfo.login}}</span>
                <img @click="logout" class="avatar" :src="userinfo.avatar_url"/>
            </el-header>
            <el-main :style="main">
                <el-container>
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
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-main>
            <el-footer class="elfooter" :style="footer">
                <div class="elfooterContent"><p>
                </p></div>
            </el-footer>
        </el-container>
    </div>
</template>
<style>
    .avatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        padding: 10px;
    }

    .el-he {
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
    }

    .elfooter {
        padding-top: 10px;
        position: absolute;
        bottom: 0;
    }

    .elfooterContent {
        position: absolute;
        bottom: 50px;
        left: 50%;
        font-size: 15px;
        color: #666;
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
                main: {
                    height: size.height(2)
                },
                footer: {
                    height: size.height(4)
                },
                header: {
                    height: size.height(8, 1),
                    textAlign: 'right',
                    fontSize: '15px'
                },
                container: {
                    height: size.height,
                    border: '2px solid #eee'
                },
                asider: {
                    height: size.height(2),
                    backgroundColor: '#fff',
                    borderRight:'1px solid #eee'
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
            },
            logout() {
                let that = this;
                if (that.$login.checkLogin(that)) {
                    this.$confirm('即将登出用户, 是否继续?', 'Logout', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        that.$store.commit(USERINFO_IMMU, {
                            login: '未登录',
                            avatar_url: "../../../assets/images/avatar.png"
                        });
                        that.$token.deleteToken().then(() => {
                            that.$message({
                                type: 'success',
                                message: '登出成功!'
                            });
                        });

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消登出'
                        });
                    });
                } else {
                    that.$message({
                        type: 'info',
                        message: '已登出，无需重复操作'
                    });
                }

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