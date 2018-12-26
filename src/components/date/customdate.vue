<template>
    <div>
        {{dateTime}}
    </div>
</template>
<script>
    export default{
        name:'customdate',
        computed:{
            dateTime:()=>{
                return Date.now();
            }
        }
    }
</script>