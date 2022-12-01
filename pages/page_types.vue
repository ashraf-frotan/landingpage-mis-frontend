<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Page types', icon:'mdi-image-album',url:'page_types'}" />
            <ActionsCard @openAddModal="openAddModal"/>
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
        <v-dialog v-model="add_dialog" width="400">
            <v-card>
                <v-form class="pa-4">
                    <v-card-title>Create new page type</v-card-title>
                    <v-card-text>
                        <v-text-field lable="Name" placeholder="Enter name here" v-model="page_type.name" dense outlined rounded></v-text-field>
                        <v-select v-model="page_type.company_id" :items="companies" item-text="name" item-value="id" rounded outlined dense></v-select>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn small>Cancel</v-btn>
                        <v-btn small color="primary">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data(){
        return{
            single_select:false,
            single_search: "",
            add_dialog:false,
            selected:[],
            companies:[],
            page_type:{id:null,name:'',company_id:null},
            headers:[
                {text:"ID", value: "id"},
                {text:"Name", value: "name"},
                {text:"Company", value: "company_id"},
            ],
            page_types:[]
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
        getCompanies(){
            this.$axios.get('company').then(response=>{
                this.companies=response.data;
            }).catch(error=>{
                console.log(error);
            })
        },
        openAddModal() {
            this.add_dialog=true;
            this.getCompanies();
        }
    },
    created() {this.index();}
}
</script>
<style></style>