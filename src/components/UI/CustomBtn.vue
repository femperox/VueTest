<template>
    <button class="btn"><slot></slot></button>
</template>

<script>
    export default { name:'cstm-btn'
        
    }
</script>

<style>

.btn
{
	vertical-align: middle;
	color: rgb(0, 0, 0);
	text-align: center;
	border-radius: 4px;
	background-color: white;
	border: 1px solid rgb(160, 220, 221);
    transition: background-color 0.2s;
}

.btn:hover
{
	background-color: rgb(133, 192, 193);
}
.btn:active
{
	background-color: rgb(113, 165, 166);
}

</style>