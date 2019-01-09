<template>
    <el-dialog :title="title"
               :visible.sync="visible"
               @close="closeDia">
    <slot></slot>
    </el-dialog>
</template>

<script>

    export default {
        name: "PopDialog",
        props: {
            title: {
                type: String,
                default: "默认Dialog"
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: this.show
            }
        },
        watch: {
            show(value) {
                console.log(value);
                this.visible = value;
            }
        },
        methods: {
            closeDia() {
                this.$emit('closeDia');
            }
        }
    }
</script>