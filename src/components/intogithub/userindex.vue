<template>
    <div>
        <el-container class="container">
            <side-bar-item></side-bar-item>
            <el-main class="elmain">
                <el-container class="rightContainer">
                    <el-header class="el-he" :style="header">
                        <bread-crumb-header></bread-crumb-header>
                        <div class="headerInfo">
                            <el-dropdown>
                                <i class="el-icon-setting" style="margin-right: 30px"></i>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item @click.native="showRepositories">Your Repositories
                                    </el-dropdown-item>
                                    <el-dropdown-item>Add New Repositories</el-dropdown-item>
                                    <el-dropdown-item>删除</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <p>{{userinfo.login}}</p>
                            <img alt="" @click="logout" class="avatar" :src="userinfo.avatar_url"/>
                        </div>
                    </el-header>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer class="elfooter">
                        <p>@Practice Demo 2019-01-05 Author:NelsonLi</p>
                    </el-footer>
                </el-container>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped>
    .container {
        height: 100vh;
    }

    .rightContainer {
        height: 100%;
    }

    .elmain {
        padding: 0;
    }

    .headerInfo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .avatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        padding: 5px;
    }

    .el-he {
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .elfooter {
        display: flex;
        justify-content: center;
        font-size: 15px;
        color: #888;
    }
</style>
<script>


    import {mapState, mapGetters, mapActions} from 'vuex';
    import {USERINFO_IMMU} from "../../store/mutation-types";
    import size from '../../utils/getSize';
    import SideBarItem from '../../View/layout/SideBar/SideBarItem';
    import BreadCrumbHeader from '@/components/BreadCrumbHeader';

    export default {
        name: "user",
        components: {
            SideBarItem,
            BreadCrumbHeader
        },
        data() {
            return {

                main: {
                    height: size.height(2)
                },
                header: {
                    height: size.height(18, 1),
                    textAlign: 'right',
                    fontSize: '15px'
                },
                container: {
                    height: size.height(),
                    border: '2px solid #eee'
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