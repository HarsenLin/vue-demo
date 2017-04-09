<template>
    <div class="footer">
        {{data.company}}
    </div>
</template>

<script type="es6">
    export default {
        props: ["data"],
        methods: {
        }
    }
</script>

<style>
    .footer{
        color: #20a0ff;
        font-size: 10px;
        text-align: right;
        bottom: 0;
        position: static;
        width: calc(100% - 20px);
        height: 25px;
        line-height: 25px;
        padding: 0 10px;
        background-color: #1f2d3d;
    }
</style>