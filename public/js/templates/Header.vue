<style>
	.container {
		display: grid;
		justify-self: center;
		align-self: center;
		color: #ffffff;
	}
	.container > div {
		justify-self: center;
		text-align: center;
	}
	.head {
		width: 200px;
		height: 200px;
		background: url(images/head.jpg);
		background-size: cover;
		border-radius: 50%;
	}
	.name {
		font-size: 70px;
	}
	.description {
		font-size: 32px;
	}
</style>

<template>
	<div class='container'>
		<div class='head'></div>
		<div class="name">{{ name }}</div>
		<div class="description">{{ description }}</div>	
	</div>
</template>

<script>
	export default {
		data () {
			return {
				name: 'James Lyon',
				description: 'Full Stack Software Engineer',
			};    
		}
	}
</script>
