<template>
    <img  :src="imgURL" class="Icns"/>
</template>

<script>


export default { 
    name: "icn",

    props:
    {
        url: { type: String,
               required: true,
             }
    },

    computed:
    {
        imgURL()
        {
            if (this.url.includes("icns/")) return require("@/"+this.url)
            return this.url
        },

    }

}
</script>

<style lang="scss" scoped>



</style>