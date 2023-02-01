<template>
    <div class="RdBtns">

        <div class="RdBtn">
            <input type="radio" value="Local" @change="changeOption" name="img" id="local">
            <label for="local">С компьютера</label>
        </div>

        <div class="RdBtn">
            <input type="radio" value="Url" @change="changeOption" name="img" id="url">
            <label for="url">Из интернета</label>
        </div>

        <div class="RdBtn">
            <input type="radio" value="None" @change="changeOption" name="img" id="none">
            <label for="none">Без загрузки</label>
        </div>

    </div>

</template>

<script>
    export default { name: "cstm-rdbtn",

        props:
        { modelValue: {type: String} 
        },

        methods:
        {
        changeOption(event) { this.$emit('update:modelValue', event.target.value); }
        }
        
    }
</script>

<style >

.RdBtns
{
    display:flex;
    flex-direction: column;
    
}

.RdBtn
{
    display:flex;
}


</style>