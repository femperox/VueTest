<template>
    <div class="ParcelForm">
        Отправки

        <small class="Small">Заполните список отправлений</small>
        <prt-lst :prtcp="titleList" @addRow="addRow" @deleteRow="deleteRow" @updateRow="updateRow"></prt-lst>
        <cstm-btn class="AddBtn" @click="submit">Добавить в отслеживание</cstm-btn>
    </div>
</template>

<script>

export default 
{   data() 
    {
        return {  

                   titleList: [ {'Трек-номер': "", 'Айди вк': ""}, 
                              ],
                   inputs: [],
        
               }
    },

    methods:
    {
        addRow(r)
        {
            this.titleList.push(r);
        },

        deleteRow(r)
        {
            let keys = Object.keys(r)
            let len = keys.length;



            this.titleList = this.titleList.filter(p => { 
                                               let res = 0;
                                               for (let k in r) res += r[k] == p[k] ? 1 : 0
                                              
                                               return res < len
                                             }
                                       )
            
            if (!this.titleList.length)
            {   let empty = {};
                keys.map(k => empty[k] =  '');
                this.titleList.push(empty);
            } 
                                          
 
        },

        updateRow(r)
        {   
            this.titleList[r[0]][r[1]] = r[2];
        },

        submit()
        {
            console.log(this.titleList)
        }


    }

}
</script>

<style>

.ParcelForm
{
   padding-top: 20px;
   padding-left: 20px;
   display:flex;
   flex-direction: column;
}

.Small
{
    padding-top: 20px;
}

.AddBtn
{
    margin-top: 20px;
    width: fit-content;
    padding: 10px;
}

</style>