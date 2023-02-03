<template>  
    <div class="StatusBox" v-for="i in 4" key="i">
        <div v-for="j in 4" >
            <div v-if="stsList[j+(i-1)*4-1]" class="Status" @drop="onDrop($event, stsList[j+(i-1)*4-1])" @dragover.prevent @dragenter.prevent>

                <div class="StatusHeader">{{ stsList[j+(i-1)*4-1] }}</div>
                <div class="LotBox" draggable="true" @dragstart="startDrag($event, [l, stsList[j+(i-1)*4-1]])" v-for="l in lotList[ stsList[j+(i-1)*4-1]]">{{ l }}</div>


             

            
            </div>
        </div>
    </div>
</template>

<script>

    export default { name: "sts-box",

        props:
        {
            stsList: { type: Array },
            lotList: { type: Object}
        },

        methods:
        {
            startDrag(event, item)
            {
                event.dataTransfer.dropEffect = 'move';
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('lot', item[0]);
                event.dataTransfer.setData('old', item[1]);
            },

            onDrop(event, item)
            {
                let lot = event.dataTransfer.getData('lot');
                let old = event.dataTransfer.getData('old');
                lot = {'num': lot, 'old': old, 'new': item}
                this.$emit('updateStatus', lot);
            }
        }
        
    }
</script>

<style>

.StatusBox
{
    display: flex;
}

.Status
{
    background-color: rgb(248, 255, 153);
    flex: 80%;
    margin: 5px 5px 5px 5px;
    height: 250px;
    width: 240px;
    border: 3px solid rgb(211, 181, 239);
    
}

.StatusHeader
{
    border-bottom: 2px dotted blueviolet;
    text-align: center;
    padding-bottom: 2px;
    padding-top: 2px;
}

.LotBox
{
    border: 3px solid rgb(145, 155, 207);
    background-color: rgb(181, 191, 239);
    width: 20px;
    height: 20px;
    margin: 2px 2px 2px 2px;
    text-align: center;
    
}

</style>