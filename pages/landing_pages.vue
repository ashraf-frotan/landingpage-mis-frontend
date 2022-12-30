<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Landing Pages',
          icon: 'mdi-image-album',
          url: 'landing_pages',
        }"
      />
      <ActionsCard
        @openShowDialog="openShowDialog"
        @deleteRecord="destroy"
        @openAddDialog="openAddDialog"
        @openEditDialog="openEditDialog"
        @changeStatus="changeStatus"
        @searchContent="searchContent"
        :view="true"
        :change_status="true"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :items="products"
            :headers="headers"
            :single-select="single_select"
            dense
            show-select
            v-model="selected"
            item-key="id"
            :search="single_search"
          >
            <template v-slot:item.id="{ item }">
              <div
                class="blue--text"
                style="cursor: pointer"
                @click="show(item.page_link)"
              >
                {{ item.id }}
              </div>
            </template>
            <template v-slot:item.page_status="{ item }">
              <span v-if="item.page_status == 0"> Registered </span>
              <span v-else-if="item.page_status == 1"> Published </span>
              <span v-else> Unpublished </span>
            </template>
            <template v-slot:item.template_id="{ item }">
              {{ item.template.name }}
            </template>
            <template v-slot:item.sale_type="{ item }">
              <span v-if="item.sale_type == 0"> Simple </span>
              <span v-else> Buy 1 get 1 free </span>
            </template>
            <template v-slot:item.page_link="{ item }">
              <NuxtLink
                :to="'landing/' + item.page_link"
                class="text-decoration-none"
                >open</NuxtLink
              >
            </template>
            <template v-slot:item.is_collection="{ item }">
              <span v-if="item.is_collection">Collection</span>
              <span v-else>Piece</span>
            </template>
            <template v-slot:item.template.company_id="{ item }">
              {{ item.template.company.name }}
            </template>
            <template v-slot:top>
              <v-switch
                label="Single Select"
                v-model="single_select"
              ></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Start Show Dialog Component -->
    <ShowDialog ref="show_dialog" />
    <AddDialog @closeAddDialog="index" ref="add_dialog" />
    <EditDialog @closeAddDialog="index" ref="edit_dialog" />

    <!-- Start Loader  -->
    <v-dialog v-model="loader" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- End Loader  -->
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      loader: false,
      single_select: false,
      single_search: "",
      selected: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "PCode", value: "pcode" },
        { text: "Title", value: "title_en" },
        { text: "Status", value: "page_status" },
        { text: "Company", value: "template.company_id" },
        { text: "Template", value: "template_id" },
        { text: "Link", value: "page_link" },
        { text: "Sale type", value: "sale_type" },
        { text: "Product type", value: "is_collection" },
      ],
      products: [],
      slug: null,
    };
  },
  methods: {
    async index() {
      this.loader = true;
      await this.$axios
        .get("product")
        .then((response) => {
          this.products = response.data;
          this.loader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    show(slug) {
      this.$refs.show_dialog.openShowDialog(slug);
    },
    destroy() {
      if (this.selected.length > 0) {
        let arr_delete = this.selected.map((e) => e.id);
        this.$swal({
          icon: "info",
          title: "Are you sure to delete?",
          confirmButtonText: "Yes",
          showCancelButton: true,
          confirmButtonColor: "#1976d2",
          cancelButtonColor: "red",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios
              .delete("product/1", { params: arr_delete })
              .then((response) => {
                this.index();
                this.$toastr.s({
                  title: "Success!",
                  msg: "Record deleted successfully.",
                  timeout: 3000,
                  progressbar: true,
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select a record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    changeStatus(status) {
      if (this.selected.length > 0) {
        let data = {
          status: status,
          selected: this.selected,
        };
        this.$axios
          .post("change_product_status", data)
          .then((response) => {
            this.index();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select a record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    searchContent(search) {
      this.single_search = search;
    },

    openShowDialog() {
      if (this.selected.length == 1) {
        this.$refs.show_dialog.openShowDialog(this.selected[0].page_link);
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    openAddDialog() {
      this.$refs.add_dialog.openAddDialog();
    },
    openEditDialog() {
      if (this.selected.length == 1) {
        this.$refs.edit_dialog.openEditDialog(this.selected[0].page_link);
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    closeAddDialog() {
      this.index();
    },
  },
  watch: {
    landing_info: {
      handler(value) {},
      deep: true,
    },
  },
  created() {
    this.index();
  },
};
</script>
<style scoped>
.country-card {
  border: 1.5px solid #1976d2 !important;
}
</style>
