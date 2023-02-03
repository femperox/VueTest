<template>
    <div class="LotForm">
        Создание лота
        
        <small class="Small">Выберите лист</small>
        <cstm_drpm id="drp" v-model="selectList[0]" :optionList="selectList" style="width:10%"></cstm_drpm>

        <small class="Small">Вставьте ссылку на лот</small>
        <cstm-inp v-model="siteUrl" placeholder="Ссылка на лот" style="width:30%"></cstm-inp>
        
        <small class="Small">Вставьте ссылку пост в ВК (необязательно)</small>
        <cstm-inp v-model="vkUrl" placeholder="Ссылка на стену ВК (необязательно)" style="width:30%"></cstm-inp>
        
        <small class="Small">Загрузите изображение</small>
        <div class="RdMenu">
            <cstm-rdbtn v-model="imgSelection"></cstm-rdbtn>
            <div class="RdOption">
                <cstm-loadbtn v-model="imgUrl" v-if="imgSelection=='Local'" class="RdOption"></cstm-loadbtn>
                <cstm-inp v-else-if="imgSelection=='Url'"  placeholder="Ссылка на изображение" style="width:100%"></cstm-inp>
            </div>
        </div>
        
        <small class="Small">Укажите количество позиций в лоте</small>
        <cstm-inp type="number" v-model="posCount" placeholder="Количество позициий в лоте" style="width:5%"></cstm-inp>

        <small class="Small">Отредактируйте, если нужно, список участников и их позициий</small>
        <prt-lst :prtcp="participantlist" @addRow="addRow" @deleteRow="deleteRow"></prt-lst>

    </div>
</template>

<script>
export default {
    data() 
    {
        return {   selectList: ['Лоты', 'Инды', 'Тест'],
                   imgSelection: '',
                   imgUrl: '',
                   siteUrl: '',
                   vkUrl: '',
                   posCount: 0,

                   participantlist: [ {'Имя ВК': "123", 'Айди вк': "https://www.google.com/", 'Позиции': [1,2,3]}, 
                                      {'Имя ВК': "345", 'Айди вк': 345, 'Позиции': [4,5]}
                                    ]
               }
    },

    methods:
    {
        addRow(r)
        {
            this.participantlist.push(r);
        },

        deleteRow(r)
        {
            let keys = Object.keys(r)
            let len = keys.length;



            this.participantlist = this.participantlist.filter(p => { 
                                               let res = 0;
                                               for (let k in r) res += r[k] == p[k] ? 1 : 0
                                              
                                               return res < len
                                             }
                                       )
            
            if (!this.participantlist.length)
            {   let empty = {};
                keys.map(k => empty[k] =  '');
                this.participantlist.push(empty);
            } 
                                          
 
        }
    }

}
</script>

<style>

.LotForm
{
   padding-top: 20px;
   padding-left: 20px;
   display:flex;
   flex-direction: column;
}

.RdMenu
{
    display: flex;
    padding-top: 10px;
    
}

.RdOption
{
    padding-left: 20px;
}

.Small
{
    padding-top: 20px;
}

</style>