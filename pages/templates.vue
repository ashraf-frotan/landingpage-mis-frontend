<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Templates',icon:'mdi-credit-card-chip-outline',url:'templates'}"/>
            <ActionsCard/>
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
        }
    },
    methods: {
        index() {
            this.$axios.get('template').then(response=>{
                this.templates=response.data;
                console.log(this.templates);
            }).catch(error=>{
                console.log(error);
            });
        }
    },
    created() {
        this.index();
    }
}
</script>