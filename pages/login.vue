<template>
    <v-row align="center" style="height:100vh;">
        <v-col cols="12" class="d-flex justify-center">
                <v-card class="" style="width:460px" elevation="3">
                    <v-card-title>
                        <h2>Welcome</h2>
                        
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <span> Sign in to your account</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-form>
                                    <v-text-field outlined rounded dense label="Email" placeholder="Enter email here" type="email"></v-text-field>
                                    <v-text-field outlined rounded dense label="Passwrd" placeholder="Enter password here" type="password"></v-text-field>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default{
    layout:'empty'
}
</script>