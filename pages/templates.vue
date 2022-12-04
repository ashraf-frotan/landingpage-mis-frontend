<template>
    <v-row>
        <v-col cols="12">
            <TitleCard :title_info="{title:'Templates',icon:'mdi-credit-card-chip-outline',url:'templates'}"/>
            <ActionsCard/>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            templates:[]
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