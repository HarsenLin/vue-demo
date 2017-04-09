import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueResource);

// 开启debug模式
Vue.config.debug = true;

var routers = [
    { path: '/index.html', redirect: '/gmonitor' },
    { path: "/home", name: "欢迎", component: require('./view/hello.vue') },
    { path: "/gmonitor", name: "系统监控", component: require('./view/gmonitor.vue') }
];

const app = new Vue({
    el: "#app",
    router: new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: routers
    }),
    data() {
        return {
            routers: routers,
            header:{ title: "VUE 实例" },
            footer:{ company: "广州科微软件有限公司" }
        }
    },
    components: {
        "my-header": require('./component/my-header.vue'),
        "my-footer": require('./component/my-footer.vue')
    },
    methods: {
        refreshAlarm(data){
            console.log(data);
        }
    }
});
