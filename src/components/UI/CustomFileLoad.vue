<template>

<label class="input-file">
        <input type="file" accept="image/*" @change="UploadFileName"/>
 	   	<span class="input-file-btn">Выберите файл</span>           
</label>

</template>

<script>
    export default { name:'cstm-loadbtn',

        props:
        {
            modelValue: {type: String}
        },

        methods:
        {
            UploadFileName(event)
            {
                this.$emit("update:modelValue", event.target.value)
            }
        }
        
    }
</script>

<style >

.input-file 
{
	position: relative;
	display: inline-block;
}

.input-file-btn
{
	position: relative;
	display: inline-block;
	vertical-align: middle;
	color: rgb(0, 0, 0);
	text-align: center;
	border-radius: 4px;
	background-color: white;
	height: 40px;
	padding: 10px 20px;
	box-sizing: border-box;
	border: 1px solid rgb(160, 220, 221);
	margin: 0;
	transition: background-color 0.2s;
}

/* Сделать основную кнопку невидимкой */
.input-file input[type=file] {
	position: absolute;
	z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}

.input-file:hover .input-file-btn {
	background-color: rgb(133, 192, 193);
}
.input-file:active .input-file-btn {
	background-color: rgb(113, 165, 166);
}

</style>