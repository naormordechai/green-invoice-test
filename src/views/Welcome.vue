<template>
  <section class="container">
    <h1>Welcome page</h1>
    <h2>
      <span class="opacity-54">Hello:</span>
      <span class="bold">{{userInfo.firstName}} {{userInfo.lastName}}</span>
    </h2>
    <h2>
      <span class="opacity-54">Welcome to your:</span>
      <span class="bold">{{userInfo.businesses[0].name}}</span>
    </h2>
    <a @click="$router.push('/details')">click here to details</a>
    <button @click="onLogout()">Logout</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onLogout() {
      this.$store.commit({ type: "setUser", data: null });
      this.$router.push("/");
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.loggedInUser;
    },
  }
};
</script>

<style scoped lang="scss">
section {
  text-align: center;
  padding: 16px;
}
h1 {
  text-decoration: underline;
  margin-bottom: 30px;
}
a {
  display: block;
  cursor: pointer;
  color: blue;
  font-size: 18px;
  text-decoration: underline;
  transition: .2s;
  &:hover {
    opacity: .54;
  }
}
  button {
    outline: none;
    border: none;
    width: 250px;
    border-radius: 1000px;
    padding: 16px 0;
    font-size: 18px;
    border: 1px solid #4f68ec;
    background: inherit;
    cursor: pointer;
    margin-top: 20px;
    transition: .3s;
    &:hover {
      background: #4f68ec;
      color: #fff;
    }
  }
</style>>