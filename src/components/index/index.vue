<template>
    <div>
        <el-container>
            <el-header class="elheader" height="200px">
                <div>OAUTH2.0-Github接入Demo</div>
            </el-header>
            <el-main class="elmain" :style="elmain">
                <el-button @click="authorized"
                           v-loading.fullscreen.lock="fullscreenLoading">授权GitHub登录
                </el-button>
            </el-main>
            <el-footer class="elfooter" :style="footer">
                <div>接入GitHub-Demo</div>
            </el-footer>
        </el-container>
    </div>
</template>

<style>
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

    export default {
        name: "indexpage",
        data() {
            return {
                fullscreenLoading: false,
                footer: {
                    height: size.height(4)
                },
                elmain:{
                    height:size.height(4,2)
                }
            }
        },
        methods: {
            authorized: function () {
                this.$login.login(this);
            },
        },
        mounted() {

        }
    }
</script>