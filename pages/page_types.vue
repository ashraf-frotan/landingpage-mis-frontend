<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Page types', icon:'mdi-image-album',url:'page_types'}" />
            <ActionsCard @openAddModal="openAddModal" @openEditModal="edit" @deleteRecord="destroy" />
            <v-card>
                <v-card-text>
                    <v-data-table :headers="headers" :items="page_types" show-select v-model="selected" :single-select="single_select" item-key="id" dense :search="single_search">
                        <template v-slot:item.company_id="{item}">
                            {{item.company.name}}
                        </template>
                        <template v-slot:top>
                            <v-switch v-model="single_select" label="Single select"></v-switch>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-col>
        <!-- START ADD DIALOG -->
        <v-dialog v-model="add_dialog" width="400">
            <v-card>
                <v-form class="pa-4" @submit.prevent="store()" ref="add_form">
                    <v-card-title>Create new page type</v-card-title>
                    <v-card-text>
                        <v-text-field :rules="nameRules" lable="Name" placeholder="Enter name here" v-model="page_type.name" dense outlined rounded></v-text-field>
                        <v-select v-model="page_type.company_id" :items="companies" item-text="name" item-value="id" rounded outlined dense label="Company" placeholder="Please select company" class="mt-2" :rules="[v => !!v || 'Company is required']"></v-select>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn small class="text-capitalize" @click="closeAddModal()">Cancel</v-btn>
                        <v-btn small color="primary" type="submit" class="text-capitalize">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <!-- END ADD DIALOG -->
        <!-- START EDIT DIALOG -->
        <v-dialog v-model="edit_dialog" width="400">
            <v-card>
                <v-form class="pa-4" @submit.prevent="update()" ref="edit_form">
                    <v-card-title>Edit page type</v-card-title>
                    <v-card-text>
                        <v-text-field :rules="nameRules" lable="Name" placeholder="Enter name here" v-model="page_type.name" dense outlined rounded></v-text-field>
                        <v-select v-model="page_type.company_id" :items="companies" item-text="name" item-value="id" rounded outlined dense label="Company" placeholder="Please select company" class="mt-2" :rules="[v => !!v || 'Company is required']"></v-select>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn small class="text-capitalize" @click="edit_dialog=false;">Cancel</v-btn>
                        <v-btn small color="primary" type="submit" class="text-capitalize">Update</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <!-- END EDIT DIALOG -->
    </v-row>
</template>
<script>
export default {
    data(){
        return{
            single_select:false,
            single_search: "",
            add_dialog:false,
            edit_dialog:false,
            selected:[],
            companies:[],
            page_type:{id:null,name:'',company_id:null},
            headers:[
                {text:"ID", value: "id"},
                {text:"Name", value: "name"},
                {text:"Company", value: "company_id"},
            ],
            page_types:[],
            nameRules: [
            (v) => !!v || "This field is required",
            (v) =>
            (v && v.length > 2) || "This field must be at least 3 characters",
            ],
        }
    },
    methods:{
        index() {
            this.$axios.get('page_type').then((response)=>{
                this.page_types=response.data;
            }).catch(error=>{
                console.log(error);
            })
        },
        store(){
            if(this.$refs.add_form.validate()){
                this.$axios.post('page_type',this.page_type).then(response=>{
                    this.page_types.push(response.data);
                    this.closeAddModal();
                    this.$toastr.s({
                        title:'Success!',
                        msg:'Record inserted successfully.',
                        timeout: 3000,
                        progressbar:true
                    })
                }).catch(error=>{
                    console.log(error);
                })
            }
            
        },
        edit() {
            if(this.selected.length==1){
                let arr=this.page_types.filter(e=>e.id==this.selected[0].id);
                this.getCompanies();
                this.page_type=JSON.parse(JSON.stringify(arr[0]));
                this.edit_dialog=true;
            }else{
                this.$toastr.i({
                    title:'Info!',
                    msg:'Please select a record.',
                    timeout:3000,
                    progressbar: true
                });
            }
        },
        update(){
            if(this.$refs.edit_form.validate()){
                this.$axios.put(`page_type/${this.page_type.id}`,this.page_type).then(response=>{
                    this.index();
                    this.edit_dialog=false;
                    this.$toastr.s({
                        title:'Success!',
                        msg:'Record updated successfully.',
                        timeout: 3000,
                        progressbar: true
                    })
                }).catch(error=>{
                    console.log(error);
                });
            }
        },
        destroy() {
            if(!this.selected.length < 1){
                this.$swal({
                    icon: "info",
                    title: "Are you sure to delete?",
                    confirmButtonText: "Yes",
                    showCancelButton: true,
                    confirmButtonColor: "#1976d2",
                    cancelButtonColor: "red",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        this.$axios.delete('page_type/1',{params: arr_delete}).then(response=>{
                            this.index();
                            this.$toastr.s({
                                title: "Success!",
                                msg: "Record deleted successfully.",
                                timeout: 3000,
                                progressbar: true,
                            });
                        }).catch(error=>{
                            console.log(error);
                        })
                    }
                    });
            }else{
                this.$toastr.i({
                    title:'Info!',
                    msg:'Please select at least one record.',
                    timeout: 3000,
                    progressbar: true
                })
            }
        },
        getCompanies(){
            this.$axios.get('company').then(response=>{
                this.companies=response.data;
            }).catch(error=>{
                console.log(error);
            })
        },
        openAddModal() {
            this.add_dialog=true;
            this.page_type={};
            this.getCompanies();
        },
        closeAddModal(){
            this.add_dialog=false;
            this.$refs.add_form.reset();
        },
    },
    created() {this.index();}
}
</script>
<style></style>