<template>
    <table v-bind:style="style"> <tr> <td>
        <span>{{msg}}</span>
        <br/><br/>
        <span>标题：</span><el-input v-bind:style="{width: 'auto'}" v-model="header.title" type="text"></el-input>
        <br/><br/>
        <span>公司：</span><el-input v-bind:style="{width: 'auto'}" v-model="footer.company" type="text"></el-input>
        <br/><br/>
        <span>提示：</span><el-input v-bind:style="{width: 'auto'}" v-model="msg" type="text"></el-input>
    </td> </tr> </table>
</template>

<script type="es6">
    export default {
        data(){
            return {
                msg: 'Hello Vue!',
                style: { width: "100%", height: "calc(100% - 106px)", textAlign: "center" }
            }
        },
        props: ["header", "footer"],
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
        background-color: #001A50;
    }
    .header .logo{
        color: aliceblue;
        font-size: 24px;
    }
</style>