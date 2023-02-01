<template>
    
    
    <div class="Menu"> 
        
        <div class="Groups">
            Группа
             <menu-list :lists="[listAdmin[0]]"></menu-list>
             <div class="Admins">
                <menu-list :lists="listAdmin"></menu-list>
            </div>
        </div>

        <div class="Functions">
             Функционал
            <menu-list :lists="listFunc"></menu-list>
        </div>
    </div>

</template>

<script>

export default
{ name: 'menu-comp',

  data() 
  {
    return {  

              listFunc : [{url:"/", name:"О сервисе"},
                          {url:"/create", name:"Создать лот"},
                          {url:"/status", name:"Статусы лотов"},
                          {url:"/bans", name:"Зачистки"}
                        ],
              listAdmin : [{url:"https://www.google.com/", name:"Google", icn: "icns/star_red.png"},
                          {url:"https://www.dzen.ru", name:"Yandex", icn: "icns/star_black.png"}
                        ]
            }
  }
}
</script>

<style>

.Menu
{ 
  flex: 15%;
  background: rgb(197, 249, 249);
  align-items: stretch;
  margin: 0;
  border: 5px solid white;
  text-align: center;


}

.Groups, .Admins
{
  padding-top: 4%;
  box-shadow:
       inset 0.3em 0.3em 1em rgba(0,0,0,0.3); 
  text-align: center;
}

.Functions
{
  padding-top: 30px;
}


</style>