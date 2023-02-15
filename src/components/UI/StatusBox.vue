<template>  
    <div class="StatusBox">
    <div  v-for="box in stsList" key="box">
            <div class="Status" @drop="onDrop($event, box)" @dragover.prevent @dragenter.prevent>

                <div class="StatusHeader">{{ box }}</div>
                <TransitionGroup name="fade">
                    <div class="LotBox" draggable="true" @dragstart="startDrag($event, [l, box])" v-for="l in lotList[ box]">{{ l }}</div>
                </TransitionGroup>          
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
    display: grid;
    row-gap: 1fr;
    grid-template-columns: repeat(4, 0.5fr);

}

.Status
{
    background-color: rgb(251, 255, 196);
    
    margin: 5px 5px 5px 5px;
    height: 250px;
    width: 240px;
    border: 3px solid rgb(235, 214, 255);
    overflow-y: auto; 
   
}

.Status::-webkit-scrollbar {
  width: 0px;               /* width of the entire scrollbar */

}

.Status::-webkit-scrollbar-thumb {
  background-color: rgb(199, 208, 255);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid rgb(173, 186, 255);  /* creates padding around scroll thumb */
}

.StatusHeader
{
    border-bottom: 2px dotted rgb(218, 178, 255);
    text-align: center;
    padding-bottom: 2px;
    padding-top: 2px;
    user-select: none;
}

.LotBox
{
    border: 3px solid rgb(181, 193, 254);
    background-color: rgb(196, 206, 255);
    width: 20px;
    height: 20px;
    margin: 2px 2px 2px 2px;
    text-align: center;
    display: inline-block;
}

.LotBox:hover
{
    border: 3px solid rgb(180, 188, 225);
    background-color: rgb(156, 164, 205);
}
</style>