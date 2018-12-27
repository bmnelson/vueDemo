<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            getToken: function () {
                this.$token.receiveToken(this, this.code, (rs) => {
                    console.log(rs, "rs!");
                    this.$token.savetoken(rs);
                    this.$router.push('/user');
                })
            },
            open() {
                const h = this.$createElement;
                this.$notify({
                    title: 'Loading',
                    message: h('i', {style: 'color: teal'}, '正在授权应用，请稍等......')
                });
            },
        },
        mounted() {
            this.code = this.$route.query.code;
            this.state = this.$route.query.state;
            this.open();
            this.getToken();
        }
    }
</script>