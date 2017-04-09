<template>
    <div style="float: right;">
        <el-tag type="success">在线率：99%</el-tag>
        <el-tag type="danger">离线：3</el-tag>
        <el-tag type="warning">总：300</el-tag>
        <el-tag type="primary">Flume： 2/20</el-tag>
        <el-tag type="primary">Spark： 1/280</el-tag>
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
</style>