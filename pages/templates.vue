<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Templates',icon:'mdi-credit-card-chip-outline',url:'templates'}"/>
            <ActionsCard @openAddDialog="openAddDialog" />
            <v-card>
                <v-card-text>
                    <v-data-table :items="templates" :headers="headers" show-select :single-select="single_select" v-model="selected" :search="single_search" dense>
                        <template v-slot:top label="Single Select">
                            <v-switch v-model="single_select"></v-switch>
                        </template>
                        <template v-slot:item.page_type_id="{item}">
                            {{item.page_type.name}}
                        </template>
                        <template v-slot:item.image="{ item }"><v-img :src="item.image" width="60" rounded></v-img></template>
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
                        <v-text-field dense rounded outlined label="Name" placeholder="Enter name here" v-model="template.name" :rules="nameRules"></v-text-field>
                        <v-text-field dense rounded outlined label="Phone" placeholder="Enter phone here" v-model="template.phone" :rules="phoneRules"></v-text-field>
                        <v-select :items="page_types" v-model="template.page_type_id" item-text="name" item-value="id" rounded dense outlined label="Page Type" placeholder="Please select page type" :rules="[(v) => !!v || 'Image is required']"></v-select>
                        <v-file-input label="Image" :rules="fileRules" placeholder="Please select image" rounded outlined dense @change="uploadFile" accept="image/png, image/jpeg, image/jpg"></v-file-input>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn small class="text-capitalize">Cancel</v-btn>
                        <v-btn small color="primary" type="submit" class="text-capitalize">Save</v-btn>
                    </v-card-actions>
               </v-form>
            </v-card>
        </v-dialog>
        <!-- END ADD DIALOG -->
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            templates:[],
            headers: [{text:'ID',value:'id'},{text:'Name',value:'name'},{text:'Image',value:'image'},{text:'Page Type',value:'page_type_id'}],
            single_select: false,
            selected:[],
            single_search: "",
            add_dialog:false,
            template:{id:null,name:'',phone:'',page_type_id:null,image:''},
            page_types:[],
            nameRules: [
                (v) => !!v || "This field is required",
                (v) =>
                (v && v.length > 2) || "This field must be at least 3 characters",
            ],
            phoneRules: [
                (v) => !!v || "This field is required",
                (v) =>
                (v && v.length > 8) || "Please enter a valid phone number",
            ],
            fileRules: [
                v => !!v || 'File is required',
                v => (v && v.size > 0) || 'File is required',
            ]
            }
    },
    methods: {
        index() {
            this.$axios.get('template').then(response=>{
                this.templates=response.data;
            }).catch(error=>{
                console.log(error);
            });
        },
        store(){
            console.log('log');
            if(this.$refs.add_form.validate()){

            }else{

            }
        },
        openAddDialog() {
            this.getPageTypes();
            this.add_dialog=true;
        },
        getPageTypes(){
            this.$axios.get('page_type').then(response=>{
                this.page_types=response.data;
            }).catch(error=>{
                console.log(error);
            });
        },
        uploadFile(file) {
            this.template.image= file
        }
    },
    created() {
        this.index();
    }
}
</script>