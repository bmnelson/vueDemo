<template>
    <div class="mainItem">
        <el-form ref="form" :rules="rules" :model="form" label-width="200px" size="mini">
            <el-form-item label="Repository Name" prop="name">
                <el-input @input="ifNull(0)" @change="ifValidate(0)" v-model="form.name"></el-input>
                <!--<em v-show="showS[0]">*</em>-->
            </el-form-item>
            <el-form-item label="Description" prop="description">
                <el-input @input="ifNull(1)" @change="ifValidate(1)" v-model="form.description"></el-input>
                <!--<em v-show="showS[1]">*</em>-->
            </el-form-item>
            <el-form-item label="Home Page" prop="homepage">
                <el-input @input="ifNull(2)" @change="ifValidate(2) " v-model="form.homepage"></el-input>
                <!--<em v-show="showS[2]">*</em>-->
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
    em {
        color: red;
    }

    .mainItem {
        padding: 50px;
    }

    el-input {
        width: 400px;
    }
</style>
<script>
    import {mapGetters} from 'vuex';
    import {ISLOADING} from "../../store/mutation/mutation-types";

    export default {
        name: "createrepo",
        data() {
            return {
                showStar: [true, true, true],
                rules: {
                    name: [
                        {required: true, message: '请输入仓库名称', trigger: 'blur,change'},
                        {min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入描述', trigger: 'change'}
                    ],
                    homepage: [
                        {type: 'url', required: true, message: '请输入主页', trigger: 'change'}
                    ]
                },
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
            ...mapGetters(['loading']),
            showS: function () {
                return this.showStar;
            }
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
                    access_token: tokenInfo.access_token
                }).then((rs) => {
                    console.log(rs)
                })
            },
            getSingleAuth: function () {
                let tokenInfo = this.$token.loadToken();

                this.$http.get(this.$config.getSingeGrant(1), {
                    access_token: tokenInfo.access_token
                }).then((rs) => {
                    console.log(rs)
                })
            },
            checkStringLength: function (str) {
                return str.length == 0;
            },
            ifNull: function (e) {
                switch (e) {
                    case 0:
                        this.showS[e] = this.checkStringLength(this.form.name);
                        break;
                    case 1:
                        this.showS[e] = this.checkStringLength(this.form.description);
                        break;
                    case 2:
                        this.showS[e] = this.checkStringLength((this.form.homepage));
                        break;

                }
            },
            ifValidate: function (e) {

            }
        }
    }
</script>