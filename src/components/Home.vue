<template>
  <div id="home">
    <button @click="back" id="back">返回</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
      
    back() {
        this.$dialog.options = {
            okText: '确定',
            cancelText: '取消',
        }
        ,
      this.$dialog
        .confirm("请确认您的选择",this.$dialog.options)
        .then(function() {
          // 点击确定执行
          window.console.log("确定");
          this.$router.push('/main');
        })
        .catch(function() {
          // 点击取消执行
          window.console.log("取消");
        });
    }
  }
};
</script>

<style scoped>
#back {
  text-align: left;
  margin-top: 50px;
  margin-left: 30px;
}
</style>