<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useStore } from "vuex";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

const store = useStore();
onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");

});
onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});
</script>
<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('/assets/img/gedung-sate.jpg');
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
                <h5 class="mb-1">Form Daftar Kehadiran</h5>
                <!-- <p class="mb-0 font-weight-bold text-sm">Nama Kegiatan</p> -->
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
                <div class="col-md-12">
                    <label for="example-text-input" class="form-control-label"
                      >Nama Kegiatan</label
                    >
                    <select id="id" v-model="id" name="nama_kegiatan" class="form-control" @change="getDataRapat()">
                      <option disabled value="">Pilih Kegiatan</option>
                      <option v-for="data in items" :key="data.id" :value="data.id">{{ data.nama }} - {{ data.ruangan}}</option>
                    </select>
                </div>
                <div class="col-md-6">
                  <label for="nama" class="form-control-label"
                    >Nama</label
                  >
                  <argon-input type="text" v-model="nama" />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-control-label"
                    >Email</label
                  >
                  <argon-input type="email" v-model="email" />
                </div>
                <div class="col-md-12">
                    <label for="instansi" class="form-control-label"
                      >Instansi</label
                    >
                    <argon-input
                      type="text"
                      v-model="instansi"
                    />
                </div>
                <div class="col-md-6">
                  <label for="jabatan" class="form-control-label"
                    >Jabatan</label
                  >
                  <input class="form-control" type="text" v-model="jabatan" />
                </div>
                <div class="col-md-6">
                  <label for="no_hp" class="form-control-label"
                    >No. HP</label
                  >
                  <argon-input type="text" v-model="nohp" />
                </div>
              </div>
              <label for="tanda_tangan" class="form-control-label"
                    >Tanda Tangan</label
                  >
                <div class="col-md-4" style="border: 2px solid black; width: 400px; height: 200px;">
                <!-- Using the vueSignature component -->
                <vueSignature ref="signature" :options="option" :disabled="disabled" />
                <!-- Buttons for actions -->
                 </div>
                 <div class="col-md-6">
                <argon-button @click="save">Save</argon-button>
                <argon-button @click="clear">Clear</argon-button>
                <!-- <argon-button @click="undo">Undo</argon-button> -->
                <!-- <argon-button @click="addWaterMark">Add Watermark</argon-button> -->
                </div>
                <input type="hidden" v-model="tanda_tangan" name="tanda_tangan" />
            </div>
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-profile">
            <img
              src="../assets/img/gedung-sate.jpg"
              alt="Image placeholder"
              class="card-img-top"
            />
            <div class="row justify-content-center">
              <div class="col-4 col-lg-4 order-lg-2">
                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="javascript:;">
                    <img
                      src="../assets/img/logoinspektorat.png"
                      class="rounded-circle img-fluid border border-2 border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid text-center">
                      <span class="text-sm opacity-8">Anggota Rapat</span>
                      <span class="text-lg font-weight-bolder">{{ anggota }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <h7>
                  <span class="font-weight-light">Nama Kegiatan: </span>
                  {{ this.namaRapat }}
                </h7><br/>
                <h7>
                  <span class="font-weight-light">Tanggal Kegiatan: </span>
                  {{this.hari}}, {{ this.tanggal }}
                </h7><br/>
                <h7>
                  <span class="font-weight-light">Waktu Kegiatan: </span>
                  {{ this.jam_mulai }} s.d. {{ this.jam_selesai }}
                </h7><br/>
                <h7>
                  <span class="font-weight-light">Tempat Kegiatan: </span>
                  {{ this.ruangan }}
                </h7>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Inspektorat Daerah
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>Provinsi Jawa Barat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import vueSignature from "vue3-signature";
import html2canvas from 'html2canvas';

export default {
  name: "Kehadiran",
  components: {
    vueSignature,  // Registering the component correctly
  },
  data() {
    return {
      id: null,
      items:[],
      namaRapat: '',
      jam_mulai: '',
      jam_selesai: '',
      ruangan: '',
      tanggal : '',
      hari: '',
      anggota: '',
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)",
      },
      disabled: false,
      dataUrl: "https://avatars2.githubusercontent.com/u/17644818?s=460&v=4",
    };
  },
  mounted() {
    this.fetchRapat();
  },
  methods: {
    async fetchRapat() {
      try {
        const response = await axios.get('/api/meetlist');
        this.items = response.data; // Simpan data dari API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async getDataRapat() {
      if (!this.id) return; // Only fetch if there's an id

      try {
        const response = await axios.get(`../api/meeting/?id=${this.id}`);
        this.namaRapat = response.data[0].nama;
        this.hari = response.data[0].hari;
        this.tanggal = response.data[0].tanggal;
        this.jam_mulai = response.data[0].jam_mulai; // store the selected meeting data in rapat
        this.jam_selesai = response.data[0].jam_selesai;
        this.ruangan = response.data[0].ruangan;

        const anggota = await axios.get(`../api/member-count/?id=${this.id}`);
        this.anggota = anggota.data[0].jumlah_member;
      } catch (error) {
        console.error("Error fetching data for meeting:", error);
      }
    },
    async save() {
      const signatureCanvas = this.$refs.signature.$el; // Ambil elemen canvas dari komponen signature
    if (signatureCanvas) {
      try {
        // Gunakan html2canvas untuk mengambil gambar dari canvas
        const canvas = await html2canvas(signatureCanvas);
        const signatureData = canvas.toDataURL('image/png'); // Dapatkan gambar dalam base64 format PNG

        console.log(signatureData); // Cek data base64 di console
        this.tanda_tangan = signatureData;

        // Kirim data ke backend
        const formData = new FormData();
        formData.append('id_rapat', this.id);
        formData.append('nama', this.nama);
        formData.append('jabatan', this.jabatan);
        formData.append('email', this.email);
        formData.append('nohp', this.nohp);
        formData.append('instansi', this.instansi);
        formData.append('tanda_tangan', signatureData); // Base64 tanda tangan

        const response = await axios.post('../api/member-meetings', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data.message); // Tampilkan pesan sukses
        alert('Tanda tangan berhasil disimpan!');
      } catch (error) {
        console.error('Error capturing signature:', error);
        alert('Gagal menyimpan tanda tangan!');
      }
    }
  },
    clear() {
      var _this = this;
      _this.$refs.signature.clear();
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