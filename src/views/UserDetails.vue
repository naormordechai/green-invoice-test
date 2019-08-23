<template>
  <section>
    <h2 class="title">User info</h2>
    <ul>
      <li>
        <span class="bold">activationDate:</span>
        {{userInfo.activationDate}}
      </li>
      <li>
        <span class="bold">activeBusinessCount:</span>
        {{userInfo.activeBusinessCount}}
      </li>
      <li>
        <span class="bold">businessId:</span>
        {{userInfo.businessId}}
      </li>
      <li>
        <span class="bold">email:</span>
        {{userInfo.email}}
      </li>
      <li>
        <span class="bold">firstName:</span>
        {{userInfo.firstName}}
      </li>
      <li>
        <span class="bold">firstPurchaseDate:</span>
        {{userInfo.firstPurchaseDate}}
      </li>
      <li>
        <span class="bold">id:</span>
        {{userInfo.id}}
      </li>
      <li>
        <span class="bold">inboundEmail:</span>
        {{userInfo.inboundEmail}}
      </li>
      <li>
        <span class="bold">lastName:</span>
        {{userInfo.lastName}}
      </li>
      <li>
        <span class="bold">packageId:</span>
        {{userInfo.packageId}}
      </li>
    </ul>
    <div class="mt-20">
      <h2 class="title">Business details</h2>
      <ul>
        <li v-for="business in userInfo.businesses" :key="business.id">
          <div>
            <span class="bold">id:</span>
            {{business.id}}
          </div>
          <div>
            <span class="bold">name:</span>
            {{business.name}}
          </div>
          <div>
            <span class="bold">address:</span>
            {{business.address}}
          </div>
          <div>
            <span class="bold">city:</span>
            {{business.city}}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters.loggedInUser;
    }
  }
};
</script>

<style lang="scss" scoped>
.title-user-info {
  text-decoration: underline;
  margin-bottom: 15px;
}
section {
  padding: 16px;
}
ul {
  list-style-type: none;
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>>
