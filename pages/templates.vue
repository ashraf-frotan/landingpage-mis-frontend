<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Templates',
          icon: 'mdi-credit-card-chip-outline',
          url: 'templates',
        }"
      />
      <ActionsCard @openAddDialog="openAddDialog" @deleteRecord="destroy" @openEditDialog="edit" @resetDatatable="resetDatatable" @openFilterDialog="openFilterDialog"/>
      <v-card>
        <v-card-text>
          <v-data-table
            :items="templates"
            :headers="headers"
            show-select
            :single-select="single_select"
            v-model="selected"
            :search="single_search"
            dense
          >
            <template v-slot:top label="Single Select">
              <v-switch v-model="single_select"></v-switch>
            </template>
            <template v-slot:item.company_id="{ item }">
              {{ item.company.name }}
            </template>
            <template v-slot:item.image="{ item }"
              ><v-img :src="item.image" width="60" rounded></v-img
            ></template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- START ADD DIALOG -->
    <v-dialog v-model="add_dialog" width="400">
      <v-card class="pa-3">
        <v-form @submit.prevent="store" lazy-validation ref="add_form">
          <v-card-title>Create new template</v-card-title>
          <v-card-text>
            <v-text-field
              dense
              rounded
              outlined
              label="Name"
              placeholder="Enter name here"
              v-model="template.name"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              dense
              rounded
              outlined
              label="Phone"
              placeholder="Enter phone here"
              v-model="template.phone"
              :rules="phoneRules"
            ></v-text-field>
            <v-select
              :items="companies"
              v-model="template.company_id"
              item-text="name"
              item-value="id"
              rounded
              dense
              outlined
              label="Company"
              placeholder="Please select company"
              :rules="[(v) => !!v || 'Image is required']"
            ></v-select>
            <v-file-input
              label="Image"
              :rules="fileRules"
              placeholder="Please select image"
              rounded
              outlined
              dense
              @change="uploadFile"
              accept="image/png, image/jpeg, image/jpg"
            ></v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="add_dialog = false"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Save</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END ADD DIALOG -->
    <!-- START EDIT DIALOG -->
    <v-dialog v-model="edit_dialog" width="400">
      <v-card class="pa-3">
        <v-form @submit.prevent="update" lazy-validation ref="edit_form">
          <v-card-title>Edit template</v-card-title>
          <v-card-text>
            <v-text-field
              dense
              rounded
              outlined
              label="Name"
              placeholder="Enter name here"
              v-model="template.name"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              dense
              rounded
              outlined
              label="Phone"
              placeholder="Enter phone here"
              v-model="template.phone"
              :rules="phoneRules"
            ></v-text-field>
            <v-select
              :items="companies"
              v-model="template.company_id"
              item-text="name"
              item-value="id"
              rounded
              dense
              outlined
              label="Company"
              placeholder="Please select company"
              :rules="[(v) => !!v || 'Image is required']"
            ></v-select>
            <v-file-input
              label="Image"
              placeholder="Please select image"
              rounded
              outlined
              dense
              @change="uploadFile"
              accept="image/png, image/jpeg, image/jpg"
            ></v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="edit_dialog = false"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Update</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END EDIT DIALOG -->
    <!-- START FILTER DIALOG -->
    <v-dialog v-model="filter_dialog" width="400">
      <v-card class="pa-3">
        <v-form @submit.prevent="filter" lazy-validation ref="filter_form">
          <v-card-title>Filter template</v-card-title>
          <v-card-text>
            <v-text-field
              dense
              rounded
              outlined
              label="ID"
              placeholder="Enter id here"
              v-model="template.id"
            ></v-text-field>
            <v-text-field
              dense
              rounded
              outlined
              label="Name"
              placeholder="Enter name here"
              v-model="template.name"
            ></v-text-field>
            <v-text-field
              dense
              rounded
              outlined
              label="Phone"
              placeholder="Enter phone here"
              v-model="template.phone"
            ></v-text-field>
            <v-select
              :items="companies"
              v-model="template.company_id"
              item-text="name"
              item-value="id"
              rounded
              dense
              outlined
              label="Company"
              placeholder="Please select company"
            ></v-select>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="filter_dialog = false"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Filter</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END FILTER DIALOG -->
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      templates: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Image", value: "image" },
        { text: "Company", value: "company_id" },
      ],
      single_select: false,
      selected: [],
      single_search: "",
      add_dialog: false,
      edit_dialog: false,
      filter_dialog: false,
      template: {
        id: null,
        name: "",
        phone: "",
        company_id: null,
        image: "",
      },
      companies: [],
      nameRules: [
        (v) => !!v || "This field is required",
        (v) =>
          (v && v.length > 2) || "This field must be at least 3 characters",
      ],
      phoneRules: [
        (v) => !!v || "This field is required",
        (v) => (v && v.length > 8) || "Please enter a valid phone number",
      ],
      fileRules: [
        (v) => !!v || "File is required",
        (v) => (v && v.size > 0) || "File is required",
      ],
    };
  },
  methods: {
    index() {
      this.$axios
        .get("template")
        .then((response) => {
          this.templates = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    store() {
      if (this.$refs.add_form.validate()) {
        let data = new FormData();
        data.append("name", this.template.name);
        data.append("phone", this.template.phone);
        data.append("company_id", this.template.company_id);
        data.append("image", this.template.image);
        this.$axios
          .post("template", data, {
            header: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.$toastr.s({
              title: "Success!",
              msg: "Template added successfylly!",
              timeout: 3000,
              progressbar: true,
            });
            this.templates.push(response.data);
            this.closeAddDialog();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    edit(){
      if(this.selected.length == 1){
        this.getCompanies();
        this.template= JSON.parse(JSON.stringify(this.selected[0]));
        this.edit_dialog=true;
      }else{
        this.$toastr.i({
          title:'Info!',
          msg:'Please select a record.',
          timeout: 3000,
          progressbar: true
        });
      }
    },
    update(){
      if(this.$refs.edit_dialog.validate()){
        let data = new FormData();
        data.append("name", this.template.name);
        data.append("phone",this.template.phone);
        data.append("company_id",this.template.company_id);
        data.append("image", this.template.image);
        data.append('_method','put');
        this.$axios.post(`template/${this.template.id}`,data,{
          header: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response)=>{
          this.index();
          this.edit_dialog=false;
          this.template={}
          this.$toastr.s({
            title: "Success!",
            msg: "Record updated successfully.",
            timeout: 3000,
            progressbar: true,
          })
        }).catch(error=>{
          console.log(error);
        })
      }
    },  
    destroy() {
      if (!this.selected.length < 1) {
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
              .delete("template/1", { params: arr_delete })
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
          msg: "Please select at least one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    filter(){
      this.$axios.get('filter_template',{params:this.template}).then(response=>{
        this.templates= response.data;
        this.filter_dialog=false;
      }).catch(error=>{console.log(error);})
    },
    openFilterDialog(){
      this.getCompanies();
      this.filter_dialog=true;
    },  
    resetDatatable(){
      this.index();
    },
    openAddDialog() {
      this.getCompanies();
      this.add_dialog = true;
    },
    closeAddDialog() {
      this.$refs.add_form.reset();
      this.$refs.add_form.resetValidation();
      this.add_dialog = false;
    },
    getCompanies() {
      this.$axios
        .get("company")
        .then((response) => {
          this.companies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadFile(file) {
      this.template.image = file;
    },
  },
  created() {
    this.index();
  },
};
</script>