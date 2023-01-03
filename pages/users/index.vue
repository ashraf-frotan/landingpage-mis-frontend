<template>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint debitis facere voluptatem dolores id deleniti harum cupiditate ducimus quos illum nostrum nulla eveniet fuga, at nihil laborum aperiam consequuntur.
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