<template>
    <input class="input" type="text" :value="modelValue" @input="getInput">
</template>

<script>
export default { name: "cstm-inp",

    props:
    {
       modelValue: [String, String, Number],
       
    },

    methods:
    {
        getInput(event) {this.$emit("update:modelValue", event.target.value)},
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