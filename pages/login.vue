<template>
    <v-row align="center" style="height:100vh;">
        <v-col cols="12" class="d-flex justify-center">
                <v-card class="pa-4" style="width:460px" elevation="3">
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
                                    <v-text-field outlined rounded dense label="Password" placeholder="Enter password here" type="password"></v-text-field>
                                    <v-row>
                                        <v-col cols="6"><v-checkbox label="Remember me" hide-details="" class="ma-0" dense ></v-checkbox></v-col>
                                        <v-col cols="6" class="d-flex justify-end"><a href="" class="text-decoration-none mt-1">Forget Password</a></v-col>
                                    </v-row>
                                    <v-btn type="submit" color="primary" block rounded class="mt-6 text-capitalize">Sign In</v-btn>
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