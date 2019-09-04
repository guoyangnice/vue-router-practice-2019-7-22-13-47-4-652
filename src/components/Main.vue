<template>
    <div id="main">
        <h1>欢迎</h1>
        <button @click="startButton">开始使用</button>
        <br/>
        <p>请输入姓名</p>
        <input type="text" v-model="username"/>
    </div>
</template>

<script>
import store from "@/store/store";
export default {
    name:'Main',
    store,
    data(){
        return {
            username : ""
        }
    },
    methods:{
        startButton(){
            this.$store.commit('updateUsername',this.username);
            window.console.log(this.username);
            this.$router.push('/home');
        }
    },

}
</script>

<style scoped>
    #id{
        text-align: center;
    }
</style>