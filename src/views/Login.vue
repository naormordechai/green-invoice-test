<template>
  <section class="flex">
    <div class="left-side flex column space-between align-items-center">
      <div class="align-self-start">
        <img src="../assets/images/green_logo.svg" />
      </div>
      <div class="form-section flex column space-between">
        <h2>התחברות לחשבונית ירוקה</h2>
        <form class="flex column space-around" @submit="onLogin($event)">
          <div class="flex column">
            <input v-model="userInfo.email" type="email" required placeholder="מייל" />
            <span class="font-size-small opacity-54">כתובת המייל איתה נרשמת לחשבונית ירוקה</span>
          </div>
          <div class="flex column">
            <input v-model="userInfo.password" type="password" placeholder="סיסמא" />
            <span class="font-size-small opacity-54">שכחת סיסמא</span>
          </div>
          <div class="flex space-between">
            <button type="submit" class="btn btn-enter-regular">כניסה</button>
            <button
              disabled
              class="btn btn-enter-google flex align-items-center justify-content-center"
            >
              <span>כניסה עם גוגל</span>
              <img src="../assets/images/Google_G.svg" />
            </button>
          </div>
        </form>
      </div>
      <footer class="flex font-size-small space-between align-items-end">
        <div class="flex column">
          <span class="flex align-items-center">
            <img src="../assets/images/green_leaf.svg" />
            <span>חשבונית ירוקה 2019</span>
          </span>
          <span>הפקת חשבונות ומסמכים עסקיים באינטרנט</span>
        </div>
        <span class="free-join">להצטרפות חינם</span>
      </footer>
    </div>
    <div class="flex-fill right-side flex align-items-center">
      <img src="../assets/images/green_login_page.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async onLogin(e) {
      e.preventDefault();
      const user = await this.$store.dispatch({
        type: "login",
        userInfo: this.userInfo
      });
      if (user) {
        this.$router.push("welcome");
      } else {
      }
    }
  }
};
</script>

<style scoped lang="scss">
section {
  direction: rtl;
}
.left-side {
  height: 100vh;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 16px 48px;

  img {
    width: 250px;
  }

  .form-section {
    height: 350px;
    h2 {
      color: #4f68ec;
      font-size: 42px;
      margin-bottom: 40px;
    }
    form {
      height: 100%;
      input {
        border: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.34);
        outline: none;
        padding: 12px 0;
        font-size: 16px;
        margin-bottom: 10px;
      }
      input:focus {
        border-bottom-color: rgba(0, 0, 0, 0.8);
      }
      .btn {
        border-radius: 1000px;
        cursor: pointer;
        padding: 16px 0;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 600;
      }

      .btn-enter-regular {
        width: 55%;
        background: #4f68ec;
        color: #fff;
        transition: 0.2s ease-in-out;
        &:hover {
          background: #eee;
          color: #4f68ec;
          border: 1px solid #4f68ec;
        }
        &:active {
          transform: scale(0.9);
        }
      }

      .btn-enter-google {
        width: 40%;
        color: #4f68ec;
        border: 1px solid #4f68ec;
        background: inherit;
        img {
          width: 25px;
          margin-right: 15px;
        }
      }
    }
  }
  footer {
    width: 452px;
    max-width: 452px;
    justify-content: space-between;
    & > div:first-child {
      color: #446073;
      & > span:first-child {
        margin-bottom: 10px;
        img {
          width: 12px;
          margin-left: 10px;
        }
      }
    }
    .free-join {
      color: #30cd59;
      text-decoration: underline;
    }
  }
}

.right-side {
  background: #ffdcdc;
  height: 100vh;
  max-width: 50%;
  flex: 0 0 50%;
  img {
    width: 100%;
  }
}

@media (max-width: 660px) {
  .left-side {
    img {
      width: 27vw;
    }
  }
}

@media (max-width: 1100px) {
  .left-side {
    padding: 16px;
  }
}
</style>