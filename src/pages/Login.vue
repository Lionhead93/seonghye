<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/pink-back.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <h3>
              <span>SW&nbsp;</span>
              <i class="now-ui-icons ui-2_favourite-28"></i>
              <span>&nbsp;HR</span>
            </h3>
            <br />
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="email"
              v-model="email"
            ></fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              type="password"
              placeholder="password"
              v-model="password"
            ></fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button @click="login" class="btn btn-primary btn-round btn-lg btn-block">입장</button>
              </div>
              <!-- <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>-->
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import firebase from "firebase";

export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      let vm = this;
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        // [START authwithemail]
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(
            function() {
              vm.$router.push("home");
            },
            function() {
              alert("login fail");
            }
          );
        // [END authwithemail]
      }
    }
  },
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
