<template>
  <div id="home">
    <button type="primary" @click="modal1=true" id="back">返回</button>
    <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
      <p>请确认您的选择</p>
    </Modal>
    <p id="username">{{this.$store.getters.getUsername}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
      this.$router.push("/main");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>

<style scoped>
#back {
  text-align: left;
  margin-top: 50px;
  margin-left: 30px;
  float: left;
}
#username {
  text-align: right;
  margin-top: 50px;
  margin-right: 30px;
  float: right;
}
</style>