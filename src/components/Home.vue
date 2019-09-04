<template>
  <div id="home">
    <div id="header">
      <button type="primary" @click="modal1=true" id="back">返回</button>
      <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
        <p>请确认您的选择</p>
      </Modal>
      <p id="username">{{this.$store.getters.getUsername}}</p>
    </div>
    <div id="menu">
        <Menu :theme="theme3" active-name="1">
        <MenuGroup title="导航">
            <MenuItem name="1">
                <Icon type="md-document" />
                todolist
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                我的
            </MenuItem>
        </MenuGroup>
        </Menu>
    </div>
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
  margin-top:50px; 
  margin-left:50px;
  float: left;
}
#username {

  margin-top:50px; 
  margin-right:50px;
  float: right;
} 
#menu {
  
  float:left;
  margin-top:100px; 
  margin-left:-50px;
}
</style>