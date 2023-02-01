<template>
    
    <div class="ListContainer">
        <div class="List"
                v-for ="l in lists"
                :key="l.url"
                >
                
                <icn v-if="l.icn" class="Icns" :url="l.icn"></icn>
                <a :href="l.url" >{{ l.name }}</a>
        </div>
    </div>
</template>

<script>
export default { name: "menu-list",
    props:
    {
        lists: { type: Array,
                required: true,
              }
    }
   
}
</script>

<style >

.List
{
    display: flex;
    margin-top: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.ListContainer
{
    text-align: center;

}

.Icns
{
    vertical-align: middle;
    padding-right: 10px;
    border-radius: 100%;
}

</style>