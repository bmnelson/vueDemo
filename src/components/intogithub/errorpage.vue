<template>
    <div>
        error:{{errorMessage}}
    </div>
</template>

<script>
    export default {
        name: "errorpage",
        computed: {
            errorMessage: function () {
                console.log(this.$route, "tell me ");
                return this.$route.query.message;
            }
        }
    }
</script>