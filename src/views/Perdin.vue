<script setup>
//import AuthorsTable from "./components/AuthorsTable.vue";
//import ProjectsTable from "./components/ProjectsTable.vue";
</script>
<template>
 <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <h6>Daftar Perjalanan Dinas ASN Inspektorat</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table v-if="posts.length > 0" id="dataTable" class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="orderable" style="align-text: center;">NIP <i class="fas fa-sort"></i></th>
                    <th class="orderable" style="align-text: center;">Nama <i class="fas fa-sort"></i></th>
                    <th class="orderable" style="align-text: center;">Jabatan<i class="fas fa-sort"></i></th>
                    <th class="orderable" style="align-text: center;">Unit Kerja<i class="fas fa-sort"></i></th>
                    <th class="orderable" style="align-text: center;">Golongan<i class="fas fa-sort"></i></th>
                    <th class="orderable" style="align-text: center;">Eselon<i class="fas fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in posts" :key="index">
                    <!-- <td>
                      <button class="btn btn-primary" @click="showPreviewModal(item.kodesatker)" data-toggle="tooltip" data-placement="top" title="Detail">
                        <i class="fas fa-fw fa-search"></i>
                      </button>
                    </td> -->
                    <td><small>{{ item.nip }}</small></td>
                    <td><small>{{ item.nama }}</small></td>
                    <td><small>{{ item.jabatan }}</small></td>
                    <td><small>{{ item.unit_kerja }}</small></td>
                    <td><small>{{ item.golongan }}</small></td>
                    <td><small>{{ item.eselon }}</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
       <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Projects table</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center justify-content-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Project
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Budget
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Status
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
                    >
                      Completion
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-spotify.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="spotify"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Spotify</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$2,500</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">working</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">60%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-info"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 60%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button class="btn btn-link text-secondary mb-0">
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-invision.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="invision"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Invision</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$5,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">done</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">100%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-success"
                              role="progressbar"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 100%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-jira.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="jira"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Jira</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$3,400</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">canceled</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">30%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-danger"
                              role="progressbar"
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="30"
                              style="width: 30%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-slack.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="slack"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Slack</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$1,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">canceled</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">0%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-success"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="0"
                              style="width: 0%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="https://demos.creative-tim.com/argon-dashboard/assets/img/small-logos/logo-webdev.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="webdev"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Webdev</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$14,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">working</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">80%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-info"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="80"
                              style="width: 80%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-xd.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="xd"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Adobe XD</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$2,300</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">done</span>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">100%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-success"
                              role="progressbar"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 100%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick } from 'vue';
import $ from 'datatables.net-dt/js/dataTables.dataTables.min.js';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import axios from 'axios';

export default {
  data() {
    return {
      posts: [], // Menyimpan data yang akan ditampilkan
    };
  },
  mounted() {
    nextTick(() => {
      this.initializeDataTable(); // Menunggu hingga DOM sepenuhnya siap
    });
    this.fetchPosts(); // Ambil data saat komponen dimuat
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('/api/persons');
        this.posts = response.data; // Simpan data dari API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    initializeDataTable() {
      if (this.posts.length === 0) return; // Jangan inisialisasi DataTable jika tidak ada data
      const table = $('#dataTable');
      
      if (table.length) {
        table.DataTable({
          paging: true, // Aktifkan pagination
          pageLength: 10, // Jumlah baris per halaman (default: 10)
          lengthMenu: [10, 25, 50, 75, 100], // Opsi jumlah item per halaman
          searching: true, // Aktifkan pencarian (searchbox)
          ordering: true, // Aktifkan pengurutan
          info: true, // Menampilkan informasi (seperti "Menampilkan 1-10 dari 50 entri")
          autoWidth: false, // Otomatis sesuaikan lebar kolom
          responsive: true, // Responsif pada ukuran layar kecil
          language: {
            paginate: {
              previous: 'Sebelumnya', // Ubah teks pagination jika perlu
              next: 'Berikutnya'
            }
          }
        });
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #4CAF50;
}

th, td {
  text-align: center;
}

table.dataTable {
  width: 100%;
}

table.dataTable thead th {
  background-color: #f2f2f2;
}

table.dataTable tbody tr:hover {
  background-color: #e9e9e9;
}
</style>
