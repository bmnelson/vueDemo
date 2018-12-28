<template>
    <div class="mainItem">
        <el-form ref="form" :model="form" label-width="200px" size="small">
            <el-form-item label="Repository Name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="Home Page">
                <el-input v-model="form.homepage"></el-input>
            </el-form-item>

            <el-form-item label="Private">
                <el-switch v-model="form.private"></el-switch>
            </el-form-item>
            <el-form-item label="Has_Projects">
                <el-switch v-model="form.has_projects"></el-switch>
            </el-form-item>
            <el-form-item label="Has_Issues">
                <el-switch v-model="form.has_issues"></el-switch>
            </el-form-item>
            <el-form-item label="Has_Wiki">
                <el-switch v-model="form.has_wiki"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="createRepo"
                           v-loading.fullscreen.lock="loading">新增仓库
                </el-button>
                <el-button>清空</el-button>
                <el-button @click="checkMyAuth">查看我的权限</el-button>
                <el-button @click="getSingleAuth">添加权限</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style>
    .mainItem {
        padding: 50px;
    }

    el-input {
        width: 400px;
    }
</style>
<script>
    import {mapGetters} from 'vuex';
    import {ISLOADING} from "../../store/mutation-types";

    export default {
        name: "createrepo",
        data() {
            return {
                form: {
                    name: "",
                    description: "",
                    homepage: "",
                    private: false,
                    has_issues: false,
                    has_wiki: false,
                    has_projects: false
                },
            }
        },
        computed: {
            ...mapGetters(['loading'])
        },
        methods: {
            createRepo: function () {
                this.$store.commit(ISLOADING, true);
                let params = this.form;

                this.$repos.createRepository(this, params).then((res) => {
                    this.$store.commit(ISLOADING, false);
                    this.$router.push('/showrepo');
                })
            },
            checkMyAuth: function () {
                let tokenInfo = this.$token.loadToken();

                this.$http.get(this.$config.checkMyAuth, {
                    header: {
                        "Accept": "application/vnd.github.v3+json"
                    },
                    params: {
                        access_token: tokenInfo.access_token
                    }
                }).then((rs) => {
                    console.log(rs)
                })
            },
            getSingleAuth: function () {
                let tokenInfo = this.$token.loadToken();

                this.$http.get(this.$config.getSingeGrant(1), {
                    header: {
                        "Accept": "application/vnd.github.v3+json"
                    },
                    params: {
                        access_token: tokenInfo.access_token
                    }
                }).then((rs) => {
                    console.log(rs)
                })
            }
        }
    }
</script>