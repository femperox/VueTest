<template>
    <div class="TableDiv">
        <tr class="Table">
            <td v-for="col in Object.keys(prtcp[0])"><cstm-inp class="Header" readonly="true" type="text" :placeholder="col"></cstm-inp> </td>
        </tr>    
        <tr class="Table" v-for="p in prtcp" :key="p">
            <td v-for="col in Object.keys(p)" ><cstm-inp class="Cell" type="text" :value="p[col]"></cstm-inp> </td>
            <td><cstm-btn @click="deletePost(p)"  class="Delete">x</cstm-btn></td>
        </tr>
        
        <tr class="Table">
            <td v-for="col in Object.keys(prtcp[0])"><cstm-inp :name="col" class="Cell" type="text" @change="addRow"></cstm-inp> </td>
        </tr>  
    </div>
</template>

<script>



    export default { name: "prt-lst",

    data() 
    {
        return { visible: true,
               }
    }, 

    props:
    {
        prtcp: 
        { type: Array,
        
        }
    },

    methods:
    {
        addRow(event)
        {  
        
           if (event.target.value.length > 0) 
           { 
             let keys = Object.keys(this.prtcp[0])
             let newRow = { }
             keys.map(k => { if (k === event.target.name ) newRow[k] = event.target.value
                             else newRow[k] = ''
                            } 
                     )
            

             this.$emit("addRow", newRow);
             event.target.value = '';
           }
        },

        deletePost(p)
        {
            this.$emit("deleteRow", p);   
        },

        // возможно потом доработать вывод 0 актуальных строк
        checkLen(pList)
        {
            let res = true;
            if (pList.length==1)
                for (let k in pList[0]) res &&= pList[0][k] !== '';
                
            console.log(res);
            return res;
        }
    },

    updated()
    {
       
    }

        
    }
</script>

<style>

.TableDiv
{
    padding-top: 10px;
}

.Cell
{
    margin:0;
    height: 5px;
    border-radius: 0%;
    transition: background-color 0.2s;
}

.Cell:hover {
	background-color: rgb(191, 239, 240);
}

.Header
{
    margin:0;
    height: 5px;
    border-radius: 0%;
    text-align: center;
    background-color: rgb(191, 239, 240);
    color: rgb(0, 0, 0);
}

.Delete
{
    margin-left: 10px;
    background-color:  rgb(223, 135, 135);
}

.Delete:hover
{
    background-color:  rgb(223, 135, 135);
}



</style>