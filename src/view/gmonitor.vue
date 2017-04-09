<template>
    <table v-bind:style="style"> <tr> <td>
        <ul style="width: auto; display: inline-block; text-align: left;">
            <li v-for="item in msg">{{item}}</li>
        </ul>
    </td> </tr> </table>
</template>

<script type="es6">
    export default {
        data(){
            return {
                msg: ["flume.CHANNEL.c1.EventPutAttemptCount",
                        "flume.CHANNEL.c1.Type",
                        "flume.CHANNEL.c1.EventPutSuccessCount",
                        "flume.CHANNEL.c1.EventTakeAttemptCount",
                        "flume.CHANNEL.c1.StartTime",
                        "flume.CHANNEL.c1.ChannelSize",
                        "flume.CHANNEL.c1.ChannelFillPercentage",
                        "flume.CHANNEL.c1.StopTime",
                        "flume.CHANNEL.c1.ChannelCapacity",
                        "flume.CHANNEL.c1.EventTakeSuccessCount"].map(function(v){
                    var groups = /^flume\.CHANNEL\.([^\.]*)\.(.*)$/ig.exec(v);
                    if(!groups) return v;

                    return "Flume channel " + groups[1] + " " + {
                        "EventPutAttemptCount": "存入数",
                        "Type": "类型",
                        "EventPutSuccessCount": "存入成功数",
                        "EventTakeAttemptCount": "获取次数",
                        "StartTime": "开始时间",
                        "ChannelSize": "渠道大小",
                        "ChannelFillPercentage": "数据占比",
                        "StopTime": "停止时间",
                        "ChannelCapacity": "渠道容量",
                        "EventTakeSuccessCount": "获取成功数"
                    }[groups[2]];
                    }),
                style: { width: "100%", height: "calc(100% - 106px)", textAlign: "center" }
            }
        },
        props: ["header", "footer"],
        methods: { },
        components: { }
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