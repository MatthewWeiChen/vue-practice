<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetail :myName="name"></UserDetail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <UserEdit></UserEdit>
      </div>
    </div>
  </div>
</template>

<script>
//Parent Component
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: 'Matt',
    };
  },
  methods: {
    changeName() {
      this.name = 'Anna';
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
