<style>
	.container {
		justify-self: center;
		align-self: center;
		color: #ffffff;
		text-align: center;
	}
	h2 {
		font-size: 30px;
		margin: 5px 0;
	}
</style>

<template>
	<div class='container'>
		<h1>Contact Info</h1>
		<h2>{{ name }}</h2>
		<div>{{ phone }}</div>
		<div>
			{{ address }}<br>
			{{ city }}, {{ state }} {{ zip }}
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				name: 'James Lyon',
				address: '230 Township Line Rd.',
				city: 'Hillsborough',
				state: 'NJ',
				zip: '08844',
				phone: '(908) 963-5298'
			}
		}
	}
</script>
