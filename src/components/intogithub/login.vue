<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            getInIndex() {
                this.$router.push('/user');
            },
            getToken: function () {
                this.$token.receiveToken(this, this.code, (rs) => {
                    console.log(rs, "rs!");
                    this.$token.savetoken(rs);
                    this.getInIndex();
                })
            },
            open(message) {
                const h = this.$createElement;
                this.$notify({
                    title: 'Loading',
                    duration:2000,
                    message: h('i', {style: 'color: teal'}, message)
                });
            },
            checkLogin() {
                return this.$login.checkLogin(this);
            }
        },
        mounted() {
            this.code = this.$route.query.code;
            this.state = this.$route.query.state;

            if (!this.checkLogin()) {
                this.open("正在授权应用,请稍等......");
                this.getToken();
            } else {
                this.open("授权未过期,正在跳转......");
                this.getInIndex();
            }

        }
    }
</script>