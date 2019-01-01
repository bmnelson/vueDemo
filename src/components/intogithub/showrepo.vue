<template>
    <div>
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
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import {FETCH_REPOSITRIES} from "../../store/action-type";
    import {ISLOADING} from "../../store/mutation-types";

    export default {
        name: "showrepo",
        computed: {
            ...mapGetters([
                'repositories',
                'loading'])
        },
        methods: {
            showRepositories: function () {
                let that = this;
                this.$store.commit(ISLOADING, true);
                console.log(this.$store.state.loading);
                this.$store.dispatch(FETCH_REPOSITRIES).then(() => {
                    this.t = setTimeout(() => {
                        that.$store.commit(ISLOADING, false);
                    }, 2000);

                });
            }
        },
        mounted() {
            this.showRepositories();
        }
    }
</script>