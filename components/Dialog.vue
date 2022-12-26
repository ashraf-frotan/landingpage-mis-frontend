<template>
    <v-row>
        <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        >
        <v-card>
            <v-toolbar
            dark
            color="primary"
            >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                dark
                text
                @click="dialog = false"
                >
                Save
                </v-btn>
            </v-toolbar-items>
            </v-toolbar>
            <template>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae veritatis, itaque a laudantium nam eveniet iste necessitatibus alias possimus recusandae porro labore illo similique sunt? Necessitatibus ipsum tempore rem nisi.
                </p>
            </template>
        </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            dialog:true,
            notifications: false,
            sound: true,
            widgets: false,
        }
    }
}
</script>
