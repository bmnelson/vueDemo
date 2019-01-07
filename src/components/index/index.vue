<template>
    <div>
        <el-container>
            <el-header class="elheader" height="200px">
                <div>OAUTH2.0-Github接入Demo</div>
            </el-header>
            <el-main class="elmain" :style="elmain">
                <el-button @click="authorized"
                           v-loading.fullscreen.lock="loading">授权GitHub登录
                </el-button>
            </el-main>
            <el-footer class="elfooter" :style="footer">
                <div>接入GitHub-Demo</div>
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
    .elheader {
        display: flex;
        background-color: #444;
        text-align: center;
        color: #fff;
        justify-content: center;
        align-items: center;

    }

    .elmain {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .elfooter {
        display: flex;
        justify-content: center;
        border-top: 1px solid antiquewhite;
        font-size: 15px;
        color: #666;
        padding-top: 10px;
    }
</style>

<script>
    import size from '../../utils/getSize';
    import {mapGetters} from 'vuex';
    import {ISLOADING} from "../../store/mutation/mutation-types";

    export default {
        name: "indexpage",

        data() {
            return {
                fullscreenLoading: false,
                footer: {
                    height: size.height(4)
                },
                elmain: {
                    height: size.height(4, 2)
                }
            }
        },
        computed: {
            ...mapGetters([
                'loading'
            ])
        },
        methods: {
            authorized: function () {
                let that = this;
                this.$store.commit(ISLOADING, true);
                this.$login.login(this).then(() => {
                    that.time = setTimeout(() => {
                        that.$store.commit(ISLOADING, false);
                    }, 2000);
                });
            },
            checkLogin: function () {
                if (this.$login.checkLogin(this)) {
                    this.$router.push('/enemy');
                }
            }
        },
        beforeMount() {
            this.checkLogin();
            let message = this.$route.query.message;
            if (message) {
                this.$message({
                    type: 'info',
                    message: message
                });
            }
        },
        mounted() {

        }
        ,
        destroyed() {
            clearTimeout(this.time);
        }
    }
</script>