<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
//import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

const store = useStore();

onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});
onBeforeMount(() => {
  store.state.imageLayout = "profile-overview";
  store.state.showNavbar = false;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add("profile-overview");
});
onBeforeUnmount(() => {
  store.state.isAbsolute = false;
  store.state.imageLayout = "default";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove("profile-overview");
});
</script>
<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url(&quot;https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80&quot;);
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6">
        <div class="card-body p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/logoinspektorat.png"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">Daftar Kehadiran</h5>
                <p class="mb-0 font-weight-bold text-sm">Nama Kegiatan</p>
              </div>
            </div>
            <div
              class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">User Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Nama</label
                  >
                  <argon-input type="text" value="lucky.jesse" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Email</label
                  >
                  <argon-input type="email" value="jesse@example.com" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Jabatan</label
                  >
                  <input class="form-control" type="text" value="Jesse" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >No. HP</label
                  >
                  <argon-input type="text" value="Lucky" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Instansi</label
                  >
                  <argon-input
                    type="text"
                    value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
              <!-- Using the vueSignature component -->
              <vueSignature ref="signature" :options="option" :disabled="disabled" :style="canvasStyle" />
              <!-- Buttons for actions -->
              <argon-button @click="save">Save</argon-button>
              <argon-button @click="clear">Clear</argon-button>
              <argon-button @click="undo">Undo</argon-button>
              <!-- <argon-button @click="addWaterMark">Add Watermark</argon-button> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <profile-card />
        </div> -->
      </div>
    </div>
  </main>
</template>
<script>
//import { defineComponent } from 'vue';
import vueSignature from "vue3-signature";

export default {
  name: "Profile",
  components: {
    vueSignature,  // Registering the component correctly
  },
  data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)",
        canvasStyle: {
        border: '3px solid #000'  // Menambahkan border di canvas
      }
      },
      disabled: false,
      dataUrl: "https://avatars2.githubusercontent.com/u/17644818?s=460&v=4",
    };
  },
  methods: {
    save() {
      var _this = this;
      var png = _this.$refs.signature.save();
      var jpeg = _this.$refs.signature.save("image/jpeg");
      var svg = _this.$refs.signature.save("image/svg+xml");
      console.log(png);
      console.log(jpeg);
      console.log(svg);
    },
    clear() {
      var _this = this;
      _this.$refs.signature.clear();
    },
    undo() {
      var _this = this;
      _this.$refs.signature.undo();
    },
    fromDataURL(url) {
      var _this = this;
      _this.$refs.signature.fromDataURL(url);
    },
    handleDisabled() {
      var _this = this;
      _this.disabled = !_this.disabled;
    },
  },
};
</script>
