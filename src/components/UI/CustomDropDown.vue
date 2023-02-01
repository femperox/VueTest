<template>
    <select :v-model="modelValue" @change="changeOption" class="input">
        <option
           v-for="o in optionList"
           :key="o"
           :value="o"
        > 
           {{ o }}
        </option>
    </select>
</template>

<script>

export default{ name: "cstm_drpm",

    props:
    {
        modelValue: { type: String },
        optionList: { type: Array,
                      default: () => []  // по дефолту пустой массив
                    }
    },
    
    methods:
    {
        changeOption(event) { this.$emit('update:modelValue', event.target.value); }
    }

}

</script>

<style>

.input
{
    border: 1px solid rgb(160, 220, 221);
    border-radius: 10px 10px 10px 10px;
    padding: 10px 10px;
    margin-top: 5px;
}

</style>