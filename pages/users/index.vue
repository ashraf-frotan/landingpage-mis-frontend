<template>
    <div>
        <TitleCard :title_info="{
          title: 'Users',
          icon: 'mdi-account-multiple',
          url: 'users',
        }" />
        <ActionsCard/>     
    </div>
</template>
<script>
export default {
    data() {
        return {
            users:[],
            headers:[
                {value:'id',text:'ID'},
                {value:'name',text:'Name'},
                {value:'email',text:'email'},
                {value:'Profile',text:'profile'},
            ]

        }
    },
    methods:{
        index(){
            this.$axios.get('user').then(response=>{
                this.users=response.data;
            }).catch(error=>{
                console.log(error);
            });
        }
    },
    created(){
        this.index();
    }
}
</script>