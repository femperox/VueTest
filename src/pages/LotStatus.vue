<template>
    <div class="LotForm">
        Статус лота

        <sts-box :stsList="list" :lotList="lotList" @updateStatus="updateLotStatus"></sts-box>
    </div>
</template>

<script>


export default {

    data()
    {
        return { list: ['Выкупается', 'Едет на склад в ЯП', 'На складе в ЯП',
                        'Едет в РФ', 'На складе в РФ', 'Едет в коллективщику', 'Едет к получателю',
                        'На руках', 'test'],

                 lotList: {'Выкупается': [1,2,3,4,5,6,7,8,9,0],
                           'Едет в РФ': [43]},
                          

        }
    },

    methods:
    {
        updateLotStatus(l)
        {
            console.log(this.lotList)
            this.lotList[l["old"]]= this.lotList[l["old"]].filter(n => n != l["num"]);

            console.log(this.lotList)
            try
            { this.lotList[l["new"]].push(l["num"]);
            }
            catch
            {
                this.lotList[l["new"]] = [l["num"]];
            }
        }
    }
}
</script>

<style>

.LotForm
{
   padding-top: 20px;
}

</style>