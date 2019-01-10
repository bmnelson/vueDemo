<template>
    <div>
        <p>localSum is {{localSum}}</p>
        <CustomDate></CustomDate>
        <li>
            {{enemyName}}
        </li>
        <div v-for="item in list">
            <label>
                <input type="checkbox" :name="item.name" :value="item.age">{{item.name}}
            </label>
        </div>
        <div>
            <input id="name" placeholder="enter name"/>
        </div>
        <div>
            <input id="age" placeholder="enter age"/>
            <button @click="addStudent">添加</button>
        </div>
        <li>{{sum}}</li>
        <button @click="add">sum+1</button>
        <el-button @click="showdia">dialog</el-button>
        <pop-dialog :title="enemyName" :show.sync="show" @closeDia="closeDia">
            <form-test ref="form_test"></form-test>
        </pop-dialog>
        <el-input v-model="searchText"></el-input>
        <el-table :data="formData">
            <el-table-column prop="contact.tel" label="tel" width="140">
            </el-table-column>
            <el-table-column prop="name" label="name" width="120">
            </el-table-column>
            <el-table-column prop="contact.source" label="contact.source">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import CustomDate from "../date/customdate.vue";
    import {mapState} from 'vuex';
    import PopDialog from '@/components/PopDialog';
    import FormTest from '@/components/PopDialog/Forms/form_test'

    export default {
        name: 'enemy',
        components: {
            CustomDate,
            PopDialog,
            FormTest
        },
        data() {
            return {
                result: [],
                enemyName: 'Enemy One',
                searchText: "",
                show: false,
                jsonData: [
                    {
                        name: "狼蛛",
                        contact:
                            {
                                tel: 212121,
                                source: "公司"
                            },
                        email: "382362623@qq.com"
                    },
                    {
                        name: "雷蛇",
                        contact:
                            {
                                tel: 343434,
                                source: "公司"
                            },
                        email: "112121212@qq.com"
                    },
                    {
                        name: "达尔优",
                        contact:
                            {
                                tel: 111111,
                                source: "客户"
                            },
                        email: "382362623@qq.com"

                    }
                ]
            }
        },
        computed: {
            formData() {
                return this.jsonData.filter((item) => {
                    this.eachJson(item);
                    let filter = false;
                    for (let item in this.result) {
                        if (this.result[item] === true) {
                            filter = true
                        }
                    }
                    return this.searchText === "" ? true : filter;
                })
            },
            localSum: () => {
                return 12
            },
            ...mapState({
                sum: state => state.sum,
                list: state => state.list
            }),
        },
        mounted() {

        },
        methods: {
            eachJson(json) {
                for (let item in json) {
                    if (item === 'tel' || item === 'source') {
                        if ((json[item].toString()).indexOf(this.searchText) !== -1) {
                            this.result[item] = true;
                        } else {
                            this.result[item] = false;
                        }
                    }
                    ;
                    if (typeof (json) == 'object') {
                        this.eachJson(json[item])
                    }
                }
            },
            add: function () {
                this.$store.commit('increace');
            },
            showdia() {
                this.show = true
            },
            closeDia() {
                this.show = false;
                this.$refs.form_test.resetForm();
            },
            addStudent: function () {
                console.log(this.$store.state.list);
                let payload = {
                    name: document.getElementById('name').value,
                    age: document.getElementById('age').value
                }
                this.$store.commit('addStudent', payload);
                console.log(this.$store.state.list);
            }
        }
    }
</script>