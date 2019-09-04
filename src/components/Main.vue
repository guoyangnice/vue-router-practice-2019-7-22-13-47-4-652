<template>
    <div>
        <h1>欢迎</h1>
        <button @click="startButton">开始使用</button>
    </div>
</template>

<script>
export default {
    name:'Main',
    methods:{
        startButton(){
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>

</style>