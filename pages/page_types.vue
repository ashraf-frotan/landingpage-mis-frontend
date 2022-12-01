<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Page types', icon:'mdi-image-album',url:'page_types'}" />
            <ActionsCard/>
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
    </v-row>
</template>
<script>
export default {
    data(){
        return{
            single_select:false,
            single_search: "",
            selected:[],
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
        }
    },
    created() {this.index();}
}
</script>
<style></style>