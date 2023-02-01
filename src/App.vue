<template>
<div class="app">
    
    
    <div class="Site">

      <menu-comp></menu-comp>

      <div class="Base"><router-view></router-view></div>
    
    </div>
    
    
    
   
</div>


</template>

<script>

export default
{

  data() 
  {
    return {
              listFunc : [{url:"https://www.google.com/", name:"Google"},
                          {url:"https://www.dzen.ru", name:"Yandex"}
                        ],
              listAdmin : [{url:"https://www.google.com/", name:"Google", icn: "icns/star_red.png"},
                          {url:"https://www.dzen.ru", name:"Yandex", icn: "icns/star_black.png"}
                        ]
            }
  }
}
</script>

<style>

body
{
  margin: 0;
}

.Site
{
  display: flex;
  height: 1000px;
  padding-top: 0;

}



.Base
{
  flex: 85%;
  background: rgb(238, 199, 249);
  margin-bottom: auto;
  margin: 0;
  border: 5px solid white;
  
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
