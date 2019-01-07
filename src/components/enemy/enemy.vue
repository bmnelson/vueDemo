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

    </div>
</template>

<script>
    import CustomDate from "../date/customdate.vue";
    import {mapState} from 'vuex';


    export default {
        name: 'enemy',
        components: {CustomDate},
        data() {
            return {
                enemyName: 'Enemy One',
            }
        },
        computed: {
            localSum: () => {
                return 12
            },
            ...mapState({
                sum: state => state.sum,
                list: state => state.list
            }),
        },
        methods: {
            add: function () {
                this.$store.commit('increace');
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