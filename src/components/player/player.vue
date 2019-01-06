<template>

    <div>
        <!--<el-button @click="testApi">测试Api</el-button>-->
        <em>今年的属相:</em>
        <div>{{yeardetail.animal}}</div>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><p @click="check">查看</p></el-dropdown-item>
                        <el-dropdown-item><p @click="addNewOne">新增</p></el-dropdown-item>
                        <el-dropdown-item><p @click="deleteItem">删除</p></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
        </el-container>

        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="{row}">
                    <el-tag
                            :type="row.tag === '家' ? 'primary' : 'success'"
                            disable-transitions>{{row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button type="danger" @click="deleteRow(scope.$index,scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

        import {mapState, mapGetters, mapActions} from 'vuex';
    import {ADDCHARA, DELETEITEM, TESTAPI} from "../../store/mutation/mutation-types";
    import {TESTACTION} from "../../store/action/action-type";

    export default {
        name: "player",

        created(){
            this.$store.dispatch(TESTACTION);
            console.log(this.$store.state.testapi);
        },
        mounted(){

        },
        computed: {
            filterTableData: () => {

            },
            ...mapState({
                tableData: state => state.tableData
            })
            ,
            ...mapGetters([
                'yeardetail'
            ])
        },
        methods: {

            //根据标签筛选
            filterTag: function (value, row) {
                return value === row.tag;
            },

            //删除当前数据项
            deleteRow: function (index) {
                this.$store.commit(DELETEITEM, index);
            },
            test: function () {
                console.log("test");
            },
            check: function () {
                console.log(this.$store.state.testapi);
            },
            deleteItem: function () {
                console.log(321)
            },
            //右上角小图标新增数据
            addNewOne: function () {
                let payload = {id: 4, date: '20190101', name: 'jackchan', address: '这是哪儿', tag: '家'};
                this.$store.commit(ADDCHARA, payload);
            }
            // testApi: function () {
            //     this.$store.dispatch('testAction').then(() => {
            //     });
            // }
        }
    }
</script>