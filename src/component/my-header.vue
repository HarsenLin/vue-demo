<template>
    <div class="header">
        <span class="logo">{{data.title}}</span>
        <my-alarm-total></my-alarm-total>
    </div>
</template>

<script type="es6">
    export default {
        props: ["data"],
        methods: {
        },
        components: {
            "my-alarm-total": require('../component/my-alarm-total.vue')
        }
    }
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: auto;
    }
    .header{
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        background-color: #1f2d3d;
    }
    .header .logo{
        color: #20a0ff;
        font-size: 24px;
    }
</style>